<template>
    <div class="todo-item row ml-0 mr-0">
        <div class="col-2">
            <input type="checkbox" class="form-control" v-model="todo.completed"/>
        </div>
        <div class="col-10 cursor-pointer" v-on:click="changeSelection">
            <span v-bind:class="{checked : todo.completed}"> {{todo.title}} </span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'TodoItem',
    props: ['todo'],
    methods: {
        changeSelection() {
            this.todo.completed = !this.todo.completed;
        },
    },
});
</script>

<style lang="scss" scoped>
.todo-item {
    padding: 5px;
    border-bottom: 1px solid #cfd4db;
    border-left: 1px solid #cfd4db;
    border-right: 1px solid #cfd4db;
    .cursor-pointer{
        cursor: pointer;
    }
    .checked {
        text-decoration: line-through;
        color: #b3b3b3;
    }
}
</style>