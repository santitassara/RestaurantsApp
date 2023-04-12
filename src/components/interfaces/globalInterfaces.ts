import { Dispatch, SetStateAction } from "react";
import { CitiesInterface } from "./citiesInterface";

export interface CoordsInterface  
  {
    lat:string | undefined,
    lon:string | undefined,
}

export interface CityApiInterface  
  {
    city:string,
}

export interface searchPropsInterface  {
  focused: boolean,
  handleOnAutocompleteClick: AutocompleteClickHandler,
  setFocused: Dispatch<SetStateAction<boolean>>;
  keyFocus: number,
  cities: Array<CitiesInterface>
}

interface AutocompleteClickHandler {
  (e: React.MouseEvent<HTMLDivElement, MouseEvent>, lat: string, lon: string): void;
}
