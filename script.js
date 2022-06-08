function localizar(){
 navigator.geolocation.getCurrentPosition(showPosition)
}

function showPosition(pos){
  var lt = -20.265729
  var lg = -40.283797
  
  var map = L.map('map').setView([lt, lg], 13);
  var marker = L.marker([lt, lg]).addTo(map);
  marker.bindPopup("<b>Estou Aqui!</b><br>Já estou a Caminho").openPopup();
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5kcmVwcmFkbyIsImEiOiJjbDMxaGNwZGMwOXB3M2RrYzluMjRxOTUxIn0.88kdNyU-4_sfNmpdvG7OIA'
}).addTo(map);

  
}