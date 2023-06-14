import { useEffect, useState } from "react"

const Note = () => {

    const getItem = () => {
        let getdata = localStorage.getItem('list')

        if (getdata) {
            return JSON.parse(localStorage.getItem('list'))
        }
        else {
            return []
        }
    }

    const [state, setState] = useState('')
    const [item, setItem] = useState(getItem())

    const addItem = () => {

        if (!state) {

        }
        else {
            setItem([...item, state])
            setState('')
        }
        // alert('Note is added')
    }

    const deleteItem = (id) => {
        let confrm = window.confirm('Do you want to delete this note ?')
        if (confrm === true) {
            let update = item.filter((element, index, array) => {
                return index !== id
            })
            setItem(update)
        }
    }


    const deleteAll = () => {
        let confrm = window.confirm('Do you want to delete all notes ?')
        if (confrm === true) {
            setItem([])
        }
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(item))
    }, [item])



    return (
        <>
            <div className="header">
                    <h2>My Notes</h2>
                {/* <div className="box">
                </div> */}
            </div>
            <div className="container">
                <div className="note-container">
                    <p>Add your notes here</p>
                    <textarea name="note-text" id="note-text" value={state} onChange={(e) => { setState(e.target.value) }} placeholder="Add note..."></textarea><br />
                    <div className="buttons">
                        <button className="add" onClick={addItem}>Add note</button>
                        <button className="deleteAll" onClick={deleteAll}>Delete All</button>
                    </div>
                </div>

                {item.map((element, index, array) => {
                    return (
                        <div className="added-notes" key={index}>
                            <div className="my-note">
                                <p>{element}</p>
                                <button onClick={() => deleteItem(index)} >&#215;</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Note