<template>
    <hello></hello>
    <about-me></about-me>
    <design></design>
    <development></development>
    <divider></divider>
    <currently-available-for-freelance-work></currently-available-for-freelance-work>
</template>
<script>

import Hello from '../components/about/Hello.vue';
import AboutMe from '../components/about/AboutMe.vue';
import Design from '../components/about/Design.vue';
import Development from '../components/about/Development.vue';
import Divider from '../components/about/Divider.vue';
import CurrentlyAvailableForFreelanceWork from '../components/about/CurrentlyAvailableForFreelanceWork.vue';

export default {
    components: { Hello, AboutMe, Design, Development, Divider, CurrentlyAvailableForFreelanceWork }
}
</script>