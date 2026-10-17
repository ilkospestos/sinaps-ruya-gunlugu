"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ReadingListPage() {
  const [readingList, setReadingList] = useState<any[]>([]);

  useEffect(() => {
    const savedList = localStorage.getItem("sinaps_reading_list");
    if (savedList) {
      setReadingList(JSON.parse(savedList));
    }
  }, []);

  const handleRemoveFromList = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const updated = readingList.filter((item) => item.id !== id);
    setReadingList(updated);
    localStorage.setItem("sinaps_reading_list", JSON.stringify(updated));
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0b0a14", backgroundImage: "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0b0a14 70%)", color: "#f1f5f9", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Üst Navigasyon */}
      <div style={{ width: "100%", maxWidth: "700px", marginBottom: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/akis" style={{ textDecoration: "none", color: "#38bdf8", fontSize: "13px", fontWeight: "600" }}>
          ← Akışa Geri Dön
        </Link>
        <span style={{ fontSize: "12px", color: "#94a3b8" }}>
          Toplam Favori: <strong style={{ color: "#38bdf8" }}>{readingList.length}</strong>
        </span>
      </div>

      {/* Ana Favoriler Kartı (Cam Efekti) */}
      <div style={{ width: "100%", maxWidth: "700px", padding: "30px", borderRadius: "24px", backgroundColor: "rgba(19, 17, 38, 0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(129, 140, 248, 0.25)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)" }}>
        
        <div style={{ marginBottom: "24px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "16px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "800", background: "linear-gradient(to right, #38bdf8, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0 }}>
            ⭐ Favori Rüyalarım & Okuma Listesi
          </h1>
          <p style={{ fontSize: "13px", color: "#94a3b8", margin: "4px 0 0 0" }}>
            Beğendiğin ve kaydettiğin rüyalara buradan kolayca ulaşabilirsin.
          </p>
        </div>

        {readingList.length === 0 ? (
          <div style={{ padding: "50px", textAlign: "center", color: "#94a3b8", fontSize: "13px" }}>
            Henüz favorilere eklediğin bir rüya bulunmuyor. Akış üzerindeki yıldız (⭐) butonuna basarak rüyaları buraya ekleyebilirsin!
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {readingList.map((dream: any) => (
              <div
                key={dream.id}
                style={{
                  backgroundColor: "rgba(26, 23, 51, 0.8)",
                  border: "1px solid rgba(129, 140, 248, 0.2)",
                  borderRadius: "16px",
                  padding: "20px",
                  transition: "border-color 0.2s"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <div>
                    <span style={{ fontSize: "10px", padding: "3px 8px", borderRadius: "6px", backgroundColor: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)", marginRight: "8px" }}>
                      {dream.category}
                    </span>
                    <Link href={`/ruya/${dream.id}`} style={{ textDecoration: "none" }}>
                      <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#f8fafc", margin: "6px 0 0 0" }}>
                        {dream.title}
                      </h3>
                    </Link>
                  </div>
                  <button
                    onClick={(e) => handleRemoveFromList(dream.id, e)}
                    style={{
                      backgroundColor: "rgba(239, 68, 68, 0.15)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      color: "#f87171",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "11px",
                      fontWeight: "600",
                      cursor: "pointer"
                    }}
                    title="Favorilerden Çıkar"
                  >
                    ★ Kaldır
                  </button>
                </div>

                <p style={{ fontSize: "13px", color: "#cbd5e1", margin: "0 0 12px 0", fontWeight: "300", lineHeight: "1.5" }}>
                  {dream.content}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px", color: "#94a3b8", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px" }}>
                  <span>Yazar: <strong style={{ color: "#38bdf8" }}>{dream.author}</strong></span>
                  <span>{dream.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}