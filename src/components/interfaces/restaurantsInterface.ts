export interface RestaurantsInterface  {
  rating: RestaurantsInterface;
  businesses: Business[];
  total: number;
  region: Region;
}

interface Region {
  center: Coordinates;
}

interface Business {
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
  price?: string;
  location: Location;
  phone: string;
  display_phone: string;
  distance: number;
}

interface Location {
  address1: string;
  address2?: string;
  address3?: string;
  city: string;
  zip_code?: string;
  country: string;
  state: string;
  display_address: string[];
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Category {
  alias: string;
  title: string;
}

