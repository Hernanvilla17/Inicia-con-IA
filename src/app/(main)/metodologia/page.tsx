"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Ejemplos por sector
const SECTOR_EXAMPLES = {
  marketing: {
    name: "Marketing",
    icon: "📈",
    steps: [
      {
        label: "OBJETIVO",
        text: "Crea un email de seguimiento que reactive la conversación con un cliente y lo lleve a agendar una reunión.",
        type: "core",
      },
      {
        label: "CONTEXTO",
        text: "Soy director comercial de una agencia de marketing. El cliente es CMO de retail, acaba de abrir 3 sucursales. Tuvimos una llamada hace 3 semanas, no ha respondido 2 emails.",
        type: "core",
      },
      {
        label: "FORMATO",
        text: "Email profesional, máximo 150 palabras. Incluye línea de asunto. Tono profesional pero cercano. Español neutro LATAM.",
        type: "core",
      },
      {
        label: "RESTRICCIONES",
        text: 'No uses "dar seguimiento" ni "tocar base". No empieces con "Espero que estés bien". No inventes datos sobre su empresa.',
        type: "core",
      },
      {
        label: "EJEMPLO",
        text: 'Tono que me gusta: "Noté que abrieron la sucursal de Polanco — felicidades. Crecer así viene con retos operativos. Justo ahí es donde podemos ayudar."',
        type: "boost",
      },
      {
        label: "AJUSTE",
        text: "Hazlo más directo. Cambia el cierre: en vez de preguntar si le interesa, ofrece directamente 2 horarios para reunión esta semana.",
        type: "boost",
      },
    ],
    response: `**Asunto:** 3 sucursales nuevas = 3 retos nuevos

Hola [Nombre],

Vi que abrieron las nuevas sucursales — felicidades por la expansión.

Gestionar el marketing de múltiples ubicaciones siempre trae desafíos: mantener consistencia de marca, coordinar campañas locales, medir resultados por sucursal. Son exactamente los problemas que resolvemos para retailers en crecimiento.

Tengo dos espacios esta semana para platicarlo:
• **Miércoles 4pm**
• **Viernes 11am**

¿Cuál te funciona mejor?

Saludos,
[Tu nombre]
Director Comercial`,
  },
  legal: {
    name: "Legal",
    icon: "⚖️",
    steps: [
      {
        label: "OBJETIVO",
        text: "Redacta una cláusula de confidencialidad para un contrato de servicios profesionales entre una startup y un desarrollador freelance.",
        type: "core",
      },
      {
        label: "CONTEXTO",
        text: "Soy abogado corporativo en una startup de fintech. El desarrollador tendrá acceso a código fuente y datos de usuarios. El contrato es por 6 meses renovables.",
        type: "core",
      },
      {
        label: "FORMATO",
        text: "Cláusula contractual formal. Máximo 300 palabras. Incluir: definición de información confidencial, obligaciones, excepciones y duración. Lenguaje legal pero comprensible.",
        type: "core",
      },
      {
        label: "RESTRICCIONES",
        text: "No uses términos ambiguos. No incluyas penalidades específicas (eso va en otra cláusula). Cumplir con legislación mexicana. Si algo requiere revisión legal adicional, indícalo.",
        type: "core",
      },
      {
        label: "EJEMPLO",
        text: 'Estilo que busco: "Se entiende por Información Confidencial toda aquella información técnica, comercial o de cualquier otra índole que sea revelada por LA EMPRESA al PRESTADOR..."',
        type: "boost",
      },
      {
        label: "AJUSTE",
        text: "Agrega una subsección sobre manejo de datos personales conforme a la Ley Federal de Protección de Datos. Simplifica el lenguaje de las excepciones.",
        type: "boost",
      },
    ],
    response: `**CLÁUSULA DÉCIMA SEGUNDA. CONFIDENCIALIDAD**

**12.1 Definición.** Se entiende por "Información Confidencial" toda información técnica, comercial, financiera, operativa o de cualquier otra índole que LA EMPRESA revele al PRESTADOR, incluyendo pero no limitado a: código fuente, algoritmos, bases de datos, información de usuarios, estrategias comerciales y documentación técnica.

**12.2 Obligaciones.** El PRESTADOR se obliga a:
a) Mantener estricta confidencialidad sobre la Información Confidencial
b) Utilizarla únicamente para los fines del presente contrato
c) No divulgarla a terceros sin autorización escrita previa
d) Implementar medidas de seguridad razonables para su protección

**12.3 Excepciones.** No se considera confidencial la información que:
a) Sea de dominio público sin culpa del PRESTADOR
b) El PRESTADOR poseía legítimamente antes de recibirla
c) Deba revelarse por mandato legal o judicial

**12.4 Datos Personales.** El PRESTADOR se compromete a tratar los datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, actuando como encargado del tratamiento bajo instrucciones de LA EMPRESA.

**12.5 Vigencia.** Esta obligación permanecerá vigente durante 3 años posteriores a la terminación del contrato.

*Nota: Se recomienda revisión legal para adaptar a circunstancias específicas.*`,
  },
  finanzas: {
    name: "Finanzas",
    icon: "💰",
    steps: [
      {
        label: "OBJETIVO",
        text: "Analiza el flujo de caja de los últimos 3 meses e identifica las 5 principales oportunidades de ahorro operativo.",
        type: "core",
      },
      {
        label: "CONTEXTO",
        text: "Soy CFO de una empresa de e-commerce con 50 empleados. Facturamos $2M USD anuales. Los márgenes han bajado 8% este trimestre. Adjunto el estado de flujo de caja en CSV.",
        type: "core",
      },
      {
        label: "FORMATO",
        text: "Tabla con columnas: Área | Gasto actual | Ahorro potencial | % impacto | Dificultad de implementar. Después, un párrafo de resumen ejecutivo de 100 palabras.",
        type: "core",
      },
      {
        label: "RESTRICCIONES",
        text: "Solo analiza gastos operativos, no inversiones de capital. No sugieras recortes de personal. Basa todo en los datos proporcionados, no inventes cifras.",
        type: "core",
      },
      {
        label: "EJEMPLO",
        text: 'Formato de recomendación que espero: "Software SaaS | $15,000/mes | $4,500 (30%) | Alto | Media — Consolidar 3 herramientas de gestión en una sola plataforma."',
        type: "boost",
      },
      {
        label: "AJUSTE",
        text: "Ordena las oportunidades por ROI (ahorro vs dificultad). Agrega una columna de 'Tiempo de implementación'. Incluye riesgos de cada recomendación.",
        type: "boost",
      },
    ],
    response: `## Análisis de Oportunidades de Ahorro Operativo

| Área | Gasto Actual | Ahorro Potencial | % Impacto | Dificultad | Tiempo | Riesgo |
|------|-------------|------------------|-----------|------------|--------|--------|
| Software SaaS | $15,000/mes | $4,500 (30%) | Alto | Media | 6-8 sem | Curva de aprendizaje en nueva herramienta |
| Logística/Envíos | $22,000/mes | $3,300 (15%) | Alto | Baja | 2-3 sem | Posible impacto en tiempos de entrega |
| Marketing Digital | $18,000/mes | $2,700 (15%) | Medio | Media | 4 sem | Reducción temporal en alcance |
| Servicios Cloud | $8,500/mes | $2,125 (25%) | Medio | Alta | 8-10 sem | Requiere migración técnica |
| Telecomunicaciones | $3,200/mes | $960 (30%) | Bajo | Baja | 1-2 sem | Mínimo |

**Resumen Ejecutivo**

El análisis identifica $13,585 USD mensuales en ahorros potenciales ($163,020 anuales), representando un 8.2% del gasto operativo. Las oportunidades están ordenadas por ROI. Se recomienda iniciar con telecomunicaciones y logística por su rápida implementación y bajo riesgo. La consolidación de SaaS ofrece el mayor impacto pero requiere planificación. Estas medidas recuperarían el margen perdido en aproximadamente 2 trimestres.`,
  },
  contenido: {
    name: "Contenido",
    icon: "✍️",
    steps: [
      {
        label: "OBJETIVO",
        text: "Escribe un hilo de Twitter/X de 7 tweets sobre cómo usar IA para ser más productivo en el trabajo, con enfoque en profesionales no técnicos.",
        type: "core",
      },
      {
        label: "CONTEXTO",
        text: "Soy creador de contenido sobre productividad. Mi audiencia son profesionales de 25-45 años en LATAM. Publico contenido educativo con tono accesible. Mi cuenta tiene 15K seguidores.",
        type: "core",
      },
      {
        label: "FORMATO",
        text: "7 tweets en formato de hilo. Tweet 1: gancho potente. Tweets 2-6: tips concretos con ejemplos. Tweet 7: CTA y resumen. Máximo 280 caracteres cada uno. Usar emojis con moderación.",
        type: "core",
      },
      {
        label: "RESTRICCIONES",
        text: "No uses jerga técnica. No menciones herramientas de pago. No exageres con promesas ('10x tu productividad'). Cada tweet debe funcionar también de forma independiente.",
        type: "core",
      },
      {
        label: "EJEMPLO",
        text: 'Tono que me gusta: "La IA no reemplaza tu trabajo. Reemplaza las partes aburridas de tu trabajo. Aquí van 5 formas de usarla sin ser ingeniero 🧵"',
        type: "boost",
      },
      {
        label: "AJUSTE",
        text: "Hazlo más conversacional. Agrega un tweet con un caso real (inventado pero realista). Cambia el CTA final por una pregunta que invite a comentar.",
        type: "boost",
      },
    ],
    response: `🧵 La IA no va a quitarte el trabajo.

Pero sí puede quitarte las 2 horas diarias que pierdes en tareas repetitivas.

Aquí van 5 formas de usarla (sin saber programar):

**1/ Emails que tomarían 20 min → 2 min**

Copia el email que recibiste, pégalo y pide: "Responde de forma profesional, confirmando la reunión y preguntando por la agenda."

Funciona el 90% de las veces.

**2/ Resumir documentos largos**

¿Un PDF de 40 páginas? Súbelo y pide los 5 puntos clave.

Lo que tardabas 1 hora, ahora son 3 minutos.

**3/ Preparar reuniones**

"Dame 5 preguntas inteligentes para hacer en una reunión con un cliente de [industria] que quiere [objetivo]."

Llegas preparado, no improvisando.

**4/ Caso real:**

Mi amiga en recursos humanos usaba 3 horas escribiendo descripciones de puestos.

Ahora le da contexto a la IA y las tiene en 10 minutos. Las edita 5 min más.

Ahorra 2.5 horas por vacante.

**5/ Revisar tu propio trabajo**

"Revisa este texto y dime: ¿es claro? ¿qué le falta? ¿cómo lo mejorarías?"

Es como tener un editor personal 24/7.

---

La clave no es que la IA sea perfecta.

Es que te da un borrador en segundos que puedes mejorar.

¿Cuál de estos vas a probar primero? 👇`,
  },
  musica: {
    name: "Música",
    icon: "🎵",
    steps: [
      {
        label: "OBJETIVO",
        text: "Escribe la letra de un verso y coro para una canción pop en español sobre superar una ruptura amorosa, con tono esperanzador.",
        type: "core",
      },
      {
        label: "CONTEXTO",
        text: "Soy compositor para artistas emergentes de pop latino. La canción es para una cantante de 24 años con estilo similar a Danna Paola. Será el segundo sencillo de su EP sobre crecimiento personal.",
        type: "core",
      },
      {
        label: "FORMATO",
        text: "1 verso de 8 líneas + 1 coro de 4 líneas. Incluir esquema de rima (ABAB o AABB). Métrica consistente para que fluya con melodía pop. Indicar dónde irían los énfasis rítmicos.",
        type: "core",
      },
      {
        label: "RESTRICCIONES",
        text: "Sin clichés como 'corazón roto' o 'lágrimas en la almohada'. No uses lenguaje vulgar. Evita referencias a alcohol o sustancias. El mensaje debe ser empoderador, no victimista.",
        type: "core",
      },
      {
        label: "EJEMPLO",
        text: 'Referencia de estilo: "Ya no me duele tu nombre / Ya no me pesa el ayer / Aprendí a bailar sola / Y el ritmo me sienta bien" — directo, visual, positivo.',
        type: "boost",
      },
      {
        label: "AJUSTE",
        text: "El coro necesita ser más pegajoso — hazlo más corto y repetitivo. Agrega una línea con aliteración. Cambia 'olvidar' por algo más activo como 'soltar' o 'dejar ir'.",
        type: "boost",
      },
    ],
    response: `**VERSO 1** *(Esquema: ABAB CDCD)*

Guardé tus fotos en una caja que no **abro** *(A)*
Ya no me tiemblan las manos al pa**sar** *(B)*
Me costó tiempo pero al fin me **salvo** *(A)*
De esa costumbre de siempre espe**rar** *(B)*

Hoy me encontré sonriendo sin ra**zón** *(C)*  [ÉNFASIS en "zón"]
El espejo me devuelve otra **mirada** *(D)*
Solté las sombras, solté la ilu**sión** *(C)*  [Aliteración: solté/sombras/solté]
Y descubrí que no me falta **nada** *(D)*  [ÉNFASIS en "na-da"]

---

**CORO** *(Corto, repetitivo, pegajoso)*

Ya solté, ya solté *(repetición)*
Lo que fuimos se quedó atrás
Ya solté, ya solté
Y ahora **vuelo** donde quiera **ir** *(ÉNFASIS final)*

---

*Notas de producción:*
- El coro funciona con melodía ascendente en "vuelo"
- "Solté" repetido crea gancho memorable
- Métrica de 8 sílabas por línea para flow pop estándar`,
  },
  deportes: {
    name: "Deportes",
    icon: "⚽",
    steps: [
      {
        label: "OBJETIVO",
        text: "Crea un plan de entrenamiento de 4 semanas para mejorar la resistencia cardiovascular de un equipo amateur de fútbol previo a un torneo.",
        type: "core",
      },
      {
        label: "CONTEXTO",
        text: "Soy entrenador de un equipo de fútbol amateur (liga local). Jugadores de 25-40 años, entrenan 2 veces por semana. El torneo es en 5 semanas. Nivel de condición física: intermedio-bajo.",
        type: "core",
      },
      {
        label: "FORMATO",
        text: "Tabla semanal: Día | Tipo de ejercicio | Duración | Intensidad | Objetivo. Incluir calentamiento y enfriamiento. Al final, indicadores de progreso medibles.",
        type: "core",
      },
      {
        label: "RESTRICCIONES",
        text: "Sin ejercicios que requieran equipo especial (solo cancha y conos). Evitar sobrecarga — son amateurs con trabajos de oficina. No incluir pesas ni gimnasio. Considerar riesgo de lesiones.",
        type: "core",
      },
      {
        label: "EJEMPLO",
        text: 'Formato que espero: "Martes | Intervalos 30/30 | 25 min | Media-Alta | Mejorar VO2max — Correr 30 seg al 80%, caminar 30 seg. Repetir 15 veces."',
        type: "boost",
      },
      {
        label: "AJUSTE",
        text: "La semana 3 tiene mucha carga. Reduce intensidad del jueves. Agrega variantes con balón para que sea más específico al fútbol. Incluye un test de Cooper inicial y final.",
        type: "boost",
      },
    ],
    response: `## Plan de Resistencia Cardiovascular - 4 Semanas

**📋 Test Inicial:** Cooper (12 min) - Registrar distancia recorrida

---

### SEMANA 1 - Adaptación
| Día | Ejercicio | Duración | Intensidad | Objetivo |
|-----|-----------|----------|------------|----------|
| Martes | Trote continuo + pases en movimiento | 25 min | Baja (60-65%) | Base aeróbica |
| Jueves | Circuito con balón: conducción-pase-trote | 30 min | Baja-Media | Técnica + resistencia |

*Calentamiento: 8 min movilidad articular + trote suave*
*Enfriamiento: 5 min caminata + estiramientos*

---

### SEMANA 2 - Construcción
| Día | Ejercicio | Duración | Intensidad | Objetivo |
|-----|-----------|----------|------------|----------|
| Martes | Intervalos 30/30 con balón (conducir/caminar) | 25 min | Media (70%) | Mejorar VO2max |
| Jueves | Partidos reducidos 4v4 (3 min juego / 2 min pausa) | 35 min | Media | Resistencia específica |

---

### SEMANA 3 - Intensificación
| Día | Ejercicio | Duración | Intensidad | Objetivo |
|-----|-----------|----------|------------|----------|
| Martes | Fartlek con balón (cambios de ritmo libres) | 30 min | Media-Alta (75%) | Adaptación a cambios |
| Jueves | Posesión 5v5 + trote recuperación | 30 min | Media (70%) | *Reducido vs plan original* |

---

### SEMANA 4 - Tapering
| Día | Ejercicio | Duración | Intensidad | Objetivo |
|-----|-----------|----------|------------|----------|
| Martes | Partidos reducidos (intensidad controlada) | 25 min | Media | Mantener sin fatigar |
| Jueves | Activación ligera + táctico | 20 min | Baja | Preparar para torneo |

---

**📋 Test Final:** Cooper (12 min) - Comparar con inicial

**Indicadores de Progreso:**
- ✅ Distancia Cooper: esperar +5-10% mejora
- ✅ Recuperación FC: bajar a <120 bpm en 2 min post-esfuerzo
- ✅ Percepción subjetiva: poder mantener conversación en trote`,
  },
  educacion: {
    name: "Educación",
    icon: "📚",
    steps: [
      {
        label: "OBJETIVO",
        text: "Diseña una actividad interactiva de 45 minutos para enseñar fracciones a estudiantes de 4to grado que tienen dificultades con el tema.",
        type: "core",
      },
      {
        label: "CONTEXTO",
        text: "Soy maestra de primaria en escuela pública. Clase de 28 alumnos (9-10 años). Ya vimos el concepto básico pero 60% no logra resolver problemas. Tengo acceso a pizarrón, hojas y materiales básicos.",
        type: "core",
      },
      {
        label: "FORMATO",
        text: "Plan de clase estructurado: Apertura (5 min) | Desarrollo con actividad principal (30 min) | Cierre y evaluación (10 min). Incluir materiales necesarios y preguntas guía.",
        type: "core",
      },
      {
        label: "RESTRICCIONES",
        text: "Sin tecnología (no hay tablets ni proyector). Actividad debe funcionar para diferentes niveles de aprendizaje. No usar ejemplos con dinero (algunos niños no manejan billetes). Lenguaje apropiado para la edad.",
        type: "core",
      },
      {
        label: "EJEMPLO",
        text: 'Tipo de actividad que funciona: "Repartir pizzas de papel divididas en partes iguales. Cada equipo debe servir porciones según pedidos: \'La mesa 1 quiere 2/4 de pizza\'."',
        type: "boost",
      },
      {
        label: "AJUSTE",
        text: "Agrega una variante competitiva para los que terminen rápido. Simplifica las instrucciones del cierre. Incluye 3 preguntas de evaluación rápida para identificar quién sigue sin entender.",
        type: "boost",
      },
    ],
    response: `## 🍕 La Pizzería de Fracciones

**Materiales:** 28 círculos de cartulina (pizzas), tijeras, hojas con "pedidos"

---

### APERTURA (5 min)
*Pregunta gancho:* "¿Alguna vez han tenido que repartir una pizza entre amigos y que todos reciban lo mismo?"

Mostrar una "pizza" de papel. Preguntar: "Si somos 4 amigos, ¿cómo la divido para que sea justo?" → Introducir que eso es una fracción.

---

### DESARROLLO (30 min)

**Actividad: "Somos meseros"**

1. Formar 7 equipos de 4 niños
2. Cada equipo recibe 4 pizzas de papel y tijeras
3. Entregar "pedidos" de mesas ficticias:
   - Mesa 1: "Queremos 2/4 de pizza"
   - Mesa 2: "Queremos 1/2 de pizza"
   - Mesa 3: "Queremos 3/4 de pizza"

*Preguntas guía mientras trabajan:*
- "¿En cuántas partes iguales dividieron la pizza?"
- "¿Cuántas partes están dando?"
- "¿2/4 y 1/2 son lo mismo? ¿Cómo lo saben?"

**⭐ Variante competitiva:** Los equipos que terminen correctamente primero pueden crear sus propios "pedidos difíciles" para retar a otro equipo.

---

### CIERRE (10 min)

Cada equipo muestra un pedido que sirvieron. Validamos juntos.

**3 preguntas de evaluación rápida** (levantar dedos 1-4):
1. "Si una pizza tiene 4 partes iguales y tomo 1, ¿qué fracción tengo?"
2. "¿Cuántos cuartos necesito para tener media pizza?"
3. "¿3/4 es más o menos que 1/2?"

*Identificar quiénes no levantan la mano o responden incorrecto → atención individual próxima clase.*`,
  },
  tecnologia: {
    name: "Tecnología",
    icon: "💻",
    steps: [
      {
        label: "OBJETIVO",
        text: "Escribe la documentación técnica para una API REST de autenticación que usa JWT, dirigida a desarrolladores que integrarán el servicio.",
        type: "core",
      },
      {
        label: "CONTEXTO",
        text: "Soy tech lead en una startup SaaS. Lanzamos API pública para terceros. Los integradores son desarrolladores mid-level. La API ya está construida, solo falta documentación.",
        type: "core",
      },
      {
        label: "FORMATO",
        text: "Estructura: Introducción | Autenticación | Endpoints (con ejemplos de request/response en JSON) | Códigos de error | Rate limits. Usar formato Markdown. Incluir ejemplos en cURL y JavaScript.",
        type: "core",
      },
      {
        label: "RESTRICCIONES",
        text: "No expongas secretos reales en ejemplos. No asumas conocimiento previo de nuestra plataforma. Cada endpoint debe tener ejemplo funcional. Indica claramente qué es obligatorio vs opcional.",
        type: "core",
      },
      {
        label: "EJEMPLO",
        text: 'Estilo de documentación que busco (como Stripe): "POST /auth/login — Autentica un usuario y devuelve un token JWT válido por 24 horas. Requiere: email (string), password (string)."',
        type: "boost",
      },
      {
        label: "AJUSTE",
        text: "Agrega una sección de 'Errores comunes y soluciones'. Los ejemplos de JavaScript deberían usar fetch, no axios. Incluye un diagrama de flujo del proceso de autenticación.",
        type: "boost",
      },
    ],
    response: `# API de Autenticación

## Introducción

Esta API permite autenticar usuarios y gestionar sesiones mediante tokens JWT. Los tokens son válidos por 24 horas.

**Base URL:** \`https://api.tuapp.com/v1\`

---

## Flujo de Autenticación

\`\`\`
┌─────────┐     POST /auth/login      ┌─────────┐
│ Cliente │ ───────────────────────▶  │   API   │
│         │  {email, password}        │         │
│         │ ◀───────────────────────  │         │
└─────────┘     {token, user}         └─────────┘
     │
     │   Requests con Header:
     │   Authorization: Bearer <token>
     ▼
┌─────────────────────────────────────────────┐
│         Acceso a endpoints protegidos       │
└─────────────────────────────────────────────┘
\`\`\`

---

## Endpoints

### POST /auth/login

Autentica un usuario y devuelve un token JWT válido por 24 horas.

**Request:**

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| email | string | ✅ | Email del usuario |
| password | string | ✅ | Contraseña |

**cURL:**
\`\`\`bash
curl -X POST https://api.tuapp.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "usuario@ejemplo.com", "password": "tu_password"}'
\`\`\`

**JavaScript (fetch):**
\`\`\`javascript
const response = await fetch('https://api.tuapp.com/v1/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'usuario@ejemplo.com',
    password: 'tu_password'
  })
});
const data = await response.json();
// data.token contiene el JWT
\`\`\`

**Response exitoso (200):**
\`\`\`json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "usr_123",
    "email": "usuario@ejemplo.com",
    "name": "Juan Pérez"
  },
  "expires_at": "2024-01-16T10:30:00Z"
}
\`\`\`

---

## Códigos de Error

| Código | Mensaje | Solución |
|--------|---------|----------|
| 401 | invalid_credentials | Verificar email y contraseña |
| 422 | validation_error | Revisar campos requeridos |
| 429 | rate_limit_exceeded | Esperar 60 segundos |

---

## Errores Comunes y Soluciones

| Error | Causa | Solución |
|-------|-------|----------|
| "Token expired" | JWT venció | Hacer login nuevamente |
| "Invalid token" | Token malformado | Verificar que no haya espacios extra |
| "Missing Authorization header" | No se envió el header | Agregar \`Authorization: Bearer <token>\` |

---

## Rate Limits

- **Login:** 5 requests/minuto por IP
- **Endpoints autenticados:** 100 requests/minuto por usuario`,
  },
};

const SECTOR_KEYS = Object.keys(SECTOR_EXAMPLES) as Array<keyof typeof SECTOR_EXAMPLES>;

const STEP_NAMES = [
  "Identifica",
  "Nutre",
  "Indica",
  "Controla",
  "Ilustra",
  "Ajusta",
];

const STEP_DETAILS = [
  {
    letter: "I",
    name: "Identifica tu objetivo",
    subtitle: "¿Qué quieres lograr exactamente?",
    tag: "Esencial · Objetivo",
    type: "core",
    body: "Antes de escribir una sola palabra, define con claridad qué resultado necesitas. La mayoría de los prompts fallan porque el usuario no tiene claro lo que quiere — y si tú no lo sabes, la IA mucho menos.",
    tip: 'Empieza con verbos de acción: "Escribe", "Analiza", "Crea", "Compara", "Resume". Un objetivo claro = un resultado útil.',
    quickTips: [
      "Define el resultado final que esperas (un email, tabla, plan)",
      'Pregúntate: "¿Cómo sabré que el resultado es bueno?"',
    ],
    badExample: '"Dime sobre marketing digital"',
    goodExample:
      '"Crea un plan de marketing de 30 días para una cafetería que quiere crecer en Instagram"',
  },
  {
    letter: "N",
    name: "Nutre con contexto",
    subtitle: "Dale a la IA la información que necesita",
    tag: "Esencial · Contexto",
    type: "core",
    body: "La IA no puede leer tu mente. Cuanto más contexto relevante le des — quién eres, para quién es, cuál es la situación — mejor podrá adaptar su respuesta.",
    tip: 'Explica el "por qué" detrás de tu pedido. Cuando la IA entiende tu motivación, toma mejores decisiones.',
    quickTips: [
      "Quién eres: tu rol, empresa, experiencia",
      "Para quién es: la audiencia que recibirá el resultado",
      "Situación: el problema que resuelves",
    ],
    badExample: '"Escribe un email para un cliente"',
    goodExample:
      '"Soy gerente de ventas en una agencia. El cliente no respondió en 2 semanas. Queremos mantener buena relación."',
  },
  {
    letter: "I",
    name: "Indica el formato",
    subtitle: "Dile cómo quieres recibir el resultado",
    tag: "Esencial · Formato",
    type: "core",
    body: "Sin indicaciones de formato, la IA decide por ti. ¿Tabla? ¿Email? ¿Lista? El formato transforma una respuesta genérica en algo que puedes copiar y usar directamente.",
    tip: 'Piensa en el formato como un "molde". El mismo contenido cambia completamente si lo pides como tabla, párrafo o lista.',
    quickTips: [
      "Tipo: tabla, lista, email, párrafo, guión",
      'Extensión: "máximo 200 palabras", "3 párrafos"',
      "Tono: profesional, casual, persuasivo, técnico",
    ],
    badExample: '"Dame ideas para redes sociales"',
    goodExample:
      '"10 ideas en tabla: Idea | Tipo post | Caption (2 líneas) | Hashtags. Tono casual."',
  },
  {
    letter: "C",
    name: "Controla con restricciones",
    subtitle: "Ponle límites para que no se desvíe",
    tag: "Esencial · Restricciones",
    type: "core",
    body: "Las restricciones le dicen qué NO hacer. Sin ellas, la IA divaga, inventa datos, o toma decisiones que no quieres. Decirle lo que no quieres es igual de poderoso que decirle lo que sí.",
    tip: "Las restricciones eliminan el 80% de las respuestas malas. Son el filtro que limpia tu resultado.",
    quickTips: [
      '"no uses jerga", "no inventes datos"',
      '"solo datos financieros", "no opiniones"',
      '"si no sabes, dime"',
    ],
    badExample: '"Resume este artículo"',
    goodExample:
      '"Solo datos financieros. No opiniones. Datos sin fuente = \'no verificado\'. Español neutro LATAM."',
  },
  {
    letter: "I",
    name: "Ilustra con ejemplos",
    subtitle: "Muéstrale cómo se ve un buen resultado",
    tag: "Potenciador · Ejemplos",
    type: "boost",
    body: "Un ejemplo vale más que mil instrucciones. Cuando la IA ve exactamente cómo se ve un buen resultado, entiende matices que son imposibles de explicar con palabras.",
    tip: "Empieza con 1 ejemplo. Si no basta, agrega 2-3. Los ejemplos enseñan estilo, estructura y detalle automáticamente.",
    quickTips: [],
    badExample: '"Escribe descripciones de productos"',
    goodExample:
      '"Estilo: Taza térmica → \'Tu café, caliente 8h. Acero, compacta, anti-derrames.\'\n\nAhora escribe 5 más así."',
  },
  {
    letter: "A",
    name: "Ajusta e itera",
    subtitle: "Refina hasta que sea perfecto",
    tag: "Potenciador · Iteración",
    type: "boost",
    body: "Ningún prompt es perfecto a la primera. La magia está en el ajuste: revisar, identificar qué falta, y pedir correcciones. Trátalo como conversación — la IA recuerda todo en la misma sesión.",
    tip: 'Sé específico en correcciones. "Hazlo mejor" no sirve. "Tono profesional, agrega dato, reduce a mitad" sí.',
    quickTips: [],
    badExample: '"No me gustó. Hazlo mejor."',
    goodExample:
      '"Más profesional. Dato estadístico en intro. Cierre con llamado a acción. Mitad de extensión."',
  },
];

const REFERENCE_CARDS = [
  {
    letter: "I",
    word: "Identifica",
    question: "¿Qué resultado necesito?",
    tag: "Objetivo",
    type: "core",
  },
  {
    letter: "N",
    word: "Nutre",
    question: "¿Qué info necesita la IA?",
    tag: "Contexto",
    type: "core",
  },
  {
    letter: "I",
    word: "Indica",
    question: "¿Cómo quiero recibirlo?",
    tag: "Formato",
    type: "core",
  },
  {
    letter: "C",
    word: "Controla",
    question: "¿Qué límites debe respetar?",
    tag: "Restricciones",
    type: "core",
  },
  {
    letter: "I",
    word: "Ilustra",
    question: "¿Tengo un ejemplo?",
    tag: "Potenciador",
    type: "boost",
  },
  {
    letter: "A",
    word: "Ajusta",
    question: "¿Qué cambiaría?",
    tag: "Potenciador",
    type: "boost",
  },
];

// Component to render response beautifully
function ResponseRenderer({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLanguage = '';

  const processTable = (rows: string[]) => {
    if (rows.length < 2) return null;
    const headerRow = rows[0].split('|').filter(cell => cell.trim());
    const dataRows = rows.slice(2).map(row => row.split('|').filter(cell => cell.trim()));

    return (
      <div className="meto-table-wrapper">
        <table className="meto-table">
          <thead>
            <tr>
              {headerRow.map((cell, i) => (
                <th key={i}>{cell.trim()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell.trim()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.replace('```', '').trim();
        codeLines = [];
      } else {
        elements.push(
          <div key={`code-${i}`} className="meto-code-block">
            {codeLanguage && <div className="meto-code-lang">{codeLanguage}</div>}
            <pre><code>{codeLines.join('\n')}</code></pre>
          </div>
        );
        inCodeBlock = false;
        codeLanguage = '';
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    // Tables
    if (line.startsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(line);
      continue;
    } else if (inTable) {
      elements.push(<div key={`table-${i}`}>{processTable(tableRows)}</div>);
      inTable = false;
      tableRows = [];
    }

    // Headers
    if (line.startsWith('# ')) {
      elements.push(<h1 key={i} className="meto-resp-h1">{line.replace('# ', '')}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="meto-resp-h2">{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="meto-resp-h3">{line.replace('### ', '')}</h3>);
    }
    // Bold text on its own line
    else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={i} className="meto-resp-bold">{line.replace(/\*\*/g, '')}</p>);
    }
    // Lists
    else if (line.match(/^[\-•]\s/)) {
      elements.push(
        <div key={i} className="meto-resp-list-item">
          <span className="meto-resp-bullet">→</span>
          <span>{line.replace(/^[\-•]\s/, '')}</span>
        </div>
      );
    }
    // Numbered lists
    else if (line.match(/^\d+[\.\)]\s/)) {
      const num = line.match(/^(\d+)/)?.[1];
      elements.push(
        <div key={i} className="meto-resp-list-item meto-resp-numbered">
          <span className="meto-resp-num">{num}</span>
          <span>{line.replace(/^\d+[\.\)]\s/, '')}</span>
        </div>
      );
    }
    // Italic text
    else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      elements.push(<p key={i} className="meto-resp-italic">{line.replace(/\*/g, '')}</p>);
    }
    // Horizontal rule
    else if (line === '---') {
      elements.push(<hr key={i} className="meto-resp-hr" />);
    }
    // Empty line
    else if (line.trim() === '') {
      elements.push(<div key={i} className="meto-resp-spacer" />);
    }
    // Regular paragraph with inline formatting
    else {
      // Process inline bold and code
      const processed = line
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code class="meto-inline-code">$1</code>');
      elements.push(<p key={i} className="meto-resp-p" dangerouslySetInnerHTML={{ __html: processed }} />);
    }
  }

  // Handle remaining table
  if (inTable && tableRows.length > 0) {
    elements.push(<div key="table-end">{processTable(tableRows)}</div>);
  }

  return <div className="meto-response-content">{elements}</div>;
}

export default function MetodologiaPage() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [selectedSector, setSelectedSector] = useState<keyof typeof SECTOR_EXAMPLES>("marketing");
  const [activeNavStep, setActiveNavStep] = useState<number | null>(null);
  const [showResponse, setShowResponse] = useState<'prompt' | 'response' | false>(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Get current sector's steps and response
  const STEPS = SECTOR_EXAMPLES[selectedSector].steps;
  const RESPONSE = SECTOR_EXAMPLES[selectedSector].response;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            const idx = parseInt(
              entry.target.id.replace("step-", ""),
              10
            );
            setActiveNavStep(idx);
          }
        });
      },
      { threshold: 0.4 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNextStep = () => {
    if (currentStep >= STEPS.length - 1) {
      setCurrentStep(-1);
      setShowResponse(false);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSectorChange = (sector: keyof typeof SECTOR_EXAMPLES) => {
    setSelectedSector(sector);
    setCurrentStep(-1);
    setShowResponse(false);
  };

  const handleShowResponse = () => {
    setShowResponse('response');
  };

  const handleShowPrompt = () => {
    setShowResponse('prompt');
  };

  const handleReset = () => {
    setCurrentStep(-1);
    setShowResponse(false);
  };

  const scrollToStep = (idx: number) => {
    const el = document.getElementById(`step-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="metodologia-page bg-[#09090B] text-white min-h-screen">
      {/* Hero Section */}
      <section className="meto-hero min-h-screen flex items-center justify-center text-center px-4 sm:px-8 pt-32 pb-16 relative overflow-hidden">
        {/* Background Effects - Same as other pages */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#60A5FA]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-[800px] mx-auto">
          <div className="meto-badge">
            <div className="meto-badge-dot"></div>
            Prompt Engineering
          </div>

          <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 animate-fade-in">
            Metodología
            <br />
            <span className="text-[#3B82F6]">INICIA</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-[540px] mx-auto mb-8 leading-relaxed">
            6 pasos para escribir prompts que obtienen resultados profesionales
            con cualquier IA — incluso si nunca lo habías hecho.
          </p>

          {/* INICIA Letters */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-4">
            {["I", "N", "I", "C", "I", "A"].map((letter, idx) => (
              <button
                key={idx}
                onClick={() => scrollToStep(idx)}
                className={`meto-letter ${
                  idx % 2 === 0 ? "meto-letter-blue" : "meto-letter-white"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Words */}
          <div className="flex justify-center gap-3 sm:gap-6 flex-wrap text-sm text-[#64748B] font-medium mb-8">
            <span>
              <span className="text-[#60A5FA] font-bold">I</span>dentifica
            </span>
            <span>
              <span className="text-[#60A5FA] font-bold">N</span>utre
            </span>
            <span>
              <span className="text-[#60A5FA] font-bold">I</span>ndica
            </span>
            <span>
              <span className="text-[#60A5FA] font-bold">C</span>ontrola
            </span>
            <span>
              <span className="text-[#60A5FA] font-bold">I</span>lustra
            </span>
            <span>
              <span className="text-[#60A5FA] font-bold">A</span>justa
            </span>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 text-[#64748B] text-sm">
            <span>Descubre cómo funciona</span>
            <div className="meto-scroll-line"></div>
          </div>
        </div>
      </section>

      {/* Builder Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-[#09090B] relative" id="builder">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="meto-eyebrow">Pruébalo tú mismo</div>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 tracking-tight">
              Mira cómo se construye un prompt{" "}
              <span className="text-[#3B82F6]">paso a paso</span>
            </h2>
            <p className="text-[#64748B] text-base sm:text-lg max-w-[560px] mx-auto leading-relaxed mb-8">
              Haz clic en cada paso y observa cómo un prompt básico se
              transforma en uno profesional.
            </p>

            {/* Sector selector */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {SECTOR_KEYS.map((key) => {
                const sector = SECTOR_EXAMPLES[key];
                const isSelected = selectedSector === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleSectorChange(key)}
                    className={`meto-sector-btn ${isSelected ? "meto-sector-active" : ""}`}
                  >
                    <span className="text-base sm:text-lg">{sector.icon}</span>
                    <span className="hidden sm:inline">{sector.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start mt-12">
            {/* Steps sidebar */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:sticky lg:top-24">
              {STEP_NAMES.map((name, idx) => {
                const isActive = idx === currentStep;
                const isDone = idx < currentStep;
                const isBoost = idx >= 4;

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    className={`meto-step-btn ${
                      isActive
                        ? isBoost
                          ? "meto-step-active-boost"
                          : "meto-step-active"
                        : ""
                    } ${isDone ? "meto-step-done" : ""}`}
                  >
                    <div
                      className={`meto-step-letter ${
                        isActive
                          ? isBoost
                            ? "bg-[#FBBF24] text-[#0F172A]"
                            : "bg-[#3B82F6] text-white"
                          : isDone
                          ? "bg-[rgba(52,211,153,0.15)] text-[#34D399]"
                          : ""
                      }`}
                    >
                      {isDone ? "✓" : ["I", "N", "I", "C", "I", "A"][idx]}
                    </div>
                    {name}
                  </button>
                );
              })}
            </div>

            {/* Preview panel */}
            <div className={`meto-preview ${showResponse ? 'meto-preview-expanded' : ''}`}>
              <div className="meto-preview-topbar">
                <div className="meto-dot meto-dot-r"></div>
                <div className="meto-dot meto-dot-y"></div>
                <div className="meto-dot meto-dot-g"></div>
                <div className="meto-preview-title">
                  <span className="mr-2">{SECTOR_EXAMPLES[selectedSector].icon}</span>
                  {showResponse === 'response'
                    ? `Respuesta: ${SECTOR_EXAMPLES[selectedSector].name}`
                    : (showResponse === 'prompt' || currentStep >= STEPS.length - 1)
                    ? `Prompt: ${SECTOR_EXAMPLES[selectedSector].name}`
                    : `Ejemplo: ${SECTOR_EXAMPLES[selectedSector].name}`}
                </div>
                <div className="w-[30px]"></div>
              </div>

              {showResponse === 'response' ? (
                /* Response View - Beautiful formatted response */
                <div className="meto-response-view">
                  <ResponseRenderer content={RESPONSE} />
                </div>
              ) : (showResponse === 'prompt' || currentStep >= STEPS.length - 1) ? (
                /* Full Prompt View - shown when toggle is on prompt OR when we reached the last step */
                <div className="meto-preview-body">
                  {STEPS.map((step, idx) => (
                    <div key={idx} className="meto-preview-line meto-line-done">
                      <span className={`meto-preview-label ${step.type === 'boost' ? 'text-[#FBBF24]' : 'text-[#60A5FA]'}`}>
                        {step.label}
                      </span>
                      {step.text}
                    </div>
                  ))}
                </div>
              ) : (
              <div className="meto-preview-body" key={selectedSector}>
                {currentStep < 0 ? (
                  <div className="meto-preview-empty">
                    {/* Visual onboarding state */}
                    <div className="flex flex-col items-center justify-center h-full gap-6 py-8">
                      {/* Animated cursor icon */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6]/20 to-[#60A5FA]/10 flex items-center justify-center border border-[#3B82F6]/30 animate-pulse">
                          <svg
                            className="w-8 h-8 text-[#60A5FA]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                            />
                          </svg>
                        </div>
                        {/* Ripple effect */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-[#3B82F6]/40 animate-ping" style={{ animationDuration: '2s' }} />
                      </div>

                      {/* Instructions */}
                      <div className="text-center space-y-3">
                        <p className="text-[#E2E8F0] font-medium text-base">
                          Selecciona un paso para comenzar
                        </p>

                        <div className="flex items-center justify-center gap-3 text-sm text-[#64748B]">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1E293B]/50 border border-[#334155]/50">
                            <span className="text-[#60A5FA]">←</span>
                            <span>Pasos</span>
                          </div>
                          <span className="text-[#475569]">o</span>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1E293B]/50 border border-[#334155]/50">
                            <span>Botón</span>
                            <span className="text-[#60A5FA]">↓</span>
                          </div>
                        </div>
                      </div>

                      {/* Sector indicator */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B]/80 border border-[#334155]">
                        <span className="text-lg">{SECTOR_EXAMPLES[selectedSector].icon}</span>
                        <span className="text-sm text-[#94A3B8]">
                          Ejemplo de <span className="text-[#60A5FA] font-medium">{SECTOR_EXAMPLES[selectedSector].name}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  STEPS.slice(0, currentStep + 1).map((step, idx) => {
                    const isCurrent = idx === currentStep;
                    const isDone = idx < currentStep;

                    return (
                      <div
                        key={idx}
                        className={`meto-preview-line ${
                          isCurrent
                            ? step.type === "boost"
                              ? "meto-line-current-boost"
                              : "meto-line-current"
                            : isDone
                            ? "meto-line-done"
                            : ""
                        }`}
                      >
                        <span
                          className={`meto-preview-label ${
                            isCurrent
                              ? step.type === "boost"
                                ? "text-[#FBBF24]"
                                : "text-[#60A5FA]"
                              : "text-[#64748B]"
                          }`}
                        >
                          {step.label}
                        </span>
                        {step.text}
                      </div>
                    );
                  })
                )}
              </div>
              )}

              <div className="meto-preview-bottom">
                {currentStep >= STEPS.length - 1 || showResponse ? (
                  /* Final state - show toggle buttons */
                  <div className="meto-toggle-bar">
                    <div className="meto-toggle-group">
                      <button
                        onClick={handleShowPrompt}
                        className={`meto-toggle-btn ${showResponse === 'prompt' || !showResponse ? 'meto-toggle-active' : ''}`}
                      >
                        Prompt
                      </button>
                      <button
                        onClick={handleShowResponse}
                        className={`meto-toggle-btn meto-toggle-response ${showResponse === 'response' ? 'meto-toggle-active' : ''}`}
                      >
                        Respuesta
                      </button>
                    </div>
                    <button
                      onClick={handleReset}
                      className="meto-reset-btn"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Reiniciar
                    </button>
                  </div>
                ) : (
                  /* Building state - show step counter and next button */
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm text-[#64748B]">
                      Paso{" "}
                      <strong className="text-[#60A5FA]">
                        {currentStep < 0 ? 0 : currentStep + 1}
                      </strong>{" "}
                      de 6
                    </div>
                    <button
                      onClick={handleNextStep}
                      className="meto-next-btn"
                    >
                      {currentStep < 0 ? "Empezar →" : "Siguiente →"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1100px] mx-auto px-8 bg-[#09090B]">
        <hr className="border-0 h-px bg-[#27272A]" />
      </div>

      {/* Steps Deep Section */}
      <section className="py-16 px-4 sm:px-8 bg-[#09090B] relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-[800px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="meto-eyebrow">Paso a paso</div>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 tracking-tight">
              Los 6 pasos a fondo
            </h2>
            <p className="text-[#64748B] text-base sm:text-lg max-w-[560px] mx-auto leading-relaxed">
              4 esenciales que deberías usar siempre + 2 potenciadores que
              elevan la calidad.
            </p>
          </div>

          {STEP_DETAILS.map((step, idx) => (
            <div
              key={idx}
              id={`step-${idx}`}
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
              className="meto-step-deep mb-16"
            >
              <div
                className={`meto-step-card ${
                  step.type === "boost" ? "meto-card-boost" : "meto-card-core"
                }`}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className={`meto-step-icon ${
                      step.type === "boost"
                        ? "bg-[#FBBF24] text-[#0F172A]"
                        : "bg-[#3B82F6] text-white"
                    }`}
                  >
                    {step.letter}
                  </div>
                  <div className="flex-1">
                    <span
                      className={`meto-step-tag ${
                        step.type === "boost"
                          ? "bg-[rgba(251,191,36,0.12)] text-[#FBBF24]"
                          : "bg-[rgba(59,130,246,0.12)] text-[#60A5FA]"
                      }`}
                    >
                      {step.tag}
                    </span>
                    <h3 className="font-poppins font-bold text-xl sm:text-2xl leading-tight">
                      {step.name}
                    </h3>
                    <p className="text-sm text-[#64748B] mt-1">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-[rgba(255,255,255,0.7)] text-base leading-relaxed mb-6">
                  {step.body}
                </p>

                <div
                  className={`meto-tip ${
                    step.type === "boost" ? "meto-tip-boost" : "meto-tip-core"
                  }`}
                >
                  <span className="text-xl min-w-[24px] mt-0.5">
                    {step.type === "boost" ? "⚡" : "💡"}
                  </span>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: step.tip.replace(
                        /"([^"]+)"/g,
                        `<strong class="${
                          step.type === "boost"
                            ? "text-[#FCD34D]"
                            : "text-[#60A5FA]"
                        }">$1</strong>`
                      ),
                    }}
                  />
                </div>

                {step.quickTips.length > 0 && (
                  <div className="flex flex-col gap-2 mb-6">
                    {step.quickTips.map((tip, tipIdx) => (
                      <div
                        key={tipIdx}
                        className="flex items-start gap-2 text-sm text-[rgba(255,255,255,0.7)] leading-relaxed"
                      >
                        <span
                          className={`min-w-[14px] mt-1 text-xs ${
                            step.type === "boost"
                              ? "text-[#FBBF24]"
                              : "text-[#3B82F6]"
                          }`}
                        >
                          →
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: tip.replace(/^([^:]+:)/, '<strong>$1</strong>') }} />
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="meto-example meto-example-bad">
                    <div className="meto-example-label text-[#F87171]">
                      ❌ Vago
                    </div>
                    <code className="block whitespace-pre-wrap font-mono text-sm text-[rgba(255,255,255,0.78)]">
                      {step.badExample}
                    </code>
                  </div>
                  <div className="meto-example meto-example-good">
                    <div className="meto-example-label text-[#34D399]">
                      ✅ Claro
                    </div>
                    <code className="block whitespace-pre-wrap font-mono text-sm text-[rgba(255,255,255,0.78)]">
                      {step.goodExample}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1100px] mx-auto px-8 bg-[#09090B]">
        <hr className="border-0 h-px bg-[#27272A]" />
      </div>

      {/* Reference Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-[#09090B] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(59,130,246,0.03)] to-transparent pointer-events-none"></div>

        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="meto-eyebrow">Referencia rápida</div>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 tracking-tight">
              Hazte estas 6 preguntas
            </h2>
            <p className="text-[#64748B] text-base sm:text-lg max-w-[560px] mx-auto leading-relaxed">
              Antes de escribir tu próximo prompt, pasa por cada una.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REFERENCE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className={`meto-ref-card ${
                  card.type === "boost" ? "meto-ref-boost" : ""
                }`}
              >
                <div
                  className={`font-poppins font-extrabold text-4xl mb-1 ${
                    card.type === "boost" ? "text-[#FBBF24]" : "text-[#3B82F6]"
                  }`}
                >
                  {card.letter}
                </div>
                <div className="font-poppins font-bold text-base mb-2">
                  {card.word}
                </div>
                <div className="text-sm text-[#64748B] italic leading-relaxed mb-2">
                  {card.question}
                </div>
                <span
                  className={`inline-block text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                    card.type === "boost"
                      ? "bg-[rgba(251,191,36,0.12)] text-[#FBBF24]"
                      : "bg-[rgba(59,130,246,0.12)] text-[#60A5FA]"
                  }`}
                >
                  {card.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 text-center bg-[#09090B] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="max-w-[600px] mx-auto meto-cta-box relative z-10">
          <h3 className="font-poppins font-extrabold text-xl sm:text-2xl mb-3">
            Ponlo en práctica ahora
          </h3>
          <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
            Tenemos una colección de prompts listos para copiar y usar. Cada uno
            muestra cómo aplicar INICIA paso a paso con ejemplos reales.
          </p>
          <Link href="/guias/ejemplos-prompts" className="meto-cta-btn">
            Ver ejemplos de prompts →
          </Link>
        </div>
      </section>
    </div>
  );
}
