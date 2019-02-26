<template>
    <div class="d-inline-block">
        <div class="d-inline-block m-5" v-bind:key="photo.id" v-for="photo in photos">
            <b-card
                v-bind:title="photo.title"
                v-bind:img-src="photo.url"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                <b-card-text>
                    {{'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' + photo.title}}
                </b-card-text>

                <b-button href="#" variant="info">Go somewhere</b-button>
            </b-card>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'AlbumPhotos',
    props: ['photos'],
});
</script>

<style lang="scss" scoped>
.album-photo{
    display: inline;
}
</style>
