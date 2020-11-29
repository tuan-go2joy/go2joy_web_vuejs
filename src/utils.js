import axios from 'axios'

export default {
    data() {
        return {}
    },
    methods: {
        getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },

        // defaultFormatter(row, col, value, index) {
        //     return value !== null ? value : 'N/A';
        // },

        defaultFormatter(value,empty = true) {
            if(empty != true){
                return value !== null ? value : 'N/A';
            }else{
                return value !== null && value !== '' ? value : 'N/A';
            }
            
        },

        formatDate(date, time = true){
            let dateObj = new Date(date);
            let month   = dateObj.getMonth()+1;
            let day     = String(dateObj.getDate()).padStart(2, '0');
            let year    = dateObj.getFullYear();
            if(month<10) 
            {
                month='0'+month;
            }
            if(time != true){
                return year+'-'+month+'-'+day
            }else{
                let hour    = dateObj.getHours();
                let min     = dateObj.getMinutes();
                if(hour<10) 
                {
                    hour='0'+hour;
                }
                if(min<10) 
                {
                    min='0'+min;
                }
                return year+'-'+month+'-'+day+' '+hour+':'+min
            }
        },

        setLocalStorageWithExpiry(key, value, ttl) {
            const now = new Date()

            // `item` is an object which contains the original value
            // as well as the time when it's supposed to expire
            const item = {
                value: value,
                expiry: now.getTime() + ttl,
            }
            localStorage.setItem(key, JSON.stringify(item))
        },

        getLocalStorageWithExpiry(key) {
            const itemStr = localStorage.getItem(key)

            // if the item doesn't exist, return null
            if (!itemStr) {
                return null
            }

            const item = JSON.parse(itemStr)
            const now = new Date()

            // compare the expiry time of the item with the current time
            if (now.getTime() > item.expiry) {
                // If the item is expired, delete the item from storage
                // and return null
                localStorage.removeItem(key)
                return null
            }
            return item.value
        }
    }
}
