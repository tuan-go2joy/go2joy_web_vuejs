<template>
<div>
    <br>
    <br>
    <div>
        
        <label>
            <gmap-autocomplete @place_changed="setPlace">
            </gmap-autocomplete>
            <button @click="addMarker">Add</button>
        </label>
        <br />

    </div>
    <br>
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position"></gmap-marker>
    </gmap-map>

</div>
</template>

<script>
import Vue from "vue";
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDYPZOJEO2BxAgHFxz7bMDvzrZ3S5b6xLo',
        libraries: "places"
    },
    installComponents: true,

})
import * as VueGoogleMaps from 'vue2-google-maps'
import {
    gmapMap,
    gmapMarker,
    gmapCluster,
    gmapInfoWindow,
    loaded
} from 'vue2-google-maps'
export default {
    name: "Maps",

    data() {
        return {
            // default to Montreal to keep it simple
            // change this to whatever makes sense
            center: {
                lat: 10.758434999999999,
                lng: 106.6670915
            },
            placeholder: 'Search for places in Berkeley',
            markers: [],
            places: [],
            currentPlace: null
        };
    },

    mounted() {
        this.geolocate();
        //  this.addMarker()

    },

    methods: {
        // receives a place object via the autocomplete component
        // nhận địa điểm thông qua autocomplete component
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng()
                };
                this.markers.push({
                    position: marker
                });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
        geolocate: function () {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        }

    },

};
</script>
