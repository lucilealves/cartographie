mapboxgl.accessToken = 'pk.eyJ1IjoibHVjaWxlYWx2ZXMiLCJhIjoiY2tmM3JuYnMyMDV5NDMyb2Yxb3Vwb3p6dyJ9.BO6lMiP9URrtWQLhL2X82g';
        let map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/lucilealves/ckfp7ucfn0mos19up2kiuydl7', // style URL
        center: [1.0993, 49.4431], // starting position [lng, lat]
        zoom: 13 // starting zoom
    });
 
    let marker = new mapboxgl.Marker()
    .setLngLat([1.0993, 49.4431])
    .addTo(map);








    