import React from "react";

function MapExample() {
  const mapRef = React.useRef(null);

  fetch('https://api-node-bl.mojodynamics.site/get_page_vists_location' ,{
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  
  } ).then(result => result.json())
   .then(data => {
        console.log( data.result);
          var size = data.result.length;
          let google = window.google;
          let map = mapRef.current;
          let lat = "31.577897";
          let lng = "-285.677171";
          const myLatlng = new google.maps.LatLng(lat, lng);
          const mapOptions = {
            zoom: 5,
            center: myLatlng,
            scrollwheel: false,
            zoomControl: true,
            styles: [
              {
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [{ color: "#444444" }],
              },
              {
                featureType: "landscape",
                elementType: "all",
                stylers: [{ color: "#f2f2f2" }],
              },
              {
                featureType: "poi",
                elementType: "all",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "road",
                elementType: "all",
                stylers: [{ saturation: -100 }, { lightness: 45 }],
              },
              {
                featureType: "road.highway",
                elementType: "all",
                stylers: [{ visibility: "simplified" }],
              },
              {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "transit",
                elementType: "all",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "water",
                elementType: "all",
                stylers: [{ color: "#4299e1" }, { visibility: "on" }],
              },
            ],
          };
      
          map = new google.maps.Map(map, mapOptions);
          for (var i= 0; i<size ; i++)
          {
         
            new google.maps.Marker({
              position: new google.maps.LatLng(data.result[i]['latitude'], data.result[i]['lingitude']),
              map: map,
              animation: google.maps.Animation.DROP,
              
           
            });
          }
      
          const contentString =
            '<div class="info-window-content"><h2>BIP</h2>' +
            "<p>Thsi map shows location of products sold.</p></div>";
      
          const infowindow = new google.maps.InfoWindow({
            content: contentString,
          });
      
          // google.maps.event.addListener(marker, "click", function () {
          //   infowindow.open(map, marker  );
          // });
        
   });
  // React.useEffect(() => {
  //   let google = window.google;
  //   let map = mapRef.current;
  //   let lat = "31.577897";
  //   let lng = "-285.677171";
  //   const myLatlng = new google.maps.LatLng(lat, lng);
  //   const mapOptions = {
  //     zoom: 5,
  //     center: myLatlng,
  //     scrollwheel: false,
  //     zoomControl: true,
  //     styles: [
  //       {
  //         featureType: "administrative",
  //         elementType: "labels.text.fill",
  //         stylers: [{ color: "#444444" }],
  //       },
  //       {
  //         featureType: "landscape",
  //         elementType: "all",
  //         stylers: [{ color: "#f2f2f2" }],
  //       },
  //       {
  //         featureType: "poi",
  //         elementType: "all",
  //         stylers: [{ visibility: "off" }],
  //       },
  //       {
  //         featureType: "road",
  //         elementType: "all",
  //         stylers: [{ saturation: -100 }, { lightness: 45 }],
  //       },
  //       {
  //         featureType: "road.highway",
  //         elementType: "all",
  //         stylers: [{ visibility: "simplified" }],
  //       },
  //       {
  //         featureType: "road.arterial",
  //         elementType: "labels.icon",
  //         stylers: [{ visibility: "off" }],
  //       },
  //       {
  //         featureType: "transit",
  //         elementType: "all",
  //         stylers: [{ visibility: "off" }],
  //       },
  //       {
  //         featureType: "water",
  //         elementType: "all",
  //         stylers: [{ color: "#4299e1" }, { visibility: "on" }],
  //       },
  //     ],
  //   };

  //   map = new google.maps.Map(map, mapOptions);

  //   const marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map,
  //     animation: google.maps.Animation.DROP,
  //   });
  //   const marker2 = new google.maps.Marker({
  //     position: new google.maps.LatLng("33.85514", "-286.798667"),
  //     map: map,
  //     animation: google.maps.Animation.DROP,
  //   });
  //   const marker3 = new google.maps.Marker({
  //     position: new google.maps.LatLng("24.931619", "-292.733667"),
  //     map: map,
  //     animation: google.maps.Animation.DROP,
  //   });
  //   const marker4 = new google.maps.Marker({
  //     position: new google.maps.LatLng("26.273714", "-295.070435"),
  //     map: map,
  //     animation: google.maps.Animation.DROP,
  //   });
  //   const marker5 = new google.maps.Marker({
  //     position: new google.maps.LatLng("33.755891", "-288.770013"),
  //     map: map,
  //     animation: google.maps.Animation.DROP,
  //   });

  //   const contentString =
  //     '<div class="info-window-content"><h2>Notus React</h2>' +
  //     "<p>A free Admin for Tailwind CSS, React, and React Hooks.</p></div>";

  //   const infowindow = new google.maps.InfoWindow({
  //     content: contentString,
  //   });

  //   google.maps.event.addListener(marker, "click", function () {
  //     infowindow.open(map, marker  );
  //   });
  // });
  return (
    <>
      <div className="relative w-full rounded h-500-px">
        <div className="rounded h-full" ref={mapRef} />
      </div>
    </>
  );
}

export default MapExample;
