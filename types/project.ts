import { Dispatch, SetStateAction } from 'react';

export interface IProjectCard {
  title: string;
  summary: string;
  publishedAt?: string;
  img: string;
  github: string;
  live: string;
  slug?: string;
  purpose?: string;
  challenges?: string;
  setDetails?: Dispatch<SetStateAction<Details>>;
  setImage?: Dispatch<SetStateAction<Image>>;
}

export interface Details {
  title: string;
  summary: string;
  purpose: string;
  challenges: string;
  github: string;
  live: string;
}

export interface Image {
  image: string;
}

export interface IModalProps {
  details: Details;
  selectedImage: Image;
  setImage: Dispatch<SetStateAction<Image>>;
  setDetails: Dispatch<SetStateAction<Details>>;
}
