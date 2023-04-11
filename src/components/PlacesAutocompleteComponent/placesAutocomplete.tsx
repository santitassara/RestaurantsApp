import React, { useEffect, useState } from 'react';
import { getCurrentCity } from "../../api/citiesApi";
import GeoLocationComponent from '../GeoLocation/GeoLocationComponent';
import SearchBar from '../SearchBar/SearchBar';
import classes from "../PlacesAutocompleteComponent/PlacesAutocomplete.module.scss"

const Autocomplete = () => {

  return(
  <div className={classes["autocompleteContainer"]}>
    <SearchBar/>
    

  </div>
)};

export default Autocomplete;