var config = {
    style: 'mapbox://styles/wuet/cm7vmgrpv012101sbawlhb29v',
    accessToken: 'pk.eyJ1Ijoid3VldCIsImEiOiJjbTE1MDd6N2kwMmR1Mmtwc3IwcXp3d29zIn0.gmJ7aEsmhyM-z-C-fhse-A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Exploring Singapore: A Map of Culture, Cuisine, and Urban Experiences',
    subtitle: ' Explore the distribution of Singapore’s cultural landmarks, cafés, bubble tea shops, and restaurants, offering immersive city exploration routes and unique perspectives for visitors.',
    byline: 'By WU YUXIN',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Singapore Cultural and Arts Landmarks Map',
            description: 'This map showcases important cultural and artistic landmarks in Singapore, including museums, galleries, theaters, cultural centers, and historical sites.  <br>Through the visualization of the map, users can intuitively understand the spatial distribution, density, and relationship between these landmarks and the urban core area.<br><br><img src="asset/Cultural Facilities .png" style="height:50%;width:200px;"> ',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'museum-0v5xmc',
                    opacity: 0.8
                },
                {
                    layer: 'theatre-7ease9',
                    opacity: 0.8

                },
                {
                    layer: 'historic-building-5d88fb',
                    opacity: 0.8                
                },
                {
                    layer: 'coffee-and-tea-9gkv1e',
                    opacity: 0
                },
                {
                    layer: 'restaurant-350bd9',
                    opacity: 0
                },
                {
                    layer: 'routes',
                    opacity: 0
                },
                {
                    layer: 'buffer500m-history-6ycqs6s',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'museum-0v5xmc',
                    opacity: 0.3
                },
                {
                    layer: 'theatre-7ease9',
                    opacity: 0.3                
                },
                {
                    layer: 'historic-building-5d88fb',
                    opacity: 0.3                
                },
                {
                    layer: 'coffee-and-tea-9gkv1e',
                    opacity: 0
                },
                {
                    layer: 'restaurant-350bd9',
                    opacity: 0
                },
                {
                    layer: 'routes',
                    opacity: 0
                },
                {
                    layer: 'buffer500m-history-6ycqs6s',
                    opacity: 1
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Restaurants in Singapore',
            description: 'This map can help residents and tourists find suitable dining options and understand food culture of Singapore.<br><br><img src="asset/Restaurant.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.83837, 1.30146],
                zoom: 12.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'museum-0v5xmc',
                    opacity: 0
                },
                {
                    layer: 'theatre-7ease9',
                    opacity: 0                
                },
                {
                    layer: 'historic-building-5d88fb',
                    opacity: 0                
                },
                {
                    layer: 'coffee-and-tea-9gkv1e',
                    opacity: 0.8
                },
                {
                    layer: 'restaurant-350bd9',
                    opacity: 0.8
                },
                {
                    layer: 'routes',
                    opacity: 0
                },
                {
                    layer: 'buffer500m-history-6ycqs6',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'museum-0v5xmc',
                    opacity: 0
                },
                {
                    layer: 'theatre-7ease9',
                    opacity: 0                
                },
                {
                    layer: 'historic-building-5d88fb',
                    opacity: 0                
                },
                {
                    layer: 'coffee-and-tea-9gkv1e',
                    opacity: 1
                },
                {
                    layer: 'restaurant-350bd9',
                    opacity: 1
                },
                {
                    layer: 'routes',
                    opacity: 0.5
                },
                {
                    layer: 'buffer500m-history-6ycqs6s',
                    opacity: 0
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Route 1 & Route 2 & Route 3',
            description: 'By overlaying the distribution of dining establishments and cultural facilities, we have designed themed tourist routes that blend historical and culinary experiences in Singapore.<br><br>·Route 1 takes visitors through iconic landmarks such as the Buddha Tooth Relic Temple, Singapore Chinese Cultural Centre, and Thian Hock Keng Temple, offering a deep dive into the rich Chinese heritage. <br><br>Route 2 highlights Singapore’s colonial and artistic heritage, passing through the Asian Civilisations Museum and National Gallery, where history and art intertwine.<br><br>Route 3 explores the vibrant Malay and Islamic cultural sites, featuring Sultan Mosque and Masjid Malabar, showcasing Singapore’s diverse heritage.<br><br><img src="asset/route123.png" style="height:150px; width:100%;"></img>',
            location: {
                center: [103.85059, 1.29370],
                zoom: 15,
                pitch: 56,
                bearing: 9.60,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'museum-0v5xmc',
                    opacity: 1
                },
                {
                    layer: 'theatre-7ease9',
                    opacity: 1                
                },
                {
                    layer: 'historic-building-5d88fb',
                    opacity: 1                
                },
                {
                    layer: 'coffee-and-tea-9gkv1e',
                    opacity: 1
                },
                {
                    layer: 'restaurant-350bd9',
                    opacity: 1
                },
                {
                    layer: 'routes',
                    opacity: 1
                },
                {
                    layer: 'buffer500m-history-6ycqs6',
                    opacity: 0
                },
                {
                    layer: 'building',
                    opacity: 0.2
                }
            ],
            onChapterExit: [
                {
                    layer: 'museum-0v5xmc',
                    opacity: 0.5
                },
                {
                    layer: 'theatre-7ease9',
                    opacity: 0.5                
                },
                {
                    layer: 'historic-building-5d88fb',
                    opacity: 0.5                
                },
                {
                    layer: 'coffee-and-tea-9gkv1e',
                    opacity: 0.5
                },
                {
                    layer: 'restaurant-350bd9',
                    opacity: 0.5
                },
                {
                    layer: 'routes',
                    opacity: 1
                },
                {
                    layer: 'buffer500m-history-6ycqs6s',
                    opacity: 0
                },
                {
                    layer: 'building',
                    opacity: 0.2
                }
            ]
        },
        {
            id: 'forth-container',
            alignment: 'right',
            hidden: false,
            title: 'Route 4',
            description: 'Route 4 follows a charming path north along Joo Chiat Road before heading west along Geylang Road, offering a leisurely exploration of the area’s unique blend of history and modern culture. <br><br>Along the way, visitors will pass by boutique retail stores—ranging from souvenir shops to vintage clothing stores—as well as cozy cafés and dessert shops, perfect for an afternoon of strolling and indulging. This route provides an immersive experience of Peranakan heritage, allowing travelers to admire the beautifully preserved shophouses and soak in the vibrant local atmosphere.<br><br><img src="asset/roo.png" style="height:150px; width:100%;"></img>',
            location: {
                center: [103.89949, 1.30377],
                zoom: 15,
                pitch: 56,
                bearing: -50.40,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'museum-0v5xmc',
                    opacity: 1
                },
                {
                    layer: 'theatre-7ease9',
                    opacity: 1                
                },
                {
                    layer: 'historic-building-5d88fb',
                    opacity: 1                
                },
                {
                    layer: 'coffee-and-tea-9gkv1e',
                    opacity: 1
                },
                {
                    layer: 'restaurant-350bd9',
                    opacity: 1
                },
                {
                    layer: 'routes',
                    opacity: 1
                },
                {
                    layer: 'buffer500m-history-6ycqs6',
                    opacity: 0
                },
                {
                    layer: 'building',
                    opacity: 0.2
                }
            ],
            onChapterExit: [
                {
                    layer: 'museum-0v5xmc',
                    opacity: 0.5
                },
                {
                    layer: 'theatre-7ease9',
                    opacity: 0.5                
                },
                {
                    layer: 'historic-building-5d88fb',
                    opacity: 0.5                
                },
                {
                    layer: 'coffee-and-tea-9gkv1e',
                    opacity: 0.5
                },
                {
                    layer: 'restaurant-350bd9',
                    opacity: 0.5
                },
                {
                    layer: 'routes',
                    opacity: 1
                },
                {
                    layer: 'buffer500m-history-6ycqs6s',
                    opacity: 0
                },
                {
                    layer: 'building',
                    opacity: 0.2
                }
            ]
        },
        {
            id: 'fifth-container',
            alignment: 'right',
            hidden: false,
            title: 'Route 5',
            description: 'Route 5 primarily takes visitors through the NUS campus, connecting key academic buildings and the NUS Museum, before concluding in the Utown area, where they can enjoy a variety of delicious meals at the campus dining halls. This route offers a blend of academic exploration and culinary experiences, providing an immersive campus tour.<br><br><img src="asset/nus.png" style="height:150px; width:100%;"></img>',
            location: {
                center: [103.77293, 1.30877],
                zoom: 15,
                pitch: 68.50,
                bearing: -14.40,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'museum-0v5xmc',
                    opacity: 1
                },
                {
                    layer: 'theatre-7ease9',
                    opacity: 1                
                },
                {
                    layer: 'historic-building-5d88fb',
                    opacity: 1                
                },
                {
                    layer: 'coffee-and-tea-9gkv1e',
                    opacity: 1
                },
                {
                    layer: 'restaurant-350bd9',
                    opacity: 1
                },
                {
                    layer: 'routes',
                    opacity: 1
                },
                {
                    layer: 'buffer500m-history-6ycqs6',
                    opacity: 0
                },
                {
                    layer: 'building',
                    opacity: 0.2
                }
            ],
            onChapterExit: [
                {
                    layer: 'museum-0v5xmc',
                    opacity: 0.5
                },
                {
                    layer: 'theatre-7ease9',
                    opacity: 0.5                
                },
                {
                    layer: 'historic-building-5d88fb',
                    opacity: 0.5                
                },
                {
                    layer: 'coffee-and-tea-9gkv1e',
                    opacity: 0.5
                },
                {
                    layer: 'restaurant-350bd9',
                    opacity: 0.5
                },
                {
                    layer: 'routes',
                    opacity: 1
                },
                {
                    layer: 'buffer500m-history-6ycqs6s',
                    opacity: 0
                },
                {
                    layer: 'building',
                    opacity: 0.2
                }
            ]
        }
        
    ]
};