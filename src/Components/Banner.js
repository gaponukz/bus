import Card from 'react-bootstrap/Card'
import SearchBar from "./SearchBar"
import Container from 'react-bootstrap/Container'

const Banner = (props) => {
    const lightBannerImage = "https://cdn.blablacar.com/kairos/assets/images/carpool_blue_bus_large-30b3097694f4e465398f..svg"
    const darkBannerImage = "https://miro.medium.com/max/1400/0*-8nHQabvbgFhLssj"

    const onSubmit = (moveFrom, moveTo, startDate) => {
        props.setInputData({moveFrom: moveFrom, moveTo: moveTo, startDate: startDate})
        props.setPage('search')
    }

    return (
        <Card className="bg-dark text-white rounded-0 text-center">
            <Card.Img  src={lightBannerImage} />
            <Card.ImgOverlay>
                <Container fluid="sm">
                    <h1 style={{ fontSize: "5.8vw", lineHeight: "60px", marginBottom: "80px" }}> Низькі ціни на карпулінг та <br /><br />  автобусні поїздки </h1>

                    <SearchBar onSubmit={onSubmit} />
                </Container>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Banner
