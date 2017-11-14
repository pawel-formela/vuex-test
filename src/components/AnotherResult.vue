<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks is: {{ stringCounter}}</p>

    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters(
                [
                    "doubleCounter",
                    "stringCounter"
                ]
            )
        },
        data: function () {
            return {}
        }
    }
</script>