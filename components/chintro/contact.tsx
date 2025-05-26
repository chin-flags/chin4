import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function contact() {
  return (
      <div className="flex space-x-4">
        <a
          href="https://twitter.com/chin_flags"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
          <FaTwitter className="text-xl" />
          <span>Twitter</span>
        </a>
        <a
          href="https://linkedin.com/in/chinthaka-weerakkody/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
          <FaLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:chinthakaflags@gmail.com"
          className="flex items-center space-x-3 text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors"
        >
          <FaEnvelope className="text-xl" />
          <span>Email</span>
        </a>
      </div>
  );
} 