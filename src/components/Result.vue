<template>
    <div>
        <p>Counter is: {{ counter }}</p>

    </div>

</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            }
        },
        data: function () {
            return {}
        }
    }
</script>