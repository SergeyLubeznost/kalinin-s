import { useEffect } from 'react';

import "./main-modal.css";




export default function FormDialogModal({ active, setActive, children }) {
    useEffect(() => {
        if (active) {
            // Запоминаем ширину скроллбара
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`; // Устанавливаем паддинг
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0'; // Убираем паддинг
        }

        // Очистка эффекта
        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0'; // Убираем паддинг
        };
    }, [active]);
    return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
            {children}
        </div>
      </div>
    );
}