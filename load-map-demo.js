window.document.addEventListener("DOMContentLoaded", function(event) {
  const key = 'ifGq4gCyAks2BrhFeU63';
  const map = new L.Map(
    'map',
    {maxZoom: 22}
  ).setView([0, 20], 1);
  const mtLayer = L.maptiler.maptilerLayer({
    style: L.maptiler.MapStyle.DATAVIZ.LIGHT,
    apiKey: key,
  }).addTo(map);

  const markers = L.markerClusterGroup();

  (async () => {
    const response = await fetch('https://docs.maptiler.com/sdk-js/assets/earthquakes.geojson');
    const jsonData = await response.json();

    for (let i = 0; i < jsonData.features.length; i++) {
      const feature = jsonData.features[i];
      const title = feature.properties.mag;
      const marker = L.marker(new L.LatLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]), { title: title });
      marker.bindPopup(`${title}`);
      markers.addLayer(marker);
    }

    map.addLayer(markers);
  })();
});
