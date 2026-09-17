// app/copiloto-ia/CopilotChatDemo.tsx
export function CopilotChatDemo() {
  return (
    <div className="relative">
      {/* Glow violeta detrás */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl bg-grad-ai opacity-20 blur-3xl"
      />

      {/* Card del chat */}
      <div className="relative overflow-hidden rounded-lg border border-ai/40 bg-surface shadow-glow-ai">
        {/* Barra superior */}
        <div className="flex items-center justify-between border-b border-line bg-bg/40 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-grad-ai text-base">
              ✨
              <span
                aria-hidden
                className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface bg-success"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Copiloto Zora</p>
              <p className="text-xs text-success">En línea</p>
            </div>
          </div>
          <span className="text-xs text-muted">zora.ai/chat</span>
        </div>

        {/* Mensajes */}
        <div className="space-y-4 p-5">
          {/* Mensaje usuario 1 */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-bg px-4 py-2.5 text-sm text-fg">
              ¿Cuánto pagué de IVA este trimestre?
            </div>
          </div>

          {/* Respuesta Copiloto 1 */}
          <div className="flex items-start gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-grad-ai text-xs">
              ✨
            </div>
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-ai/30 bg-[#2A2340]/60 px-4 py-2.5 text-sm text-[#E7E1FF]">
              Este trimestre has pagado <strong>1.240 €</strong> de IVA.
              El 78% corresponde a tus ventas online. La próxima declaración
              vence el <strong>20 de julio</strong>.
            </div>
          </div>

          {/* Mensaje usuario 2 */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-bg px-4 py-2.5 text-sm text-fg">
              ¿Me lo puedo deducir?
            </div>
          </div>

          {/* Respuesta Copiloto 2 */}
          <div className="flex items-start gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-grad-ai text-xs">
              ✨
            </div>
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-ai/30 bg-[#2A2340]/60 px-4 py-2.5 text-sm text-[#E7E1FF]">
              Sí. Tienes <strong>3 gastos deducibles</strong> este mes:
              material de oficina, cuota de autónomos y conexión a internet.
              Total deducible: <strong>412 €</strong>. ¿Quieres que los
              marque?
            </div>
          </div>

          {/* Typing indicator */}
          <div className="flex items-start gap-2.5 opacity-60">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-grad-ai text-xs">
              ✨
            </div>
            <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-ai/30 bg-[#2A2340]/40 px-4 py-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ai" />
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-ai"
                style={{ animationDelay: '150ms' }}
              />
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-ai"
                style={{ animationDelay: '300ms' }}
              />
            </div>
          </div>
        </div>

        {/* Input mockup */}
        <div className="border-t border-line bg-bg/40 p-3">
          <div className="flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-2">
            <span className="flex-1 text-sm text-muted">
              Escribe tu pregunta…
            </span>
            <button
              type="button"
              aria-label="Enviar"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-grad-ai text-xs text-[#101716]"
            >
              ↑
            </button>
          </div>
        </div>
      </div>

      {/* Badge flotante */}
      <div className="absolute -bottom-4 -left-4 hidden rotate-[-4deg] rounded-md border border-ai/40 bg-surface px-3 py-2 shadow-md md:block">
        <p className="text-xs font-semibold text-ai">✨ Respuesta en 2s</p>
      </div>
    </div>
  )
}