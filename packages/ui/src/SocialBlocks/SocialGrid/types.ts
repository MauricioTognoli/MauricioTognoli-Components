export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  avatarAlt?: string;
}

export interface SocialGridProps {
  profile: ProfileData;
  links: SocialLinks;
  className?: string;
}
