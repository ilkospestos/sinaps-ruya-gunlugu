"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { initialDreams, currentUser, initialNotifications } from "../../data/sampleDreams";

export default function Akis() {
  const [dreams, setDreams] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [readingList, setReadingList] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const savedDreams = localStorage.getItem("sinaps_dreams");
    if (savedDreams) {
      setDreams(JSON.parse(savedDreams));
    } else {
      setDreams(initialDreams);
      localStorage.setItem("sinaps_dreams", JSON.stringify(initialDreams));
    }

    const savedList = localStorage.getItem("sinaps_reading_list");
    if (savedList) {
      setReadingList(JSON.parse(savedList));
    }

    const unread = initialNotifications.filter((n) => !n.read).length;
    setUnreadCount(unread);
  }, []);

  const toggleReadingList = (dream: any, e: any) => {
    e.preventDefault();
    let updatedList;
    const exists = readingList.some((item: any) => item.id === dream.id);
    if (exists) {
      updatedList = readingList.filter((item: any) => item.id !== dream.id);
    } else {
      updatedList = [...readingList, dream];
    }
    setReadingList(updatedList);
    localStorage.setItem("sinaps_reading_list", JSON.stringify(updatedList));
  };

  const filteredDreams = selectedCategory === "Tümü"
    ? dreams
    : dreams.filter((d: any) => d.category === selectedCategory);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0b0a14", color: "#f1f5f9", padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Üst Navbar / Menü */}
      <div style={{ maxWidth: "750px", margin: "0 auto 30px auto", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1f1c38", paddingBottom: "16px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "800", background: "linear-gradient(to right, #38bdf8, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0 }}>
            SİNAPS
          </h1>
          <p style={{ fontSize: "12px", color: "#94a3b8", margin: "2px 0 0 0" }}>Sosyal Rüya Ağı</p>
        </div>

        {/* Tüm Butonlar */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/profil" style={{ textDecoration: "none", backgroundColor: "#141226", border: "1px solid #232042", color: "#38bdf8", padding: "7px 12px", borderRadius: "10px", fontSize: "12px", fontWeight: "600" }}>
            👤 Profilim
          </Link>
          <Link href="/bildirimler" style={{ textDecoration: "none", backgroundColor: "#141226", border: "1px solid #232042", color: "#e2e8f0", padding: "7px 12px", borderRadius: "10px", fontSize: "12px" }}>
            🔔 Bildirimler ({unreadCount})
          </Link>
          <Link href="/okuma-listesi" style={{ textDecoration: "none", backgroundColor: "#141226", border: "1px solid #232042", color: "#e2e8f0", padding: "7px 12px", borderRadius: "10px", fontSize: "12px" }}>
            ⭐ Favoriler ({readingList.length})
          </Link>
          <Link href="/ekle" style={{ textDecoration: "none", backgroundColor: "#0284c7", color: "#ffffff", padding: "7px 12px", borderRadius: "10px", fontSize: "12px", fontWeight: "600" }}>
            + Rüya Paylaş
          </Link>
          <Link href="/giris" style={{ textDecoration: "none", backgroundColor: "#1e1b4b", border: "1px solid #312e81", color: "#93c5fd", padding: "7px 12px", borderRadius: "10px", fontSize: "12px" }} title="Giriş Sayfasına Dön">
            Giriş Sayfası ↩
          </Link>
        </div>
      </div>

      {/* Kategori Filtreleri */}
      <div style={{ maxWidth: "700px", margin: "0 auto 24px auto", display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "6px" }}>
        {["Tümü", "Lucid", "Kabus", "Mistik", "Bilinçaltı", "Stres"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "500",
              cursor: "pointer",
              border: selectedCategory === cat ? "1px solid #38bdf8" : "1px solid #232042",
              backgroundColor: selectedCategory === cat ? "#0284c7" : "#141226",
              color: selectedCategory === cat ? "#ffffff" : "#94a3b8",
              whiteSpace: "nowrap"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Rüya Gönderileri */}
      <div style={{ maxWidth: "700px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
        {filteredDreams.map((dream: any) => {
          const isSaved = readingList.some((item: any) => item.id === dream.id);
          return (
            <div
              key={dream.id}
              style={{
                backgroundColor: "#131126",
                border: "1px solid #232042",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
              }}
            >
              <div style={{ padding: "16px", borderBottom: "1px solid #1f1c38", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(to top right, #0284c7, #6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#ffffff", fontSize: "14px" }}>
                    {dream.author.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#f8fafc", margin: 0 }}>{dream.author}</h3>
                    <p style={{ fontSize: "11px", color: "#38bdf8", margin: "2px 0 0 0" }}>{dream.authorUsername} • {dream.date}</p>
                  </div>
                </div>
                <span style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "12px", backgroundColor: "#1b1836", color: "#38bdf8", border: "1px solid #2e2a57" }}>
                  {dream.category}
                </span>
              </div>

              <div style={{ padding: "20px" }}>
                <Link href={`/ruya/${dream.id}`} style={{ textDecoration: "none" }}>
                  <h2 style={{ fontSize: "16px", fontWeight: "600", color: "#f8fafc", margin: "0 0 10px 0" }}>
                    {dream.title}
                  </h2>
                  <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: "1.6", margin: 0, fontWeight: "300" }}>
                    {dream.content}
                  </p>
                </Link>
              </div>

              <div style={{ padding: "16px 20px", backgroundColor: "#100e20", borderTop: "1px solid #1f1c38" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#38bdf8", fontWeight: "500" }}>
                    💬 Yorumlar ({dream.comments ? dream.comments.length : 0})
                  </span>
                  <button
                    onClick={(e) => toggleReadingList(dream, e)}
                    style={{
                      backgroundColor: isSaved ? "rgba(245, 158, 11, 0.15)" : "#18152e",
                      border: isSaved ? "1px solid rgba(245, 158, 11, 0.4)" : "1px solid #262247",
                      color: isSaved ? "#fcd34d" : "#94a3b8",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      cursor: "pointer"
                    }}
                  >
                    {isSaved ? "★ Favorilerde" : "☆ Favoriye Ekle"}
                  </button>
                </div>

                {dream.comments && dream.comments.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {dream.comments.map((c: any) => (
                      <div key={c.id} style={{ fontSize: "12px", padding: "10px 12px", borderRadius: "10px", backgroundColor: "#17142d", border: "1px solid #232042", color: "#cbd5e1" }}>
                        <strong style={{ color: "#38bdf8", marginRight: "8px" }}>{c.author}:</strong>
                        <span style={{ fontWeight: "300" }}>{c.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}