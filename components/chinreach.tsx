import Contact from "@/components/chintro/contact";
import SectionHeaderPostChin from "./ui/section-header-post-chin";

export default function Chinreach() {
  return (
    <div id="reach" className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-16 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-12">
        <SectionHeaderPostChin title="rea" subheader="Send request. Await response." />
        {/* <p className="text-lg text-text-secondary mb-8">
          Let&apos;s connect. I am fun
        </p> */}
      </div>
      <div className="flex flex-col gap-16 items-center justify-center">
        <Contact />
      </div>
    </div>
  );
} 