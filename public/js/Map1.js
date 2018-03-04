document.addEventListener('DOMContentLoaded', function() {
  let mymap = L.map('mapid').setView([39.1329, -84.5150], 13),
      joinedData = requestFile("../data/full_joined.csv");
      corner1 = L.latLng(39.235646, -84.684781),
      corner2 = L.latLng(38.991082, -84.236244),
      bounds = L.latLngBounds(corner1, corner2),
      neighborhoods = L.featureGroup([
        L.marker([39.1031, -84.5120], { title:"Cincinnati" }).bindPopup(getNeighborhoodData("Cincinnati")).openPopup(),
        L.marker([39.1486, -84.5903], { title:"Westwood"}).bindPopup(getNeighborhoodData("WESTWOOD")).openPopup(),
        L.marker([39.1139481, -84.5913335], { title:"West Price Hill"}).bindPopup(getNeighborhoodData("WEST PRICE HILL")).openPopup(),
        L.marker([39.1118, -84.5248], { title:"West End"}).bindPopup(getNeighborhoodData("WEST END")).openPopup(),
        L.marker([39.1405, -84.4802], { title:"Walnut Hills"}).bindPopup(getNeighborhoodData("WALNUT HILLS")).openPopup(),
        L.marker([39.164594, -84.518127], { title:"Spring Grove Village"}).bindPopup(getNeighborhoodData("SPRING GROVE VILLAGE")).openPopup(),
        L.marker([39.130971, -84.572550], { title:"South Fairmont"}).bindPopup(getNeighborhoodData("SOUTH FAIRMONT")).openPopup(),
        L.marker([39.1546, -84.5510], { title:"South Cumminsville"}).bindPopup(getNeighborhoodData("SOUTH CUMINSVILLE")).openPopup(),
        L.marker([39.1546, -84.5510], { title:"Sayler Park"}).bindPopup(getNeighborhoodData("SAYLER PARK")).openPopup(),
        L.marker([39.1971, -84.4619], { title:"Roselawn"}).bindPopup(getNeighborhoodData("ROSELAWN")).openPopup(),
        L.marker([39.0768, -84.6120], { title:"Riverside"}).bindPopup(getNeighborhoodData("RIVERSIDE")).openPopup(),
        L.marker([39.1800, -84.4304], { title:"Pleasant Ridge"}).bindPopup(getNeighborhoodData("PLEASANT RIDGE")).openPopup(),
         L.marker([39.1104, -84.5085], { title:"Pendleton"}).bindPopup(getNeighborhoodData("PENDLETON")).openPopup(),
         L.marker([39.1128, -84.5183], { title:"Over-the-Rhine"}).bindPopup(getNeighborhoodData("OVER-THE-RHINE")).openPopup(),
         L.marker([39.1511, -84.4225], { title:"Oakley"}).bindPopup(getNeighborhoodData("OAKLEY")).openPopup(),
         L.marker([39.1669, -84.5379], { title:"Northside"}).bindPopup(getNeighborhoodData("NORTHSIDE")).openPopup(),
         L.marker([39.1382, -84.5602], { title:"North Fairmount"}).bindPopup(getNeighborhoodData("NORTH FAIRMONT")).openPopup(),
         L.marker([39.1615, -84.4776], { title:"North Avondale - Paddock Hills"}).bindPopup(getNeighborhoodData("NORTH AVONDALE - PADDOCK HILLS")).openPopup(),
         L.marker([39.0868, -84.3805], { title:"Mt. Washington"}).bindPopup(getNeighborhoodData("MT. WASHINGTON")).openPopup(),
         L.marker([39.1276, -84.4199], { title:"Mt. Lookout"}).bindPopup(getNeighborhoodData("MT. LOOKOUT")).openPopup(),
         L.marker([39.1200, -84.5083], { title:"Mt. Auburn"}).bindPopup(getNeighborhoodData("MT. AUBURN")).openPopup(),
         L.marker([39.1914, -84.5702], { title:"Mt. Airy"}).bindPopup(getNeighborhoodData("MT. AIRY")).openPopup(),
         L.marker([39.1091, -84.4947], { title:"Mt. Adams"}).bindPopup(getNeighborhoodData("MT. ADAMS")).openPopup(),
         L.marker([39.1456, -84.5524], { title:"Millvale"}).bindPopup(getNeighborhoodData("MILLVALE")).openPopup(),
         L.marker([39.1600, -84.3910], { title:"Madisonville"}).bindPopup(getNeighborhoodData("MADISONVILLE")).openPopup(),
         L.marker([39.1053, -84.5516], { title:"Lower Price Hill"}).bindPopup(getNeighborhoodData("LOWER PRICE HILL")).openPopup(),
         L.marker([39.1267, -84.4097], { title:"Linwood"}).bindPopup(getNeighborhoodData("LINWOOD")).openPopup(),
         L.marker([39.1842, -84.4094], { title:"Kennedy Heights"}).bindPopup(getNeighborhoodData("KENNEDY HEIGHTS")).openPopup(),
         L.marker([39.1314, -84.4435], { title:"Hyde Park"}).bindPopup(getNeighborhoodData("HYDE PARK")).openPopup(),
         L.marker([39.2134, -84.4686], { title:"Hartwell"}).bindPopup(getNeighborhoodData("HARTWELL")).openPopup(),
         L.marker([39.1405, -84.4724], { title:"Evanston"}).bindPopup(getNeighborhoodData("EVANSTON")).openPopup(),
         L.marker([39.1501, -84.5668], { title:"East Westwood"}).bindPopup(getNeighborhoodData("EAST WESTWOOD")).openPopup(),
         L.marker([39.1252, -84.4776], { title:"East Walnut Hills"}).bindPopup(getNeighborhoodData("EAST WALNUT HILLS")).openPopup(),
         L.marker([39.1061, -84.5694], { title:"East Price Hill"}).bindPopup(getNeighborhoodData("EAST PRICE HILL")).openPopup(),
         L.marker([39.1178, -84.4464], { title:"East End"}).bindPopup(getNeighborhoodData("EAST END")).openPopup(),
         L.marker([39.1017, -84.5126], { title:"Downtown"}).bindPopup(getNeighborhoodData("DOWNTOWN")).openPopup(),
         L.marker([39.1274, -84.5258], { title:"CUF"}).bindPopup(getNeighborhoodData("CUF")).openPopup(),
         L.marker([39.1368, -84.5039], { title:"Corryville"}).bindPopup(getNeighborhoodData("CORRYVILLE")).openPopup(),
         L.marker([39.1152, -84.4361], { title:"Columbia Tusculum"}).bindPopup(getNeighborhoodData("COLUMBIA TUSCULUM")).openPopup(),
         L.marker([39.2184, -84.5508], { title:"College Hill"}).bindPopup(getNeighborhoodData("COLLEGE HILL")).openPopup(),
         L.marker([39.1531, -84.5196], { title:"Clifton"}).bindPopup(getNeighborhoodData("CLIFTON")).openPopup(),
         L.marker([39.1956, -84.4855], { title:"Carthage"}).bindPopup(getNeighborhoodData("CARTHAGE")).openPopup(),
         L.marker([39.1385, -84.5406], { title:"Camp Washington"}).bindPopup(getNeighborhoodData("CAMP WASHINGTON")).openPopup(),
         L.marker([39.0653, -84.4199], { title:"California"}).bindPopup(getNeighborhoodData("CALIFORNIA")).openPopup(),
         L.marker([39.1743, -84.4750], { title:"Bond Hill"}).bindPopup(getNeighborhoodData("BOND HILL")).openPopup(),
         L.marker([39.1415, -84.4934], { title:"Avondale"}).bindPopup(getNeighborhoodData("AVONDALE")).openPopup(),
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

  function requestFile(filename) {
      let request_obj = new XMLHttpRequest();
      let dataMatrix = [];
      request_obj.responseType = 'text';
      request_obj.open("GET", filename);
      request_obj.send();
      request_obj.onload = function () {
          displayResponse(request_obj.responseText);
      };
      return dataMatrix;
  }

  function displayResponse(content) {
    let htmlData = "";
    var rowString = content.split('\n');
    var dataMatrix = [];
    for (var i = 0; i < rowString.length; i++) {
       dataMatrix.push(rowString[i].split(','));
     }
     console.log(dataMatrix);
  }

  function getNeighborhoodData(neighborhood) {
    let htmlTable = '<table class="table"><thead><tr><th scope="col">CRITERIA</th><th scope="col">VALUE</th></tr></thead><tbody>';


    return '<p>Hello Maxland!<br />This is a nice popup for ' + neighborhood + '</p>';
  }
});
