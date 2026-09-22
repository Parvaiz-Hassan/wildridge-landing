"use client";

import { createContext, useCallback, useContext, useState, ReactNode } from "react";
import QuoteModal from "./QuoteModal";

type ModalContextValue = {
  open: boolean;
  openModal: () => void;
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
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      <QuoteModal open={open} onClose={closeModal} />
    </ModalContext.Provider>
  );
}
