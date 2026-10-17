"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { currentUser as defaultUser, initialDreams } from "../../data/sampleDreams";

export default function ProfilePage() {
  const [user, setUser] = useState(defaultUser);
  const [myDreams, setMyDreams] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  // Düzenleme form state'leri
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    // LocalStorage'dan kayıtlı kullanıcı profilini al
    const savedUser = localStorage.getItem("sinaps_user_profile");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setUser(parsed);
      setName(parsed.name || defaultUser.name);
      setUsername(parsed.username || defaultUser.username);
      setBio(parsed.bio || defaultUser.bio);
      setAvatarUrl(parsed.avatarUrl || "");
    } else {
      setName(defaultUser.name);
      setUsername(defaultUser.username);
      setBio(defaultUser.bio);
    }

    loadMyDreams();
  }, []);

  const loadMyDreams = () => {
    const savedDreams = localStorage.getItem("sinaps_dreams");
    const allDreams = savedDreams ? JSON.parse(savedDreams) : initialDreams;
    const userDreams = allDreams.filter((d: any) => d.author === user.name || d.author === "İlkem");
    setMyDreams(userDreams);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name,
      username,
      bio,
      avatarUrl
    };
    setUser(updatedUser);
    localStorage.setItem("sinaps_user_profile", JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  const handleDeleteDream = (id: string) => {
    if (!confirm("Bu rüyayı silmek istediğine emin misin?")) return;

    const savedDreams = localStorage.getItem("sinaps_dreams");
    if (savedDreams) {
      const allDreams = JSON.parse(savedDreams);
      const updatedAllDreams = allDreams.filter((d: any) => d.id !== id);
      localStorage.setItem("sinaps_dreams", JSON.stringify(updatedAllDreams));
    }

    setMyDreams(myDreams.filter((d) => d.id !== id));
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0b0a14", backgroundImage: "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0b0a14 70%)", color: "#f1f5f9", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Üst Navigasyon */}
      <div style={{ width: "100%", maxWidth: "700px", marginBottom: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/akis" style={{ textDecoration: "none", color: "#38bdf8", fontSize: "13px", fontWeight: "600" }}>
          ← Akışa Geri Dön
        </Link>
        <Link href="/giris" style={{ textDecoration: "none", backgroundColor: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#f87171", padding: "6px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: "600" }}>
          Çıkış Yap ↩
        </Link>
      </div>

      {/* Profil Kartı (Cam Efekti) */}
      <div style={{ width: "100%", maxWidth: "700px", padding: "35px", borderRadius: "24px", backgroundColor: "rgba(19, 17, 38, 0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(129, 140, 248, 0.25)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)", textAlign: "center", marginBottom: "30px" }}>
        
        {/* Profil Fotoğrafı veya Avatar */}
        <div style={{ width: "88px", height: "88px", borderRadius: "50%", margin: "0 auto 16px auto", overflow: "hidden", border: "2px solid #38bdf8", boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1a1733" }}>
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt="Profil" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <span style={{ fontSize: "32px", fontWeight: "bold", color: "#ffffff" }}>{user.name.charAt(0)}</span>
          )}
        </div>

        {!isEditing ? (
          <>
            <h1 style={{ fontSize: "22px", fontWeight: "800", color: "#f8fafc", margin: "0 0 4px 0" }}>{user.name}</h1>
            <p style={{ fontSize: "13px", color: "#38bdf8", margin: "0 0 12px 0", fontWeight: "600" }}>{user.username}</p>
            <p style={{ fontSize: "13px", color: "#cbd5e1", maxWidth: "450px", margin: "0 auto 20px auto", fontWeight: "300", lineHeight: "1.5" }}>{user.bio}</p>

            <button
              onClick={() => setIsEditing(true)}
              style={{ backgroundColor: "rgba(56, 189, 248, 0.15)", border: "1px solid rgba(56, 189, 248, 0.3)", color: "#38bdf8", padding: "8px 18px", borderRadius: "10px", fontSize: "13px", fontWeight: "600", cursor: "pointer", marginBottom: "20px" }}
            >
              ✏️ Profili Düzenle
            </button>
          </>
        ) : (
          /* Düzenleme Formu */
          <form onSubmit={handleSaveProfile} style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left", maxWidth: "450px", margin: "0 auto 20px auto" }}>
            <div>
              <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#cbd5e1", marginBottom: "6px" }}>AD SOYAD</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", backgroundColor: "rgba(26, 23, 51, 0.9)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "10px", fontSize: "13px", color: "#ffffff", outline: "none" }}
                required
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#cbd5e1", marginBottom: "6px" }}>KULLANICI ADI</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", backgroundColor: "rgba(26, 23, 51, 0.9)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "10px", fontSize: "13px", color: "#ffffff", outline: "none" }}
                required
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#cbd5e1", marginBottom: "6px" }}>BİYOGRAFİ</label>
              <textarea
                rows={2}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", backgroundColor: "rgba(26, 23, 51, 0.9)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "10px", fontSize: "13px", color: "#ffffff", outline: "none", resize: "none" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#cbd5e1", marginBottom: "6px" }}>PROFİL FOTOĞRAFI URL (İnternet görsel linki)</label>
              <input
                type="text"
                placeholder="https://images.unsplash.com/..."
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", backgroundColor: "rgba(26, 23, 51, 0.9)", border: "1px solid rgba(129, 140, 248, 0.3)", borderRadius: "10px", fontSize: "13px", color: "#ffffff", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
              <button
                type="submit"
                style={{ flex: 1, padding: "10px", backgroundColor: "#0284c7", color: "#ffffff", border: "none", borderRadius: "10px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}
              >
                Kaydet ✓
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                style={{ flex: 1, padding: "10px", backgroundColor: "rgba(255,255,255,0.08)", color: "#cbd5e1", border: "none", borderRadius: "10px", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}
              >
                İptal
              </button>
            </div>
          </form>
        )}

        <div style={{ display: "flex", justifyContent: "center", gap: "30px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px", fontSize: "13px", color: "#94a3b8" }}>
          <span>Takipçi: <strong style={{ color: "#38bdf8" }}>{user.followersCount}</strong></span>
          <span>Takip: <strong style={{ color: "#38bdf8" }}>{user.followingCount}</strong></span>
          <span>Paylaşılan Rüya: <strong style={{ color: "#38bdf8" }}>{myDreams.length}</strong></span>
        </div>
      </div>

      {/* Paylaştığım Rüyalar */}
      <div style={{ width: "100%", maxWidth: "700px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#f8fafc", marginBottom: "15px" }}>Paylaştığım Rüyalar</h2>
        
        {myDreams.length === 0 ? (
          <div style={{ padding: "40px", textAlign: "center", backgroundColor: "rgba(19, 17, 38, 0.6)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", color: "#94a3b8", fontSize: "13px" }}>
            Henüz hiç rüya paylaşmadın.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {myDreams.map((dream: any) => (
              <div key={dream.id} style={{ backgroundColor: "rgba(19, 17, 38, 0.8)", border: "1px solid rgba(129, 140, 248, 0.2)", borderRadius: "16px", padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <div>
                    <span style={{ fontSize: "10px", padding: "3px 8px", borderRadius: "6px", backgroundColor: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)", marginRight: "8px" }}>
                      {dream.category}
                    </span>
                    <h3 style={{ fontSize: "15px", fontWeight: "600", color: "#f8fafc", margin: "6px 0 0 0" }}>{dream.title}</h3>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "11px", color: "#94a3b8" }}>{dream.date}</span>
                    <button
                      onClick={() => handleDeleteDream(dream.id)}
                      style={{ backgroundColor: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#f87171", padding: "6px 10px", borderRadius: "8px", fontSize: "11px", fontWeight: "600", cursor: "pointer" }}
                      title="Rüyayı Sil"
                    >
                      🗑️ Sil
                    </button>
                  </div>
                </div>
                <p style={{ fontSize: "13px", color: "#cbd5e1", margin: 0, fontWeight: "300", lineHeight: "1.5" }}>{dream.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </main>
  );
}