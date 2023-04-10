
import React, {  ChangeEvent, useEffect, useRef, useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import {  ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import { getCurrentCity } from "../../api/citiesApi";
import classes from "./SearchBar.module.scss"
import FormDropdown from "./FormDropdown/FormDropdown";
import { useCustomSelector, useCustomDispatch } from "../../hooks/redux/useLocation"
import { setGeoLocation } from "../../redux/slices/locationSlice";
import { CitiesInterface } from "../interfaces/citiesInterface";
import { getCities } from "../../redux/slices/citiesSlice";
import { getRestaurants } from "../../api/restaurantsApi";

 
export default function SearchBar() {

  useEffect(() => {
   getRestaurants("londres");
  }, [])
  

  
  
  const [search, setSearch] = useState("")
  const [cities, setCities] = useState<Array<CitiesInterface>>([])
  //const [weather, setWeather] = useState([]);
  //console.log(weather);


  const [focused, setFocused] = useState(false)
  const [focusedForClick, setFocusedForClick] = useState(false)
 //console.log(focusedForClick);
 

  const [query, setQuery]:any = useState([])


  // const allMoviesData = moviesContext.moviesState
  // const allMoviesTittle = allMoviesData.map((movie) => movie.title);
  //const setMoviesTitle = moviesContext.setTitleSearch;
  //const setSearch = moviesContext.setSearch;
  //const search = moviesContext.search;

  const [coords, setCoords] = useState(Object)
  const { data,loading,inSuccess,error } = useCustomSelector((state)=> state.cities)
  const dispatch = useCustomDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
   
    //console.log(cities.map((cityName)=>cityName.display_name));
   
  }
  // useEffect(() => {

  //   getCurrentCity();


  // }, [search])
  const debounceRef = useRef<NodeJS.Timeout>()
  const onQueryChanged = (e:ChangeEvent<HTMLInputElement>) => {
     //e.preventDefault()
   
    if (debounceRef.current)
      clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(()=>{
      console.log("debounced value", e.target.value);
      dispatch(getCities(e.target.value));
 
    },500)  
  }
// useEffect(() => { 
//     if (inSuccess){
//       setCities(data);
//     //    const allQuerys = cities?.map((cityName)=>cityName.display_name)
//     // const filter = allQuerys?.filter((city:any)=>city.includes(search) )
//     // console.log(allQuerys)
//     //  console.log(filter)
//     }
//     if(error){
//       console.log(error);
      
//     } 
   
//   }, [search])
  
  
  //dispatch(setGeoLocation({lat:cities[0]?.lat,lng:coords.lng}));
  
  const handleOnClick = () => {
    //getCurrentCity(search);
    //setSearch("");
    //setKeyFocus(-1)
   
    // getCurrentCity(search);
    dispatch(getCities(search));
    // console.log(location);
   
  }
  useEffect(() => {
    if (inSuccess){
      setCities(data);
    }
    if(error){
      console.log(error);
      
    }
  }, [handleOnClick])
  
  const handleOnAutocompleteClick = (e: any, cityName: any) => {
    setSearch(cityName);
    //setSearch("");
    setFocusedForClick(true)
    setFocused(false)
    setKeyFocus(-1)
    
  }
  
  const handleOnFocus = () => {
    setFocused(true)
  }
  
  
  const [keyFocus, setKeyFocus] = useState(-1)
  const [searchAutocomplete, setSearchAutocomplete] = useState(false)

  // useEffect(() => {
  //   if(search?.length > 1){
  //   setKeyFocus((c) => (c < weatherContext.citySearch.length - 1 ? c + 1 : c))
  //       console.log(weatherContext.citySearch[keyFocus]);
        
  //       setSearch(weatherContext.citySearch[keyFocus]?.LocalizedName)   
  //       weatherContext.setSearch(weatherContext.citySearch[keyFocus]?.LocalizedName)     
  //       setSearchAutocomplete(true)
  //   }
  // }, [weatherContext.citySearch?.length > 1])
  const [cityData, setCityData] = useState([] as any[])
  
  
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {

    if (e.key === 'ArrowDown'){
      
      
      if(data?.length > 1){
       console.log( cities?.map((cityName)=>cityName.display_name).length )
        setKeyFocus(c => (c < cities?.map((cityName)=>cityName.display_name).length - 1 ? c + 1 : c))
        //console.log(weatherContext.citySearch[keyFocus]);
        //console.log(keyFocus)
      //   if (keyFocus > -1) {
      //     console.log(cities[keyFocus]?.display_name);
      //   setSearch(cities[keyFocus]?.display_name)  
      //  }
        
        //weatherContext.setSearch(weatherContext.citySearch[keyFocus].LocalizedName)     
        setSearchAutocomplete(true)
      }
    }
    if(e.key === 'ArrowUp'){
     
     
     setKeyFocus(c => (c >= 0 && c <= data?.length ? c - 1 : c));
     //console.log(keyFocus)
     //setSearch(weatherContext.citySearch[keyFocus].LocalizedName)   
     setSearchAutocomplete(true)
   }

    if (e.key === 'Escape') {
      setKeyFocus(-1)

      return
    }
    
    
    
    if (e.key === 'Enter') {

      dispatch(getCities(search));
      // let topCities: any[] = [];
      //const localizedName = weatherContext.citySearch?.find((c:any)=>  c.LocalizedName );
      //topCities.push(localizedName.LocalizedName)
      
      // let test: any = ""
      //test = localizedName.LocalizedName;
      //const localizedName = weatherContext.citySearch?.find((c:any)=>  topCities.push(c.LocalizedName ));
      //console.log(topCities);
      //console.log(localizedName);
      
      
      //setQuery(test)
      //test = [weatherContext.topTenCities, test];
      //console.log(test);
      //topCities.push(...test,weatherContext.topTenCities)
      //console.log(weatherContext.topTenCities?.length > 0);
      //console.log(weatherContext.topTenCities?.length > 1 && [...weatherContext.topTenCities ?? query, query]);
      
      // weatherContext.setTopTenCities([query, ...weatherContext.topTenCities ?? query])

      // //console.log(weatherContext.topTenCities?.pop());
      

      // const d = weatherContext.topTenCities && weatherContext.topTenCities;
      // //console.log( weatherContext.topTenCities && d.shift());
      

      // weatherContext.topTenCities && weatherContext.topTenCities.shift();

      // var result =  weatherContext.topTenCities?.filter((e:any )=> e.length);
      // //console.log(result);
      
      // var cityCount:any = {};
      // weatherContext?.topTenCities && result.forEach(function(i:any) {cityCount[i] = (cityCount[i]||0) + 1;});

      
      // updateTopCities(result)
      //console.log(result);
      //cityCount.shift()
      //storeTopCities({name:test})
      
      
      //console.log(weatherContext.citySearch[keyFocus]?.Country?.ID);
      
      
      // getForecastWeather(searchAutocomplete  ? weatherContext.search : search, weatherContext.citySearch[keyFocus]?.Country.ID , weatherContext.setForecastWeatherData, weatherContext.setIsLocal);
      // getCurrentWeatherOff(searchAutocomplete  ? weatherContext.search : search, weatherContext.citySearch[keyFocus]?.Country.ID , weatherContext.setCurrentWeatherData, weatherContext.setIsLocal);
      // getDailyWeatherCity(weatherContext.currentWeatherData.coord.lat, weatherContext.currentWeatherData.coord.lon, weatherContext.setDailyWeatherData);
      // setSearch("");
      // weatherContext.setCitySearch([])
      
      e.preventDefault();
   // setKeyFocus(-1)
    //console.log("HEEEEEEEY·$%·$%·$Y%·Y$Y$Y·%·Y$%Y·$Y%·$%Y·$%Y");
    //console.log(weatherContext.citySearch.find((c:any)=> topCities.push (c.LocalizedName )));
    //console.log(search);
    
   // console.log(topCities);
    
   //setSearch("");
   //setKeyFocus(-1)
  
   // getCurrentCity(search);
   
   
    }
    
  }
  
  useEffect(() => {
    if (keyFocus > -1) {
      console.log(cities[keyFocus]?.display_name);
    setSearch(cities[keyFocus]?.display_name)  
   } 
  }, [keyFocus])
  
  
  //useEffect(() => console.log(weather), [weather]);
  
  let searchProps = {
    focused:focused,
    handleOnAutocompleteClick:handleOnAutocompleteClick,
    setFocused:setFocused,
    keyFocus : keyFocus,
    cities:cities
    
  }
  let inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
   document.addEventListener("click",(e)=>{
    const target = e.target as HTMLElement;
   // e.stopPropagation();
    if(inputRef.current?.contains(target)){

      setFocused(true)
    }else{
      setFocused(false)
    }
    
   })
  }, [])
  
  
// useEffect(() => {
//   var result =  weatherContext.topTenCities?.filter((e:any )=> e.length);
//   console.log(result);
  
//   //weatherContext.topTenCities?.length > 1 && weatherContext.topTenCities?.pop()
//   console.log(query); 
 
   
  
// }, [weatherContext.topTenCities,])


  return (
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
      <Button onClick={handleOnClick} variant="outline-success">Search</Button>
    </Form>


  )
}
