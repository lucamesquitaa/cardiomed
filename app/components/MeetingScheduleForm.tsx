"use client";

import { useState } from "react";

const CONTACT_EMAIL = "contato@cardiomed.com.br";
const SLOT_TIMES = ["10:00", "15:00"];

function getNextBusinessDays(count: number): Date[] {
  const days: Date[] = [];
  const cursor = new Date();
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const dayOfWeek = cursor.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      days.push(new Date(cursor));
    }
  }
  return days;
}

function formatDayLabel(date: Date): string {
  const label = date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function generateAvailableSlots() {
  return getNextBusinessDays(3).flatMap((date) =>
    SLOT_TIMES.map((time) => ({
      id: `${date.toISOString()}_${time}`,
      dateLabel: formatDayLabel(date),
      time,
    }))
  );
}

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
    timePreference: "",
  });
  const [step, setStep] = useState<"details" | "schedule" | "slots">("details");
  const [sent, setSent] = useState(false);
  const [slots] = useState(generateAvailableSlots);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleBack() {
    setStep((prev) => (prev === "slots" ? "schedule" : "details"));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (step === "details") {
      setStep("schedule");
      return;
    }

    if (step === "schedule") {
      setStep("slots");
      return;
    }

    const chosenSlot = slots.find((slot) => slot.id === selectedSlot);
    const scheduleText = chosenSlot
      ? `${chosenSlot.dateLabel} às ${chosenSlot.time}`
      : form.timePreference;
    const body = `Nome: ${form.name}\nEmail: ${form.email}\nEmpresa: ${form.company}\n\nHorário selecionado: ${scheduleText}\n\n${form.message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Agendamento de reunião: ${form.company}`)}&body=${encodeURIComponent(body)}`;
    window.open(mailto);
    setSent(true);
    setForm({ name: "", email: "", company: "", message: "", timePreference: "" });
    setSelectedSlot(null);
    setStep("details");
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
            <h2 className="text-lg font-semibold text-gray-900">Agende uma reunião</h2>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white"
              style={{
                background: "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
                boxShadow: "0 2px 8px rgba(26,89,52,0.35)",
              }}
            >
              Novidade
            </span>
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white"
              style={{
                background: "linear-gradient(135deg, #2e7ea5 0%, #1a3959 100%)",
                boxShadow: "0 2px 8px rgba(26,57,89,0.35)",
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
              IA
            </span>
          </div>

          {step === "details" ? (
            <>
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
                  Motivo da reunião (descreva brevemente o assunto que deseja tratar)
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
                className="mt-1 flex cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"
                  />
                </svg>
                Agendar reunião
              </button>
            </>
          ) : step === "schedule" ? (
            <>
              <div className="flex flex-col gap-4">
                <label htmlFor="timePreference" className="text-sm font-medium text-gray-700">
                  Qual sua preferência de horário?
                </label>
                <input
                  id="timePreference"
                  name="timePreference"
                  type="text"
                  value={form.timePreference}
                  onChange={handleChange}
                  autoFocus
                  placeholder='Exemplo: "Às terças e quintas à tarde"'
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-green-cardiomed focus:bg-white focus:ring-2 focus:ring-green-cardiomed/20"
                />
                <p className="text-xs text-gray-400">
                  Caso não tenha preferência, deixe em branco.
                </p>
              </div>

              <div className="mt-1 flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex cursor-pointer items-center justify-center rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-600 transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
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
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"
                    />
                  </svg>
                  Buscar disponibilidade
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-gray-700">
                  Escolha um horário disponível
                </p>
                <p className="-mt-2 text-xs text-gray-400">
                  Selecione uma das opções abaixo. Confirmaremos por e-mail.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {slots.map((slot) => {
                    const isSelected = selectedSlot === slot.id;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedSlot(slot.id)}
                        className={`flex cursor-pointer flex-col items-start gap-0.5 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ${
                          isSelected
                            ? "border-green-cardiomed bg-green-cardiomed/10 ring-2 ring-green-cardiomed/30"
                            : "border-gray-200 bg-gray-50 hover:border-green-cardiomed/40"
                        }`}
                      >
                        <span className="font-semibold text-gray-900">{slot.dateLabel}</span>
                        <span className="text-gray-500">{slot.time}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-1 flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex cursor-pointer items-center justify-center rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-600 transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  disabled={!selectedSlot}
                  className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  style={{
                    background: "linear-gradient(135deg, #2ea55e 0%, #1a5934 100%)",
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Confirmar agendamento
                </button>
              </div>
            </>
          )}
        </form>
      
    </div>
  );
}
