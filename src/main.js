import Vue from 'vue';
import Hello from './components/Hello.vue'

// Hello :)

new Vue({
    el: '#app',
    components: { Hello },
    template: '<Hello/>'
});