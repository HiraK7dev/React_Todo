import './List.css'

function List({items, complete}) {
    return(
        <div className="tasks">
            <label><input type="checkbox" value={items} />{`  ` + items}</label>
            <button>DELETE</button>
        </div>
    )
}

export default List