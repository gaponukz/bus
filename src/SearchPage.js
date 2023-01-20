import SearchBar from "./Components/SearchBar"

const SearchPage = (props) => {
    const onSubmit = (moveFrom, moveTo, startDate) => {
        props.setInputData({moveFrom: moveFrom, moveTo: moveTo, startDate: startDate})
    }

    return (<>
        <SearchBar onSubmit={onSubmit}/>
        {/* Navbar */}
        {/* Filter */}
        {/* DataList */}

        {JSON.stringify(props.inputData)}
        {JSON.stringify(props.data)}
    </>)
}

export default SearchPage
