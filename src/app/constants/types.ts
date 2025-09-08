interface TourInfoSectionItem {
  text: string;
  icon?: "checked" | "unchecked";
}
export interface TourInfoSection {
  title: string;
  type: "bulletPoints" | "checkmarks" | "paragraphs";
  items: TourInfoSectionItem[];
}
export interface Tour {
  featuredImage: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescriptionParagraphs: string[];
  images: string[];
  location: string;
  duration: string;
  minAge: number;
  infoSections?: TourInfoSection[];
}
