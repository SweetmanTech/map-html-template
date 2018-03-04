document.addEventListener('DOMContentLoaded', function() {
  var mymap = L.map('mapid').setView([39.1031, -84.5120], 13);
  L.marker([39.1031, -84.5120], { title:"Cincinnati"}).addTo(mymap);
  L.marker([39.1486, -84.5903], { title:"Westwood"}).addTo(mymap);
  L.marker([39.1139481, -84.5913335], { title:"West Price Hill"}).addTo(mymap);
  L.marker([39.1118, -84.5248], { title:"West End"}).addTo(mymap);
  L.marker([39.1405, -84.4802], { title:"Walnut Hills"}).addTo(mymap);
  L.marker([39.164594, -84.518127], { title:"Spring Grove Village"}).addTo(mymap);
  L.marker([39.130971, -84.572550], { title:"South Fairmont"}).addTo(mymap);
  L.marker([39.1546, -84.5510], { title:"South Cumminsville"}).addTo(mymap);
  L.marker([39.1546, -84.5510], { title:"Sayler Park"}).addTo(mymap);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'MaxLand built @ RevolutionUC',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoicGF0cmlja3N3ZWV0bWFuIiwiYSI6ImNqZWJ0aWszYjBnbDQyeHBieTE1ZmIycXMifQ.EbwMzqH3TpFlJk6EonENrQ'
  }).addTo(mymap);
});
