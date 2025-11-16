import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface WelcomePopupProps {
  children: ReactNode;
  id?: string;
}

export default function WelcomePopup({ children, id = 'welcome-popup' }: WelcomePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // 初回訪問時のみ表示（localStorageで管理）
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
    
    if (!hasSeenPopup) {
      // ページ読み込み後に少し遅延させて表示
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`welcome-popup-overlay ${isOpen ? 'is-open' : ''}`}
      onClick={handleOverlayClick}
      aria-hidden={!isOpen}
    >
      <div
        className="welcome-popup-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
      >
        <header className="welcome-popup-header">
          <button
            className="welcome-popup-close"
            aria-label="閉じる"
            onClick={handleClose}
          ></button>
        </header>
        <main className="welcome-popup-content">
          {children}
        </main>
      </div>
    </div>
  );
}

