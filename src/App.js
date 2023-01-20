import { useEffect, useState } from "react"
import MainPage from "./MainPage"
import SearchPage from "./SearchPage"

const App = () => {
    const [page, setPage] = useState('main')
    const [inputData, setInputData] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        // await fetch('/get_data').then(async response => await response.json()).then(async response => {
        //     setData(response)
        // })
        setData(Array.from({length: 10}, () => Math.floor(Math.random() * 10)))
    }, [inputData]);
    // const [language, setLanguage] = useState('ua')

    return (<>
        {{
            main: <MainPage setPage={setPage} inputData={inputData} setInputData={setInputData} />,
            search: <SearchPage inputData={inputData} setInputData={setInputData} data={data} />
        }[page]}
    </>)
}

export default App
