import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from "../RestaurantCards/RestaurantCard.module.scss";
import { RestaurantsInterface } from '../../interfaces/restaurantsInterface';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/redux/useLocation';
import { useEffect, useState } from 'react';
import { getRestaurantsReview } from '../../../redux/slices/restaurantsReviewSlice';
import ReviewsModal from '../ReviewsModal/ReviewsModal'



function RestaurantCards({restaurantsProps}:any) {
  //console.log(restaurantsProps);

  const { data,loading,inSuccess,error } = useCustomSelector((state)=> state.restaurantsReview)
  //const [restaurantsReview, setRestaurantsReview] = useState<Array<RestaurantsInterface>>([])
  const [show, setShow] = useState(false);
  const [modalProps, setModalProps] = useState([]);
  //console.log(restaurantsProps);
  
  // useEffect(() => {
  //   setRestaurantsReview(data)
    
  // }, [data])
  const dispatch = useCustomDispatch();

  const handleOnClick = (restaurantsProps:any)=>{
    //console.log(restaurantsProps.id);

    dispatch(getRestaurantsReview(restaurantsProps.id));
    setModalProps(restaurantsProps)
    setShow(true);
    //console.log(show);
    
  }
  //console.log(restaurantsReview);
  
  
  const restaurantsModalProps = {
    modalProps,
    show,
    setShow
  }
  
  //console.log(RestaurantsProps.map((el:any) => {el.name}));
  
  return (
    <>
    <div>
    <Card style={{ width: '18rem' }} className={classes["card-total"]}>
      <Card.Body className={classes["card-body"]}>
      <Card.Img variant="top" src={restaurantsProps.image_url} className={classes["card-img"]} alt={`${restaurantsProps.name} Image is not available`}/>
        <Card.Title className={classes["card-title"]}>{restaurantsProps.name}</Card.Title>
        <Card.Text className={classes["card-text"]}>
          <h5>
            {`Rating: ${restaurantsProps.rating}`}
          </h5>
        </Card.Text>
        <Button onClick={()=>handleOnClick(restaurantsProps)} variant="primary" className={classes["card-button"]}>Show Details</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
      {!loading && <ReviewsModal restaurantsModalProps={restaurantsModalProps}  /> }
    </div>
 
  </>
  );
}

export default RestaurantCards;