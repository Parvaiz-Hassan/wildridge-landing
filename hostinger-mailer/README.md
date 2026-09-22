# Wiring up the "Get a Free Quote" form

The landing page is a static export — it has no server of its own to send
email from. This folder gives it one, running on the Hostinger hosting you
already have, using the same Titan Mail SMTP your WordPress site uses.

## What you're setting up

```
Popup form (Cloudflare, static)  --fetch POST-->  send-lead.php (Hostinger)  --SMTP-->  Titan Mail  --> your Gmail inbox
```

## Steps

1. **Download PHPMailer** (no Composer needed):
   - Go to https://github.com/PHPMailer/PHPMailer
   - Click **Code → Download ZIP**
   - Unzip it, and copy just the `src` folder into this `hostinger-mailer`
     folder, so you end up with:
     ```
     hostinger-mailer/
       send-lead.php
       PHPMailer/
         src/
           Exception.php
           PHPMailer.php
           SMTP.php
     ```

2. **Fill in your Titan Mail password**
   Open `send-lead.php` and replace:
   ```php
   $mail->Password = 'REPLACE_WITH_YOUR_TITAN_MAIL_PASSWORD';
   ```
   with the real password for `admin@wildridgeadventure.com` (the same one
   your WordPress SMTP plugin already uses).

3. **Upload to Hostinger**
   Using File Manager or FTP, upload the whole `hostinger-mailer` folder's
   contents into:
   ```
   public_html/api/
   ```
   so the script is reachable at:
   ```
   https://wildridgeadventure.com/api/send-lead.php
   ```

4. **Confirm the endpoint matches your config**
   In the Next.js project, `lib/site-config.ts` already points to this URL:
   ```ts
   leadEndpoint: "https://wildridgeadventure.com/api/send-lead.php",
   ```
   Only change this if you upload the script somewhere else.

5. **Test it**
   Open the live landing page, submit the popup form with your own phone
   number, and check that the email arrives in
   `wildridgeadventure@gmail.com` within a minute or two.

## Notes

- This script only allows requests from `wildridgeadventure.com` and
  `kashmirpackages.wildridgeadventure.com` (see the `$allowedOrigins`
  array) — update that list if you add more landing page subdomains later
  (e.g. `ladakhpackages.wildridgeadventure.com`).
- There's a hidden honeypot field (`company`) on the form — real visitors
  never fill it in, so submissions that do are silently dropped as spam.
- If the email ever fails to send, the popup shows a WhatsApp fallback
  button so you still don't lose the lead.
