
const BlogItem = (props) => {
return(
    <div>
    <h2>{props.item.title}</h2>
    <p>{props.item.body}</p>
    </div>
)
}
const BlogList = (props) => {
return (
    <div>
        {props.items.map((item, i)=> <BlogItem key ={item.id} item={item}/>)}   
    </div>
)
}

const Blog = (props) => {
return (
    <div>
        <h1>{props.title}</h1>
        <BlogList items={postsData}/>
    </div>
)
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Blog title="Blog"/>,rootElement);