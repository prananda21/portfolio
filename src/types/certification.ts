export type CertificationLink = {
  label: string;
  href: string;
};

export type Certification = {
  slug: string;
  title: string;
  description: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  skills: string[];
  links: CertificationLink;
};
