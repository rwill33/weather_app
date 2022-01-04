<template>
  <div class="main">
    <Navigation class="navigation"/>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import db from "./Firebase/firebaseinit";
import Navigation from "./components/Navigation";

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return{
      APIKey: "475e81639467f7a9f128feb5385e6ba1",
      cities: [],
    }
  },
  created(){
    this.getCityWeather();
  },
  methods: {
    getCityWeather(){
      let firebaseDB = db.collection('cities');

      firebaseDB.onSnapshot(snap => {
        snap.docChanges().forEach(async (doc)=> {
          if (doc.type === 'added'){
            try{
              const response = await axios.get(
                  `https://api.openweathermap.org/data/2.5/weather?q=${doc.doc.data().city}&units=metric&appid=${this.APIKey}`
              );
              const data = response.data;
              firebaseDB.doc(doc.doc.id).update({
                currentWeather: data,
              }).then(() => {
                this.cities.push(doc.doc.data());
              });
            } catch (err){
              console.log(err);
            }
          }
          console.log(doc);
        })
      })
    },
  }
}
</script>

<style lang="css">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.main {
  max-width: 1024px;
  margin: 0 auto;
  height: 100vh;
  }
.navigation {
  z-index: 99;
  position: fixed;
  max-width: 1024px;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}

</style>
