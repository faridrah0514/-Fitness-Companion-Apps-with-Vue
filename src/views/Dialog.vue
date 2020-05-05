<template>
    <div class="Dialog">
        <my-button>Click Me!</my-button>
        <my-slots>
            <h1>coba ah</h1>
        </my-slots>
    </div>

</template>

<script>

import Slots from './Slots'
export default {
    components: {
        'my-slots': Slots
    }
}
</script>
