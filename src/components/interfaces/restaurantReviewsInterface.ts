import { Dispatch, SetStateAction } from "react";

export interface restaurantsReviewInterface {
  modalProps: ModalProps;
  show: boolean;
}

export interface ModalProps {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: Category[];
  rating: number;
  coordinates: Coordinates;
  transactions: any[];
  location: Location;
  phone: string;
  display_phone: string;
  distance: number;
}

export interface RestaurantsModalProps {
  modalProps: ModalProps[];
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  // Define more properties or methods if needed
}


export interface Location {
  address1: string;
  address2: string;
  address3?: any;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Category {
  alias: string;
  title: string;
}

