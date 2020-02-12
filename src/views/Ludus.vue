<template>
  <div class="Ludus">
    <router-link to="/emperor">select gladiators</router-link>
    <h3>Draggable 1</h3>
      <draggable class="list-group" :list="unpicked" group="gladiatorTypes" @change="changeFightType">
        <div
          class="list-group-item"
          v-for="(element, index) in unpicked"
          :key="index"
        >
          <img v-bind:src="element.path">
          {{element.name}}
        </div>
      </draggable>

      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="picked" group="gladiatorTypes" @change="changeFightType">
        <div
          class="list-group-item"
          v-for="(element, index) in picked"
          :key="index"
        >
        <img v-bind:src="element.path">
          {{ element.name }} 
        </div>
      </draggable>
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
          path: require("..\\assets\\logo.png"),
        },
        {
          name: "lancier",
          path: require("C:\\Users\\pc\\Desktop\\GOA\\gods-of-arena-front\\src\\assets\\logo.png"),
        },
        {
          name: "Archer",
          path: "https://madewithvuejs.com/images/powered-madewithreactjs--white.png?1",
        },
        {
          name: "Cavalier",
          path: "#",
        },
        {
          name: "Animal",
          path: "#",
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
