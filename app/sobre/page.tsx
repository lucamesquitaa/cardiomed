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

      </main>
    </>
  );
}
