import { profile } from "@/data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function WhatsAppButton() {
  const href = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    profile.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-60" />
      <WhatsAppIcon size={28} />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[var(--color-fg)] px-3 py-1.5 text-xs font-medium text-[var(--color-bg)] opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
