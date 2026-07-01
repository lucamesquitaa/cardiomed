import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";

function OrgCard({
  name,
  role,
  initials,
  bullets,
}: {
  name: string;
  role: string;
  initials: string;
  bullets: string[];
}) {
  return (
    <div
      className="w-56 rounded-2xl p-5 flex flex-col items-center text-center"
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3 shrink-0"
        style={{
          background: "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.35)",
        }}
      >
        {initials}
      </div>
      <p className="text-white font-semibold text-sm leading-tight mb-1">{name}</p>
      <p className="text-emerald-400 text-xs font-medium mb-3 leading-tight">{role}</p>
      <ul className="text-left w-full space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-1.5 text-white/60 text-xs">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SobrePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pt-[72px]">
        {/* ── INTRO ──────────────────────────────────────────── */}
        <section className="py-10 bg-white">
           {/* Decorative green dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
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
            
          </div>
          <div className="max-w-3xl mx-auto px-8 text-center">
         
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Conheça a <em
                  className="not-italic"
                >
                  Cardiomed
                </em>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
             Somos referência em tecnologia médico-hospitalar para cardiologia. Desde a nossa fundação,
              unimos{" "}
              <strong className="text-gray-800 font-semibold">inovação</strong>,{" "}
              <strong className="text-gray-800 font-semibold">suporte especializado</strong> 
              <strong className="text-gray-800 font-semibold"> e parcerias</strong> com os maiores fabricantes do mundo para oferecer o melhor.
            </p>
          </div>
        </section>

        {/* ── FEATURED VIDEO ─────────────────────────────────── */}
        <section className="bg-white pb-20">
          <div className="max-w-4xl mx-auto px-8">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                aspectRatio: "16 / 9",
                maxHeight: 520,
              }}
            >
              <video
                src="/videos/0529.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full block"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* ── MISSÃO, VISÃO E VALORES ───────────────────────── */}
        <section className="bg-white pb-24">
          <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <MvvCard
                icon={
                  <svg className="h-7 w-7" fill="none" stroke="white" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Missão"
                text="Oferecer tecnologia médico-hospitalar de excelência para cardiologia, contribuindo para o cuidado e a qualidade de vida dos pacientes."
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <MvvCard
                icon={
                  <svg className="h-7 w-7" fill="none" stroke="white" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Visão"
                text="Ser reconhecida como a principal referência em soluções para cardiologia, expandindo parcerias e inovação em todo o território nacional."
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <MvvCard
                icon={
                  <svg className="h-7 w-7" fill="none" stroke="white" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.98 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                }
                title="Valores"
                text="Ética, inovação, excelência no atendimento e compromisso com a vida guiam cada parceria e cada entrega que realizamos."
              />
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}

function MvvCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl p-8 text-center bg-gray-50 border border-gray-100 shadow-sm">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{
          background: "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.2)",
        }}
      >
        {icon}
      </div>
      <h3 className="text-gray-900 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
