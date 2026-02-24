import type { MDXComponents } from "mdx/types";
import {
  Video,
  Seccion,
  Prompt,
  Imagen,
  Alerta,
  CTA,
  Conclusion,
  CTAFinal,
  HeaderGuia,
  Intro,
  Timeline,
  Audio,
  YouTube,
} from "@/components/guias";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Video,
    Seccion,
    Prompt,
    Imagen,
    Alerta,
    CTA,
    Conclusion,
    CTAFinal,
    HeaderGuia,
    Intro,
    Timeline,
    Audio,
    YouTube,
    ...components,
  };
}
