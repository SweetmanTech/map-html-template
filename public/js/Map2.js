document.addEventListener('DOMContentLoaded', function() {
  let foreclosureData = requestFile("../data/foreclosure.csv"),
      foreclosuresOn = true;

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
    let foreclosures = L.featureGroup([L.marker([39.1031, -84.5120], { title:"Cincinnati" }).bindPopup("Cincinnati").openPopup()]);
    let htmlData = "";
    var rowString = content.split('\n');
    var dataMatrix = [];
    let foreclosureMatrix = [];
    var promise2 = new Promise(function(resolve, reject) {
      let that = this;
      let noValuePopup = "<div class='text-center'><h3>No Foreclosure Data Available, view data source:</h3><a href='https://maxland-a79e2.firebaseapp.com/data/foreclosure.csv' class='btn btn-success'>Data</a></div>";

      //HIDES Foreclosure FeatureGroup on ClickListener
      $("#toggleForeclosure").click( function() {
        if(foreclosuresOn) {
          mymap.removeLayer(foreclosures);
        } else {
          mymap.addLayer(foreclosures);
        }
        foreclosuresOn = !foreclosuresOn;
      })
      for (var i = 1; i < rowString.length; i++) {
        let row = rowString[i].split(',');
        let currentForeclosure = row[0];

        let htmlTable = '<table class="table"><thead><tr><th scope="col">CRITERIA</th><th scope="col">VALUE</th></tr></thead><tbody><tr><td>Min</td><td>' + "min" + '</td></tr><tr><td>Max</td><td> ' + "max" + '</td></tr><tr><td>Average</td><td> ' + "total/count" + '</td></tr></tbody></table>';
        if (currentForeclosure) {
          L.marker([row[8], row[9]], { title:row[0] }).bindPopup( '<h4>' + row[0] + '</h4><table class="table"><thead><tr><th scope="col">CRITERIA</th><th scope="col">VALUE</th></tr></thead><tbody> ' +
              '<tr><td>  Neighborhood</td><td> ' + row[10] + '</td></tr>' +
              '<tr><td>Sub Type</td><td>' + row[1] + '</td></tr>' +
              '<tr><td>Sub Desc</td><td> ' + row[2] + '</td></tr>' +
              '<tr><td>  Status</td><td> ' + row[4] + '</td></tr>' +
              '<tr><td>  URL</td><td><a href=' + row[6] + ' target="_blank"> link</a></td></tr>' +
              '</tbody></table>').openPopup().addTo(foreclosures);
        }
       }
       resolve('Success!');
     });
     promise2.then(function(value) {
       foreclosures.addTo(mymap);
     });
  }

  function displayMap() {


  }

});
