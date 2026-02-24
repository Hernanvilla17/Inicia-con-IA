import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso | Inicia con IA",
  description: "Términos y condiciones de uso de la plataforma educativa Inicia con IA.",
};

export default function TerminosDeUso() {
  return (
    <main className="bg-[#09090B] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4">
            Términos de Uso
          </h1>
          <p className="text-[#71717A] text-sm">
            Última actualización: Enero 2026
          </p>
        </header>

        {/* Intro */}
        <p className="text-[#A1A1AA] leading-relaxed mb-12">
          Bienvenido a Inicia con IA. Al acceder y utilizar nuestro sitio web (iniciaconia.com), comunidad en Skool y materiales educativos, aceptas estos términos de uso.
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">1</span>
              Descripción del Servicio
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA] mb-2">Inicia con IA es una plataforma educativa que ofrece:</p>
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Cursos y capacitaciones sobre herramientas de Inteligencia Artificial</li>
                <li>Guías descargables gratuitas</li>
                <li>Acceso a comunidad en Skool</li>
                <li>Contenido actualizado sobre nuevas herramientas de IA</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">2</span>
              Uso Aceptable
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA] mb-2">Al usar nuestros servicios, te comprometes a:</p>
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Proporcionar información veraz al registrarte</li>
                <li>No compartir tu acceso a cursos pagados con terceros</li>
                <li>No redistribuir, revender o copiar nuestro contenido sin autorización</li>
                <li>Respetar a otros miembros de la comunidad</li>
                <li>No usar el contenido para fines ilegales</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">3</span>
              Cuentas de Usuario
            </h2>
            <div className="pl-11">
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Eres responsable de mantener la confidencialidad de tu cuenta</li>
                <li>Debes notificarnos inmediatamente si detectas uso no autorizado</li>
                <li>Nos reservamos el derecho de suspender cuentas que violen estos términos</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">4</span>
              Contenido y Propiedad Intelectual
            </h2>
            <div className="pl-11 space-y-4">
              <div>
                <h3 className="text-[#FAFAFA] font-medium mb-2">Nuestro contenido:</h3>
                <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                  <li>Todos los cursos, guías, videos y materiales son propiedad de Inicia con IA</li>
                  <li>Tienes licencia para uso personal y no comercial</li>
                  <li>No puedes reproducir, distribuir o crear obras derivadas sin autorización</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#FAFAFA] font-medium mb-2">Tu contenido:</h3>
                <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                  <li>Conservas los derechos de cualquier contenido que compartas en la comunidad</li>
                  <li>Nos otorgas permiso para mostrar tu contenido dentro de la plataforma</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">5</span>
              Pagos y Reembolsos
            </h2>
            <div className="pl-11 space-y-4">
              <div>
                <h3 className="text-[#FAFAFA] font-medium mb-2">Contenido gratuito:</h3>
                <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                  <li>Las guías y recursos gratuitos están disponibles sin costo</li>
                  <li>Requieren registro en nuestra comunidad de Skool</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#FAFAFA] font-medium mb-2">Contenido de pago:</h3>
                <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                  <li>Los precios se muestran en USD (dólares americanos)</li>
                  <li>El pago se procesa de forma segura a través de terceros</li>
                  <li>Política de reembolso: Si no estás satisfecho con un curso de pago, contáctanos dentro de los primeros 7 días para solicitar un reembolso</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">6</span>
              Disponibilidad del Servicio
            </h2>
            <div className="pl-11">
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Nos esforzamos por mantener el servicio disponible 24/7</li>
                <li>No garantizamos disponibilidad ininterrumpida</li>
                <li>Podemos modificar o discontinuar funcionalidades con previo aviso</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 7 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">7</span>
              Limitación de Responsabilidad
            </h2>
            <div className="pl-11">
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>El contenido es educativo e informativo</li>
                <li>No garantizamos resultados específicos al aplicar lo aprendido</li>
                <li>Las herramientas de IA mencionadas son productos de terceros; no somos responsables de sus cambios o disponibilidad</li>
                <li>No somos responsables de decisiones tomadas basándose en nuestro contenido</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 8 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">8</span>
              Modificaciones
            </h2>
            <div className="pl-11">
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Podemos actualizar estos términos ocasionalmente</li>
                <li>Los cambios entran en vigor al publicarse en el sitio</li>
                <li>El uso continuado después de cambios implica aceptación</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 9 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">9</span>
              Terminación
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA] mb-2">Podemos suspender o terminar tu acceso si:</p>
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Violas estos términos de uso</li>
                <li>Realizas actividades fraudulentas</li>
                <li>Compartes contenido de pago sin autorización</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 10 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">10</span>
              Ley Aplicable
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA]">
                Estos términos se rigen por las leyes de México. Cualquier disputa se resolverá en los tribunales de la Ciudad de México.
              </p>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 11 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">11</span>
              Contacto
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA] mb-2">Para preguntas sobre estos términos:</p>
              <p className="text-[#A1A1AA]">
                Email: <a href="mailto:hola@iniciaconia.com" className="text-[#3B82F6] hover:underline">hola@iniciaconia.com</a>
              </p>
              <p className="text-[#A1A1AA]">
                Sitio web: <a href="https://iniciaconia.com" className="text-[#3B82F6] hover:underline">iniciaconia.com</a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#27272A]">
          <p className="text-[#52525B] text-sm text-center">
            © 2026 Inicia con IA. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
