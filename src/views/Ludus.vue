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
          {{ element.name }} 
        </div>
      </draggable>

      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="picked" group="gladiatorTypes" @change="changeFightType">
        <div
          class="list-group-item"
          v-for="(element, index) in picked"
          :key="index"
        >
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
        },
        {
          name: "lancier",
        },
        {
          name: "Archer",
        },
        {
          name: "Cavalier",
        },
        {
          name: "Animal",
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
        name: el.name + " cloned"
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
