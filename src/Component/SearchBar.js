import React, { useState } from 'react'

function SearchBar(props) {
    const passvalue = React.createContext()
    const [searchitem, setSearchitem ] = useState()

    return (
        <passvalue.Provider value={searchitem}>
       
        </passvalue.Provider>
    )
}

export default SearchBar
