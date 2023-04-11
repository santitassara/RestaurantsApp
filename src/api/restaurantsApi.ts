
import axios from "axios";
import { RestaurantsInterface } from "../components/interfaces/restaurantsInterface";



export const getCurrentRestaurants = async (args:any)=>{
let restaurants :Array<RestaurantsInterface> = []
console.log(args);

const options = {
  method: 'GET',
  url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
  params: {
    latitude: args.lat,
    longitude:  args.lon,
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
	console.log(response.data);
  restaurants = response.data
}).catch(function (error) {
	console.error(error);
});
return restaurants;
}

export const getCurrentRestaurantsReview = async (args:any)=>{
  let restaurantsReview :any= []
  console.log(args);
  
  const options = {
    method: 'GET',
    url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${args}/reviews`,
    params: {limit: '20', sort_by: 'yelp_sort'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 43ciDFl7Qb2XJ8GUksJbSNxILP9TE5i37SIvukf_9AyndZvmOQXkGf1kwgCwDYMr732E3fcFO_W1HV-E80O50gQI5hYKOn8jhKEStGtKbef7xeKCU8kkuSn-F101ZHYx'
    }
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    restaurantsReview = response.data
  }).catch(function (error) {
    console.error(error);
  });
  return restaurantsReview;
  }

// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
//   params: {
//     latitude: args.lat,
//     longitude: args.lon,
//   },
//   headers: {
//     'X-RapidAPI-Key': '907180f5dfmshc1893f4b46e66bbp17a16djsnadf45dbe86f9',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };