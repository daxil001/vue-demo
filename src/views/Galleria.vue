<template>
  <div class="galleria">
    <div class="wrapper">
      <div v-bind:key="album.id" v-for="album in albumList">
        <AlbumCard v-bind:album="album" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AlbumCard from '../components/Galleria/AlbumCard.vue';
import AppService from '../service';

@Component({
  name: 'Galleria',
  components: {
    AlbumCard,
  },
})
export default class Galleria extends Vue {
  public albumList = new Array();

  private created() {
    AppService.getAlbums()
      .then((response) => {
          const { data } = response;
          this.albumList = data;
      });
  }
}
</script>

<style lang="scss" scoped>
  .galleria{
    .wrapper{
      padding: 15px;
    }    
  }
</style>

