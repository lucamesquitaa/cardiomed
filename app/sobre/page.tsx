import Navbar from "../components/Navbar";

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
          <div className="max-w-3xl mx-auto px-8 text-center">
         
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Conheça à <em
                  className="not-italic"
                  style={{ color: "#37c273", fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}
                >
                  Cardiomed
                </em>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
             Somos referência em tecnologia médico-hospitalar para cardiologia. Desde a nossa fundação,
              unimos{" "}
              <strong className="text-gray-800 font-semibold">inovação</strong>,{" "}
              <strong className="text-gray-800 font-semibold">suporte especializado</strong> e
              parcerias com os maiores fabricantes do mundo para oferecer o melhor.
            </p>
          </div>
        </section>

        {/* ── FEATURED VIDEO ─────────────────────────────────── */}
        <section className="bg-white pb-0">
          <div className="max-w-4xl mx-auto px-8">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              }}
            >
              <video
                src="/videos/0529.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full block"
                style={{ maxHeight: 520, objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Wave divider: white → dark green */}
        <div
          style={{
            marginTop: 41,
            background: "linear-gradient(160deg, #1e6b3e 0%, #1a5934 45%, #133f26 100%)",
          }}
        >
          <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none">
            <path d="M0,0 C480,80 960,10 1440,55 L1440,0 Z" fill="white" />
          </svg>
        </div>

        {/* ── ORGANOGRAM ─────────────────────────────────────── */}
        <section
          className="pb-24"
          style={{
            background: "linear-gradient(160deg, #1e6b3e 0%, #1a5934 45%, #133f26 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto px-8">
            

            {/* Tree */}
            <div>
              {/* Level 1 */}
              <div className="flex justify-center">
                <OrgCard
                  name="Eliane Capistrano"
                  role="Fundadora e Diretora Executiva"
                  initials="EC"
                  bullets={[
                    "Fundadora da Cardiomed",
                    "+25 anos no setor médico",
                    "Liderança e visão estratégica",
                  ]}
                />
              </div>

              {/* Connector */}
              <div className="relative" style={{ height: 56 }}>
                <div
                  className="absolute bg-white/25 w-px"
                  style={{ top: 0, left: "50%", height: 28, transform: "translateX(-50%)" }}
                />
                <div
                  className="absolute bg-white/25"
                  style={{ top: 28, left: "25%", right: "25%", height: 1 }}
                />
                <div
                  className="absolute bg-white/25 w-px"
                  style={{ top: 28, left: "25%", height: 28 }}
                />
                <div
                  className="absolute bg-white/25 w-px"
                  style={{ top: 28, right: "25%", height: 28 }}
                />
              </div>

              {/* Level 2 */}
              <div className="flex justify-around">
                <OrgCard
                  name="Pedro Capistrano"
                  role="Diretor Comercial"
                  initials="PC"
                  bullets={[
                    "Gestão de parcerias estratégicas",
                    "Expansão e crescimento comercial",
                  ]}
                />
                <OrgCard
                  name="Victor Capistrano"
                  role="Diretor Técnico"
                  initials="VC"
                  bullets={[
                    "Suporte técnico especializado",
                    "Inovação em dispositivos médicos",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
