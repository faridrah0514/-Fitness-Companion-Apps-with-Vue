<template>
  <div class="heroworkout">
        <v-container>
            <!-- <p>{{ search_text }}</p>
            <p> {{ arrHero }}</p>
            <p> {{ filteredList }}</p> -->
          <div class="headline">Heroes Workout</div>
          <v-row>
              <v-col 
                v-for="workout in filteredList"
                v-bind:key="workout.heroId"
              md='4'>
                    <v-card>
                        <v-img
                        height="500"
                        src="https://mmc.tirto.id/image/2016/07/26/TIRTO-20140522_batman_warner-bros_ratio-16x9.jpg"
                        class="white--text align-end"
                        >
                        </v-img>
                        <v-card-text>
                                <v-row>
                                    <v-col class="py-0">
                                        <span class="title black--text">{{ workout.name }}</span>
                                    </v-col>
                                    <v-col align='right' class="py-0">
                                        <v-btn text right icon light class="mt-0" v-on:click='showOn(workout)'>
                                            <v-icon>mdi-dots-vertical</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <v-btn color="red darken-1" outlined dark v-on:click="openDialog(workout)">Details</v-btn>
                        </v-card-text>
                        <v-expand-transition>
                            <v-card v-if="arrWorkout.includes(workout.name)" class="v-card--reveal">
                                <v-card-title>
                                    <span>
                                        {{ workout.name }}
                                    </span>
                                    <v-spacer></v-spacer>
                                    <v-btn text v-on:click='showOff(workout)'>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-card-title>
                                <v-card-text class="black--text">
                                    <span>
                                        {{ workout.detail }}
                                    </span>
                                </v-card-text>
                            </v-card>
                        </v-expand-transition>
                    </v-card>
              </v-col>
          </v-row>
        </v-container>
        <v-dialog v-model="dialog" persistent max-width="700" v-if="selectedWorkout" >
            <v-card>
                <v-card-title class="headline">{{ selectedWorkout.name }}</v-card-title>
                <v-container>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th class="title black--text">Exercise</th>
                            <th class="title black--text">Warm up</th>
                            <th class="title black--text">Working set</th>
                            <th class="title black--text">Rest period</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="element in selectedWorkout.training" v-bind:key="element.exerciseName">
                            <td v-for="(subelement, key) in element" v-bind:key="key" class="subtitle-1 black--text">{{ subelement }}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>


export default {
    props: {
        msg:{
            type: String
        }
    },
    data(){
        return {
            search_text: '',
            dialog: false,
            selectedWorkout: undefined,
            arrWorkout: [],
            arrHero: [],
            Heroes: [
                        {
                            "heroId": 1,
                            "name": "Bat Ability",
                            "detail": "Batman often performs the action at night. Because of that, batman must have additional strength at night. Perform the workouts over a seven days period.",
                            "training":
                            [{
                                "exerciseName": "Incline Barbell Bench Press",
                                "wramUp": "2 x 10-15",
                                "workingSet": "3 x 4-8",
                                "restPeriod": "5 min"
                            },
                            {
                                "exerciseName": "Barbell Bench Press",
                                "wramUp": "2 x 10-15",
                                "workingSet": "3 x 4-8",
                                "restPeriod": "4 min"
                            },
                            {
                                "exerciseName": "Bent Over Barbell Row",
                                "wramUp": "5 x 10-15",
                                "workingSet": "1 x 4-8",
                                "restPeriod": "10 min"
                            }]
                        },
                        {
                            "heroId": 2,
                            "name": "Bat Punch",
                            "detail": "The enemy of batman often has a good body endurance. To damage the opponents defense, the batman must launch a powerful punch to the opponent. Perform the workouts over a three days period.",
                            "training":
                            [{
                                "exerciseName": "Incline Barbell Bench Press",
                                "wramUp": "2 x 10-15",
                                "workingSet": "3 x 4-8",
                                "restPeriod": "5 min"
                            },
                            {
                                "exerciseName": "Barbell Bench Press",
                                "wramUp": "2 x 10-15",
                                "workingSet": "3 x 4-8",
                                "restPeriod": "4 min"
                            },
                            {
                                "exerciseName": "Bent Over Barbell Row",
                                "wramUp": "5 x 10-15",
                                "workingSet": "1 x 4-8",
                                "restPeriod": "10 min"
                            }]
                        },
                        {
                            "heroId": 3,
                            "name": "Steel Muscle",
                            "detail": "Get ready to ramp up the intensity and really blow out the muscle.",
                            "training":
                            [{
                                "exerciseName": "Incline Barbell Bench Press",
                                "wramUp": "2 x 10-15",
                                "workingSet": "3 x 4-8",
                                "restPeriod": "5 min"
                            },
                            {
                                "exerciseName": "Barbell Bench Press",
                                "wramUp": "2 x 10-15",
                                "workingSet": "3 x 4-8",
                                "restPeriod": "4 min"
                            },
                            {
                                "exerciseName": "Bent Over Barbell Row",
                                "wramUp": "5 x 10-15",
                                "workingSet": "1 x 4-8",
                                "restPeriod": "10 min"
                            }]
                        }
                    ]
        }
    },
    methods: {
        openDialog(workout){
            this.selectedWorkout = workout
            this.dialog = true
            console.log(this.$route)
        },
        showOn(workout){
            this.arrWorkout.push(workout.name)
        },
        showOff(workout){
            var tempArr = []
            for (let i = 0; i < this.arrWorkout.length; i ++){
                if (this.arrWorkout[i] == workout.name){
                    continue
                } else {
                    tempArr.push(this.arrWorkout[i])
                }
            }
            this.arrWorkout = tempArr
        },
    },
    watch: {
        msg: function(){
            this.search_text = this.msg
            
        }
    },
    created() {
        for (let i = 0; i < this.Heroes.length; i++){
            this.arrHero.push(this.Heroes[i].name)
        }
    },
    computed: {
        filteredList(){
            return this.Heroes.filter(post => {
                return post.name.toLowerCase().includes(this.search_text.toLowerCase())
            })
        }
    },
}
</script>

<style>
    .v-card--reveal{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        z-index: 0 !important;
    }
</style>