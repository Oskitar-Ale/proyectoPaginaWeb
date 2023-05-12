function iniciarMap(){
    var coord = {lat:-17.6683437 ,lng: -71.3872298};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 13,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}