<template>
  <div class="Emperor">
     <router-link to="/" class="header"><h3>Select fight type</h3></router-link>
    <div class="body">
    <div  v-for="(Gtype,i) in type" :key="i">      
      <div class="first-selection custom-control custom-radio custom-control-inline"> 
        <div 
              class="list-group-item"
              v-for="(element, index) in gladiators"
              :key="index"
            >
            <div v-if="element.type === Gtype.name">
                <input  class="hidden"  type="radio" :name="element.type" :value="element.name">
                <label>{{element.name}}</label>
                <svg width="0" height="0" viewBox="0 0 40 140">
                  <defs>
                    <mask id="holes">
                      <rect x="0" y="0" width="100" height="140" fill="white" />
                      <circle r="12" cx="20" cy="20" fill="black"/>
                      <circle r="12" cx="20" cy="70" fill="black"/>
                      <circle r="12" cx="20" cy="120" fill="black"/>
                    </mask>
                  </defs>
                </svg>
            </div>
        </div>
      </div>
          
      <div v-if="Gtype.name === 'épéiste'" class="second-selection">
        <h3>Modifieur</h3>
        <div
          class="list-group-item"
          v-for="(Element, Index) in Modifieur"
          :key="Index"
        >  
            <input type="radio" :name="Element.sword" :value="Element.sword">
              {{Element.sword}}
        </div>
      </div>
      <h3>{{Gtype.name}} </h3>
    </div>
    <a href="#example1" class="btn">Die in the name of your Emperor</a>
    <div class="lightbox" id="example1">
      <figure class="lightbox__body">
        <a href="#" class="lightbox__close-btn"></a>
        <figcaption class="lightbox__content">
          <p>"When a free man dies, he loses the pleasure of life. A slave loses his pain. Death is the only freedom a slave knows. That's why he's not afraid of it. That's why we'll win."</p>
        </figcaption>
      </figure>
    </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

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

<style>
.Emperor{
  display : flex;
  height: 100vh;
  flex-direction: column;
  margin: 20px 20px;
  background-image: url(https://wallpaperaccess.com/full/691582.jpg);
}
.header{
  text-decoration: none;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  border-style: groove;
}
.body{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 20px;
  justify-content: space-between;
}
.first-selection{
  background-color : #faeed8de;
  flex-basis: 50%;
  border-style: groove;
  width : 300px;
  height : 300px;
  padding : 20px 20px; 
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
  border-radius: 10px
}

.second-selection{
  background-color : #faeed8de;
  flex-basis: 50%;
  border-style: groove;
  width : 300px;
  height : 300px;
  padding : 20px 20px; 
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
  border-radius: 10px

}

.list-group-item{
  text-align: left;
}


</style>
<style>
body {
   padding: 40px;
   background: #efefef;
}

.btn {
   background: #24abf2;
   color: #fff;
   padding: 15px;
   font-weight: 700;
   display: inline-block;
   font-size: 14px;
   text-decoration: none;
   position: absolute;
   top: 100%;
   left: 50%;
   transform: translate(-50%, -50%);
}
.lightbox {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.lightbox:target {
    display: flex;
    justify-content: center;
    align-items: center;
}

.lightbox__body {
    width: 400px;
    position: relative;
}

.lightbox__content {
    background: #fff;
    padding: 40px;
    border-radius: 2px;
    position: relative;
    
}
.lightbox__close-btn::after {
    content: "Close";
    display: inline-block;
    position: absolute;
    right: -15px;
    top: -15px;
    z-index: 3;
    width: auto;
    height: 30px;
    cursor: pointer;
    background: #000;
    font-weight: 700;
    font-size: 11px;
    padding: 0 15px;
    line-height: 30px;
    color: #fff;
}

.lightbox__close-btn::before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
}

</style>






