
import axios from "axios";
import { CityApiInterface, CoordsInterface } from "../components/interfaces/globalInterfaces";
import { restaurantsReviewInterface } from "../components/interfaces/restaurantReviewsInterface";
import { RestaurantsInterface } from "../components/interfaces/restaurantsInterface";


export const getCurrentRestaurants = async (args: CoordsInterface) => {
  let restaurants: Array<RestaurantsInterface> = []

  const options = {
    method: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
    params: {
      latitude: args.lat,
      longitude: args.lon,
      radius: '100',
      sort_by: 'rating',
      limit: '20'
    },
    headers: {
      accept: 'application/json',
      "x-requested-with": "xmlhttprequest",
      "Access-Control-Allow-Origin": "*",
      Authorization: 'Bearer 6qknuTFvcizPeh9vAipLhH-H0_UrOX8emsftRtjjuOr24xLnZMaw9XFaUVWEpI8vF66IMzR2Tvf33eu8cK4QvQcM5XU9EXztH1a-4_go9eRvBbMolpIvUvTp2Mw1ZHYx'
    }
  };

  await axios.request(options).then(function (response) {

    restaurants = response.data
  }).catch(function (error) {
    console.error(error);
  });
  return restaurants;
}

export const getCurrentRestaurantsReview = async (args: CityApiInterface) => {
  let restaurantsReview: Array<restaurantsReviewInterface> = []


  const options = {
    method: 'GET',
    url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${args}/reviews`,
    params: { limit: '20', sort_by: 'yelp_sort' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 6qknuTFvcizPeh9vAipLhH-H0_UrOX8emsftRtjjuOr24xLnZMaw9XFaUVWEpI8vF66IMzR2Tvf33eu8cK4QvQcM5XU9EXztH1a-4_go9eRvBbMolpIvUvTp2Mw1ZHYx'
    }
  };

  await axios.request(options).then(function (response) {

    restaurantsReview = response.data
  }).catch(function (error) {
    console.error(error);
  });
  return restaurantsReview;
}
