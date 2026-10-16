import { Data } from "@/app/Data";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialIcons: Record<string, React.ReactNode> = {
  twitter: <FaXTwitter className="w-4 h-4" />,
  github: <FaGithub className="w-4 h-4" />,
  linkedin: <FaLinkedin className="w-4 h-4" />,
};

export default function SocialLinks() {
  return (
    <nav className="flex items-center gap-6" aria-label="Social links">
      {Data.home.Sociallink.map((link) => {
        const key = link.platform.toLowerCase();
        const icon = socialIcons[key];

        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            title={link.platform}
            className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center justify-center"
          >
            {icon ? icon : link.platform}
          </a>
        );
      })}
    </nav>
  );
}
