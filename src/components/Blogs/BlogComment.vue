<template>
    <div class="blog-comment">
        <b-card tag="article">
            <b-card-text>
                <div>
                    {{comment.name}}
                </div>
                <div>
                    <small class="text-info comment-email"> {{'By: ' + comment.email}} </small>
                </div>
                <div>
                    <small> {{comment.body}} </small>
                </div>
            </b-card-text>
        </b-card>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'BlogComment',
    props: ['comment'],
});
</script>


<style lang="scss" scoped>
.blog-comment {
    .card-body {
        background-color: #f8f8f8;
        padding: 0.75rem 1.25rem;
    }
}
</style>
