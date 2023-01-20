import Banner from "./Components/Banner"
import InfoBlocks from "./Components/InfoBlocks"

const MainPage = (props) => {
    return (<>
        <Banner setPage={props.setPage} setInputData={props.setInputData} />
        <InfoBlocks />
    </>)
}

export default MainPage
