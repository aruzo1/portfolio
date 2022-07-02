import { ComponentType } from "react";

export interface IProject {
  img: string;
  title: string;
  desc: string;
  links: { Icon: ComponentType; href: string }[];
  badges: string[];
}
