import Card from 'react-bootstrap/esm/Card'
import { type GameCardProps } from '../models/GameCardProps'
import { Button } from 'react-bootstrap';

const GameCard = (props: GameCardProps) => {
  const { name, description, image } = props;
    return (
    <Card style={{ width: '28rem', borderRadius:'8px' }} className="gameCard d-flex flex-column justify-content-between">
      <div className="gameCardImage" style={{ backgroundImage: `url(${image})` }}>
        {name}
      </div>
      <Card.Body className='px-3 mb-0'>
        <Card.Title>{name}</Card.Title>
        <Card.Text as="small">{description}</Card.Text>
      </Card.Body>
      <Button className="py-1 mx-2 mb-3">Play {name}</Button>
    </Card>
  )
}

export default GameCard