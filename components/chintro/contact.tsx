import React, { useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4">
      <a
        href="https://twitter.com/chin_flags"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-foreground hover:text-info-hover transition-colors text-sm sm:text-base"
      >
        <FaTwitter className="text-lg sm:text-xl" />
        <span>Twitter</span>
      </a>
      <a
        href="https://linkedin.com/in/chinthaka-weerakkody/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-foreground hover:text-info-hover transition-colors text-sm sm:text-base"
      >
        <FaLinkedin className="text-lg sm:text-xl" />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/chin-flags"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-foreground hover:text-info-hover transition-colors text-sm sm:text-base"
      >
        <FaGithub className="text-lg sm:text-xl" />
        <span>GitHub</span>
      </a>
      <a
        href="https://t.me/chinflags"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-foreground hover:text-info-hover transition-colors text-sm sm:text-base"
      >
        <FaTelegram className="text-lg sm:text-xl" />
        <span>Telegram</span>
      </a>
      <a
        href="https://discord.com/users/chin_flags"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-foreground hover:text-indigo-400 transition-colors text-sm sm:text-base"
      >
        <FaDiscord className="text-lg sm:text-xl" />
        <span>Discord</span>
      </a>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText("chinthakaflags@gmail.com");
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="flex items-center space-x-2 text-foreground hover:text-success-hover transition-colors text-sm sm:text-base focus:outline-none"
      >
        <FaEnvelope className="text-lg sm:text-xl" />
        <span>{copied ? "Copied!" : "Email"}</span>
      </button>
    </div>
  );
}
