import Contact from "@/components/chintro/contact";

export default function Chinreach() {
  return (
    <div id="reach" className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-16 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Reaching Chin</h2>
        <p className="text-lg text-text-secondary mb-8">
          Let&apos;s connect and build something amazing together
        </p>
      </div>
      <div className="flex flex-col gap-16 items-center justify-center">
        <Contact />
      </div>
    </div>
  );
} 