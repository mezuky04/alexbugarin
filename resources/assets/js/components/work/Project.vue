<template>
    <div class="{{ color }}">
        <div class="container">
            <div class="section project">
                <div class="row">
                    <div class="col m10 offset-m1 center">

                        <figure class="imghvr-slide-up {{ slideColor }}">
                            <img :src="image" class="responsive-img project-image" height="400px" width="900px">
                                <figcaption class="valign-wrapper">
                                    <div class="col m12">
                                        <i class="material-icons large center-align valign">input</i>
                                    </div>
                                </figcaption>
                                <a target="_blank" href="{{ url }}"></a>
                        </figure>
                        <h4 class="condensed"><a class="{{ textColor }}" target="_blank" href="{{ url }}">{{ name }}</a></h4>
                        <div class="col m10 offset-m1">
                            <p class="{{ textColor }}">{{ description }}</p>
                        </div>
                        <div class="col m4 offset-m4" v-if="video">
                            <a class="btn teal lighten-2">Presentation Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'description', 'image', 'video', 'color', 'slideColor', 'textColor', 'url']
}
</script>