<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>kotel is: {{ cat }}</p>

    </div>

</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            },
            cat() {
                return this.$store.state.dog;
            }

        },
        data: function () {
            return {}
        }
    }
</script>