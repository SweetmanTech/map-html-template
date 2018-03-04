document.addEventListener('DOMContentLoaded', function() {
  let mymap = L.map('mapid').setView([39.1329, -84.5150], 13),
      corner1 = L.latLng(39.224611, -84.618692),
      corner2 = L.latLng(39.071250, -84.364633),
      bounds = L.latLngBounds(corner1, corner2),
      neighborhoods = L.featureGroup([
        L.marker([39.1031, -84.5120], { title:"Cincinnatus"}),
        L.marker([39.1486, -84.5903], { title:"Westwood"}),
        L.marker([39.1139481, -84.5913335], { title:"West Price Hill"}),
        L.marker([39.1118, -84.5248], { title:"West End"}),
        L.marker([39.1405, -84.4802], { title:"Walnut Hills"}),
        L.marker([39.164594, -84.518127], { title:"Spring Grove Village"}),
        L.marker([39.130971, -84.572550], { title:"South Fairmont"}),
        L.marker([39.130971, -84.572550], { title:"South Fairmont"}),
        L.marker([39.1546, -84.5510], { title:"South Cumminsville"}),
        L.marker([39.1546, -84.5510], { title:"Sayler Park"})
      ]),
      neighborhoodsOn = true;

  neighborhoods.addTo(mymap);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'MaxLand built @ RevolutionUC',
      maxZoom: 18,
      maxBounds: bounds,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoicGF0cmlja3N3ZWV0bWFuIiwiYSI6ImNqZWJ0aWszYjBnbDQyeHBieTE1ZmIycXMifQ.EbwMzqH3TpFlJk6EonENrQ'
  }).addTo(mymap);
  mymap.setMaxBounds([
    corner1,
    corner2
  ]);

  //HIDES neighborhood FeatureGroup on ClickListener
  $("#toggleNeighborhood").click( () => {
    if(neighborhoodsOn) {
      mymap.removeLayer(neighborhoods);
    } else {
      mymap.addLayer(neighborhoods);
    }
    neighborhoodsOn = !neighborhoodsOn;
  })

});
