<template>
  <div class="Emperor">
    <router-link to="/">select fight type</router-link>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data() {
    return {
      gladiators: []
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




