
//import { useCustomSelector } from "../../../hooks/redux/useLocation"
import { CitiesInterface } from "../../interfaces/citiesInterface"
import { searchPropsInterface } from "../../interfaces/globalInterfaces"
import classes from "../../SearchBar/SearchBar.module.scss"


export default function FormDropdown(searchProps: searchPropsInterface) {

  let { focused, handleOnAutocompleteClick, keyFocus, cities } = searchProps
  // const { data,loading,inSuccess,error } = useCustomSelector((state)=> state.cities)
  const MAX_LENGTH = 70
  return (
    <div>
      {
        <div className={focused ? classes["form-under"] : classes["form-transparent"]}>
          {cities?.length > 1 && cities?.map((item: CitiesInterface, index: number) =>

            <div key={item.place_id}
              onClick={(e) => handleOnAutocompleteClick(e, item?.lat, item?.lon)}

              className={classes["navDropDown-container"]}>
              <p className={classes[`navDropDown-container-p${keyFocus === index ? "-active" : ""}`]}>
                {`${item?.display_name?.substring(0, MAX_LENGTH)} ...`}</p>
            </div>)}
        </div>}
    </div>
  )
}