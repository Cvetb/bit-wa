const ShoppingListItem = (props) => {
    return (
        <li> {props.name}</li>
    );
}

const ShoppingList = (props) => {
    return (
        <ul>
        {props.items.map((item, i)=> <ShoppingListItem key ={i} name={item}/>)}
        </ul>
    );
}

var App = (props) =>{
    return (
        <div> 
            <h1>{props.title}</h1>
            <ShoppingList items = {props.groceries}/>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App title="This is app!" groceries ={["Coffee","Chocolate","Juice","Milk"]}/>, rootElement);