import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Inicia con IA",
  description: "Conoce cómo recopilamos, usamos y protegemos tu información personal en Inicia con IA.",
};

export default function PoliticaDePrivacidad() {
  return (
    <main className="bg-[#09090B] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4">
            Política de Privacidad
          </h1>
          <p className="text-[#71717A] text-sm">
            Última actualización: Enero 2026
          </p>
        </header>

        {/* Intro */}
        <p className="text-[#A1A1AA] leading-relaxed mb-12">
          En Inicia con IA, operado por Hernán Villarreal y Mauricio De La Peña, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">1</span>
              Información que Recopilamos
            </h2>
            <div className="pl-11 space-y-4">
              <div>
                <h3 className="text-[#FAFAFA] font-medium mb-2">Información que nos proporcionas directamente:</h3>
                <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                  <li>Datos de registro: nombre, correo electrónico al crear una cuenta</li>
                  <li>Información de pago: procesada de forma segura a través de terceros (no almacenamos datos de tarjetas)</li>
                  <li>Comunicaciones: mensajes que nos envías por correo o WhatsApp</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#FAFAFA] font-medium mb-2">Información recopilada automáticamente:</h3>
                <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                  <li>Datos de uso: páginas visitadas, tiempo en el sitio, guías descargadas</li>
                  <li>Información técnica: tipo de navegador, dispositivo, dirección IP</li>
                  <li>Cookies: para mejorar tu experiencia y recordar tus preferencias</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">2</span>
              Cómo Usamos tu Información
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA] mb-2">Utilizamos tu información para:</p>
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Proporcionarte acceso a nuestros cursos, guías y comunidad</li>
                <li>Enviarte actualizaciones sobre nuevo contenido y herramientas de IA</li>
                <li>Mejorar nuestros servicios y contenido educativo</li>
                <li>Responder a tus preguntas y brindarte soporte</li>
                <li>Procesar pagos de forma segura</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">3</span>
              Compartir Información
            </h2>
            <div className="pl-11">
              <p className="text-[#FAFAFA] font-medium mb-3">No vendemos tu información personal.</p>
              <p className="text-[#A1A1AA] mb-2">Solo compartimos datos con:</p>
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Plataformas de servicio: Skool (comunidad), Vercel (hosting), proveedores de pago</li>
                <li>Cuando sea requerido por ley: en caso de obligaciones legales</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">4</span>
              Seguridad
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA] mb-2">Implementamos medidas de seguridad para proteger tu información:</p>
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Conexiones cifradas (HTTPS)</li>
                <li>Acceso restringido a datos personales</li>
                <li>Proveedores de pago con certificación de seguridad</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">5</span>
              Tus Derechos
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA] mb-2">Tienes derecho a:</p>
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Acceder a tu información personal</li>
                <li>Corregir datos inexactos</li>
                <li>Eliminar tu cuenta y datos asociados</li>
                <li>Cancelar la suscripción a comunicaciones en cualquier momento</li>
              </ul>
              <p className="text-[#A1A1AA] mt-4">
                Para ejercer estos derechos, contáctanos en: <a href="mailto:hola@iniciaconia.com" className="text-[#3B82F6] hover:underline">hola@iniciaconia.com</a>
              </p>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">6</span>
              Cookies
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA] mb-2">Usamos cookies para:</p>
              <ul className="text-[#A1A1AA] space-y-1 list-disc list-inside">
                <li>Recordar tus preferencias</li>
                <li>Analizar el tráfico del sitio</li>
                <li>Mejorar tu experiencia de navegación</li>
              </ul>
              <p className="text-[#A1A1AA] mt-4">
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades.
              </p>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 7 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">7</span>
              Enlaces a Terceros
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA]">
                Nuestro sitio puede contener enlaces a otras páginas (herramientas de IA, recursos externos). No somos responsables de las prácticas de privacidad de estos sitios.
              </p>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 8 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">8</span>
              Cambios a esta Política
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA]">
                Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios significativos por correo electrónico o mediante un aviso en nuestro sitio.
              </p>
            </div>
          </section>

          <div className="h-px bg-[#27272A]" />

          {/* Section 9 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-sm font-bold">9</span>
              Contacto
            </h2>
            <div className="pl-11">
              <p className="text-[#A1A1AA] mb-2">Si tienes preguntas sobre esta política de privacidad:</p>
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
