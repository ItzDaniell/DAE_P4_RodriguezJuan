import axios from "axios"

export const getPost = async () => {
    try {
        const results = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return results.data
    } catch(error) {
        console.error(error)
    }
}
