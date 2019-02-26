<template>
    <div class="blogpost m-3">
        <b-card v-bind:title="blog.title" tag="article">
            <b-card-text>
                {{blog.body}}
            </b-card-text>
            <div class="show-comments">
                <button class="btn btn-info border rounded-circle" @click="showComments"> {{commentsVisible ? '-' : '+'}} </button>
            </div>
        </b-card>
        <div v-if="commentsVisible"> 
            <div v-for="comment in comments" v-bind:key="comment.id">
                <BlogComment v-bind:comment="comment" />
            </div>
            <div class="row ml-0 mr-0">
                <input type="text" class="col-10 form-control" v-model="newComment" placeholder="Add Comment"/>
                <input type="button" value="Add" class="btn btn-info col-2 rounded-0 " @click="addNewComment" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppService from '../../service';
import BlogComment from './BlogComment.vue';

export default Vue.extend({
    name: 'BlogPost',
    components: {
        BlogComment,
    },
    props: ['blog'],
    data() {
        return {
            newComment: '',
            commentsVisible: false,
            comments: new Array(),
        };
    },
    methods: {
        showComments() {
            this.commentsVisible = !this.commentsVisible;
            if (this.commentsVisible && this.comments.length === 0) {
                AppService.getCommentsForPost({
                    postId: this.blog.id,
                    _limit: 3,
                }).then((response) => {
                    const { data } = response;
                    this.comments = data;
                });
            }
        },
        addNewComment() {
            AppService.addComment({
                postId: this.blog.id,
                name: this.newComment,
                email: 'Annonymous',
                body: 'Fake Description',
            }).then((response) => {
                const { data } = response;
                this.comments.push(data);
                this.newComment = '';
            });
        },
    },
});
</script>

<style lang="scss" scoped>
.show-comments{
    float: right;
}
</style>
