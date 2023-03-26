import { useState } from "react"

const Search = ({ getQuery, search, query }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        q.preventDefault()
        getQuery(text)
        setText('')
        
    }

    return (
        <div className="search">
            <form onSubmit={onChange} className='form-control'>
                <input
                    type='text'
                    className="form-contol"
                    placeholder="input title"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                />
                <input type='submit' value='search books' className="btn btn-block" />
            </form>
            
        </div>
    )
}

export default Search