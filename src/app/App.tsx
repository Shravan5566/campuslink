import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  ArrowRight,
  MessageCircle,
  Linkedin,
  ChevronLeft,
  ExternalLink,
  Star,
  Users,
  Zap,
  GraduationCap,
  Info,
} from "lucide-react";
import { ShaderAnimation } from "./components/ShaderAnimation";
import { HoverBorderGradient } from "./components/HoverBorderGradient";
import { Dock, DockIcon } from "./components/Dock";
import { RevealText } from "./components/ui/reveal-text";
import { PixelCanvas } from "./components/ui/pixel-canvas";
import { ShinyButton } from "./components/ui/shiny-button";
import { branches, whatsappGroups } from "./data/campusData";
import type { Branch } from "./data/campusData";

/* ─── Tooltip wrapper for dock icons ─── */
function DockTooltip({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs whitespace-nowrap pointer-events-none"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const branchesRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── FLOATING DOCK HEADER ── */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto">
          <Dock
            direction="middle"
            magnification={56}
            distance={120}
          >
            {/* Logo / Home */}
            <DockIcon onClick={() => scrollTo(heroRef)}>
              <DockTooltip label="Home">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <BookOpen size={16} className="text-white" />
                </div>
              </DockTooltip>
            </DockIcon>

            {/* Divider */}
            <div className="w-px h-7 bg-white/15 self-center mx-1 flex-shrink-0" />

            {/* Branches */}
            <DockIcon onClick={() => scrollTo(branchesRef)}>
              <DockTooltip label="Branches">
                <div className="w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-colors duration-200">
                  <GraduationCap size={17} className="text-white/80" />
                </div>
              </DockTooltip>
            </DockIcon>

            {/* WhatsApp */}
            <DockIcon onClick={() => scrollTo(whatsappRef)}>
              <DockTooltip label="WhatsApp">
                <div className="w-9 h-9 rounded-xl bg-white/8 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/30 flex items-center justify-center transition-colors duration-200">
                  <MessageCircle size={17} className="text-white/80 group-hover:text-[#25D366]" />
                </div>
              </DockTooltip>
            </DockIcon>

            {/* About */}
            <DockIcon onClick={() => scrollTo(aboutRef)}>
              <DockTooltip label="About">
                <div className="w-9 h-9 rounded-xl bg-white/8 hover:bg-violet-500/20 border border-white/10 hover:border-violet-500/30 flex items-center justify-center transition-colors duration-200">
                  <Info size={17} className="text-white/80" />
                </div>
              </DockTooltip>
            </DockIcon>

            {/* Divider */}
            <div className="w-px h-7 bg-white/15 self-center mx-1 flex-shrink-0" />

            {/* Campus Link logo */}
            <DockIcon>
              <img
                src="/logo.png"
                alt="Campus Link"
                style={{
                  height: 32,
                  width: "auto",
                  mixBlendMode: "screen",
                  cursor: "default",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </DockIcon>
          </Dock>
        </div>
      </motion.header>

      {/* ── HERO SECTION ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <ShaderAnimation />
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[80px]" />
        </div>

        <div className="relative z-[3] text-center px-6 max-w-5xl mx-auto">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-white mb-4"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Campus Link
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/50 mb-12 max-w-xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.6 }}
          >
            Your one-stop hub for{" "}
            <span className="text-blue-400">engineering notes</span>, organized,
            accessible, and always up-to-date.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="flex items-center gap-2 px-7 py-3 text-sm"
              onClick={() => scrollTo(branchesRef)}
            >
              <BookOpen size={15} />
              Explore Notes
              <ArrowRight size={14} />
            </HoverBorderGradient>

            <HoverBorderGradient
              containerClassName="rounded-full"
              className="flex items-center gap-2 px-7 py-3 text-sm"
              onClick={() => scrollTo(whatsappRef)}
            >
              <MessageCircle size={15} className="text-green-400" />
              Join WhatsApp Groups
            </HoverBorderGradient>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {[
              { icon: <GraduationCap size={18} />, label: "4 Branches", sub: "Covered" },
              { icon: <BookOpen size={18} />, label: "40+ Subjects", sub: "Available" },
              { icon: <Users size={18} />, label: "Active Groups", sub: "WhatsApp" },
              { icon: <Zap size={18} />, label: "Free Access", sub: "Always" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1 text-white/40">
                <div className="text-blue-400">{stat.icon}</div>
                <span className="text-white text-sm" style={{ fontWeight: 600 }}>
                  {stat.label}
                </span>
                <span className="text-xs">{stat.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── BRANCHES SECTION ── */}
      <section ref={branchesRef} className="py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-900/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-900/20 blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs mb-5">
              <BookOpen size={11} />
              Academic Notes
            </div>
            <h2
              className="text-white mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              Choose Your Branch
            </h2>
            <p className="text-white/40 max-w-md mx-auto" style={{ fontSize: "0.95rem" }}>
              Organized notes for all branches. Click a branch to explore subjects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {branches.map((branch, i) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => setSelectedBranch(branch)}
                className="group relative cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a] p-7 overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                {/* PixelCanvas glow background */}
                <PixelCanvas
                  gap={8}
                  speed={30}
                  colors={branch.pixelColors}
                  variant="default"
                  noFocus
                />
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${branch.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10">
                  <span className="text-4xl mb-4 block">{branch.icon}</span>
                  <h3
                    className="text-white mb-1"
                    style={{ fontWeight: 600, fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                  >
                    {branch.name}
                  </h3>
                  <p className="text-white/40 text-xs mb-5">{branch.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-white/30">{branch.subjects.length} subjects</span>
                    <div className="flex items-center gap-1 text-blue-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      View <ArrowRight size={12} />
                    </div>
                  </div>
                  <ShinyButton
                    compact
                    highlightColor={branch.pixelColors[0]}
                    highlightSubtle={branch.pixelColors[2]}
                    onClick={(e) => { e.stopPropagation(); setSelectedBranch(branch); }}
                  >
                    View Subjects
                  </ShinyButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBJECT MODAL ── */}
      <AnimatePresence>
        {selectedBranch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4"
            onClick={() => setSelectedBranch(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-2xl"
            >
              <div className="sticky top-0 z-10 bg-[#0a0a0a]/95 backdrop-blur-xl px-7 py-5 border-b border-white/10 flex items-center gap-4">
                <button
                  onClick={() => setSelectedBranch(null)}
                  className="flex items-center gap-1 text-white/40 hover:text-white transition-colors text-sm"
                >
                  <ChevronLeft size={16} /> Back
                </button>
                <span className="text-white/20">|</span>
                <span className="text-2xl">{selectedBranch.icon}</span>
                <div>
                  <h3 className="text-white" style={{ fontWeight: 600, fontSize: "1.05rem" }}>
                    {selectedBranch.name}
                  </h3>
                  <p className="text-white/40 text-xs">{selectedBranch.subjects.length} subjects available</p>
                </div>
              </div>

              <div className="p-7 grid gap-3">
                {selectedBranch.subjects.map((subject, i) => (
                  <motion.div
                    key={subject.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-center justify-between p-4 rounded-xl border border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/7 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedBranch.color}`} />
                      <span className="text-white/80 text-sm" style={{ fontWeight: 500 }}>
                        {subject.name}
                      </span>
                    </div>
                    <a
                      href={subject.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-200 border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 rounded-lg"
                    >
                      <BookOpen size={11} />
                      View Notes
                      <ExternalLink size={10} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── WHATSAPP SECTION ── */}
      <section ref={whatsappRef} className="py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-900/10 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs mb-5">
              <MessageCircle size={11} />
              Community
            </div>
            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              Join Student Communities
            </h2>
            <p className="text-white/40 max-w-md mx-auto" style={{ fontSize: "0.95rem" }}>
              Connect with peers, share notes, and stay updated on exams and events.
            </p>
            <p className="text-white/25 text-xs mt-3 max-w-sm mx-auto">
              Unofficial groups &amp; communities created by students, CRs and cultural heads
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {whatsappGroups.map((group, i) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 hover:border-green-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-300 rounded-2xl" />
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/40 text-[10px] mb-4">
                  {group.category}
                </div>
                <div className="relative z-10">
                  <span className="text-3xl mb-3 block">{group.icon}</span>
                  <h3 className="text-white mb-2" style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                    {group.name}
                  </h3>
                  <p className="text-white/40 text-xs mb-5 leading-relaxed">{group.description}</p>
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-sm hover:bg-[#25D366]/25 transition-all duration-200"
                    style={{ fontWeight: 500 }}
                  >
                    <MessageCircle size={14} />
                    Join Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section ref={aboutRef} className="py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-900/15 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs mb-8">
              <Star size={11} className="fill-violet-400" />
              About Us
            </div>
            <h2
              className="text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              Built for students,
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #818cf8, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                by a student
              </span>
            </h2>
            <p className="text-white/50 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Campus Link is a student-driven platform built to simplify access to quality
              engineering notes. No more scattered Google Drive links or
              lost WhatsApp messages. Everything is organized, searchable, and free.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative border-t border-white/10 overflow-hidden bg-black" style={{ minHeight: 320 }}>
        <div className="relative z-10 py-16 px-6">
          {/* SHRA1 reveal text */}
          <div className="text-center mb-12">
            <RevealText
              text="SHRA1"
              textColor="text-white/80"
              overlayColor="text-blue-400"
              fontSize="text-[clamp(4rem,15vw,10rem)]"
              letterDelay={0.1}
              overlayDelay={0.06}
              overlayDuration={0.45}
              springDuration={700}
              letterImages={[
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=2070&q=80",
              ]}
            />
          </div>

          {/* Footer content row */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Campus Link"
                style={{
                  height: 28,
                  width: "auto",
                  mixBlendMode: "screen",
                }}
              />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.link/s4ixn9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle size={12} /> WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/shravan-wadnerkar-29926238a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs hover:bg-blue-500/20 transition-colors"
              >
                <Linkedin size={12} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-white/20 text-xs">
              © 2026 Campus Link · All resources are for educational purposes only
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}