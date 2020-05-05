<template>
  <div class="about">
    <v-container>
        <div class="headline">Your Daily Personal Workout</div>
        <v-checkbox v-model="Selected" v-for="workout in Personals.slice().reverse()" v-bind:key="workout.personalId" v-bind:label="workout.name" v-bind:value="workout.name"></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            Personals: [
                {
                    "personalId": 1,
                    "name": "Incline Barbell Bench Press"
                },
                {
                    "personalId": 2,
                    "name": "Barbell Bench Press"
                },
                {
                    "personalId": 3,
                    "name": "Bent Over Barbell Row"
                }
            ],
            Selected: []
        }
    }
}
</script>
