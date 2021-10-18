<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
    <PostList :posts="posts"/>
    </div>
    <div v-else><Spinner/></div>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spin'

export default {
  name: 'Home',
  components: {PostList, Spinner},
  setup() {
    const { posts, error, load } = getPosts()
    
    load()
    
    return{ posts, error }
  }
}
</script>
