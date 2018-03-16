const ShoppingListItem = (props) => {
    return (
        <li>{props.name}</li>
    );
}

const ShoppingList = (props) => {

    var items = ["chocolate", "coffee", "milk"];

    return (
        <ul>

            {props.items.map((item) => <ShoppingListItem name = {item}/>)}
            
            </ul>
    )
}

var App = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <ShoppingList />
        </div>
    );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App title="naslov" />, rootElement);