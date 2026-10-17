"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { initialNotifications } from "../../data/sampleDreams";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("sinaps_notifications");
    if (saved) {
      setNotifications(JSON.parse(saved));
    } else {
      setNotifications(initialNotifications);
      localStorage.setItem("sinaps_notifications", JSON.stringify(initialNotifications));
    }
  }, []);

  const handleMarkAsRead = (id: number) => {
    const updated = notifications.map((n) => (n.id === id ? { ...n, read: true } : n));
    setNotifications(updated);
    localStorage.setItem("sinaps_notifications", JSON.stringify(updated));
  };

  const handleClearAll = () => {
    setNotifications([]);
    localStorage.setItem("sinaps_notifications", JSON.stringify([]));
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0b0a14", backgroundImage: "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0b0a14 70%)", color: "#f1f5f9", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Üst Navigasyon */}
      <div style={{ width: "100%", maxWidth: "600px", marginBottom: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/akis" style={{ textDecoration: "none", color: "#38bdf8", fontSize: "13px", fontWeight: "600" }}>
          ← Akışa Geri Dön
        </Link>
        {notifications.length > 0 && (
          <button
            onClick={handleClearAll}
            style={{ backgroundColor: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#f87171", padding: "6px 12px", borderRadius: "8px", fontSize: "11px", fontWeight: "600", cursor: "pointer" }}
          >
            Tümünü Temizle 🗑️
          </button>
        )}
      </div>

      {/* Ana Bildirimler Kartı (Cam Efekti) */}
      <div style={{ width: "100%", maxWidth: "600px", padding: "30px", borderRadius: "24px", backgroundColor: "rgba(19, 17, 38, 0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(129, 140, 248, 0.25)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "16px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "800", background: "linear-gradient(to right, #38bdf8, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0 }}>
            🔔 Bildirimler & Etkileşimler
          </h1>
          <span style={{ fontSize: "12px", padding: "4px 10px", borderRadius: "10px", backgroundColor: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
            {notifications.filter((n) => !n.read).length} Okunmamış
          </span>
        </div>

        {notifications.length === 0 ? (
          <div style={{ padding: "40px", textAlign: "center", color: "#94a3b8", fontSize: "13px" }}>
            Şu an hiç bildiriminiz bulunmuyor. ✨
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {notifications.map((n) => (
              <div
                key={n.id}
                onClick={() => handleMarkAsRead(n.id)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px",
                  borderRadius: "16px",
                  backgroundColor: n.read ? "rgba(26, 23, 51, 0.4)" : "rgba(26, 23, 51, 0.9)",
                  border: n.read ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(129, 140, 248, 0.4)",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #0284c7 0%, #6366f1 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#ffffff", fontSize: "13px", flexShrink: 0 }}>
                    {n.user.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", color: "#f8fafc", margin: "0 0 4px 0", lineHeight: "1.4" }}>
                      <strong style={{ color: "#38bdf8", fontWeight: "600" }}>{n.user}</strong> {n.text}
                    </p>
                    <span style={{ fontSize: "11px", color: "#94a3b8" }}>{n.time}</span>
                  </div>
                </div>

                {!n.read && (
                  <span style={{ width: "8px", height: "80px", backgroundColor: "#38bdf8", borderRadius: "4px", boxShadow: "0 0 10px #38bdf8" }} title="Okunmadı"></span>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}