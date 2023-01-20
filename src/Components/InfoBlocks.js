import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const InfoBlocks = () => {
    return (
        <Container fluid="sm" style={{ marginTop: "20px" }}>
            <Row>
                <Col>
                    <Card className="border-0" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Вибирайте поїздки за низькою ціною</Card.Title>
                            <Card.Text>
                                Куди б ви не їхали, автобусом чи з попутниками, знайдіть ідеальну поїздку з безлічі напрямків і маршрутів – і подорожуйте за низькими цінами.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Довіряйте своїм попутникам</Card.Title>
                            <Card.Text>
                                Ми добре знаємо всіх своїх пасажирів і автобусних партнерів. Ми перевіряємо відгуки та профілі, щоб ви подорожували із впевненістю.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Прокрутіть, клацніть, натисніть і забронюйте!</Card.Title>
                            <Card.Text>
                                Забронювати поїздку ще ніколи не було так легко! Завдяки потужному алгоритму наш застосунок знайде водія поруч із вами всього за кілька хвилин.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default InfoBlocks
