

export const getUserLocation = async (): Promise<{ lat: number, lng: number }> => {

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        resolve({lng:coords.longitude, lat:coords.latitude})
      },
      ( err ) => {
        alert("Cannot get Geolocation!")
        console.log(err);
        reject();
      }
    )

  });

  
}