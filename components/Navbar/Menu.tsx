import Link from "next/link";
import { Button } from "components/shared/Button.style";
import { LinkStyled } from "components/shared/Link.style";
import { MenuItem } from "./style";

const menu = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume.pdf", button: true },
];

function Menu(props: { className?: string; toggle?: () => void }) {
  const { className, toggle } = props;

  return (
    <ul className={className}>
      {menu.map(({ name, href, button }) => (
        <MenuItem key={name} onClick={toggle}>
          {button ? (
            <Link href={href}>
              <Button variant="primary">{name}</Button>
            </Link>
          ) : (
            <LinkStyled href={href}>{name}</LinkStyled>
          )}
        </MenuItem>
      ))}
    </ul>
  );
}

export default Menu;
