import './Input.css'

function Input({updateList, placeHolder}) {
    return(
        <>
        <div id='Input'>
            <input id='InputField' type='text' placeholder={placeHolder} />
            <button id='InputButton' onClick={updateList}>+</button>
        </div>
        </>
    )
}

export default Input