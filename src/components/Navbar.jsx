import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggleDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const links = [
    { to: "/", label: "about", end: true },
    { to: "/projects", label: "projects" },
    { to: "/certificates", label: "certificates" },
    { to: "/contact", label: "contact" },
  ];

  const btn = { background: "transparent", border: "1.5px solid var(--border)", borderRadius: "8px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-secondary)" };

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "var(--nav-bg)", backdropFilter: "blur(12px)", borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent", transition: "border-color 0.3s ease", boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.04)" : "none" }}>
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <Link to="/">
            <motion.span whileHover={{ scale: 1.05 }} style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: "600", color: "var(--blue)", letterSpacing: "-0.01em", display: "block" }}>SP</motion.span>
          </Link>

          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {links.map(l => <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{l.label}</NavLink>)}
            <motion.button onClick={toggleDark} whileTap={{ scale: 0.9 }} style={btn}>
              <AnimatePresence mode="wait" initial={false}>
                {dark
                  ? <motion.span key="sun" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Sun size={16} /></motion.span>
                  : <motion.span key="moon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Moon size={16} /></motion.span>
                }
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="mobile-nav-buttons" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <motion.button onClick={toggleDark} whileTap={{ scale: 0.9 }} style={btn}>{dark ? <Sun size={15} /> : <Moon size={15} />}</motion.button>
            <motion.button onClick={() => setMenuOpen(p => !p)} whileTap={{ scale: 0.9 }} style={btn}>{menuOpen ? <X size={16} /> : <Menu size={16} />}</motion.button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div key="m" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden", borderTop: "1px solid var(--border)", background: "var(--nav-bg)" }}>
              <div style={{ display: "flex", flexDirection: "column", padding: "1rem 2rem 1.5rem", gap: "1rem" }}>
                {links.map(l => <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setMenuOpen(false)} style={{ fontSize: "1rem" }}>{l.label}</NavLink>)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <style>{`.desktop-nav{display:flex!important}.mobile-nav-buttons{display:none!important}@media(max-width:767px){.desktop-nav{display:none!important}.mobile-nav-buttons{display:flex!important}}`}</style>
    </>
  );
}
