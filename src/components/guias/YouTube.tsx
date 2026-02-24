interface YouTubeProps {
  url: string;
  titulo?: string;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/
  );
  return match ? match[1] : null;
}

export function YouTube({ url, titulo }: YouTubeProps) {
  const videoId = getYouTubeId(url);

  if (!videoId) return null;

  return (
    <div className="w-full py-4">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        <figure className="my-8 flex w-full flex-col items-center gap-4">
          <div
            className="relative w-full overflow-hidden rounded-xl"
            style={{
              paddingBottom: "56.25%",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid #E2E8F0",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={titulo || "YouTube video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          {titulo && (
            <figcaption className="text-center font-inter text-[14px] text-[#64748B]">
              {titulo}
            </figcaption>
          )}
        </figure>
      </div>
    </div>
  );
}
