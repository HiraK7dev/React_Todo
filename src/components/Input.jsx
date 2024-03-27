import './Input.css'

function Input({updateList}) {
    return(
        <>
        <div id='Input'>
            <input id='InputField' type='text' placeholder='Write here....' />
            <button id='InputButton' onClick={updateList}>+</button>
        </div>
        </>
    )
}

export default Input