import { useEffect, useState } from "react"

const SearchPage = (props) => {
    return (<>
        {JSON.stringify(props.inputData)}
        {JSON.stringify(props.data)}
    </>)
}

export default SearchPage
