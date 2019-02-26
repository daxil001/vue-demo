<template>
    <div class="todo-list">
        <div v-for="todo in todoList" v-bind:key="todo.id">
            <TodoItem v-bind:todo="todo" />
        </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import TodoItem from './TodoItem.vue';
export default Vue.extend({
    name: 'TodoList',
    props: ['todoList'],
    components: {
        TodoItem
    },
});
</script>
