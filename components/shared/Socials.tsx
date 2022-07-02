import { IconLink, IconLinkGroup } from "components/shared/Link.style";
import FiverrIcon from "components/icons/FiverrIcon";
import GithubIcon from "components/icons/GithubIcon";
import InstagramIcon from "components/icons/InstagramIcon";

const socials = [
  { href: "https://github.com/aruzo1", Icon: GithubIcon },
  { href: "https://www.instagram.com/aruzo500", Icon: InstagramIcon },
  { href: "https://www.fiverr.com/aruzoyt", Icon: FiverrIcon },
];

function Socials() {
  return (
    <IconLinkGroup>
      {socials.map(({ href, Icon }) => (
        <IconLink
          key={href}
          target="_blank"
          href={href}
          rel="noopener noreferrer"
        >
          <Icon />
        </IconLink>
      ))}
    </IconLinkGroup>
  );
}

export default Socials;
