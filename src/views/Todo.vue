<template>
    <div class="todo row ml-0 mr-0 mb-3">
        <div class="mt-3 col-lg-4" v-for="user in users" v-bind:key="user.id">
            <UserCard v-bind:user="user"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppService from '../service';
import UserCard from '../components/Todo/UserCard.vue';

export default Vue.extend({
    name: 'Todo',
    components: {
        UserCard,
    },
    data() {
        return {
            users: [],
        };
    },
    created() {
        AppService.getUserDetails().then((response) => {
            const { data } = response;
            this.users = data;
        });
    },
});
</script>
