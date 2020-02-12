<template>
  <div class="Emperor">
    <router-link to="/">select fight type</router-link>
    <div v-for="(Gtype,i) in type" :key="i">
      
    
    <div
          class="list-group-item"
          v-for="(element, index) in gladiators"
          :key="index"
        >
        <div v-if="element.type === Gtype.name">
            <input type="radio" :name="element.type" :value="element.name">
              {{element.name}}
        </div>
      </div>
        
      <div v-if="Gtype.name === 'épéiste'">
        <h2>Modifieur</h2>
      <div
          class="list-group-item"
          v-for="(Element, Index) in Modifieur"
          :key="Index"
        >  
            <input type="radio" :name="Element.sword" :value="Element.sword">
              {{Element.sword}}
      </div>
      </div>
      <p>finished <br></p>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data() {
    return {
      gladiators: [],
      Modifieur: [
        {
          sword: 'one-handed sword',
        },
        {
          sword: 'two-handed sword',
        },
        {
          sword: 'Gladius',
        },
        {
          sword: 'dagger',
        },

      ],
    }
  },
  computed: {
    ...mapState(['type']),
  },
  async created() {
    const typeList = this.type.map(type => type.name);
    console.log(typeList);
    this.$http.get("/")
    .then(response => {
      this.gladiators = response.data.filter(gladiator => typeList.indexOf(gladiator.type) !== -1);    
    })
  }
}
</script>




