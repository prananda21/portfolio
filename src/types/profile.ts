import type { ContactLink } from "./contact";

export type Profile = {
  name: string;
  title: string;
  location: string;
  focus: string;
  status: string;
  email: string;
  intro: string;
  about: string;
  values: string[];
  learning: string[];
  contactLinks: ContactLink[];
};
