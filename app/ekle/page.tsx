"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { currentUser } from "../../data/sampleDreams";

export default function AddDreamPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Lucid");
  const [sentiment, setSentiment] = useState("Huzurlu (%80)");
  const [symbols, setSymbols] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    // Yeni rüya objesini oluştur
    const newDream = {
      id: Date.now().toString(),
      title,
      content,
      category,
      date: new Date().toLocaleDateString("tr-TR"),
      author: currentUser.name,
      authorUsername: currentUser.username,
      sentiment,
      symbols: symbols ? symbols.split(",").map((s) => s.trim()) : ["Rüya", "Bilinçaltı"],
      analysis: "Yapay zeka bilinçaltı analizi: Bu rüya, zihninizin derinliklerindeki yaratıcı enerjinin ve günlük odaklanmanın bir yansımasıdır.",
      comments: []
    };

    // Mevcut rüyaları LocalStorage'dan al ve yenisini ekle
    const savedDreams = localStorage.getItem("sinaps_dreams");
    const existingDreams = savedDreams ? JSON.parse(savedDreams) : [];
    const updatedDreams = [newDream, ...existingDreams];
    
    localStorage.setItem("sinaps_dreams", JSON.stringify(updatedDreams));

    // Paylaştıktan sonra akış sayfasına yönlendir
    router.push("/akis");
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0b0a14", backgroundImage: "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0b0a14 70%)", color: "#f1f5f9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Üst Geri Dönüş Linki */}
      <div style={{ width: "100%", maxWidth: "600px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/akis" style={{ textDecoration: "none", color: "#38bdf8", fontSize: "13px", fontWeight: "600" }}>
          ← Akışa Geri Dön
        </Link>
        <span style={{ fontSize: "12px", color: "#94a3b8" }}>Yeni Rüya Günlüğü Girişi</span>
      </div>

      {/* Ana Form Kartı (Cam Efekti ve Net Okunabilirlik) */}
      <div style={{ width: "100%", maxWidth: "600px", padding: "40px", borderRadius: "24px", backgroundColor: "rgba(19, 17, 38, 0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(129, 140, 248, 0.25)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)" }}>
        
        <div style={{ marginBottom: "30px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "800", background: "linear-gradient(to right, #38bdf8, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 6px 0" }}>
            Rüyanı Paylaş
          </h1>
          <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
            Bilinçaltı dünyanı toplulukla güvenle paylaş, yorumlar ve analizler al.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          
          {/* Rüya Başlığı */}
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px", letterSpacing: "0.5px" }}>
              RÜYA BAŞLIĞI
            </label>
            <input
              type="text"
              placeholder="Örn: Yüksek binadan düşerken uçmaya başladım..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%", padding: "14px 16px", backgroundColor: "rgba(26, 23, 51, 0.9)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "12px", fontSize: "14px", color: "#ffffff", outline: "none" }}
              required
            />
          </div>

          {/* Kategori ve Ruh Hali Seçimi (İki Sütun) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px", letterSpacing: "0.5px" }}>
                KATEGORİ
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: "100%", padding: "14px 16px", backgroundColor: "rgba(26, 23, 51, 0.9)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "12px", fontSize: "14px", color: "#ffffff", outline: "none", cursor: "pointer" }}
              >
                <option value="Lucid" style={{ backgroundColor: "#131126" }}>Lucid Rüya</option>
                <option value="Kabus" style={{ backgroundColor: "#131126" }}>Kabus</option>
                <option value="Mistik" style={{ backgroundColor: "#131126" }}>Mistik</option>
                <option value="Bilinçaltı" style={{ backgroundColor: "#131126" }}>Bilinçaltı</option>
                <option value="Stres" style={{ backgroundColor: "#131126" }}>Stres / Kaygı</option>
                <option value="Soyut" style={{ backgroundColor: "#131126" }}>Soyut</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px", letterSpacing: "0.5px" }}>
                RUH HALİ / DUYGU
              </label>
              <input
                type="text"
                placeholder="Örn: Huzurlu (%85)"
                value={sentiment}
                onChange={(e) => setSentiment(e.target.value)}
                style={{ width: "100%", padding: "14px 16px", backgroundColor: "rgba(26, 23, 51, 0.9)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "12px", fontSize: "14px", color: "#ffffff", outline: "none" }}
              />
            </div>
          </div>

          {/* Semboller */}
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px", letterSpacing: "0.5px" }}>
              ÖNEMLİ SEMBOLLER (Virgülle ayırın)
            </label>
            <input
              type="text"
              placeholder="Örn: Uçmak, Deniz, Merdiven"
              value={symbols}
              onChange={(e) => setSymbols(e.target.value)}
              style={{ width: "100%", padding: "14px 16px", backgroundColor: "rgba(26, 23, 51, 0.9)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "12px", fontSize: "14px", color: "#ffffff", outline: "none" }}
            />
          </div>

          {/* Rüya Detay / İçerik */}
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px", letterSpacing: "0.5px" }}>
              RÜYA İÇERİĞİ (Detaylı Anlatım)
            </label>
            <textarea
              rows={5}
              placeholder="Rüyanı tüm detaylarıyla samimi bir dille buraya yaz..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ width: "100%", padding: "14px 16px", backgroundColor: "rgba(26, 23, 51, 0.9)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "12px", fontSize: "14px", color: "#ffffff", outline: "none", resize: "vertical", lineHeight: "1.6" }}
              required
            />
          </div>

          {/* Paylaş Butonu */}
          <button
            type="submit"
            style={{ width: "100%", padding: "15px", marginTop: "10px", background: "linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)", color: "#ffffff", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: "700", cursor: "pointer", boxShadow: "0 10px 20px rgba(79, 70, 229, 0.4)", transition: "opacity 0.2s" }}
          >
            Rüyayı Akışta Yayınla ✨
          </button>

        </form>
      </div>

    </main>
  );
}