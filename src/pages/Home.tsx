import React from "react";
import GeoLocationComponent from "../components/GeoLocation/GeoLocationComponent";
import Autocomplete from "../components/placesAutocomplete";


const Home: React.FC = () => {

  // const [coords, setCoords] = useState(Object)
  // const { location } = useCustomSelector((state)=> state)
  // const dispatch = useCustomDispatch();
  // //console.log(location);
  // useEffect(() => {
    
  //   getUserLocation().then((coords:any)=>{
  //     setCoords(coords)
  //   });
  // }, [])
  
  
  
  // //console.log(coords);
  // //getCurrentCity()


  // const handleOnClick = () => {
  //   dispatch(setGeoLocation({lat:coords.lat,lng:coords.lng}));
  // }
  // console.log(location);
  

  return(
    <div>
      HOME
      {/* <button onClick={handleOnClick}></button> */}
      <GeoLocationComponent/>
      <Autocomplete/>
    </div>
  )
}
export default Home