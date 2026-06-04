import GameCard from "../components/GameCard"
import { GAMES } from "../constants"

const HomeScreen = () => {
  return (
    <div className="gamesDisplay d-flex flex-wrap justify-content-center gap-4">
        {GAMES.map((game) => (
            <GameCard key={game.key} name={game.name}  description={game.description} image={game.image}/>
        ))}
    </div>
  )
}

export default HomeScreen