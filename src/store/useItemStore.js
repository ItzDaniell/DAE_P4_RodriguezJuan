import { create } from 'zustand'
import { getPost } from '../services/Post.service'

const useStore = create((set) => ({
    posts: [],
    getPosts: async () => {
        const posts = await getPost()
        set({ posts: posts })
    }
}))
