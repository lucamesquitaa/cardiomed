"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

const WHATSAPP_NUMBER = "553132417101";
const CONTACT_EMAIL = "contato@cardiomed.com.br";

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-green-cardiomed focus:bg-white focus:ring-2 focus:ring-green-cardiomed/20"
      />
    </div>
  );
}

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
        background: "rgba(26,89,52,0.06)",
        border: "1px solid rgba(26,89,52,0.12)",
      }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
        style={{
          background: "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
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

export default function ContatoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de entrar em contato com a Cardiomed.")}`;

  return (
    <>
      <Navbar />

      <main className="overflow-hidden pt-[72px]">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-white py-16">
          {/* Decorative elements */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            style={{ zIndex: 2 }}
          >
            <div
              className="absolute right-10 top-16 h-52 w-52 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #216d42 1.8px, transparent 1.8px)",
                backgroundSize: "42px 42px",
              }}
            />
            <div
              className="absolute bottom-12 left-8 h-44 w-44 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #1a5934 1.8px, transparent 1.8px)",
                backgroundSize: "42px 42px",
              }}
            />
            <div
              className="absolute -left-24 -top-24 h-80 w-80 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(33,109,66,0.10) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-16 right-1/4 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(33,109,66,0.08) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <div className="mb-14 text-center">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">
                Entre em{" "}
                <em
                  className="not-italic"
                  style={{
                    color: "#37c273",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontStyle: "italic",
                  }}
                >
                  Contato
                </em>
              </h1>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-600">
                Estamos prontos para atender você. Preencha o formulário ou fale
                diretamente conosco pelo WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* ── Info column ── */}
              <div className="flex flex-col gap-5">
                <h2 className="text-lg font-semibold text-gray-900">
                  Informações de contato
                </h2>

                <InfoCard
                  title="Endereço"
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                >
                  Av. do Contorno, 2646 — Santa Efigênia
                  <br />
                  Belo Horizonte – MG · CEP 30110-017
                </InfoCard>

                <InfoCard
                  title="Telefone"
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                >
                  <a
                    href="tel:+553132417101"
                    className="hover:text-green-cardiomed transition-colors"
                  >
                    (31) 3241-7101
                  </a>
                </InfoCard>

                <InfoCard
                  title="E-mail"
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  }
                >
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hover:text-green-cardiomed transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </InfoCard>

                <InfoCard
                  title="Horário de atendimento"
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2"
                      />
                    </svg>
                  }
                >
                  Segunda a Sexta: 8h às 18h
                  <br />
                  Sábado: 8h às 12h
                </InfoCard>

                {/* WhatsApp shortcut inside info column */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #25d366 0%, #128c50 100%)",
                    boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
                  }}
                >
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar pelo WhatsApp
                </a>
              </div>

              {/* ── Form column ── */}
              <div
                className="rounded-3xl p-8"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(26,89,52,0.10)",
                  boxShadow:
                    "0 8px 40px rgba(26,89,52,0.08), 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                {sent ? (
                  <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
                      }}
                    >
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Mensagem enviada!
                    </h3>
                    <p className="max-w-xs text-sm text-gray-500">
                      Seu cliente de e-mail foi aberto com a mensagem pronta.
                      Entraremos em contato em breve.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-2 rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                      style={{
                        background:
                          "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
                      }}
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Envie uma mensagem
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <InputField
                        label="Nome completo"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <InputField
                        label="Seu e-mail"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <InputField
                      label="Assunto"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-green-cardiomed focus:bg-white focus:ring-2 focus:ring-green-cardiomed/20"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-1 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background:
                          "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
                        boxShadow: "0 6px 20px rgba(26,89,52,0.30)",
                      }}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Enviar mensagem
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Wave: white → dark green */}
        <div
          style={{
            marginTop: 40,
            background:
              "linear-gradient(160deg, #1e6b3e 0%, #1a5934 45%, #133f26 100%)",
          }}
        >
          <svg
            viewBox="0 0 1440 80"
            className="block w-full"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,80 960,10 1440,55 L1440,0 Z" fill="white" />
          </svg>
        </div>

        {/* ── WHATSAPP CTA ──────────────────────────────────────── */}
        <section
          className="pb-24 pt-8"
          style={{
            background:
              "linear-gradient(160deg, #1e6b3e 0%, #1a5934 45%, #133f26 100%)",
          }}
        >
          <div className="mx-auto max-w-3xl px-8 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>

            <h2 className="mb-4 text-3xl font-bold text-white">
              Prefere falar agora?
            </h2>
            <p className="mb-8 text-white/70 text-lg leading-relaxed">
              Nossa equipe está disponível pelo WhatsApp para responder suas
              dúvidas com agilidade.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-bold transition-all duration-200 hover:scale-[1.04] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #25d366 0%, #128c50 100%)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.30)",
                color: "#fff",
              }}
            >
              <svg
                className="h-6 w-6 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>

            <p className="mt-5 text-sm text-white/40">
              (31) 3241-7101 · Seg–Sex 8h–18h · Sáb 8h–12h
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
