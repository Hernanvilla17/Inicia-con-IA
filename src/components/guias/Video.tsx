interface VideoProps {
  src: string;
  caption?: string;
}

export function Video({ src, caption }: VideoProps) {
  return (
    <div className="w-full py-4">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        <figure className="my-8 flex w-full flex-col items-center gap-4">
          <video
            src={src}
            controls
            playsInline
            className="w-full max-w-full rounded-xl"
            style={{
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
            }}
          />

          {caption && (
            <figcaption className="text-center font-inter text-[14px] text-[#64748B]">
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    </div>
  );
}
