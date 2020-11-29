import Vue from "vue"
import VueAWN from "vue-awesome-notifications"
let options = {
    icons: {
        enabled: true,
    },
    position: "top-right",
    durations: {
        global: 3000
    }
}
Vue.use(VueAWN, options)
