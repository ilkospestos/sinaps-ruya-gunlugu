"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { initialDreams } from "../../../data/sampleDreams";
export const dynamic = 'force-dynamic';

export default function DreamDetail() {
  const params = useParams();
  const [dream, setDream] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!params.id) return;
    const savedDreams = localStorage.getItem("sinaps_dreams");
    const currentDreams = savedDreams ? JSON.parse(savedDreams) : initialDreams;
    
    const found = currentDreams.find((d) => d.id === params.id);
    setDream(found || null);

    const savedList = localStorage.getItem("sinaps_reading_list");
    if (savedList) {
      const list = JSON.parse(savedList);
      setIsSaved(list.some((item) => item.id === params.id));
    }
  }, [params.id]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      author: commentAuthor.trim() ? commentAuthor : "Gezgin",
      text: commentText
    };

    const updatedComments = [...dream.comments, newComment];
    const updatedDream = { ...dream, comments: updatedComments };

    setDream(updatedDream);
    setCommentText("");
    setCommentAuthor("");

    const savedDreams = localStorage.getItem("sinaps_dreams");
    if (savedDreams) {
      const currentDreams = JSON.parse(savedDreams);
      const updatedList = currentDreams.map((d) => d.id === dream.id ? updatedDream : d);
      localStorage.setItem("sinaps_dreams", JSON.stringify(updatedList));
    }
  };

  const toggleSave = () => {
    const savedList = localStorage.getItem("sinaps_reading_list");
    let list = savedList ? JSON.parse(savedList) : [];

    if (isSaved) {
      list = list.filter((item) => item.id !== dream.id);
      setIsSaved(false);
    } else {
      list.push(dream);
      setIsSaved(true);
    }
    localStorage.setItem("sinaps_reading_list", JSON.stringify(list));
  };

  if (!dream) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center">
        <p className="text-xl text-slate-400 mb-4">Bu rüya sinaps ağında bulunamadı...</p>
        <Link href="/" className="text-purple-400 hover:underline">Ana Sayfaya Dön</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition">
            ← Geri Dön
          </Link>
          <button
            onClick={toggleSave}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              isSaved ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
            }`}
          >
            {isSaved ? "📌 Okuma Listesinde Kayıtlı" : "📖 Daha Sonra Okuya Ekle"}
          </button>
        </div>

        <div className="bg-slate-900/85 backdrop-blur-md border border-purple-900/30 p-8 rounded-2xl shadow-xl mb-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800/50">
              {dream.category}
            </span>
            <span className="text-xs text-slate-500">{dream.date}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-100 mb-6">{dream.title}</h1>
          <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-wrap mb-6">{dream.content}</p>
          <div className="text-sm text-purple-400 font-medium">Yazar: @{dream.author}</div>
        </div>

        <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-6 text-slate-200">Psikanaliz / Yorumlar ({dream.comments.length})</h3>

          <div className="space-y-4 mb-8">
            {dream.comments.length === 0 ? (
              <p className="text-slate-500 text-sm">Henüz yorum yapılmamış. İlk yorumu sen yaz!</p>
            ) : (
              dream.comments.map((c) => (
                <div key={c.id} className="bg-slate-950 border border-slate-800/60 p-4 rounded-xl">
                  <span className="text-xs text-purple-400 font-medium block mb-1">@{c.author}</span>
                  <p className="text-slate-300 text-sm">{c.text}</p>
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleAddComment} className="space-y-4 pt-4 border-t border-slate-800">
            <div>
              <input
                type="text"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                placeholder="Adınız (İsteğe bağlı)"
                className="w-full md:w-1/2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
            <textarea
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Bu rüya hakkında ne düşünüyorsun?"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2 rounded-xl text-sm transition"
            >
              Yorumu Gönder
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}