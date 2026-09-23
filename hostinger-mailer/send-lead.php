<?php
/**
 * send-lead.php
 * -----------------------------------------------------------------------
 * Receives the "Get a Free Quote" popup submission from the static
 * Next.js landing page (hosted on Cloudflare) and emails it using your
 * existing Hostinger Titan Mail SMTP — the same mailbox already wired up
 * on your WordPress site.
 *
 * WHERE THIS GOES
 * Upload this file, plus the PHPMailer files (see README.md in this
 * folder), to your Hostinger hosting at:
 *   public_html/api/send-lead.php
 * so it's reachable at:
 *   https://wildridgeadventure.com/api/send-lead.php
 * That URL must match siteConfig.leadEndpoint in lib/site-config.ts.
 *
 * WHY A SEPARATE SCRIPT
 * The landing page itself is a static export deployed to Cloudflare —
 * it has no server of its own to send email from. This tiny script runs
 * on your existing Hostinger PHP hosting instead, which already has
 * Titan SMTP configured and working.
 * -----------------------------------------------------------------------
 */

// ---- CORS: only allow requests from your own landing page domains ----
$allowedOrigins = [
    'https://kashmirpackages.wildridgeadventure.com',
    'https://wildridgeadventure.com',
    'https://www.wildridgeadventure.com',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ---- Honeypot: silently accept (but drop) obvious bot submissions ----
if (!empty($_POST['company'])) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

// ---- Collect + validate fields ----
$name        = trim($_POST['name'] ?? '');
$phone       = trim($_POST['phone'] ?? '');
$arrivalDate = trim($_POST['arrivalDate'] ?? '');
$travellers  = trim($_POST['travellers'] ?? '');

if ($name === '' || $phone === '' || $arrivalDate === '' || $travellers === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$name  = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');

// ---- PHPMailer (downloaded separately — see README.md) ----
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // ---- Titan Mail SMTP settings ----
    $mail->isSMTP();
    $mail->Host       = 'smtp.titan.email';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'admin@wildridgeadventure.com'; // TODO: same mailbox used for WordPress SMTP
    $mail->Password   = 'Cipar@12345';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 465;

    $mail->setFrom('admin@wildridgeadventure.com', 'Wild Ridge Adventure Website');
    $mail->addAddress('wildridgeadventure@gmail.com');
    $mail->addReplyTo($mail->Username, 'Wild Ridge Adventure Website');

    $mail->isHTML(true);
    $mail->Subject = 'New Kashmir Trip Lead — ' . $name;
    $mail->Body = "
        <h2>New lead from the Kashmir landing page</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Arrival Date:</strong> {$arrivalDate}</p>
        <p><strong>Travellers:</strong> {$travellers}</p>
        <p><strong>Submitted:</strong> " . date('d M Y, h:i A') . "</p>
    ";
    $mail->AltBody = "New lead: {$name}, {$phone}, arriving {$arrivalDate}, {$travellers} travellers.";

    $mail->send();

    http_response_code(200);
    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Mailer error', 'detail' => $mail->ErrorInfo]);
}
