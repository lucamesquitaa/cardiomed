"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

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

export default function MeetingScheduleForm({
  className = "",
}: {
  className?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <div
      className={`rounded-3xl p-8 ${className}`}
      style={{
        background: "rgba(255,255,255,0.9)",
        border: "1px solid rgba(26,89,52,0.10)",
        boxShadow: "0 8px 40px rgba(26,89,52,0.08), 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex items-center gap-2.5">
          <h2 className="text-lg font-semibold text-gray-900">Entre em Contato</h2>
          <span
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white"
            style={{
              background: "linear-gradient(135deg, #2ea55e 0%, #336B41 100%)",
              boxShadow: "0 2px 8px rgba(26,89,52,0.35)",
            }}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0c1.2 6.6 4.2 9.6 10.8 10.8-6.6 1.2-9.6 4.2-10.8 10.8-1.2-6.6-4.2-9.6-10.8-10.8C7.8 9.6 10.8 6.6 12 0z" />
            </svg>
            Novidade
          </span>
        </div>

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
          label="Empresa"
          name="company"
          value={form.company}
          onChange={handleChange}
          required
        />

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-green-cardiomed focus:bg-white focus:ring-2 focus:ring-green-cardiomed/20"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-1 flex cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          style={{
            background: "linear-gradient(135deg, #2ea55e 0%, #336B41 100%)",
            boxShadow: "0 6px 20px rgba(26,89,52,0.30)",
          }}
        >
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
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </button>

        {status === "sent" && (
          <p className="text-sm font-medium text-green-cardiomed">
            Mensagem enviada com sucesso! Entraremos em contato em breve.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-600">
            Não foi possível enviar sua mensagem. Tente novamente em instantes.
          </p>
        )}
      </form>
    </div>
  );
}
