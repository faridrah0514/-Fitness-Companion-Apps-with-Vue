<template>
  <div class="home">

    <v-container>
      <span>Please select workout type:</span>
      <v-row>
        <v-col md='6'>
          <v-card>
            <v-img
              height="500"
              src="https://assets-a2.kompasiana.com/items/album/2018/10/30/fitness-5bd7f1a06ddcae12ff37c1b5.jpg"
              class="white--text align-end"
            >
              <v-card-title>Personal Workout</v-card-title>
            </v-img>
            <v-card-text style="position: relative">
              <v-fab-transition>
                <v-btn
                  color="pink"
                  dark
                  absolute
                  top
                  right
                  fab
                  router
                  v-bind:to="'/personalworkout'"
                >
                  <v-icon>  
                    mdi-plus
                  </v-icon>
                </v-btn>
              </v-fab-transition>
              <div>Your Personal and Customized Workout</div>
            </v-card-text>
            
          </v-card>
        </v-col >
        <v-col md='6'>
          <v-card>
            <v-img
              height="500"
              src="https://mmc.tirto.id/image/2016/07/26/TIRTO-20140522_batman_warner-bros_ratio-16x9.jpg"
              class="white--text align-end"
            >
              <v-card-title>Heroes Workout</v-card-title>
            </v-img>
            <v-card-text style="position: relative">
              <v-fab-transition>
                <v-btn
                  color="pink"
                  dark
                  absolute
                  top
                  right
                  fab
                  router
                  v-bind:to="'/heroworkout'"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition>
              <div>Your Precompiled and Ready to Use Workout</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  methods: {

  }
}
</script>
