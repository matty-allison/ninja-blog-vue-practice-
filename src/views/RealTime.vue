<template>
  <h1>Real-time data</h1>
  <div v-for="post in posts" :key="post.id">
      <div>{{post.title}}</div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFireStore } from '../firbase/config'
export default {
    setup() {
        const posts = ref([])

        projectFireStore.collection('posts').orderBy('createdAt', 'desc').onSnapshot((snap) => {
            let docs = snap.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
            posts.value = docs
        })

        return { posts }
    }
}
</script>

<style>

</style>