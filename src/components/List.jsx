import './List.css'

function List({value, complete, id, handleComplete, handleDelete}) {
    return(
        <div className="tasks">
            <label style={complete === true ? {textDecoration: `line-through`} : {textDecoration: `none`}}><input type="checkbox" checked={complete} onChange={handleComplete} id={id} />{value}</label>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}

export default List