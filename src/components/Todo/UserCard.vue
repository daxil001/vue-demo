<template>
    <div class="user-card">        
        <b-card v-bind:title="user.name">
            <input type="text" v-model="search" placeholder="Search Todo" class="form-control rounded-0" />
            <TodoList v-bind:todoList="todoList | searchString(search)"/>
            <div class="row ml-0 mr-0">
                <input type="text" v-model="todoText" placeholder="Add Todo" class="form-control col-10 rounded-0" />
                <input type="button" value="Add" class="btn btn-info col-2 rounded-0" @click="addTodoItem" />
            </div>
        </b-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppService from '../../service';
import TodoList from './TodoList';

export default Vue.extend({
    name: 'UserCard',
    components: {
        TodoList,
    },
    data() {
        return {
            search: '',
            todoText: '',
            todoList: new Array(),
        };
    },
    props: ['user'],
    created() {
        AppService.getTodoList({
            userId: this.user.id
        }).then((response) => {
            const { data } = response;
            this.todoList = data;
        });
    },
    filters: {
        searchString: function (value, search) {
            if(search == '') return value;
            const keyword = search.toLowerCase();
            return value.filter((todo) => todo.title.toLowerCase().indexOf(keyword) > -1);
        }
    },
    methods: {
        addTodoItem() {
            AppService.addTodoItem({
                userId: this.user.id,
                title: this.todoText,
                completed: false
            }).then((response) => {
                const { data } = response;
                this.todoList.push(data);
                this.todoText = '';
            })
        }
    }
});
</script>

