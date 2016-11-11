			(function(){
				"use strict";
					
					var input_location = "";
					var content = "";
					var tomorrow_content = "";
					var day_three_content = "";

					function showWeatherInformation (weatherData) {
						var content = "";
						var tomorrow_content = "";
						var day_three_content = "";

						var icon = weatherData.list[0].weather[0].icon;
						var location = weatherData.city.name;
						var today_dt = weatherData.list[0].dt;
						var date = new Date(today_dt * 1000);
						var temp_min = weatherData.list[0].temp.min;
						var temp_max = weatherData.list[0].temp.max;
						var humidity = weatherData.list[0].humidity;
						var wind = weatherData.list[0].speed;
						var pressure = weatherData.list[0].pressure;
						var description = weatherData.list[0].weather[0].description;

						input_location = location;

						content += "<h1>" + date.toDateString() + "</h1>";
						content += "<h3>" + Math.round(temp_max) + "º" + "/" + Math.round(temp_min) + "º" + "</h3>";
						content += "<img src='http://openweathermap.org/img/w/" + icon + ".png'>";
						content += "<h3>" + description + "</h3>";
						content += "<h3> Humidity: " + humidity + "</h3>";
						content += "<h3> Wind: " + wind + "</h3>";
						content += "<h3> Pressure: " + pressure + "</h3>";

						$("#location").html(input_location);
						$("#today_info").html(content);

// ________________________________________TOMORROW WEATHER_________________________________________________________________
						
						var tomorrow_icon = weatherData.list[1].weather[0].icon;
						var tomorrow_dt = weatherData.list[1].dt;
						var tomorrow_date = new Date(tomorrow_dt * 1000);
						var tomorrow_min = weatherData.list[1].temp.min;
						var tomorrow_max = weatherData.list[1].temp.max;
						var tomorrow_humidity = weatherData.list[1].humidity;
						var tomorrow_wind = weatherData.list[1].speed;
						var tomorrow_pressure = weatherData.list[1].pressure;
						var tomorrow_description = weatherData.list[1].weather[0].description;
						
						tomorrow_content += "<h1>" + tomorrow_date.toDateString() + "</h1>";
						tomorrow_content += "<h3>" + Math.round(tomorrow_max) + "º" + "/" + Math.round(tomorrow_min) + "º" + "</h3>";	
						tomorrow_content += "<img src='http://openweathermap.org/img/w/" + tomorrow_icon + ".png'>";
						tomorrow_content += "<h3>" + tomorrow_description + "</h3>";
						tomorrow_content += "<h3> Humidity: " + tomorrow_humidity + "</h3>";
						tomorrow_content += "<h3> Wind: " + tomorrow_wind + "</h3>";
						tomorrow_content += "<h3> Pressure: " + tomorrow_pressure + "</h3>";

						$("#tomorrow_info").html(tomorrow_content);

// ________________________________________DAY 3 WEATHER_________________________________________________________________

						var day_three_icon = weatherData.list[2].weather[0].icon;
						var day_three_dt = weatherData.list[2].dt;
						var day_three_date = new Date(day_three_dt * 1000);
						var day_three_min = weatherData.list[2].temp.min;
						var day_three_max = weatherData.list[2].temp.max;
						var day_three_humidity = weatherData.list[2].humidity;
						var day_three_wind = weatherData.list[2].speed;
						var day_three_pressure = weatherData.list[2].pressure;
						var day_three_description = weatherData.list[2].weather[0].description;
						
						day_three_content += "<h1>" + day_three_date.toDateString() + "</h1>";
						day_three_content += "<h3>" + Math.round(day_three_max) + "º" + "/" + Math.round(day_three_min) + "º" + "</h3>";
						day_three_content += "<img src='http://openweathermap.org/img/w/" + day_three_icon + ".png'>";
						day_three_content += "<h3>" + day_three_description + "</h3>";
						day_three_content += "<h3> Humidity: " + day_three_humidity + "</h3>";
						day_three_content += "<h3> Wind: " + day_three_wind + "</h3>";
						day_three_content += "<h3> Pressure: " + day_three_pressure + "</h3>";

						$("#day_three_info").html(day_three_content);
					
					};

				
				



				const myAPIKey = "340c006288234e2dd3bf065fcd1bef54";	// insert API key given by weathermaps.org

				var getWeather = function(event) {
					$.ajax({											// ajax request for weather map				
						url: "http://api.openweathermap.org/data/2.5/forecast/daily",
						method: "GET",										
						data: {													// This is the data we will be sending
							APPID: myAPIKey,										// our constant, which is the API key given
							// q: "San Antonio, US",									// the location we wish to receive info about
							lat: lat,
							lon: lng,
							cnt: "3",
							units: "imperial"										// converts temperature to Fahrenheit from Kelvin
						}
					}).done(function(weatherData) {
						console.log(weatherData);					// console.log to review the information pulled from weathermap
						console.log(showWeatherInformation(weatherData));
					}).fail(function (xhr, err, msg) {		// alert message indicating something went wrong, should the information fail to be retrieved
						alert("something went wrong");
					});
				};


				$("#submit").click(getWeather);



// __________________________________________________________MAP_____________________________________________________________________________________

				var mapOptions = {
				        zoom: 4,
				        center: {
				            lat:  29.426791,
				            lng: -98.489602
				        }
				    };


				var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
			// variable created to call function allowing latitude and longitude to console.log 
				var coordinates = function(event) {
					console.log("Latitude: " + event.latLng.lat() + " " + ", longitude: "+ event.latLng.lng());
				}


				var myLatLng = {lat: 29.426791, lng: -98.489602};
				var marker = new google.maps.Marker({
		          position: myLatLng,
		          map: map,
		          draggable: true
		        });

				var lat;
				var lng;
				// var markerPosition = [];
				google.maps.event.addListener(marker, "dragend", function(e){
					lat = marker.position.lat();
					lng = marker.position.lng();

					$("#latitude").val(lat);
					$("#longitude").val(lng);
					getWeather();
				});


			})();







