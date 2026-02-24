import { ReactNode } from "react";
import { Lightbulb, AlertTriangle, Info } from "lucide-react";

type AlertaTipo = "tip" | "warning" | "info";

interface AlertaProps {
  tipo: AlertaTipo;
  titulo?: string;
  children: ReactNode;
}

const alertaConfig = {
  tip: {
    bgColor: "bg-[#ECFDF5]",
    borderColor: "#10B981",
    iconColor: "text-[#10B981]",
    titleColor: "text-[#047857]",
    textColor: "text-[#065F46]",
    icon: Lightbulb,
    defaultTitle: "Pro tip",
    emoji: "💡",
  },
  warning: {
    bgColor: "bg-[#FFFBEB]",
    borderColor: "#F59E0B",
    iconColor: "text-[#F59E0B]",
    titleColor: "text-[#B45309]",
    textColor: "text-[#92400E]",
    icon: AlertTriangle,
    defaultTitle: "Importante",
    emoji: "⚠️",
  },
  info: {
    bgColor: "bg-[#EFF6FF]",
    borderColor: "#3B82F6",
    iconColor: "text-[#3B82F6]",
    titleColor: "text-[#1E40AF]",
    textColor: "text-[#1E3A8A]",
    icon: Info,
    defaultTitle: "Nota",
    emoji: "ℹ️",
  },
};

export function Alerta({ tipo, titulo, children }: AlertaProps) {
  const config = alertaConfig[tipo];
  const Icon = config.icon;
  const displayTitle = titulo || config.defaultTitle;

  return (
    <section className="w-full py-8 md:py-10 bg-white">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        <div
          className={`flex w-full gap-4 p-6 md:p-8 ${config.bgColor}`}
          style={{ borderLeft: `4px solid ${config.borderColor}`, borderRadius: "12px" }}
        >
          {/* Icono */}
          <Icon className={`h-6 w-6 flex-shrink-0 ${config.iconColor}`} />

          {/* Contenido */}
          <div className="flex flex-1 flex-col gap-2">
            <h4 className={`font-poppins text-[18px] font-bold ${config.titleColor}`}>
              {config.emoji} {displayTitle}
            </h4>
            <div className={`font-inter text-[16px] leading-[1.8] ${config.textColor}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
