import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub, FaTelegram } from 'react-icons/fa';

export default function contact() {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 sm:space-y-0">
      <a
        href="https://twitter.com/chin_flags"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 text-text-secondary hover:text-info-hover transition-colors"
      >
        <FaTwitter className="text-xl" />
        <span>Twitter</span>
      </a>
      <a
        href="https://linkedin.com/in/chinthaka-weerakkody/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 text-text-secondary hover:text-info-hover transition-colors"
      >
        <FaLinkedin className="text-xl" />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/chin-flags"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 text-text-secondary hover:text-info-hover transition-colors"
      >
        <FaGithub className="text-xl" />
        <span>GitHub</span>
      </a>
      <a
        href="https://t.me/chinflags"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 text-text-secondary hover:text-info-hover transition-colors"
      >
        <FaTelegram className="text-xl" />
        <span>Telegram</span>
      </a>
      <a
        href="mailto:chinthakaflags@gmail.com"
        className="flex items-center space-x-3 text-text-secondary hover:text-success-hover transition-colors"
      >
        <FaEnvelope className="text-xl" />
        <span>Email</span>
      </a>
    </div>
  );
} 