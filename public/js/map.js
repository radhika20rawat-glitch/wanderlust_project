mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  zoom: 9,
  pitch: 75,
  center: listing.geometry.coordinates,
  style: 'mapbox://styles/mapbox/standard',
});

// console.log(coordinates);
const marker = new mapboxgl.Marker({color:"red"})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
    `<h4>${listing.location}</h4><p> exact location will be provided after booking</p>`
  ))
  .addTo(map);

