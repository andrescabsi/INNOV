    google.maps.event.addDomListener(window, 'load', function() {
      var mapdiv = document.getElementById('user_gmap');
      var myOptions = {
      zoom: 14,
      center: new google.maps.LatLng(4.6545171071842875,-74.05611676626586),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,

    //Estilos Array
      styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]

      };

      var map = new google.maps.Map(mapdiv, myOptions);
      var marker = new google.maps.Marker({
      position: new google.maps.LatLng(4.6545171071842875,-74.05611676626586),
      map: map, 
      title: 'INNOV'
      });
      /*
      var infowindow = new google.maps.InfoWindow({
      content: '<p id="tag_google_maps_inicio"><strong>INNOV</strong><br />Correo: info@innov.com.co<br />Teléfono: ( 57-1) 680 11 26</p>',
      size: new google.maps.Size(200, 200)
      });
      */

      google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
      });
      //infowindow.open(map,marker);
    });