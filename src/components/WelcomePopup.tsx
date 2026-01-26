import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface WelcomePopupProps {
  children: ReactNode;
  id?: string;
  skipKey?: string;
  priority?: number; // 優先度（数値が小さいほど優先）
}

export default function WelcomePopup({
  children,
  id = "welcome-popup",
  skipKey = "skipWelcomePopup",
  priority = 0,
}: WelcomePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ナビゲーションからTOPを選択した場合は表示しない
    const skipPopup = sessionStorage.getItem(skipKey);
    if (skipPopup === "true") {
      // フラグをクリア（次回のリロード時には表示されるように）
      sessionStorage.removeItem(skipKey);
      return;
    }

    // 優先度が0のダイアログはすぐに表示
    if (priority === 0) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }

    // 優先度が1以上のダイアログ（活動報告など）は、
    // 優先度0のダイアログが閉じられるまで待機
    const handleHighPriorityClosed = () => {
      setIsOpen(true);
    };

    // カスタムイベントをリッスン
    window.addEventListener("highPriorityPopupClosed", handleHighPriorityClosed);

    // 既に優先度0のダイアログが閉じられている場合はすぐに表示
    const highPriorityClosed = sessionStorage.getItem("skipNewHomepagePopup") === "true";
    if (highPriorityClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("highPriorityPopupClosed", handleHighPriorityClosed);
      };
    }

    return () => {
      window.removeEventListener("highPriorityPopupClosed", handleHighPriorityClosed);
    };
  }, [skipKey, priority]);

  const handleClose = () => {
    setIsOpen(false);
    // 閉じたことを記録（同じセッション中は再表示しない）
    sessionStorage.setItem(skipKey, "true");
    
    // 優先度0のダイアログが閉じられた場合、優先度1以上のダイアログに通知
    if (priority === 0) {
      window.dispatchEvent(new CustomEvent("highPriorityPopupClosed"));
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`welcome-popup-overlay ${isOpen ? "is-open" : ""}`}
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
