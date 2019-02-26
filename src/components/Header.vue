 <template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">JSON PLACEHOLDER</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <li class="nav-item">
                    <router-link class="nav-link" to="/galleria">Album Galleria</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/blogs">Blogs & Posts</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/todo">Todo</router-link>
                </li>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
 </template>

<style lang="scss" scoped>
    nav{
        padding: 0;
        .navbar-brand{
            padding: 15px 20px 15px 20px;
        }
        .nav-item{
            .nav-link{
                height: 60px;
                padding: 17px 10px 17px 10px;
                &.router-link-exact-active{
                    background-color: #3e4142;
                }
            }
        }
    }
</style>
