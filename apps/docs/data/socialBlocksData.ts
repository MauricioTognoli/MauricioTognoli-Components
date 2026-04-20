export interface SocialBlocksData {
  title: string;
  description: string;
  showcase1: string;
}

export const socialBlocksData: Record<string, SocialBlocksData> = {
  es: {
    title: "Bloques Sociales",
    description: "Componentes llamativos para mostrar perfiles y enlaces a redes sociales.",
    showcase1: "Bento Social Card",
  },
  en: {
    title: "Social Blocks",
    description: "Eye-catching components to showcase social profiles and links.",
    showcase1: "Bento Social Card",
  },
};
