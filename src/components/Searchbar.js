import React from 'react'

const Searchbar = (props) => {
    return(
        <div>
            <label>Name</label>
            <input type="checkbox" value="name" onChange={props.handleNameSort}/>
        </div>
    )

}

export default Searchbar