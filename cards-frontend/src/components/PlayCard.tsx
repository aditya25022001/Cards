import { Image } from 'react-bootstrap'
import { type PlayCardProps } from '../models/PlayCardProps'
import { IMAGE_EXTENSION, IMAGE_PATH } from '../constants'

const PlayCard = (props: PlayCardProps) => {
  
  const { cardCode } = props

  return (
    <Image 
      className="playCard"
      id={cardCode} 
      style={{ backgroundColor: "white", cursor: 'pointer' }} 
      src={`${IMAGE_PATH}${cardCode}${IMAGE_EXTENSION}`} 
      alt={cardCode}
    />
  )
}

export default PlayCard