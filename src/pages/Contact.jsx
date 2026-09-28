import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, CodeforcesIcon } from '../components/SocialIcons';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import Accordion from '../components/Accordion';

const EDUCATION = [
  { degree: 'BE in Computer Science Engineering', institution: 'RV College of Engineering, Bengaluru', year: 'Expected 2029', score: 'CGPA 9.83' }
];

const CERTIFICATIONS = [
  { title: 'MERN Stack Web Development Boot Camp', issuer: 'Coding Club of RV College of Engineering', year: '2025' },
  { title: '5-Day AI Agents Intensive Course', issuer: 'Google (Kaggle)', year: '2025' },
  { title: 'Problem Solving (Basics)', issuer: 'HackerRank', year: '2025' },
  { title: 'Touch Typing Certification', issuer: 'Typing.com', year: '2025' },
];

const SKILLS = [
  { category: 'Languages', items: ['C', 'C++', 'HTML', 'CSS', 'JavaScript'] },
  { category: 'Competitive Programming', items: ['DSA', 'Algorithms', 'OOP', 'STL', 'LeetCode 1680', 'Codeforces 1130'] },
  { category: 'Frameworks & Tools', items: ['MERN Stack', 'React', 'Node.js', 'Express', 'Git', 'GitHub', 'ESP32', 'Flask'] }
];

const ACHIEVEMENTS = [
  { label: '1st Place - SheSafe Hackathon', detail: 'Covert camera detection - RVCE, Bengaluru' },
  { label: 'VISION 2047 National Hackathon Finalist', detail: 'Top 16 / 150+ teams - Karnataka Edition - only first-year team in finals' },
  { label: '2nd Place - ML Hackathon "Gotta Train \'Em All"', detail: 'Pokemon classification + weight prediction - Coding Club RVCE' },
  { label: '6th Rank - CodePulse Contest', detail: 'Coding Club RVCE' },
  { label: 'Top 16 - CodeQuest 2026', detail: 'Rank 4/150 in HackerRank round, won LeetCode 1v1 knockout - Coding Club RVCE' },
  { label: 'Samsung Hackathon Participant', detail: 'Built GrindGuard - AI-powered study enforcement app' },
];

const SOCIALS = [
  { id: 'github', href: 'https://github.com/samarthprabhu2007-art', label: 'GitHub', Icon: GithubIcon },
  { id: 'linkedin', href: 'https://www.linkedin.com/in/samarth-prabhu-a49244383/', label: 'LinkedIn', Icon: LinkedinIcon },
  { id: 'leetcode', href: 'https://leetcode.com/u/Samarthprabhu/', label: 'LeetCode', Icon: LeetcodeIcon },
  { id: 'codeforces', href: 'https://codeforces.com/profile/samarth270320076', label: 'Codeforces', Icon: CodeforcesIcon },
];

export default function Contact() {
  return (
    <Layout>
      <div className="section site-container">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: '700', color: 'var(--blue)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '1rem' }}>let's connect</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--blue)', opacity: 0.55 }}>I'm always open to new opportunities and collaborations.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.07}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.4rem', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="mailto:samarthprabhu2007@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--blue)', fontFamily: 'var(--font-body)', fontSize: '1.05rem', opacity: 0.8 }}>
                <Mail size={18} />samarthprabhu2007@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--blue)', fontFamily: 'var(--font-body)', fontSize: '1.05rem', opacity: 0.7 }}>
                <MapPin size={18} />Bengaluru, India
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {SOCIALS.map(({ id, href, label, Icon }) => (
                <motion.a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon" whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}><Icon size={22} /></motion.a>
              ))}
            </div>
          </div>
        </FadeIn>

        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          <FadeIn delay={0.1}>
            <Accordion title="Education">
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {EDUCATION.map((ed, i) => (
                  <div key={i} style={{ paddingLeft: '0.65rem', borderLeft: '2px solid var(--blue)' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem', fontWeight: '600', color: 'var(--blue)', marginBottom: '0.15rem' }}>{ed.degree}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--blue)', opacity: 0.65, marginBottom: '0.15rem' }}>{ed.institution}</p>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--blue)', opacity: 0.75, fontStyle: 'italic' }}>{ed.year}</p>
                      {ed.score && <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--blue)', opacity: 0.6, fontWeight: '500' }}>{ed.score}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.14}>
            <Accordion title="Certifications">
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {CERTIFICATIONS.map((c, i) => (
                  <div key={i} style={{ paddingLeft: '0.65rem', borderLeft: '2px solid var(--blue)' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: '600', color: 'var(--blue)', marginBottom: '0.1rem' }}>{c.title}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--blue)', opacity: 0.65, fontStyle: 'italic' }}>{c.issuer}<span style={{ fontStyle: 'normal', marginLeft: '0.5rem', opacity: 0.6 }}>- {c.year}</span></p>
                  </div>
                ))}
              </div>
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.18}>
            <Accordion title="Achievements">
              <ul style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', listStyle: 'none' }}>
                {ACHIEVEMENTS.map((a, i) => (
                  <li key={i} style={{ borderLeft: '2px solid var(--blue)', paddingLeft: '0.65rem' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: '500', color: 'var(--blue)', marginBottom: '0.1rem' }}>{a.label}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--blue)', opacity: 0.65 }}>{a.detail}</p>
                  </li>
                ))}
              </ul>
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.22}>
            <Accordion title="Skills">
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {SKILLS.map(g => (
                  <div key={g.category}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', opacity: 0.75, marginBottom: '0.5rem' }}>{g.category}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {g.items.map(s => <span key={s} className="tag">{s}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>
          </FadeIn>

        </div>
      </div>
    </Layout>
  );
}
