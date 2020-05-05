<template>
    <div>
        <v-toolbar flat color='red darken-1'>
            <v-toolbar-items>
                <v-btn text class="white--text text-capitalize" router :to="'/'">Home</v-btn>
                <v-btn text class="white--text text-capitalize" router :to="'/about'">About</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items v-if="status == '/heroworkout'">
                <v-col>
                    <v-text-field
                        background-color="white"
                        color="white"
                        placeholder="Search"
                        outlined
                        dense
                        rounded
                        append-icon="mdi-magnify"
                        v-model="search_text"
                       
                    ></v-text-field> 
                </v-col>
            </v-toolbar-items>
        </v-toolbar>
        <div class="text-center my-3">
            <h1>My Fitness Companion</h1>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            status: undefined,
            search_text: ''
        }
    },
    updated(){
        console.log(this.search_text)
        this.$emit('search_text', this.search_text)
    },
    watch: {
        '$route' (){
            this.status = this.$route.path
        }
    }
}
</script>