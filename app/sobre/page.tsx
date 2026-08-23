import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import { OG_IMAGE, SITE_URL } from "../lib/constants";

const description =
  "Há mais de 25 anos a Cardiomed é referência em tecnologia médico-hospitalar para cardiologia, unindo inovação, suporte especializado e parcerias com os maiores fabricantes do mundo.";

export const metadata: Metadata = {
  title: "Sobre",
  description,
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Sobre | Cardiomed",
    description,
    url: "/sobre",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Sobre | Cardiomed",
    description,
    images: [OG_IMAGE.url],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Sobre", item: `${SITE_URL}/sobre` },
  ],
};

type Person = {
  photo: string;
  name?: string;
  role?: string;
};

const diretores: Person[] = [
  { photo: "/images/fotos-diretores/Foto-11_3x4.jpg", name: "Eliane Capistrano", role: "Diretora Executiva" },
  { photo: "/images/fotos-diretores/Foto-14_3x4.jpg", name: "Pedro Capistrano", role: "Diretor Comercial" },
  { photo: "/images/fotos-diretores/Foto-17_3x4.jpg", name: "Victor Capistrano", role: "Diretor Técnico" },
];

const funcionarios: Person[] = [
  { photo: "/images/fotos-funcionarios/Foto-34_3x4.jpg", name: "Jéssica Assis", role: "Supervisora Financeiro" },
  { photo: "/images/fotos-funcionarios/Foto-36_3x4.jpg", name: "Luiza Quadros", role: "Supervisora de Logística" },

  { photo: "/images/fotos-funcionarios/Foto-62_3x4.jpg", name: "Thiago Chagas", role: "Gerente Geral" },

  { photo: "/images/fotos-funcionarios/Foto-75_3x4.jpg", name: "Thiago Fonseca", role: "Vendedor Assessor Técnico em Dispositivos de Estimulação Cardíaca" },

  { photo: "/images/fotos-funcionarios/Foto-71_3x4.jpg", name: "Lincoln Santiago", role: "Supervisor Assessor Técnico em Dispositivos de Estimulação Cardíaca" },

  { photo: "/images/fotos-funcionarios/Foto-4_3x4.jpg", name: "Ubirajara Borges", role: "Especialista de Produtos" },

  { photo: "/images/fotos-funcionarios/Foto-38_3x4.jpg", name: "Marcelo Gomes", role: "Assessor Técnico em Dispositivos de Estimulação Cardíaca" },
  { photo: "/images/fotos-funcionarios/Foto-50_3x4.jpg", name: "Marlon Regis", role: "Assessor Técnico em Dispositivos de Estimulação Cardíaca" },
  { photo: "/images/fotos-funcionarios/Foto-88_3x4.jpg", name: "Adalton Elerito", role: "Assessor Técnico em Dispositivos de Estimulação Cardíaca" },
  { photo: "/images/fotos-funcionarios/Foto-82_3x4.jpg", name: "Lucas Campolino", role: "Assessor Técnico em Dispositivos de Estimulação Cardíaca" },

  { photo: "/images/fotos-funcionarios/Foto-51_3x4.jpg", name: "Jussara Bastos", role: "Administrativo" },

  { photo: "/images/fotos-funcionarios/Foto-55_3x4.jpg", name: "Glaycon Carvalho", role: "Logística" },
  { photo: "/images/fotos-funcionarios/Foto-53_3x4.jpg", name: "Hélio Reis", role: "Logística" }
  
];

function PersonCard({ photo, name, role }: Person) {
  const displayName = name ?? "Nome completo";
  const displayRole = role ?? "Cargo";
  return (
    <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm flex flex-col">
      <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
        <Image
          src={photo}
          alt={displayName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 45vw, 200px"
        />
      </div>
      <div className="px-4 py-3 text-center">
        <p className="text-gray-900 font-semibold text-sm mb-0.5">{displayName}</p>
        <p className="text-emerald-700 text-xs font-medium">{displayRole}</p>
      </div>
    </div>
  );
}

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
          background: "linear-gradient(135deg, #2ea55e 0%, #336B41 100%)",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
                backgroundImage: "radial-gradient(circle, #336B41 1.8px, transparent 1.8px)",
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
             Somos referência em tecnologia médico-hospitalar para cardiologia e oncologia. Desde a nossa fundação,
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
                src="/videos/vidd5765.mp4"
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

        {/* ── DIRETORIA E EQUIPE ─────────────────────────────── */}
        <section className="bg-white pb-24">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Diretoria</h2>
            </div>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center mb-16">
              <div className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] sm:order-2">
                <PersonCard {...diretores[0]} />
              </div>
              <div className="flex gap-6 sm:contents">
                {diretores.slice(1).map((person, i) => (
                  <div
                    key={person.photo}
                    className={`w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] ${i === 0 ? "sm:order-1" : "sm:order-3"}`}
                  >
                    <PersonCard {...person} />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Equipe</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {funcionarios.map((person) => (
                <div key={person.photo} className="w-[calc(50%-12px)] sm:w-[calc(20%-19.2px)]">
                  <PersonCard {...person} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSÃO, VISÃO E VALORES ───────────────────────── */}
        <section
          className="pb-24"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 47px, rgba(33,109,66,0.14) 47px, rgba(33,109,66,0.14) 48px)",
          }}
        >
          <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Nossa cultura</h2>
            </div>
          <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <MvvCard
                icon={
                  <svg className="h-7 w-7" fill="none" stroke="white" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Missão"
                text="Oferecer tecnologia médico-hospitalar de excelência para cardiologia e oncologia, contribuindo para o cuidado e a qualidade de vida dos pacientes."
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
                text="Ser reconhecida como a principal referência em soluções para cardiologia e oncologia, expandindo parcerias e inovação em todo o território nacional."
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
          background: "linear-gradient(135deg, #2ea55e 0%, #336B41 100%)",
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
