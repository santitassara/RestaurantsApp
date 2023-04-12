import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from "../RestaurantCards/RestaurantCard.module.scss";
import { useCustomDispatch, useCustomSelector } from '../../../hooks/redux/useLocation';
import { useState } from 'react';
import { getRestaurantsReview } from '../../../redux/slices/restaurantsReviewSlice';
import ReviewsModal from '../ReviewsModal/ReviewsModal'



function RestaurantCards({restaurantsProps}:any) {
  const { data,loading,inSuccess,error } = useCustomSelector((state)=> state.restaurantsReview)
  const [show, setShow] = useState(false);
  const [modalProps, setModalProps] = useState([]);
  const dispatch = useCustomDispatch();

  const handleOnClick = (restaurantsProps:any)=>{
    dispatch(getRestaurantsReview(restaurantsProps.id));
    setModalProps(restaurantsProps)
    setShow(true);
  }
  
  const restaurantsModalProps = {
    modalProps,
    show,
    setShow
  }
  
  
  return (
    <>
    <div>
    <Card style={{ width: '18rem' }} className={classes["card-total"]}>
      <Card.Body className={classes["card-body"]}>
      <Card.Img variant="top" src={restaurantsProps.image_url} className={classes["card-img"]} alt={`${restaurantsProps.name} Image is not available`}/>
        <Card.Title className={classes["card-title"]}>{restaurantsProps.name}</Card.Title>
        <span className={classes["card-text"]}>
          <h5>
            {`Rating: ${restaurantsProps.rating}`}
          </h5>
        </span>
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