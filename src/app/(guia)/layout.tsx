export default function GuiaGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Layout limpio sin navbar ni footer para guías individuales
  return <>{children}</>;
}
