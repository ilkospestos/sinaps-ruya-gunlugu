"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("@ilkem");
  const [password, setPassword] = useState("••••••••");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return;
    localStorage.setItem("sinaps_user", JSON.stringify({ username, name: "İlkem" }));
    router.push("/akis");
  };

  const handleQuickDemo = () => {
    localStorage.setItem("sinaps_user", JSON.stringify({ username: "@ilkem", name: "İlkem" }));
    router.push("/akis");
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0b0a14", backgroundImage: "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0b0a14 70%)", color: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Ana Kart (Glassmorphism Cam Efekti) */}
      <div style={{ width: "100%", maxWidth: "420px", padding: "40px", borderRadius: "24px", backgroundColor: "rgba(19, 17, 38, 0.75)", backdropFilter: "blur(20px)", border: "1px solid rgba(129, 140, 248, 0.2)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)" }}>
        
        {/* Logo ve Başlık */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ width: "64px", height: "64px", margin: "0 auto 16px auto", borderRadius: "20px", background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", fontWeight: "800", color: "#ffffff", boxShadow: "0 10px 25px rgba(99, 102, 241, 0.5)" }}>
            S
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "1px", background: "linear-gradient(to right, #38bdf8, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 8px 0" }}>
            SİNAPS
          </h1>
          <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0, fontWeight: "400" }}>
            Bilinçaltı ve Sosyal Rüya Paylaşım Ağı
          </p>
        </div>

        {/* Giriş Formu */}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px", letterSpacing: "0.5px" }}>
              KULLANICI ADI VEYA E-POSTA
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%", padding: "14px 16px", backgroundColor: "rgba(26, 23, 51, 0.8)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "12px", fontSize: "14px", color: "#f8fafc", outline: "none", transition: "all 0.2s" }}
              required
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px", letterSpacing: "0.5px" }}>
              ŞİFRE
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "14px 16px", backgroundColor: "rgba(26, 23, 51, 0.8)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "12px", fontSize: "14px", color: "#f8fafc", outline: "none", transition: "all 0.2s" }}
              required
            />
          </div>

          <button
            type="submit"
            style={{ width: "100%", padding: "14px", marginTop: "4px", background: "linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)", color: "#ffffff", border: "none", borderRadius: "12px", fontSize: "14px", fontWeight: "700", cursor: "pointer", boxShadow: "0 10px 20px rgba(79, 70, 229, 0.4)", transition: "transform 0.1s, opacity 0.2s" }}
          >
            Giriş Yap ve Keşfet
          </button>
        </form>

        {/* Hızlı Demo Girişi */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={handleQuickDemo}
            style={{ background: "transparent", border: "none", color: "#38bdf8", fontSize: "13px", fontWeight: "600", cursor: "pointer", textDecoration: "underline" }}
          >
            ✨ Örnek Hesapla (İlkem) Hızlı Giriş Yap
          </button>
        </div>

        {/* Alt Bilgi */}
        <div style={{ marginTop: "30px", textAlign: "center", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "20px" }}>
          <p style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>
            Güvenli Bilinçaltı Şifrelemesi ile Korunmaktadır.
          </p>
        </div>

      </div>
    </main>
  );
}