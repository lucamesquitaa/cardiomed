import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import PartnerMarquee from "../components/PartnerMarquee";
import MeetingScheduleForm from "../components/MeetingScheduleForm";
import ScrollReveal from "../components/ScrollReveal";

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex items-start gap-4 rounded-2xl p-5"
      style={{
        background: "rgba(255,255,255,0.9)",
        border: "1px solid rgba(26, 89, 52, 0.32)",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
        style={{
          background: "linear-gradient(135deg, #238d4d 0%, #0c3b20 100%)",
          boxShadow: "0 4px 14px rgba(26,89,52,0.3)",
        }}
      >
        {icon}
      </div>
      <div>
        <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-green-cardiomed/70">
          {title}
        </p>
        <div className="text-sm leading-relaxed text-gray-700">{children}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="relative min-h-[680px] h-[100svh] sm:h-screen flex items-center">
          {/* Background image */}
          <Image
            src="/images/hero.jpg"
            alt="Médicos em sala cirúrgica com equipamentos de monitoramento cardíaco"
            fill
            className="object-cover object-[75%_top] sm:object-left-top"
            priority
          />

          {/* Layered gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

          {/* Hero content card — right side */}
          <div className="absolute inset-x-4 top-20 bottom-6 z-10 flex items-center justify-center hero-card-enter sm:inset-x-8 md:inset-x-auto md:right-24 md:top-[72px] md:bottom-6 md:w-[420px]">
            <div
              className="rounded-3xl p-6 sm:p-8 xl:p-10 w-full max-h-full overflow-y-auto"
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
              <h1 className="text-white text-[1.6rem] sm:text-[1.85rem] md:text-[2.1rem] font-bold leading-[1.15] tracking-tight mb-4 md:mb-6">
                Excelência e cuidado que salvam vidas
              </h1>

              {/* Body */}
              <p className="text-white/88 text-[0.85rem] sm:text-[0.95rem] leading-relaxed mb-4">
                Há mais de 25 anos, a Cardiomed traz ao Brasil o que há de mais avançado no mundo em soluções de tecnologia cardíaca e oncológica.
              </p>

              {/* CTA Button */}
              <div className="mt-1 mb-2">
                <Link href="/produtos" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-5 sm:py-3 sm:px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 inline-block text-sm sm:text-base">
                  Conheça nossos produtos ↗
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-0 pt-4 md:pt-6 border-t border-white/20 w-full">
                <div className="flex-1 text-center">
                  <p className="text-white text-lg sm:text-2xl font-bold leading-none">25+</p>
                  <p className="text-white/55 text-[10px] sm:text-[11px] mt-1">anos de atuação</p>
                </div>
                <div className="w-px h-9 bg-white/20" />
                <div className="flex-1 text-center">
                  <p className="text-white text-lg sm:text-2xl font-bold leading-none">100%</p>
                  <p className="text-white/55 text-[10px] sm:text-[11px] mt-1">suporte técnico</p>
                </div>
                <div className="w-px h-9 bg-white/20" />
                <div className="flex-1 text-center">
                  <p className="text-white text-lg sm:text-2xl font-bold leading-none">Alta</p>
                  <p className="text-white/55 text-[10px] sm:text-[11px] mt-1">tecnologia mundial</p>
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
            background: "linear-gradient(160deg, #5c8967 0%, #336b41 45%, #21462a 100%)",
          }}
          className="py-14 sm:py-20"
        >
          {/* Title with decorative lines */}
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 sm:gap-5 mb-6 sm:mb-8">
              <div className="h-px flex-1 max-w-[50px] sm:max-w-[80px]" style={{ background: "rgba(255,255,255,0.3)" }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Parceiros Estratégicos
              </h2>
              <div className="h-px flex-1 max-w-[50px] sm:max-w-[80px]" style={{ background: "rgba(255,255,255,0.3)" }} />
            </div>
            <p className="text-white/85 text-base sm:text-lg leading-loose max-w-2xl mx-auto">
              A excelência que entregamos é resultado de{" "}
              <strong className="text-white">parcerias sólidas</strong> com grandes fabricantes de{" "}
              <strong className="text-white">tecnologia de ponta</strong>. Juntos formamos um{" "}
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
                backgroundImage: "radial-gradient(circle, #336B41 1.8px, transparent 1.8px)",
                backgroundSize: "42px 42px",
              }}
            />
            {/* Large blurred circle — top left */}
            <div
              className="absolute -top-24 -left-24 w-80 h-80 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(33,109,66,0.12) 0%, transparent 70%)" }}
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
              <path d="M0,0 C480,90 960,0 1440,70 L1440,0 Z" fill="#2c693b" />
            </svg>
          </div>

          {/* Content */}
          <div
            className="relative max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24 lg:py-[148px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            style={{ zIndex: 10 }}
          >
            {/* Text */}
            <div className="space-y-6">
              <div>
                <p
                  className="text-sm font-semibold uppercase tracking-[0.25em] mb-2"
                  style={{ color: "#000000" }}
                >
                  Quem somos
                </p>
                <div className="mt-3 w-12 h-1 rounded-full" style={{ background: "#133f26" }} />
              </div>

              <h2 className="text-black text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight">
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

              <p className="text-black/80 leading-relaxed text-base sm:text-lg">
                A CardioMed transforma{" "}
                <strong className="text-black font-semibold">tecnologia de ponta</strong> em qualidade de vida com{" "}
                <strong className="text-black font-semibold">soluções</strong> médico-hospitalares que devolvem{" "}
                <strong className="text-black font-semibold">o ritmo e o futuro</strong> a pacientes cardíacos e suas famílias.
              </p>

              <Link
              href="/sobre"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #2ea55e 0%, #336B41 100%)",
                boxShadow: "0 4px 22px rgba(46,165,94,0.38)",
              }}
            >
              Saiba mais ↗
            </Link>
            </div>

            {/* Team photo */}
            <ScrollReveal className="relative">
              <div
                className="relative z-20"
                style={{ filter: "drop-shadow(0 20px 48px rgba(0, 0, 0, 0.50))" }}
              >
                <Image
                  src="/images/diretores-grupo.jpg"
                  alt="Equipe Cardiomed"
                  width={600}
                  height={300}
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </ScrollReveal>
          </div>

        </section>

        {/* ── CONTATO ────────────────────────────────────────── */}
        <section id="contato" className="relative bg-white py-16 sm:py-20">
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
              {/* Decorative green dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
            {/* Dot grid — top right */}
            <div
              className="absolute top-2 right-10 w-32 h-32 opacity-50"
              style={{
                backgroundImage: "radial-gradient(circle, #216d42 1.8px, transparent 1.8px)",
                backgroundSize: "42px 42px",
              }}
            />
          </div>
            <div className="rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/60 p-6 sm:p-10">
            <div className="mb-10 sm:mb-14 text-center">
              <h2 className="mb-4 text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
                Entre em <em className="not-italic">Contato</em>
              </h2>
              <p className="mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-gray-600">
                Estamos prontos para atender você. Fale diretamente conosco pelos canais abaixo.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <InfoCard
                  title="Endereço"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                >
                  Av. do Contorno, 2646 (sala 1305) — Santa Efigênia
                  <br />
                  Belo Horizonte - MG · CEP 30110-017
                </InfoCard>

                <InfoCard
                  title="Telefone"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                >
                  <a className="hover:text-green-cardiomed transition-colors">
                    (31) 3241-7101
                  </a>
                </InfoCard>

                <InfoCard
                  title="E-mail"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                >
                  <a className="hover:text-green-cardiomed transition-colors">
                    contato@cardiomed.com.br
                  </a>
                </InfoCard>

                <InfoCard
                  title="Horário de atendimento"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    </svg>
                  }
                >
                  Segunda a Sexta: 8h às 18h
                </InfoCard>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* ── AGENDAMENTO ──────────────────────────────────────
        <section
          className="relative overflow-hidden py-20"
          style={{
            background: "linear-gradient(160deg, #646464 0%, #292929 100%)",
          }}
        >
          <div className="max-w-xl mx-auto px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-black tracking-tight mb-3">
                Fale com nossos especialistas
              </h2>
              <p className="text-black/70 text-lg leading-relaxed">
                Agende uma reunião e descubra como a CardioMed pode ajudar
                sua instituição.
              </p>
            </div>
            <MeetingScheduleForm />
          </div>
        </section>
*/}
      </main>
    </>
  );
}
