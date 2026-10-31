export default function FloatingActions({ phone, whatsappNumber, copy }) {
  return (
    <nav className="floating-actions" aria-label={copy.navigation}>
      <a
        className="floating-action whatsapp-action"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.whatsapp}
        title="WhatsApp"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          width="27"
          height="27"
          fill="currentColor"
        >
          <path d="M16.04 3C8.86 3 3.02 8.82 3.02 15.98c0 2.3.61 4.55 1.77 6.54L3 29l6.66-1.74a13.1 13.1 0 0 0 6.37 1.62h.01c7.18 0 13.02-5.82 13.02-12.98 0-3.47-1.36-6.73-3.82-9.19A12.94 12.94 0 0 0 16.04 3Zm0 23.68h-.01c-1.96 0-3.88-.53-5.55-1.53l-.4-.24-3.95 1.03 1.05-3.84-.26-.42a10.7 10.7 0 0 1-1.64-5.7c0-5.92 4.83-10.74 10.77-10.74 2.87 0 5.57 1.12 7.6 3.15a10.65 10.65 0 0 1 3.16 7.59c0 5.92-4.83 10.74-10.77 10.74Zm5.9-8.04c-.32-.16-1.91-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.31-.02-.49.14-.65.14-.14.32-.38.49-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.39-.26-.62-.52-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.11 1.32 3.32c.16.21 2.27 3.46 5.5 4.85.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.62-.38Z" />
        </svg>
      </a>
      <a
        className="floating-action call-action"
        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
        aria-label={`${copy.call}: ${phone}`}
        title={copy.call}
      >
        <span aria-hidden="true">☎</span>
      </a>
      <a
        className="floating-action top-action"
        href="#home"
        aria-label={copy.top}
        title={copy.top}
      >
        <span aria-hidden="true">↑</span>
      </a>
    </nav>
  );
}
