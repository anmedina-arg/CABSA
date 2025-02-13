'use client';

import { useRouter } from 'next/navigation';
import { ElementRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';
import { RxCross2 } from 'react-icons/rx';

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
      <div className="modal-content" id='modal'>
        {children}
        <button onClick={onDismiss} className="close-button">
          <RxCross2 />
        </button>
      </div>
    </dialog>,
    document.getElementById('modal-root')!
  );
}
