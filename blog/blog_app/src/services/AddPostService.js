class AddNewPost {
    add = post =>{
        return fetch("http://localhost:3000/posts", {
        lead: JSON.stringify(post),
        headers: {
            "content-type":"application/json"
        
        }, 
        method: "POST"
   }).then(response => response.json());
};
}
export const addNewPost = new AddNewPost();