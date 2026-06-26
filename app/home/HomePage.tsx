import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import PartnerMarquee from "../components/PartnerMarquee";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="relative h-screen min-h-[640px] flex items-center">
          {/* Background image */}
          <Image
            src="/images/hero.png"
            alt="Médicos em sala cirúrgica com equipamentos de monitoramento cardíaco"
            fill
            className="object-cover object-left-top"
            priority
          />

          {/* Layered gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

          {/* Hero content card — right side */}
          <div className="absolute right-24 top-[72px] bottom-6 z-10 w-[420px] flex items-center justify-center hero-card-enter">
            <div
              className="rounded-3xl p-8 xl:p-10 w-full max-h-full"
              style={{
                background: "rgba(170, 213, 244, 0.2)",
                backdropFilter: "blur(22px)",
                WebkitBackdropFilter: "blur(22px)",
                border: "1px solid rgba(255,255,255,0.28)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255, 255, 255, 0.64)",
                transform: "translateZ(0)",
              }}
            >
              <div className="hero-card-content flex flex-col justify-between items-center h-full">

              {/* Headline */}
              <h2 className="text-white text-[2.1rem] font-bold leading-[1.12] tracking-tight mb-6">
                Excelência e cuidado 
                <br/>
                 que salvam vidas
                  
              </h2>

              {/* Body */}
              <p className="text-white/88 text-[0.95rem] leading-relaxed mb-4">
                Há mais de 25 anos, a CardioMed traz ao <br/> Brasil o que há de mais avançado no mundo <br/> em soluções de tecnologia cardíaca. <br/>
              </p>

              {/* CTA Button */}
              <div className="mt-1 mb-2">
                <Link href="/produtos" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 inline-block">
                  Conheça nossos produtos ↗
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-0 pt-6 border-t border-white/20">
                <div className="flex-1 text-center">
                  <p className="text-white text-2xl font-bold leading-none">25+</p>
                  <p className="text-white/55 text-[11px] mt-1">anos de atuação</p>
                </div>
                <div className="w-px h-9 bg-white/20" />
                <div className="flex-1 text-center">
                  <p className="text-white text-2xl font-bold leading-none">100%</p>
                  <p className="text-white/55 text-[11px] mt-1">suporte técnico dedicado</p>
                </div>
                <div className="w-px h-9 bg-white/20" />
                <div className="flex-1 text-center">
                  <p className="text-white text-2xl font-bold leading-none">Alta</p>
                  <p className="text-white/55 text-[11px] mt-1">tecnologia mundial</p>
                </div>
              </div>
              </div>{/* hero-card-content */}
            </div>{/* glass card */}
          </div>{/* hero-card-enter */}

          {/* Scroll indicator */}
          <a href="#partners" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce cursor-pointer">
            <span className="text-white/60 text-[10px] uppercase tracking-[0.2em]">
              rolar
            </span>
            <svg className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </section>

        {/* ── PARTNERS ───────────────────────────────────────── */}
        <section
          id="partners"
          style={{
            background: "linear-gradient(160deg, #1e6b3e 0%, #1a5934 45%, #133f26 100%)",
          }}
          className="py-20"
        >
          {/* Title with decorative lines */}
          <div className="max-w-4xl mx-auto px-8 text-center mb-12">
            <div className="flex items-center justify-center gap-5 mb-8">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(255,255,255,0.3)" }} />
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Parceiros Estratégicos
              </h2>
              <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(255,255,255,0.3)" }} />
            </div>
            <p className="text-white/85 text-lg leading-loose max-w-2xl mx-auto">
              A excelência que entregamos é resultado de{" "}
              <strong className="text-white">parcerias sólidas</strong> com grandes fabricantes de{" "}
              <strong className="text-white">tecnologia de ponta</strong>. Juntos — fabricantes,
              médicos, hospitais, técnicos e especialistas — formamos um{" "}
              <strong className="text-white">time unido</strong>, com propósito de oferecer{" "}
              <strong className="text-white">o melhor</strong> em saúde e qualidade de vida.
            </p>
          </div>

          <PartnerMarquee />
        </section>

        {/* ── ABOUT ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden">

          {/* Decorative green dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
            {/* Dot grid — top right */}
            <div
              className="absolute top-20 right-10 w-52 h-52 opacity-50"
              style={{
                backgroundImage: "radial-gradient(circle, #216d42 1.8px, transparent 1.8px)",
                backgroundSize: "42px 42px",
              }}
            />
            {/* Dot grid — bottom left */}
            <div
              className="absolute bottom-16 left-8 w-44 h-44 opacity-50"
              style={{
                backgroundImage: "radial-gradient(circle, #1a5934 1.8px, transparent 1.8px)",
                backgroundSize: "42px 42px",
              }}
            />
            {/* Large blurred circle — top left */}
            <div
              className="absolute -top-24 -left-24 w-80 h-80 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(33,109,66,0.12) 0%, transparent 70%)" }}
            />
            {/* Medium blurred circle — bottom right */}
            <div
              className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(33,109,66,0.09) 0%, transparent 70%)" }}
            />
            {/* Small accent circle — mid left */}
            <div
              className="absolute top-1/2 -left-10 w-36 h-36 rounded-full -translate-y-1/2"
              style={{ background: "radial-gradient(circle, rgba(26,89,52,0.10) 0%, transparent 70%)" }}
            />
          </div>

          {/* Top wave — green cap from partners section */}
          <div className="absolute top-0 left-0 right-0" style={{ zIndex: 3 }}>
            <svg viewBox="0 0 1440 90" className="w-full block" preserveAspectRatio="none">
              <path d="M0,0 C480,90 960,0 1440,70 L1440,0 Z" fill="#133f26" />
            </svg>
          </div>

          {/* Content */}
          <div
            className="relative max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            style={{ paddingTop: "148px", paddingBottom: "148px", zIndex: 10 }}
          >
            {/* Text */}
            <div className="space-y-6">
              <div>
                <p
                  className="text-sm font-semibold uppercase tracking-[0.25em] mb-2"
                  style={{ color: "#000000" }}
                >
                  Nossa história
                </p>
                <div className="mt-3 w-12 h-1 rounded-full" style={{ background: "#133f26" }} />
              </div>

              <h2 className="text-black text-4xl font-bold leading-[1.15] tracking-tight">
                Há 25 anos entregando<br />
                o{" "}
                <span
                  className="not-italic"
                  style={{
                    color: "#216d42"
                  }}
                >
                  melhor.
                </span>
              </h2>

              <p className="text-black/80 leading-relaxed text-lg">
                A CardioMed transforma{" "}
                <strong className="text-black font-semibold">tecnologia de ponta</strong> em qualidade de vida —
                entregando <strong className="text-black font-semibold">soluções</strong> médico-hospitalares que devolvem{" "}
                <strong className="text-black font-semibold">o ritmo e o futuro</strong> a pacientes cardíacos e suas famílias.
              </p>

              <a
                href="/sobre"
                className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 hover:bg-white/20"
                style={{
                  background: "rgba(78, 78, 78, 0.62)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.22)",
                }}
              >
                Saiba mais ↗
              </a>
            </div>

            {/* Team photo */}
            <div className="relative">
              <div
                className="relative z-20"
                style={{ filter: "drop-shadow(0 20px 48px rgba(0, 0, 0, 0.50))" }}
              >
                <Image
                  src="/images/team.png"
                  alt="Equipe Cardiomed"
                  width={600}
                  height={300}
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>

                
            </div>
          </div>

        </section>

      </main>
    </>
  );
}
