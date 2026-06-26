import Navbar from "../components/Navbar";
import Link from "next/link";

const categories = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Linha Bradicardia",
    description:
      "Marca-passos de última geração para tratamento da bradicardia, com tecnologia Biotronik para estimulação cardíaca segura e eficiente.",
    items: ["Evity 6", "Solvia / Reocar", "Amvia", "Solia S53 / S60", "CSP S60", "SELECTRA 3D"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Linha Taquicardia",
    description:
      "Cardioversores-desfibriladores implantáveis (CDI) para prevenção e tratamento de taquiarritmias ventriculares graves.",
    items: ["Acticor / Rivacor", "Ilivia Neo", "Pamira S Dx", "Pamira S65", "Pamira SD"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Ressincronização Cardíaca",
    description:
      "Dispositivos CRT para ressincronização biventricular no tratamento da insuficiência cardíaca com disfunção sistólica.",
    items: ["Evity 8", "Amvia / Acticor 7", "Rivacor 5", "Ilivia Neo", "Sentus"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Monitoramento Cardíaco",
    description:
      "Sistemas de monitoramento cardíaco implantável e remoto para detecção de arritmias e acompanhamento contínuo do paciente.",
    items: ["Biomonitor III", "Home Monitoring"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Mapeamento Cardíaco",
    description:
      "Sistemas avançados de mapeamento eletrofisiológico 3D e cateteres para diagnóstico e ablação de arritmias cardíacas complexas.",
    items: ["Columbus 3D", "FIREMAGIC / EASYSTARS 3D", "EASYLOOP 3D", "EasyFinder / PathBuilder", "Transseptal EverPace", "Cateter Easyloop EverPace"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Linha Eletrofisiológica",
    description:
      "Cateteres diagnósticos e terapêuticos para procedimentos de eletrofisiologia cardíaca, ablação por radiofrequência e crioablação.",
    items: ["Alcath Fulfgold Circle", "Alcath Flutter Gold / Extra Gold", "Alcath Flux G eXtra", "Alcath G / LT G FullCircle", "Alcath FullCircle", "Qiona"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
    title: "Angioplastia",
    description:
      "Stents coronários de última geração com tecnologia Medinol para tratamento minimamente invasivo de lesões coronárias.",
    items: ["Stent Elunir", "Stent Elunir Perl"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    title: "Extração de Eletrodos",
    description:
      "Ferramentas especializadas para extração segura de eletrodos de marca-passo e CDI, minimizando riscos em procedimentos de revisão.",
    items: ["Liberator Beacon", "Evolution RL", "Bulldog Lead Extender", "One Tie Compression Coil", "Needle Eye Snare"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Oclusores Cardíacos",
    description:
      "Dispositivos para oclusão do apêndice atrial esquerdo e defeitos cardíacos estruturais, reduzindo o risco de AVC em pacientes com fibrilação atrial.",
    items: ["LAmbre LAA Closure System", "Cera Occluders / CeraFlex", "GONAI-MF", "Laço de Captura Sequre", "Balão de Medição Acumark", "Introdutor SteerEase"],
  },
];

function ProductCard({
  icon,
  title,
  description,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="product-card group relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-default overflow-hidden">
      {/* Icon + product count badge */}
      <div className="flex items-start justify-between">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl text-white shrink-0"
          style={{
            background: "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
          }}
        >
          {icon}
        </div>
        <span className="card-badge text-[11px] font-medium text-emerald-300/80 group-hover:text-emerald-600 px-2.5 py-1 rounded-full tabular-nums transition-colors duration-300">
          {items.length} {items.length === 1 ? "produto" : "produtos"}
        </span>
      </div>

      {/* Text */}
      <div>
        <h3 className="text-white group-hover:text-gray-900 font-semibold text-[0.95rem] mb-2 leading-snug transition-colors duration-300">{title}</h3>
        <p className="text-white/55 group-hover:text-gray-500 text-[0.82rem] leading-relaxed transition-colors duration-300">{description}</p>
      </div>

      {/* Divider */}
      <div className="card-divider h-px w-full transition-colors duration-300" />

      {/* Items as pills */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {items.map((item) => (
          <span
            key={item}
            className="card-pill text-[11px] text-white/60 group-hover:text-gray-600 px-2.5 py-1 rounded-full transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProdutosPage() {
  return (
    <>
      <Navbar />

      <main
        className="overflow-hidden pt-[72px]"
        style={{ background: "linear-gradient(160deg, #0d2e1a 0%, #1a5934 55%, #216d42 100%)" }}
      >
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative py-10 overflow-hidden">
          {/* Background decorative dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-8 right-16 w-64 h-64 opacity-[0.18]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1.5px, transparent 1.5px)",
                backgroundSize: "34px 34px",
              }}
            />
            <div
              className="absolute bottom-4 left-12 w-44 h-44 opacity-[0.13]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1.5px, transparent 1.5px)",
                backgroundSize: "34px 34px",
              }}
            />
            <div
              className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[420px] rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(46,165,94,0.15) 0%, transparent 70%)" }}
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">
         

            <h1 className="text-4xl font-bold text-white leading-tight mb-5 tracking-tight">
              Nossos{" "}Produtos
            </h1>

            <p className="text-white/65 text-[1.05rem] leading-relaxed">
              Portfólio completo de{" "}
              <strong className="text-white/90 font-semibold">tecnologia médico-hospitalar</strong>{" "}
              para cardiologia, com equipamentos das{" "}
              <strong className="text-white/90 font-semibold">melhores marcas do mundo</strong>{" "}
              e suporte técnico especializado.
            </p>

            
          </div>
        </section>

        {/* ── GRID ─────────────────────────────────────────── */}
        <section className="pb-20 pt-4">
          <div className="max-w-6xl mx-auto px-8">
            {/* Section header */}
            <div className="flex items-center justify-center gap-5 mb-10">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(255,255,255,0.18)" }} />
              <h2 className="text-sm font-semibold text-white/55 tracking-[0.18em] uppercase">
                Categorias de Produtos
              </h2>
              <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(255,255,255,0.18)" }} />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <ProductCard key={cat.title} {...cat} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="px-8 pb-20">
          <div
            className="max-w-2xl mx-auto text-center rounded-3xl py-12 px-8"
            style={{
              background: "rgba(255, 255, 255, 0.83)",
              border: "1px solid rgba(255,255,255,0.11)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            }}
          >
            <h2 className="text-xl font-bold text-black mb-2">Precisa de mais informações?</h2>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Nossa equipe está pronta para apresentar os produtos certos para a sua necessidade.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
                boxShadow: "0 4px 22px rgba(46,165,94,0.38)",
              }}
            >
              Entre em contato ↗
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
