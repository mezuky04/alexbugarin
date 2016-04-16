<template>
    <div class="section orange lighten-3 hello">
        <div class="row">
            <div class="container">

                <div class="col m12">

                    <div class="row">
                        <div class="cloud col m3 offset-m2 animated fadeInLeft">
                            <svg version="1.1" width="250" height="100" class="svg-cloud01" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
                                <g>
                                    <path d="M642.02-364.11c-0.772,0-1.519,0.114-2.229,0.313c-0.17-6.744-5.679-12.162-12.464-12.162   c-4.368,0-8.201,2.251-10.428,5.65c-1.38-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.95,1.229-6.456,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.787,0.317,2.634h95.921c0.146-0.609,0.229-1.243,0.229-1.896   C650.233-360.433,646.556-364.11,642.02-364.11z"/>
                                </g>
                                <g>
                                    <path d="M90.02,48.188c-0.771,0-1.518,0.113-2.229,0.312c-0.17-6.744-5.678-12.162-12.463-12.162   c-4.369,0-8.201,2.251-10.428,5.65c-1.381-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.951,1.229-6.457,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.786,0.317,2.634h95.92c0.146-0.609,0.23-1.243,0.23-1.896   C98.234,51.863,94.557,48.188,90.02,48.188z"/>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col m6 offset-m3 center animated zoomIn">
                            <h1 class="white-text thin">Work.</h1>
                        </div>
                    </div>

                    <div class="row right">
                        <div class="cloud col s12 offset-s4 col m3 offset-m8 animated fadeInRight">
                            <svg version="1.1" width="250" height="140" class="svg-cloud01" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
                                <g>
                                    <path d="M642.02-364.11c-0.772,0-1.519,0.114-2.229,0.313c-0.17-6.744-5.679-12.162-12.464-12.162   c-4.368,0-8.201,2.251-10.428,5.65c-1.38-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.95,1.229-6.456,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.787,0.317,2.634h95.921c0.146-0.609,0.229-1.243,0.229-1.896   C650.233-360.433,646.556-364.11,642.02-364.11z"/>
                                </g>
                                <g>
                                    <path d="M90.02,48.188c-0.771,0-1.518,0.113-2.229,0.312c-0.17-6.744-5.678-12.162-12.463-12.162   c-4.369,0-8.201,2.251-10.428,5.65c-1.381-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.951,1.229-6.457,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.786,0.317,2.634h95.92c0.146-0.609,0.23-1.243,0.23-1.896   C98.234,51.863,94.557,48.188,90.02,48.188z"/>
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>

    <description></description>

    <project
        name="Awesome-Laravel.com"
        image="/img/awesome.png"
        color="red lighten-2"
        text-color="white-text"
        slide-color="orange accent-1"
        url="https://awesome-laravel.com"
        description="Awesome-Laravel.com contain useful Laravel packages, tutorials, videos, articles and other resources. All in one place, saving Laravel developers preciuos time."
    ></project>
    <project
        name="WebCheck.xyz"
        image="/img/webcheck.png"
        color="blue-custom"
        text-color="white-text"
        slide-color="blue darken-2"
        url="http://webcheck.xyz"
        description="Just a simple website status checker with minimalistic design. Laravel is used for backend and Vue with MaterializeCSS for frontend."
    ></project>

    <currently-available-for-freelance-work></currently-available-for-freelance-work>

</template>

<script>

import Description from '../components/work/Description.vue';
import Project from '../components/work/Project.vue';
import CurrentlyAvailableForFreelanceWork from '../components/about/CurrentlyAvailableForFreelanceWork.vue';

export default {
    components: {
        'description': Description,
        'project': Project,
        'currently-available-for-freelance-work': CurrentlyAvailableForFreelanceWork
    }
}
</script>