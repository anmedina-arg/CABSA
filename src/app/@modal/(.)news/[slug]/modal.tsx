'use client';

import { useRouter } from 'next/navigation';
import { ElementRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';
export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  function onDismiss() {
    router.back();
  }

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
      {children}
      <button onClick={onDismiss} className="close-button">
        X
      </button>
    </dialog>,
    document.getElementById('modal-root')!
  );
}
