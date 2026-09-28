import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import Accordion from '../components/Accordion';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, CodeforcesIcon } from '../components/SocialIcons';

const SOCIALS = [
  { id: 'github', href: 'https://github.com/samarthprabhu2007-art', label: 'GitHub', Icon: GithubIcon },
  { id: 'linkedin', href: 'https://www.linkedin.com/in/samarth-prabhu-a49244383/', label: 'LinkedIn', Icon: LinkedinIcon },
  { id: 'leetcode', href: 'https://leetcode.com/u/Samarthprabhu/', label: 'LeetCode', Icon: LeetcodeIcon },
  { id: 'codeforces', href: 'https://codeforces.com/profile/samarth270320076', label: 'Codeforces', Icon: CodeforcesIcon },
];

const MEMBERSHIPS = [
  { role: 'Member', org: 'Coding Club, RV College of Engineering', duration: '2025 � Present', desc: '6th rank at CodePulse � Top 16 at CodeQuest 2026 � 2nd place ML Hackathon.' },
  { role: 'Member', org: 'ACM Student Chapter, RVCE', duration: '2025 � Present', desc: null },
  { role: 'Member', org: 'Association of Computer Machinery, RVCE', duration: '2025 � Present', desc: null },
];

export default function Home() {
  return (
    <Layout>
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '900px', width: '100%' }}>

          <FadeIn delay={0}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.3rem', color: 'var(--blue)', letterSpacing: '0.04em', marginBottom: '4px' }}>Hey! This is</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3.5rem, 11vw, 6.5rem)', fontWeight: '700', color: 'var(--blue)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '16px' }}>Samarth Prabhu</h1>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', marginBottom: '20px' }}>
              {SOCIALS.map(({ id, href, label, Icon }) => (
                <motion.a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon" whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.24}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--blue)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '500', marginBottom: '10px' }}>I am a</p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div style={{ border: '1.5px solid var(--blue)', borderRadius: '18px', padding: '1rem 3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem', width: 'clamp(280px, 55vw, 560px)', marginBottom: '20px' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.08rem', color: 'var(--blue)' }}>Computer Science Engineer</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--blue)', opacity: 0.45 }}>+</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.08rem', color: 'var(--blue)' }}>Competitive Programmer</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontStyle: 'italic', color: 'var(--blue)', opacity: 0.5, marginTop: '0.35rem' }}>RVCE � 2nd Year � CGPA 9.83</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.34} style={{ width: '100%', maxWidth: '520px', marginBottom: '1rem' }}>
            <div style={{ border: '1.5px solid var(--blue)', borderRadius: '12px', padding: '0.8rem 1.5rem', display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--blue)', opacity: 0.6, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>LeetCode</p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--blue)', fontWeight: '600' }}>1680</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--blue)', opacity: 0.6, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Codeforces</p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--blue)', fontWeight: '600' }}>1130</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.38} style={{ width: '100%', maxWidth: '520px' }}>
            <Accordion title="Club Memberships" heroStyle>
              <div style={{ paddingTop: '0.9rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
                {MEMBERSHIPS.map((item, i) => (
                  <div key={i} style={{ paddingLeft: '0.75rem', borderLeft: '2px solid var(--blue)' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.1rem' }}>{item.role}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--blue)', fontStyle: 'italic', marginBottom: item.desc ? '0.25rem' : 0 }}>
                      {item.org}
                      {item.duration && <span style={{ color: 'var(--text-secondary)', fontStyle: 'normal', marginLeft: '0.5rem' }}>� {item.duration}</span>}
                    </p>
                    {item.desc && <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{item.desc}</p>}
                  </div>
                ))}
              </div>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="site-container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <FadeIn>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '4rem', textAlign: 'center' }}>about me</p>
          </FadeIn>
          <AboutRow delay={0.05} photoFirst imgSrc="/photos/photo1.jpg" text={<>I'm a CSE student at <strong>RV College of Engineering, Bengaluru</strong>, 2nd year, CGPA 9.83. Passionate about <em>competitive programming, full-stack dev, and AI/ML</em>. Currently at LeetCode <strong>1680</strong> and Codeforces <strong>1130</strong>. 🚀</>} />
          <AboutRow delay={0.08} photoFirst={false} imgSrc="/photos/photo2.jpg" text={<>I know <strong>C, C++, HTML, CSS, JavaScript</strong> and work with Git daily. I've won hackathons, reached national finals, and built a covert-camera detector. Always building something that matters. 💡</>} />
        </div>
      </section>
    </Layout>
  );
}

function AboutRow({ text, photoFirst, imgSrc, delay = 0 }) {
  const photo = (
    <FadeIn delay={delay} style={{ flex: 1, minWidth: '240px', maxWidth: '380px' }}>
      <img 
        src={imgSrc} 
        alt="Samarth Prabhu" 
        style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/5', background: 'var(--border)' }} 
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="photo-placeholder" style={{ display: 'none', width: '100%', borderRadius: '12px', aspectRatio: '4/5', background: 'var(--border)', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--blue)' }}>
        <ImageIcon size={28} opacity={0.4} />
        <span>Add your photo here</span>
        <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>{imgSrc}</span>
      </div>
    </FadeIn>
  );
  const textBlock = (
    <FadeIn delay={delay + 0.06} style={{ flex: 1.4, minWidth: '260px' }}>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)', color: 'var(--blue)', lineHeight: 1.75, fontWeight: '400' }}>{text}</p>
    </FadeIn>
  );
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3.5rem', alignItems: 'center', marginBottom: '5rem', flexDirection: photoFirst ? 'row' : 'row-reverse' }}>
      {photo}{textBlock}
    </div>
  );
}
