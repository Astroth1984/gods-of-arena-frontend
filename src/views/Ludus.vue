<template>
  <div class="container">
    <div class="Ludus">
        <router-link to="/emperor" class="header"><h3> Click here to Choose your Gladiators, my Emperor </h3></router-link>
        <h3><mark>Gladiators Types</mark></h3>
          <draggable class="list-group" :list="unpicked" group="gladiatorTypes" @change="changeFightType">
                <div
                  class="list-group-item"
                  v-for="(element, index) in unpicked"
                  :key="index"
                >
                  <div class="box"><img v-bind:src="element.path"></div>
                  <h3>{{element.name}}</h3>
                </div>
          </draggable>

        <h3><mark>Ludus! Drag and Drop the Gladiator Type to set the Battle</mark></h3>
        <draggable class="list-group" :list="picked" group="gladiatorTypes" @change="changeFightType">
          <div
            class="list-group-item"
            v-for="(element, index) in picked"
            :key="index"
          >
          <div class="box"><img v-bind:src="element.path"></div>
            <h3><mark>{{element.name}}</mark></h3>
          </div>
        </draggable>
    </div>
  </div> 
</template>

<script>
// @ is an alias to /src
import draggable from 'vuedraggable';
import {mapState, mapActions} from 'vuex';
import {store} from '../store';


export default {
  name: "ludus",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      ...mapState["type"],
      unpicked: [
        {
          name: "épéiste",
          path: require("..\\assets\\sword1.jpg"),
        },
        {
          name: "lancier",
          path: require("..\\assets\\lancier2.jpg"),
        },
        {
          name: "Archer",
          path: require("..\\assets\\archer1.jpg"),
        },
        {
          name: "Cavalier",
          path: require("..\\assets\\cavalier.jpg"),
        },
        {
          name: "Animal",
          path: require("..\\assets\\animal.jpg"),
        },
      ],
      picked: [
      ],
      gladiators: [],     
    };

  },
  created() {
    // this.$http.get("/")
    //   .then(response => {
    //     //console.log(response);
    //     this.list1 = response.data;
    //   })
  },
  methods: {
    ...mapActions(["setFightType"]),
    clone: function(el) {
      return {
        name: el.name + "cloned"
      };
    },
    changeFightType() {
      this.setFightType(this.picked);
    }
  }
};
</script>

<style scoped>

.list-group {
  display: flex;
}

</style>
<style>
  .container {
    background-image: url(https://images4.alphacoders.com/242/242994.jpg);
  }
  img{
      max-width: 100%;
      max-height: 100%;
      display: block; /* remove extra space below image */
  }
  .box{
      width: 250px;      
      border: 10px solid goldenrod;
  }    
  .box.large{
      height: 300px; 
  }
  .box.small{
      height: 100px;
  }
  .Ludus {
    height: 100vh;
    display: grid;
  }
  .list-group {
    margin: 0 auto;
    min-height: 200px;
    min-width: 200px;
  }
  .list-group-item {
    margin-right: 8px;
  }
  .mark {
  background-color: goldenrod;
  color: silver;
}
</style>



