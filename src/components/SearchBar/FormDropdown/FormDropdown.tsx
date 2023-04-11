
import { useCustomSelector } from "../../../hooks/redux/useLocation"
import classes from "../../SearchBar/SearchBar.module.scss"




export default function FormDropdown(searchProps:any){

  let {focused, handleOnAutocompleteClick, keyFocus, cities} = searchProps
  const { data,loading,inSuccess,error } = useCustomSelector((state)=> state.cities)
  //console.log(data?.map((item:any)=>console.log(item.display_name)));
  //console.log(data);
  
  // const icon = weatherContext?.currentWeatherData?.weather && weatherContext?.currentWeatherData?.weather[0].icon
  // const iconCode = icon;
  // const IconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  // const description = weatherContext?.currentWeatherData?.weather && weatherContext?.currentWeatherData?.weather[0].description
  // const feelsLike = weatherContext?.currentWeatherData?.weather && weatherContext?.currentWeatherData?.main?.feels_like    

// useEffect(() => {
//   const Key =weatherContext.citySearch?.Key
// }, [weatherContext.citySearch?.Key])
  
console.log(keyFocus);
const MAX_LENGTH = 80

  return(
    <div>
      {
          <div  className={focused ? classes["form-under"]:classes["form-transparent"]}>
            {cities?.length > 1 && cities?.map((item: any, index:any, key:any) =>
              
              <div key={item.place_id}
               onClick={(e) => handleOnAutocompleteClick(e, item?.lat, item?.lon)}
            
            className={classes["navDropDown-container"]}>
              <p   className={classes[`navDropDown-container-p${keyFocus === index ? "-active" : ""}`]}>{`${item?.display_name.substring(0, MAX_LENGTH)}...`}</p>
             </div>)}
          </div>}
    </div>
  )
}