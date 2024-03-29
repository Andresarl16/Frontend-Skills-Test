export interface Card {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export type IconSizes = "small" | "medium";

export interface CardSection {
  id: string;
  badge: string;
  title: string;
  description: string;
  cards: Array<Card>;
  iconSizes: IconSizes;
}
