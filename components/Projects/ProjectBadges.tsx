import { IProject } from "types";
import { Badge, BadgeGroup } from "components/shared/Badge.style";

function ProjectBadges({ badges }: { badges: IProject["badges"] }) {
  return (
    <BadgeGroup>
      {badges.map((badge) => (
        <Badge key={badge}>{badge}</Badge>
      ))}
    </BadgeGroup>
  );
}

export default ProjectBadges;
