import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface WelcomePopupProps {
  children: ReactNode;
  id?: string;
}

export default function WelcomePopup({
  children,
  id = "welcome-popup",
}: WelcomePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ナビゲーションからTOPを選択した場合は表示しない
    const skipPopup = sessionStorage.getItem("skipWelcomePopup");
    if (skipPopup === "true") {
      // フラグをクリア（次回のリロード時には表示されるように）
      sessionStorage.removeItem("skipWelcomePopup");
      return;
    }

    // ページ読み込み後に少し遅延させて表示
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
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
      className={`welcome-popup-overlay ${isOpen ? "is-open" : ""}`}
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
        <main className="welcome-popup-content">{children}</main>
      </div>
    </div>
  );
}
