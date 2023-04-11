import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import { useCustomSelector } from '../../../hooks/redux/useLocation';
import classes from "../ReviewsModal/ReviewModal.module.scss";
import { RestaurantsInterface } from '../../interfaces/restaurantsInterface';

export default function ReviewsModal({restaurantsModalProps}:any) {
  

  const { data,loading,inSuccess,error } = useCustomSelector((state)=> state.restaurantsReview)
  const [restaurantsReview, setRestaurantsReview] = useState([] as any[])

  useEffect(() => {
    setRestaurantsReview(data)
    
  }, [data])
  
  const handleClose = () => restaurantsModalProps.setShow(false);
 console.log(restaurantsModalProps);
 

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal className={classes["reviewContainer"]}  show={restaurantsModalProps?.show} onHide={handleClose} animation={true}>
        <Modal.Header className={classes["reviewContainer-header"]}  closeButton>
          <Modal.Title>{restaurantsModalProps?.modalProps?.name}</Modal.Title>
          <Modal.Title>{restaurantsModalProps?.modalProps?.location?.address1}</Modal.Title>
        
          <Modal.Title>{`Type : ${restaurantsModalProps?.modalProps?.categories?.[0]?.title}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>Reviews :</h3>
  {restaurantsReview?.length ? restaurantsReview?.map((review)=> (
    
    <div key={review?.id}>
      <h4>{`${review?.user?.name} said :`}</h4>
      <p>{review?.text}</p>
    </div>
  )):<p>No Reviews Yet :(</p>}
        <Image className={classes["reviewContainer-img"]} src={restaurantsModalProps?.modalProps?.image_url} alt={`${restaurantsModalProps?.modalProps?.name} Image is not available`}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

