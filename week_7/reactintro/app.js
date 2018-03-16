const ShoppingListItem = (props) => {
    return (
        <li> {props.name}</li>
    );
}

const ShoppingList = (props) => {
    return (
        <ul>
    {props.items.map((item)=> <ShoppingListItem name={item}/>)}
{/*<ShoppingListItem />
<ShoppingListItem/>
<ShoppingListItem/>*/}
             </ul>
    );
}

var App = (props) =>{
    return (
        <div> 
            <h1> {props.title}</h1>
            <ShoppingList/>
            </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App title="This is app!"/>, rootElement);