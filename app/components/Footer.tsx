import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Produtos", href: "/produtos" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#cdcdcd" }} className="text-black/80">
      {/* Accent bar */}
      <div style={{ background: "#336B41" }} className="h-1" />

      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">

        {/* ── Marca ── */}
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-center gap-3 items-center">
          <Link href="/" className="inline-block w-fit">
            <Image
              src="/images/logo2.png"
              alt="Cardiomed"
              width={130}
              height={120}
            />
          </Link>

          <p className="text-sm text-black/65 max-w-[250px]">
            Há mais de 25 anos, a CardioMed distribui produtos médicos de alta qualidade.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2 mt-1">
            <a
              href="https://instagram.com/cardiomed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-black/10 text-black/55 hover:bg-[#336B41] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.069 1.646.069 4.849s-.011 3.583-.069 4.849c-.063 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.069-4.85.069s-3.583-.011-4.849-.069c-1.366-.063-2.633-.335-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.583 2.163 15.203 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.417 2.175 8.797 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/company/cardiomed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-black/10 text-black/55 hover:bg-[#336B41] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="https://wa.me/553132417101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-black/10 text-black/55 hover:bg-[#336B41] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Links ── */}
        <div className="hidden lg:block">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-black/70 mb-3">
            Links
          </h3>
          <ul className="space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-black/65 hover:text-[#336B41] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contato ── */}
        <div className="hidden lg:block">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-black/70 mb-3">
            Contato
          </h3>
          <ul className="space-y-2 text-sm text-black/65">
            <li>
              <a href="tel:+553132417101" className="hover:text-[#336B41] transition-colors">
                (31) 3241-7101
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@cardiomed.com.br"
                className="hover:text-[#336B41] transition-colors break-all"
              >
                contato@cardiomed.com.br
              </a>
            </li>
            <li>Av. do Contorno, 2646 (sala 1305)<br />Belo Horizonte, MG</li>
          </ul>
        </div>

        {/* ── Mapa ── */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-black/70 mb-3">
            Como chegar
          </h3>

          <div className="rounded-xl overflow-hidden border border-black/15 shadow-md">
            <iframe
              title="Localização Cardiomed"
              src="https://maps.google.com/maps?q=Av.+do+Contorno+2646+Santa+Efig%C3%AAnia+Belo+Horizonte+MG+30110-017&output=embed&hl=pt-BR"
              width="100%"
              height="140"
              style={{ border: 0, display: "block" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-4 text-center">
          <p className="text-black/40 text-xs">
            © {new Date().getFullYear()} Cardiomed. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
