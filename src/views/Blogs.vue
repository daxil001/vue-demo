<template>
  <div class="blogs row">
    <div v-for="blog in blogs" v-bind:key="blog.id" class="col-6">
      <BlogPost v-bind:blog="blog" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppService from '../service';
import BlogPost from '../components/Blogs/BlogPost.vue';

export default Vue.extend({
  name: 'Blogs',
  components: {
    BlogPost,
  },
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    AppService.getPosts().then((response) => {
      const { data } = response;
      this.blogs = data;
    });
  },
});
</script>
