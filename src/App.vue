<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-counter></app-counter>
                <another-counter></another-counter>
                <another-result></another-result>
                <input :value="value" @input="updateValue" type="text">
                <input type="text" v-model="value">
                <p>{{value}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

    export default {
        data() {
            return {}
        },
        computed: {
            value: {
                get() {
                    return this.$store.getters.value;

                },
                set() {
                    this.$store.dispatch('updateValue', event.target.value)
                }
            }
        },
        methods: {
            updateValue(event) {
                this.$store.dispatch('updateValue', event.target.value)
            }
        }
        ,
        components: {
            appCounter: Counter,
            anotherCounter: AnotherCounter,
            appResult: Result,
            anotherResult: AnotherResult
        }
    }
</script>

