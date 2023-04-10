import React, { useEffect, useState } from 'react';
import { getCurrentCity } from "../api/citiesApi";
import SearchBar from './SearchBar/SearchBar';

const Autocomplete = () => {

  

  const [value, setValue] =useState(null)
  return(
  <div>
    <SearchBar/>

  </div>
)};

export default Autocomplete;