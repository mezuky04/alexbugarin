var Vue = require('vue');

Vue.use(require('vue-resource'));

import Navigation from './components/Navigation.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';
import CustomFooter from './components/CustomFooter.vue';

new Vue({

    el: 'body',

    components: { Navigation, About, Work, Contact, CustomFooter }

});