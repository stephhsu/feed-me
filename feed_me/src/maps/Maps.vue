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
      for (i = 0; i < props.places.length; i++) {
          south = south < props.places[i].geometry.location.lat ?
            south :
            props.places[i].geometry.location.lat
          west = west < props.places[i].geometry.location.lng ?
            west :
            props.places[i].geometry.location.lng
          north = north > props.places[i].geometry.location.lat ?
            north :
            props.places[i].geometry.location.lat
          east = east > props.places[i].geometry.location.lng ?
            east :
            props.places[i].geometry.location.lng
      }
      const google = await gmapsInit();
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