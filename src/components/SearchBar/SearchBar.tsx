
import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from "./SearchBar.module.scss"
import FormDropdown from "./FormDropdown/FormDropdown";
import { useCustomSelector, useCustomDispatch } from "../../hooks/redux/useLocation"
import { CitiesInterface } from "../interfaces/citiesInterface";
import { getCities } from "../../redux/slices/citiesSlice";
import { getRestaurants } from "../../redux/slices/restaurantsSlice";
import GeoLocationComponent from "../GeoLocation/GeoLocationComponent";
import { searchPropsInterface } from "../interfaces/globalInterfaces";



export default function SearchBar() {
  const [search, setSearch] = useState("")
  const [cities, setCities] = useState<Array<CitiesInterface>>([])
  const [searchValue, setSearchValue] = useState("");
  const [focused, setFocused] = useState(false)
  const [focusedForClick, setFocusedForClick] = useState(false)
  const [coords, setCoords] = useState(Object)
  const { data, loading, inSuccess, error } = useCustomSelector((state) => state.cities)
  const { location } = useCustomSelector((state)=> state)
  const dispatch = useCustomDispatch();

  const {lat, lon} = location 

  const lat_lon = 
  {
    lat:lat?.toString(),
    lon:lon?.toString(),
  }

  useEffect(() => {
    dispatch(getRestaurants(lat_lon))
    
  }, [])
  
    
 

  const debounceRef = useRef<NodeJS.Timeout>()
  const onQueryChanged = (e: ChangeEvent<HTMLInputElement>) => {
    //e.preventDefault()
    if (debounceRef.current)
      clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      console.log("debounced value", e.target.value);
      dispatch(getCities(e.target.value));
      setSearchValue(e.target.value)
    }, 350)
  }


  const handleOnClick = () => {
    dispatch(getCities(searchValue));
    const lat_lng = {
      lat: cities[0].lat,
      lon: cities[0].lon
    }
    dispatch(getRestaurants(lat_lng))
  }


  useEffect(() => {
    if (inSuccess) {
      setCities(data);
    }
    if (error) {
      console.log(error);
    }
  }, [handleOnClick])


  const handleOnAutocompleteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, lat: string, lon: string) => {
    const lat_lng = {
      lat,
      lon
    }
    dispatch(getRestaurants(lat_lng));
    setFocusedForClick(true)
    setFocused(false)
    setKeyFocus(-1)
  }

  const handleOnFocus = () => {
    console.log(cities?.length > 3);
    cities?.length > 3 && setFocused(true)
  }


  const [keyFocus, setKeyFocus] = useState(-1)
  //const [searchAutocomplete, setSearchAutocomplete] = useState(false)
  //const [cityData, setCityData] = useState([] as any[])


  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === 'ArrowDown') {
      if (data?.length > 1) {
        console.log(cities?.map((cityName) => cityName.display_name).length)
        setKeyFocus(c => (c < cities?.map((cityName) => cityName.display_name).length - 1 ? c + 1 : c))

      //  setSearchAutocomplete(true)
      }
    }
    if (e.key === 'ArrowUp') {
      setKeyFocus(c => (c >= 0 && c <= data?.length ? c - 1 : c));
     // setSearchAutocomplete(true)
    }
    if (e.key === 'Escape') {
      setKeyFocus(-1)
      return
    }




    if (e.key === 'Enter') {
      const lat_lng = {
        lat: cities[keyFocus]?.lat,
        lon: cities[keyFocus]?.lon
      }
      dispatch(getRestaurants(lat_lng))
      e.preventDefault();
      setFocused(false)
      setKeyFocus(-1)
    }
  }

  useEffect(() => {
    if (keyFocus > -1) {
      setSearch(cities[keyFocus]?.display_name)
    }
  }, [keyFocus])


  let searchProps:searchPropsInterface = {
    focused: focused,
    handleOnAutocompleteClick: handleOnAutocompleteClick,
    setFocused: setFocused,
    keyFocus: keyFocus,
    cities: cities
  }

  let inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      // e.stopPropagation();
      if (inputRef.current?.contains(target)) {

        setFocused(true)
      } else {
        setFocused(false)
      }

    })
  }, [])

  return (
    <div className={classes["SearchContainer"]}>
      <Form
        className={classes["Aform"]}
        onSubmit={handleOnClick}
      >
        {/* <ToastContainer /> */}
        <div >

          <Form.Control
            type="search"
            placeholder="Search"
            className={classes["form"]}
            aria-label="Search"
            //value={search}
            onChange={onQueryChanged}
            onKeyDown={handleKeyDown}
            onFocus={handleOnFocus}
            ref={inputRef}
          //onBlur={()=>setFocused(false)}
          />
          <FormDropdown {...searchProps} />
        </div>
        <Button className={classes["SearchContainer-button"]} onClick={handleOnClick} variant="outline-success">Search</Button>
      </Form>
      <GeoLocationComponent />
    </div>
  )
}
