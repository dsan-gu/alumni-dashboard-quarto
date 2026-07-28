window.document.addEventListener("DOMContentLoaded", function(event) {
  maptilersdk.config.apiKey = 'ifGq4gCyAks2BrhFeU63';
  const map = new maptilersdk.Map({
      container: 'map',
      zoom: 3.2,
      center: [-98.84, 38.28],
      style: maptilersdk.MapStyle.DATAVIZ.LIGHT
  });

  map.on('load', async function () {
    await maptilersdk.helpers.addPoint(map, {
      data: 'assets/schools.geojson',
      cluster: true,
    });
  });
});
