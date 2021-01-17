<template>
  <div class="map"/>
</template>

<script>
import gmapsInit from './mapsInit';

export default {
  name: 'App',
  props: {
    places: {
      type: Array,
      required: true,
    },
  },
  async mounted(props) {
    try {
      let i
      let south = 0;
      let west = 0;
      let north = 0;
      let east = 0;
      for (i = 0; i < places.length; i++) {
          south = south < places[i].geometry.location.lat ?
            south :
            places[i].geometry.location.lat
          west = west < places[i].geometry.location.lng ?
            west :
            places[i].geometry.location.lng
          north = north > places[i].geometry.location.lat ?
            north :
            places[i].geometry.location.lat
          east = east > places[i].geometry.location.lng ?
            east :
            places[i].geometry.location.lng
      }
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      map.setCenter({lat: (north + south) / 2, lng: (east + west) / 2})
      map.fitBounds(new google.maps.LatLngBounds([{lat: south,lng: west}, {lat: north,lng: east}]))
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
.map {
  width: 50%;
  height: 450px;
}
</style>