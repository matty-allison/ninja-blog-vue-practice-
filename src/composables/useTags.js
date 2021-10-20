import {ref} from 'vue'

const useTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set()

    posts.forEach((item) => {
        item.tags.forEach(tag => tagSet.add(tag))
    });
    
    tags.value = [...tagSet]

    console.log(tags);

    return { tags }
}

export default useTags