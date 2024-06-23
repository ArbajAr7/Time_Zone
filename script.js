
// const apiKey = "20b5869752bc493fa5f52700caeb84f6";

// function getTimezoneByAddress() {
//   const liveAddress = document.getElementById("input-field").value;
//   if (liveAddress) {
//     fetch(
//       `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
//           liveAddress
//       )}&apiKey=${apiKey}`
//     )
//       .then((resp) => resp.json())
//       .then((result) => {
//         if (result.features && result.features.length) {
//           const properties = result.features[0].properties;

//           const timezone = properties.timezone.name;
//           document.getElementById("Tzone").innerHTML = `Name Of Time Zone: ${timezone}`;

//           const offsetSTD = properties.timezone.offset_std;
//           document.getElementById("Offset-STD").innerHTML = `Offset STD: ${offsetSTD}`;

//           const offsetSTDSeconds = properties.timezone.offset_std_sec;
//           document.getElementById("Offset-STD-Seconds").innerHTML = `Offset STD Seconds: ${offsetSTDSeconds}`;

//           const offsetDST = properties.timezone.offset_dst;
//           document.getElementById("Offset-DSt").innerHTML = `Offset DSt: ${offsetDST}`;

//           const offsetDSTSeconds = properties.timezone.offset_dst_sec;
//           document.getElementById("Offset-DST-Seconds").innerHTML = `Offset DST Seconds: ${offsetDSTSeconds}`;

//           const country = properties.country;
//           document.getElementById("Countryy").innerHTML = `Country: ${country}`;

//           const postcode = properties.postcode;
//           document.getElementById("Post-code").innerHTML = `Postcode: ${postcode}`;

//           const city = properties.city;
//           document.getElementById("cityy").innerHTML = `City: ${city}`;

//           const latitude = result.features[0].geometry.coordinates[1];
//           document.getElementById("lati").innerHTML = `Lat: ${latitude}`;

//           const longitude = result.features[0].geometry.coordinates[0];
//           document.getElementById("longi").innerHTML = `Long: ${longitude}`;


//           document.getElementById("output").style.display = "none";
//             } else {
//               document.getElementById("output").innerHTML =
//                 "No timezone information found for the entered address.";
//             }
//       })
//       .catch((error) => {

//         document.getElementById("output").innerHTML = `Error fetching timezone: ${error.message}`;
//       });
//   } else {
//     document.getElementById("output").innerHTML = "Please enter an address!";
//   }
// }














const apiKey = "20b5869752bc493fa5f52700caeb84f6"; 

      
      function fetchUserTimezone(lat, lon) {
        fetch(
          `https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=e4b62587dab94b78b73b98eccd76326b`
        )
          .then((resp) => resp.json())
          .then((result) => {
            if (result.features && result.features.length) {

                const properties = result.features[0].properties;

              const timezone = result.features[0].properties.timezone.name;
              document.getElementById( "Tzone" ).innerHTML = `Name Of Time Zone:  ${timezone}`;

              const offsetSTD = properties.timezone.offset_std;
              document.getElementById('Offset-STD').innerHTML =`Offset STD:  ${offsetSTD}`;

              const offsetSTDSeconds = properties.timezone.offset_std_sec;
              document.getElementById('Offset-STD-Seconds').innerHTML =`Offset STD Seconds:  ${offsetSTDSeconds}`;

              const offsetDST = properties.timezone.offset_dst;
              document.getElementById('Offset-DSt').innerHTML =`Offset DSt:  ${offsetDST}`;

              const offsetDSTSeconds = properties.timezone.offset_dst_sec;
              document.getElementById('Offset-DST-Seconds').innerHTML =`Offset DST Seconds:  ${offsetDSTSeconds}`;

              const country = properties.country;
              document.getElementById('Countryy').innerHTML =`Country:  ${country}`;

              const postcode = properties.postcode;
              document.getElementById('Post-code').innerHTML =`Postcode:  ${postcode}`;

              const city = properties.city;
              document.getElementById('cityy').innerHTML =`City:  ${city}`;

              const latitude = result.features[0].geometry.coordinates[1];
              document.getElementById('lati').innerHTML =`Lat:  ${latitude}`;

              const longitude = (result.features[0].geometry.coordinates[0]);
              document.getElementById('longi').innerHTML =`Long:  ${longitude}`;

            } else {
              document.getElementById("output").innerHTML =
                "No timezone information found for your location.";
            }
          })
          .catch((error) => {
            document.getElementById(
              "output"
            ).innerHTML = `Error fetching timezone: ${error.message}`;
          });
      }

      // Function to get user's current location and fetch timezone
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchUserTimezone(lat, lon);
          });
        } else {
          document.getElementById("output").innerHTML =
            "Please enter an address!";
        }
      }

      // Automatically fetch and display user's current timezone on page load
      getLocation();