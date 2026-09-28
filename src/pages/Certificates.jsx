import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "../components/Layout";
import FadeIn from "../components/FadeIn";

const CERTIFICATES = [
  { id: "she-safe", title: "1st Place - SheSafe Hackathon", subtitle: "RVCE, Bengaluru", file: "/photos/she_safe_1st_place.jpg" },
  { id: "vision-2047", title: "National Hackathon Finalist - VISION 2047", subtitle: "Karnataka Edition - FlairX Networks + AICTE", file: "/photos/vision_2047_hackthon_National_hackathon_final.jpg" },
  { id: "code-pulse", title: "6th Rank - CodePulse Contest", subtitle: "Coding Club RVCE", file: "/photos/Code_pulse_6th_rank.jpg" },
  { id: "code-quest", title: "Top 16 - CodeQuest 2026", subtitle: "Rank 4/150 in HackerRank round - Coding Club RVCE", file: "/photos/Code_quest_top_16.jpg" },
  { id: "mern-stack", title: "MERN Stack Web Development Boot Camp", subtitle: "Coding Club of RV College of Engineering", file: "/photos/Mern_stack_web_development_cc.jpg" },
  { id: "kaggle-google", title: "5-Day AI Agents Intensive Course", subtitle: "Google and Kaggle", file: "/photos/Kaggle_google_5_day_ai_agents.png" },
  { id: "hackerrank", title: "Problem Solving (Basics)", subtitle: "HackerRank", file: "/photos/Hacker rank ) problem solving basic.jpg" },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  return (
    <Layout>
      <div className="section site-container">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontWeight: "700", color: "var(--blue)", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>certificates</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--blue)", opacity: 0.55, lineHeight: 1.7 }}>Proof that I showed up and competed.</p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {CERTIFICATES.map((cert, i) => (
            <FadeIn key={cert.id} delay={0.06 + i * 0.06}>
              <motion.div className="card" style={{ cursor: "pointer", overflow: "hidden" }} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 280 }} onClick={() => setSelected(cert)}>
                <img src={cert.file} alt={cert.title} style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }} onError={e => { e.target.style.display = "none"; }} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", color: "var(--blue)", fontWeight: "500", marginBottom: "0.25rem", lineHeight: 1.35 }}>{cert.title}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.76rem", color: "var(--blue)", opacity: 0.65, fontStyle: "italic" }}>{cert.subtitle}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div key="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={e => e.stopPropagation()} style={{ background: "var(--cream)", borderRadius: "16px", overflow: "hidden", maxWidth: "860px", width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              <div style={{ position: "relative" }}>
                <button onClick={() => setSelected(null)} style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.45)", border: "none", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", zIndex: 1 }}><X size={18} /></button>
                <img src={selected.file} alt={selected.title} style={{ width: "100%", maxHeight: "70vh", objectFit: "contain", display: "block" }} />
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--blue)", marginBottom: "0.25rem" }}>{selected.title}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--blue)", opacity: 0.65, fontStyle: "italic" }}>{selected.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
