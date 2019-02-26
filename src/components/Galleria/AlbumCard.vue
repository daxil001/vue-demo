<template>
    <div>
        <b-card
            v-bind:title="album.title"
            tag="article"
            class="mb-3">
            <AlbumPhotos v-bind:photos="albumPhotos" />
        </b-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppService from '../../service';
import AlbumPhotos from './AlbumPhotos.vue';

export default Vue.extend({
    name: 'AlbumCard',
    components: {
        AlbumPhotos,
    },
    props: ['album'],
    data() {
        return {
            albumPhotos: [],
        };
    },
    created() {
        AppService.getPhotosForAlbum({
            albumId: this.album.id,
        }).then((response) => {
            const { data } = response;
            this.albumPhotos = data;
        });
    },
});
</script>

