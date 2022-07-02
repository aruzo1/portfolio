import { IProject } from "types";
import { IconLink } from "components/shared/Link.style";

function ProjectLinks({ links }: { links: IProject["links"] }) {
  return (
    <>
      {links.map(({ Icon, href }) => (
        <IconLink
          key={href}
          target="_blank"
          href={href}
          rel="noopener noreferrer"
        >
          <Icon />
        </IconLink>
      ))}
    </>
  );
}

export default ProjectLinks;
