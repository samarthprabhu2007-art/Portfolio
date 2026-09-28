import { motion } from "framer-motion";
const raw = "solve \u2022 submit \u2022 optimize \u2022 repeat \u2022 ";
const MARQUEE_TEXT = raw.repeat(6);
export default function Footer() {
  return <footer style={{ marginTop: "auto" }}><div className="marquee-wrapper"><motion.div className="marquee-track" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }} style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "1rem", color: "var(--blue)", letterSpacing: "0.05em", gap: 0 }}><span>{MARQUEE_TEXT}</span><span>{MARQUEE_TEXT}</span></motion.div></div></footer>;
}