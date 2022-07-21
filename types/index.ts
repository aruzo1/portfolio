import { ComponentType } from "react";

export interface IProject {
  img: string;
  title: string;
  desc: string;
  href: string;
  links: { Icon: ComponentType; href: string }[];
  badges: string[];
  right?: boolean;
}
