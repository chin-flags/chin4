import {
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";

export default function contact() {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4">
      <a
        href="https://twitter.com/chin_flags"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-text-secondary hover:text-info-hover transition-colors text-sm sm:text-base"
      >
        <FaTwitter className="text-lg sm:text-xl" />
        <span>Twitter</span>
      </a>
      <a
        href="https://linkedin.com/in/chinthaka-weerakkody/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-text-secondary hover:text-info-hover transition-colors text-sm sm:text-base"
      >
        <FaLinkedin className="text-lg sm:text-xl" />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/chin-flags"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-text-secondary hover:text-info-hover transition-colors text-sm sm:text-base"
      >
        <FaGithub className="text-lg sm:text-xl" />
        <span>GitHub</span>
      </a>
      <a
        href="https://t.me/chinflags"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-text-secondary hover:text-info-hover transition-colors text-sm sm:text-base"
      >
        <FaTelegram className="text-lg sm:text-xl" />
        <span>Telegram</span>
      </a>
      <a
        href="mailto:chinthakaflags@gmail.com"
        className="flex items-center space-x-2 text-text-secondary hover:text-success-hover transition-colors text-sm sm:text-base"
      >
        <FaEnvelope className="text-lg sm:text-xl" />
        <span>Email</span>
      </a>
    </div>
  );
}
