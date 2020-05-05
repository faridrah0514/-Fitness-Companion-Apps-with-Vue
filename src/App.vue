<template>
  <v-app>
    <Navbar @search_text="updateMessage">
    </Navbar>
      
    <v-content>
      <router-view :msg='childData'></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Navbar
  },
  data() {
    return {
      childData: ''
    }
  },
  methods: {
    updateMessage(variable){
      this.childData = variable
    }
  },
};
</script>
