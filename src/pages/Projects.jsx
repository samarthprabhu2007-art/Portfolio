import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';

const PROJECTS = [
  {
    id: 'she-safe',
    name: 'SheSafe — Covert Camera Detection Device',
    badge: '🥇 1st Place · SheSafe Hackathon',
    brief: 'ESP32 + smartphone system that detects hidden cameras via Wi-Fi/BLE scanning and in-browser CV. Includes SOS panic button with live GPS to WhatsApp.',
    description: 'Hidden cameras violate privacy in hotels, Airbnbs, washrooms. Our device detects them two ways:\n\n1. Wireless Camera Radar — Scans Wi-Fi/BLE signals from spy cameras and guides user toward source using phone compass.\n\n2. Wired Camera Detector — Uses phone camera + real-time in-browser CV to spot IR glow and blink patterns of hidden IR LEDs.\n\nAlso has a one-tap SOS button sending live GPS to a trusted contact over WhatsApp. Now our RVCE Sem-3 EL project.',
    tech: ['ESP32', 'C++', 'FreeRTOS', 'NimBLE', 'HTML/CSS/JS', 'Computer Vision', 'WhatsApp API'],
    github: 'https://github.com/samarthprabhu2007-art', demo: 'https://she-safe-umber-tau.vercel.app', teamProject: true,
  },
  {
    id: 'grindguard',
    name: 'GrindGuard — Answer to Unlock',
    badge: 'Samsung Hackathon',
    brief: 'Study enforcement app — prove you learned something via AI quiz before unlocking breaks. Study → Quiz → Earn EP → Spend on breaks.',
    description: 'GrindGuard is a quiz-gated productivity app. Set a study session, take a short AI-graded quiz, unlock your reward only if you pass.\n\nFeatures: AI Quiz Generation (12 Qs from your notes/PDF via Gemini), Focus Monitor via screen-share, 3-Strike Policy, EP Reward System with streak multiplier, Telegram Notifications, tiered results (Bronze/Silver/Gold/Perfect).\n\nReact 19 frontend + Node.js/Express/TypeScript backend.',
    tech: ['React 19', 'Vite', 'Node.js', 'TypeScript', 'Express', 'Google Gemini', 'Telegram Bot API'],
    github: 'https://github.com/samarthprabhu2007-art/SAMSUNG-HACKATHON-', demo: 'https://samsung-hackathon-bice.vercel.app/', teamProject: false,
  },
  {
    id: 'cookmate-ai',
    name: 'CookMate AI — Smart Kitchen Assistant',
    badge: '🏆 National Hackathon Finalist · VISION 2047',
    brief: 'Smart food-management platform: Recipes + Groceries + Nutrition + Family Management. Top 16/150+ teams at VISION 2047 Karnataka — only first-year team in finals.',
    description: 'CookMate AI answers "What can I cook with what I already have?" — going beyond a recipe site to combine Recipes + Ingredients + Nutrition + Groceries + Family Management.\n\nAs a 5-member first-year team, we were the only first-years to reach the VISION 2047 Karnataka Edition finals (Top 16 / 150+ teams). I handled backend and API development.\n\nHackathon Journey: Video pitch → 8-hour offline dev (40→16 teams) → Live presentation.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub'],
    github: 'https://github.com/samarthprabhu2007-art', demo: null, teamProject: true,
  },
  {
    id: 'headway-iq',
    name: 'HeadwayIQ — Bus Bunching AI System',
    badge: null,
    brief: 'Two-stage AI system to predict and mitigate BMTC bus bunching. KNN + Naive Bayes (96.2% F1) for classification, Q-Learning for holding strategy prescription.',
    description: 'No expensive roadside sensors needed — runs on GPS headways and timetable heuristics.\n\nStage 1: KNN and Naive Bayes classify real-time bunching state (Severe/Moderate/Mild/Normal). KNN achieves ~96.2% F1-Score.\n\nStage 2: Q-Learning agent prescribes holding strategies (Hold 2/4 mins) to prevent cascading delays.\n\nLive Dashboard: Tkinter control panel + Flask+Leaflet simulation showing "With AI" vs "Without AI". Integrates OpenWeatherMap API for realistic traffic delays.',
    tech: ['Python', 'KNN', 'Naive Bayes', 'Q-Learning', 'Flask', 'Leaflet.js', 'Tkinter', 'OpenWeatherMap API'],
    github: 'https://github.com/samarthprabhu2007-art', demo: null, teamProject: false,
  },
  {
    id: 'rvce-events',
    name: 'RVCE Events — Self-Hosted Event Platform',
    badge: 'Open Source · RVCE Coding Club',
    brief: 'Contributed the ProfileSetupModal PR to this self-hosted event platform for RVCE — first-time profile setup after Google OAuth with form validation and 4 Storybook stories.',
    description: 'My contribution: ProfileSetupModal — shown after Google OAuth sign-in. Captures USN and academic details for AICTE activity point attribution and event ticketing.\n\nBuilt with react-hook-form + zod validation, manual focus trap/ESC handling, existing Button primitives. Styled with brand CSS variables only. Includes 4 Storybook stories: Initial, Validation Errors, Submitting, Mobile.',
    tech: ['Next.js', 'React', 'Spring Boot', 'Kotlin', 'react-hook-form', 'Zod', 'Storybook', 'Playwright', 'Docker'],
    github: 'https://github.com/samarthprabhu2007-art', demo: null, teamProject: true,
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="section site-container">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: '700', color: 'var(--blue)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>projects</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--blue)', opacity: 0.55 }}>Things I've built, hacked, and competed on.</p>
          </div>
        </FadeIn>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PROJECTS.map((p, i) => <FadeIn key={p.id} delay={0.06 + i * 0.07}><ProjectCard project={p} /></FadeIn>)}
        </div>
      </div>
    </Layout>
  );
}

function ProjectCard({ project: p }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card" style={{ overflow: 'hidden', background: 'transparent' }}>
      <button onClick={() => setOpen(v => !v)} style={{ width: '100%', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '1.75rem 2rem 1.5rem', display: 'flex', flexDirection: 'column' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(44,95,138,0.025)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: '400', color: 'var(--blue)', lineHeight: 1.2 }}>{p.name}</span>
            {p.badge && <span className="tag" style={{ fontSize: '0.72rem' }}>{p.badge}</span>}
          </div>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ color: 'var(--blue)', flexShrink: 0, display: 'flex', marginTop: '4px' }}>
            <ChevronDown size={20} />
          </motion.span>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--blue)', opacity: 0.7, lineHeight: 1.65, marginBottom: '1rem' }}>{p.brief}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
            <div style={{ padding: '0 2rem 2rem', borderTop: '1px solid rgba(44,95,138,0.18)' }}>
              {p.description.split('\n\n').map((para, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.91rem', color: 'var(--blue)', opacity: 0.75, lineHeight: 1.8, marginTop: '1.1rem' }}>{para}</p>
              ))}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}><GithubIcon size={15} />View on GitHub</a>}
                {p.demo
                  ? <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}><ExternalLink size={15} />Live Demo</a>
                  : p.github && <span className="btn-disabled"><ExternalLink size={15} />Live Demo<span style={{ fontSize: '0.7rem', background: 'rgba(44,95,138,0.08)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>soon</span></span>
                }
                {p.teamProject && <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--blue)', opacity: 0.6, fontStyle: 'italic', alignSelf: 'center' }}>Team project</span>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
