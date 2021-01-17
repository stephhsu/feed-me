<template>
    <div>

    </div>
</template>

<script>
//import router from "../router";
export default {
    name: "OrderResult",
    setup() {
        function findRestaurants() {
            // google maps places API
            var api_key = "AIzaSyCl_IgI5fn2FVtiDm0xXCa_VlR_K-xctdc";
            var location = "-33.8670522,151.1957362";
            var radius = "300";
            var keyword = "indian"; // basically type of cuisine

            var maps_endpoint = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" 
                + location + "&radius=" + radius + 
                "&type=restaurant&keyword=" + keyword + "&key=" + api_key;

            var request = require("request");

            request.get(maps_endpoint, (error, response, body) => {
                if(error) {
                    return console.dir(error);
                }
                console.dir(JSON.parse(body));
            });
        }

        return {
            findRestaurants
        };
    },
}

</script>