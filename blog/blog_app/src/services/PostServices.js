import Post from '../entities/Post';
import { url } from "../shared/constants";

class PostService {
    fetchPost() {
        return fetch(url.postsURL)
        .then((response) => response.json())
        .then((responsePosts) => {
            const myPosts = responsePosts;
            return myPosts.map((post) => {
                return new Post(post)
            })
        })
       // .catch((error) => { throw (error) })

    }
}
export const postService = new PostService();