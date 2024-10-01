const { createApp } = Vue
createApp({
    data(){
        return {
            CDs: []
        }
    },
    created(){
        axios.get('http://localhost/php-dischi-json/backend/api.php')
        .then((res) => {
            this.CDs = res.data
        })
    }
}).mount('#app')