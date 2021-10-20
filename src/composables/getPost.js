import {ref} from 'vue'
import { projectFireStore } from '../firbase/config'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {        
        let res = await projectFireStore.collection('posts').doc(id).get()
        if (!res.exists) {
          throw Error('That post does not exist. Please go back')
        }
        post.value = { ...res.data(), id: res.id }

      } 
      catch (err) {
        error.value = err.message
        console.log(error.value);
      }
    }
    return { post, error, load }
}

export default getPost