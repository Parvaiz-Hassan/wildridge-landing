"use client";

import { createContext, useCallback, useContext, useState, ReactNode } from "react";
import QuoteModal from "./QuoteModal";

type ModalContextValue = {
  open: boolean;
  // Pass a tour title (e.g. from a tour card's "Request Callback" button) so
  // the popup — and the email it sends — knows which package the visitor
  // was looking at. Buttons that open the generic quote form (Hero, sticky
  // bar, etc.) just call openModal() with no argument.
  openModal: (tourName?: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useQuoteModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useQuoteModal must be used within QuoteModalProvider");
  return ctx;
}

export default function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [tourName, setTourName] = useState<string | undefined>(undefined);

  const openModal = useCallback((name?: string) => {
    setTourName(name);
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setOpen(false);
    setTourName(undefined);
  }, []);

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      <QuoteModal open={open} onClose={closeModal} tourName={tourName} />
    </ModalContext.Provider>
  );
}
