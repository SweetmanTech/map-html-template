document.addEventListener('DOMContentLoaded', function() {
  let joinedData = requestFile("../data/full_joined.csv"),
      neighborhoodsOn = true;

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
    let neighborhoodMatrix = [];
    var promise1 = new Promise(function(resolve, reject) {
      for (var i = 1; i < rowString.length; i++) {
        let row = rowString[i].split(',');
        let currentNeighborhood = row[0],
            total = 0,
            min = 1000000000,
            max = 0,
            count = 0;

            while(row[0] == currentNeighborhood && i < rowString.length) {
              count++;
              let value = parseInt(row[19]);
              total = parseInt(total) + parseInt(value);
              if (value > max) {
                max = value;
              }
              if (min > value) {
                min = value;
              }
              i++;
              if (i < rowString.length) {
                  row = rowString[i].split(',');
              }
              console.log(count);
            }
        let htmlTable = '<h4>' + currentNeighborhood + '</h4><table class="table"><thead><tr><th scope="col">CRITERIA</th><th scope="col">VALUE</th></tr></thead><tbody><tr><td>Min</td><td>' + min + '</td></tr><tr><td>Max</td><td> ' + max+ '</td></tr><tr><td>Average</td><td> ' + total/count + '</td></tr></tbody></table>';
        console.log(currentNeighborhood);
        if (currentNeighborhood) {
            currentNeighborhood = currentNeighborhood.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '');
            this[currentNeighborhood] = [min, max, total/count, htmlTable];
        }

       }

       resolve('Success!');
     });
     promise1.then(function(value) {
       displayMap();
     });
  }

  function displayMap() {
    let that = this;
    let noValuePopup = "<div class='text-center'><h5>No neighborhood data available, download data source:</h5><a href='https://maxland-a79e2.firebaseapp.com/data/full_joined.csv' class='btn btn-success'>Data</a></div>",
        neighborhoods = L.featureGroup([
          L.marker([39.1031, -84.5120], { title:"Cincinnati" }).bindPopup(getNeighborhoodData("Cincinnati")).openPopup(),
          L.marker([39.1486, -84.5903], { title:"Westwood"}).bindPopup(that["WESTWOOD"] ? that["WESTWOOD"][3] : noValuePopup).openPopup(),
          L.marker([39.1139481, -84.5913335], { title:"West Price Hill"}).bindPopup(that["WESTPRICEHILL"] ? that["WESTPRICEHILL"][3] : noValuePopup).openPopup(),
          L.marker([39.1118, -84.5248], { title:"West End"}).bindPopup(that["WESTEND"] ? that["WESTEND"][3] : noValuePopup).openPopup(),
          L.marker([39.1405, -84.4802], { title:"Walnut Hills"}).bindPopup(that["WALNUTHILLS"] ? that["WALNUTHILLS"][3] : noValuePopup).openPopup(),
          L.marker([39.164594, -84.518127], { title:"Spring Grove Village"}).bindPopup(that["SPRINGGROVEVILLAGE"] ? that["SPRINGGROVEVILLAGE"][3] : noValuePopup).openPopup(),
          L.marker([39.130971, -84.572550], { title:"South Fairmont"}).bindPopup(that["SOUTHFAIRMONT"] ? that["SOUTHFAIRMONT"][3] : noValuePopup).openPopup(),
          L.marker([39.1546, -84.5510], { title:"South Cumminsville"}).bindPopup(that["SOUTHCUMMINSVILLE"] ? that["SOUTHCUMMINSVILLE"][3] : noValuePopup).openPopup(),
          L.marker([39.1546, -84.5510], { title:"Sayler Park"}).bindPopup(that["SAYLERPARK"] ? that["SAYLERPARK"][3] : noValuePopup).openPopup(),
          L.marker([39.1971, -84.4619], { title:"Roselawn"}).bindPopup(that["ROSELAWN"] ? that["ROSELAWN"][3] : noValuePopup).openPopup(),
          L.marker([39.0768, -84.6120], { title:"Riverside"}).bindPopup(that["RIVERSIDE"] ? that["RIVERSIDE"][3] : noValuePopup).openPopup(),
          L.marker([39.1800, -84.4304], { title:"Pleasant Ridge"}).bindPopup(that["PLEASANTRIDGE"] ? that["PLEASANTRIDGE"][3] : noValuePopup).openPopup(),
           L.marker([39.1104, -84.5085], { title:"Pendleton"}).bindPopup(that["PENDLETON"] ? that["PENDLETON"][3] : noValuePopup).openPopup(),
           L.marker([39.1128, -84.5183], { title:"Over-the-Rhine"}).bindPopup(that["OVERTHERHINE"] ? that["OVERTHERHINE"][3] : noValuePopup).openPopup(),
           L.marker([39.1511, -84.4225], { title:"Oakley"}).bindPopup(that["OAKLEY"] ? that["OAKLEY"][3] : noValuePopup).openPopup(),
           L.marker([39.1669, -84.5379], { title:"Northside"}).bindPopup(that["NORTHSIDE"] ? that["NORTHSIDE"][3] : noValuePopup).openPopup(),
           L.marker([39.1382, -84.5602], { title:"North Fairmount"}).bindPopup(that["NORTHFAIRMONT"] ? that["NORTHFAIRMONT"][3] : noValuePopup).openPopup(),
           L.marker([39.1615, -84.4776], { title:"North Avondale - Paddock Hills"}).bindPopup(that["NORTHAVONDALEPADDOCKHILLS"] ? that["NORTHAVONDALEPADDOCKHILLS"][3] : noValuePopup).openPopup(),
           L.marker([39.0868, -84.3805], { title:"Mt. Washington"}).bindPopup(that["MTWASHINGTON"] ? that["MTWASHINGTON"][3] : noValuePopup).openPopup(),
           L.marker([39.1276, -84.4199], { title:"Mt. Lookout"}).bindPopup(that["MTLOOKOUT"] ? that["MTLOOKOUT"][3] : noValuePopup).openPopup(),
           L.marker([39.1200, -84.5083], { title:"Mt. Auburn"}).bindPopup(that["MTAUBURN"] ? that["MTAUBURN"][3] : noValuePopup).openPopup(),
           L.marker([39.1914, -84.5702], { title:"Mt. Airy"}).bindPopup(that["MTAIRY"] ? that["MTAIRY"][3] : noValuePopup).openPopup(),
           L.marker([39.1091, -84.4947], { title:"Mt. Adams"}).bindPopup(that["MTADAMS"] ? that["MTADAMS"][3] : noValuePopup).openPopup(),
           L.marker([39.1456, -84.5524], { title:"Millvale"}).bindPopup(that["MILLVALE"] ? that["MILLVALE"][3] : noValuePopup).openPopup(),
           L.marker([39.1600, -84.3910], { title:"Madisonville"}).bindPopup(that["MADISONVILLE"] ? that["MADISONVILLE"][3] : noValuePopup).openPopup(),
           L.marker([39.1053, -84.5516], { title:"Lower Price Hill"}).bindPopup(that["LOWERPRICEHILL"] ? that["LOWERPRICEHILL"][3]  : noValuePopup).openPopup(),
           L.marker([39.1267, -84.4097], { title:"Linwood"}).bindPopup(that["LINWOOD"] ? that["LINWOOD"][3] : noValuePopup).openPopup(),
           L.marker([39.1842, -84.4094], { title:"Kennedy Heights"}).bindPopup(that["KENNEDYHEIGHTS"] ? that["KENNEDYHEIGHTS"][3] : noValuePopup).openPopup(),
           L.marker([39.1314, -84.4435], { title:"Hyde Park"}).bindPopup(that["HYDEPARK"] ? that["HYDEPARK"][3] : noValuePopup).openPopup(),
           L.marker([39.2134, -84.4686], { title:"Hartwell"}).bindPopup(that["HARTWELL"] ? that["HARTWELL"][3] : noValuePopup).openPopup(),
           L.marker([39.1405, -84.4724], { title:"Evanston"}).bindPopup(that["EVANSTON"] ? that["EVANSTON"][3] : noValuePopup).openPopup(),
           L.marker([39.1501, -84.5668], { title:"East Westwood"}).bindPopup(that["EASTWESTWOOD"] ? that["EASTWESTWOOD"][3] : noValuePopup).openPopup(),
           L.marker([39.1252, -84.4776], { title:"East Walnut Hills"}).bindPopup(that["EASTWALNUTHILLS"] ? that["EASTWALNUTHILLS"][3] : noValuePopup).openPopup(),
           L.marker([39.1061, -84.5694], { title:"East Price Hill"}).bindPopup(that["EASTPRICEHILL"] ? that["EASTPRICEHILL"][3] : noValuePopup).openPopup(),
           L.marker([39.1178, -84.4464], { title:"East End"}).bindPopup(that["EASTEND"] ? that["EASTEND"][3] : noValuePopup).openPopup(),
           L.marker([39.1017, -84.5126], { title:"Downtown"}).bindPopup(that["DOWNTOWN"] ? that["DOWNTOWN"][3] : noValuePopup).openPopup(),
           L.marker([39.1274, -84.5258], { title:"CUF"}).bindPopup(that["CUF"] ? that["CUF"][3]  : noValuePopup).openPopup(),
           L.marker([39.1368, -84.5039], { title:"Corryville"}).bindPopup(that["CORRYVILLE"] ? that["CORRYVILLE"][3] : noValuePopup).openPopup(),
           L.marker([39.1152, -84.4361], { title:"Columbia Tusculum"}).bindPopup(that["COLUMBIATUSCULUM"] ? that["COLUMBIATUSCULUM"][3] : noValuePopup).openPopup(),
           L.marker([39.2184, -84.5508], { title:"College Hill"}).bindPopup(that["COLLEGEHILL"] ? that["COLLEGEHILL"][3] : noValuePopup).openPopup(),
           L.marker([39.1531, -84.5196], { title:"Clifton"}).bindPopup(that["CLIFTON"] ? that["CLIFTON"][3] : noValuePopup).openPopup(),
           L.marker([39.1956, -84.4855], { title:"Carthage"}).bindPopup(that["CARTHAGE"] ? that["CARTHAGE"][3] : noValuePopup).openPopup(),
           L.marker([39.1385, -84.5406], { title:"Camp Washington"}).bindPopup(that["CAMPWASHINGTON"] ? that["CAMPWASHINGTON"][3] : noValuePopup).openPopup(),
           L.marker([39.0653, -84.4199], { title:"California"}).bindPopup(that["CALIFORNIA"] ? that["CALIFORNIA"][3] : noValuePopup).openPopup(),
           L.marker([39.1743, -84.4750], { title:"Bond Hill"}).bindPopup(that["BONDHILL"] ? that["BONDHILL"][3] : noValuePopup).openPopup(),
           L.marker([39.1415, -84.4934], { title:"Avondale"}).bindPopup(that["AVONDALE"] ? that["AVONDALE"][3] : noValuePopup).openPopup(),
        ])

    neighborhoods.addTo(mymap);

    //HIDES neighborhood FeatureGroup on ClickListener
    $("#toggleNeighborhood").click( () => {
      if(neighborhoodsOn) {
        mymap.removeLayer(neighborhoods);
      } else {
        mymap.addLayer(neighborhoods);
      }
      neighborhoodsOn = !neighborhoodsOn;
    })

  }

  function getNeighborhoodData(neighborhood) {
    let average = 0,
        max = 0,
        min = 1000000000000,
        count = 0;
    let neighborhoodData = this[neighborhood];
    $("#" + neighborhood).val("hey pat!");
    return "AVERAGE, MAX, and MIN data for " + neighborhood;
  }
});
