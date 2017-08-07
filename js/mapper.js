/**
 * Created by wtcleland on 10/10/16.
 */
                //This sets the current time
                var currentTime = new Date();
                currentTime.setUTCHours(5, 0, 0, 0);

                //The magic starts here
                var map = L.map('map',{
                    // drawControl: true,
                    // measureControl: true,
                    center: [34.77712032826419, -92.27482144101354],
                    zoom: 8,
                    maxZoom: 18,
                    minZoom: 7,
                    zoomControl: false,
                    loadingControl: true
                });
