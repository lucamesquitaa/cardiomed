import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import { OG_IMAGE, SITE_URL } from "../lib/constants";

const description =
  "Conheça o portfólio Cardiomed: marca-passos, cardiodesfibriladores implantáveis, sistemas de ressincronização cardíaca, mapeamento eletroanatômico, cateteres de eletrofisiologia, oclusores cardíacos e stents das melhores marcas do mundo.";

export const metadata: Metadata = {
  title: "Produtos",
  description,
  alternates: {
    canonical: "/produtos",
  },
  openGraph: {
    title: "Produtos | Cardiomed",
    description,
    url: "/produtos",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Produtos | Cardiomed",
    description,
    images: [OG_IMAGE.url],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Produtos", item: `${SITE_URL}/produtos` },
  ],
};

type Product = {
  name: string;
  description: string;
  image?: string;
};

const categories: {
  icon: React.ReactNode;
  title: string;
  intro: string;
  items: Product[];
}[] = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Dispositivos implantáveis de estimulação",
    intro:
      "Marca-passos, cardiodesfibriladores e sistemas de ressincronização das melhores marcas do mundo.",
    items: [
      {
        name: "Linha Bradicardia",
        description:
          "Marca-passos e eletrodos voltados ao tratamento de ritmos cardíacos lentos, restaurando a frequência adequada.",
        image: "/images/img-products1.png",
      },
      {
        name: "Linha Taquicardia",
        description:
          "Cardiodesfibriladores implantáveis (CDIs) e eletrodos para detectar e tratar ritmos acelerados e arritmias potencialmente fatais.",
        image: "/images/img-products3.png",
      },
      {
        name: "Ressincronização Cardíaca",
        description:
          "Dispositivos (TRC) que coordenam a contração das câmaras cardíacas em pacientes com insuficiência cardíaca, muitas vezes combinando funções de estimulação e desfibrilação.",
        image: "/images/img-products8.jpg",
      },
    ],
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Diagnóstico e monitoramento",
    intro:
      "Sistemas de mapeamento eletroanatômico e soluções de acompanhamento para localizar e monitorar arritmias com precisão.",
    items: [
      {
        name: "Monitoramento Cardíaco",
        description:
          "Monitores implantáveis e soluções de acompanhamento remoto para vigilância contínua do ritmo cardíaco.",
        image: "/images/img-products2.jpg",
      },
      {
        name: "Mapeamento Cardíaco",
        description:
          "Sistemas e cateteres de mapeamento eletroanatômico que localizam com precisão a origem das arritmias antes da intervenção.",
        image: "/images/img-prodcuts5.png",
      },
      {
        name: "HIPEC",
        description:
          "Sistema de Quimioterapia Intraperitoneal Hipertérmica (HIPEC), utilizado no tratamento de tumores peritoneais.",
        image: "/images/hipec.jpg",
      },
    ],
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Procedimentos e intervenção",
    intro:
      "Cateteres, stents e ferramentas específicas para os principais procedimentos de intervenção cardíaca.",
    items: [
      {
        name: "Linha Eletrofisiológica",
        description:
          "Cateteres de diagnóstico e ablação usados nos estudos e tratamentos das arritmias.",
        image: "/images/img-products4.png",
      },
      // {
      //   name: "Angioplastia",
      //   description: "Stents para tratamento de obstruções arteriais coronarianas.",
      //   image: "/images/img-products6.png",
      // },
      {
        name: "Extração de Eletrodos",
        description:
          "Ferramentas específicas para remoção segura de eletrodos previamente implantados.",
        image: "/images/img-products9.jpg",
      },
      {
        name: "Oclusores Cardíacos e Stents",
        description:
          "Dispositivos de oclusão para fechamento de estruturas cardíacas (como o apêndice atrial esquerdo) e sistemas auxiliares de medição e liberação.",
        image: "/images/img-products7.png",
      },
    ],
  },
];

function ProductItem({ name, description, image }: Product) {
  if (image) {
    return (
      <div className="product-item group/item relative rounded-2xl bg-white/95 overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative h-36 sm:h-40 w-full bg-white flex items-center justify-center p-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 90vw, 260px"
          />
        </div>
        <div className="px-5 py-4 border-t border-black/[0.06]">
          <p className="text-gray-900 font-semibold text-[0.88rem] mb-1">{name}</p>
          <p className="text-gray-500 text-[0.78rem] leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-item-plain relative rounded-2xl p-5 flex flex-col justify-center transition-all duration-300 ease-out hover:-translate-y-1">
      <p className="text-white font-semibold text-[0.88rem] mb-1.5">{name}</p>
      <p className="text-white/55 text-[0.78rem] leading-relaxed">{description}</p>
    </div>
  );
}

function CategorySection({
  icon,
  title,
  intro,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  intro: string;
  items: Product[];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-10">
      {/* Category header */}
      <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-5">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl text-white shrink-0"
          style={{
            background: "linear-gradient(135deg, #5bc987 0%, #336B41 100%)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
          }}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg leading-snug mb-2">{title}</h3>
          <p className="text-white/55 text-[0.82rem] leading-relaxed">{intro}</p>
        </div>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((item) => (
          <ProductItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function ProdutosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      <main
        className="overflow-hidden pt-[72px]"
        style={{ background: "linear-gradient(160deg, #17472b 0%, #336B41 55%, #216d42 100%)" }}
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
              para cardiologia e oncologia, com equipamentos das{" "}
              <strong className="text-white/90 font-semibold">melhores marcas do mundo</strong>{" "}
              e suporte técnico especializado.
            </p>
          </div>
        </section>

        {/* ── CATEGORIES ───────────────────────────────────── */}
        <section className="pb-20 pt-4">
          <div className="max-w-6xl mx-auto px-8">
            {/* Section header */}
            <div className="flex items-center justify-center gap-5 mb-14">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(255,255,255,0.18)" }} />
              <h2 className="text-sm font-semibold text-white/55 tracking-[0.18em] uppercase">
                Nossas linhas de Produtos
              </h2>
              <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(255,255,255,0.18)" }} />
            </div>

            <div className="flex flex-col gap-14">
              {categories.map((cat, index) => (
                <div key={cat.title}>
                  <ScrollReveal delay={index * 120}>
                    <CategorySection {...cat} />
                  </ScrollReveal>
                  {index < categories.length - 1 && (
                    <div
                      className="h-px w-full mt-14"
                      style={{ background: "rgba(255,255,255,0.09)" }}
                    />
                  )}
                </div>
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
              href="/#contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #2ea55e 0%, #336B41 100%)",
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
