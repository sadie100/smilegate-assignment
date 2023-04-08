import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "@/contexts/modalContext";
import Modal from "@/components/Modal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalProvider>
        <Component {...pageProps} />
        <Modal />
      </ModalProvider>
    </>
  );
}
