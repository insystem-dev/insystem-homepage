import { StaticImageData } from "next/image";

export interface WorkScope {
  label: string;
}

export interface ServicePlatform {
  name: string;
  platforms: {
    label: string;
  }[];
}

export interface ProjectDetailProps {
  // Images
  mainImage?: StaticImageData;
  contentImage: StaticImageData;
  thumbImage?: StaticImageData;
  thumbImageMobile?: StaticImageData;

  // Project Info
  category: string;
  title: string;
  subtitle: string;
  description: string;

  // Work Details
  workScopes: WorkScope[];
  servicePlatforms: ServicePlatform[];
}
