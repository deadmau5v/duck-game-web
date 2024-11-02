import { GameCardType } from "@/types";
import GameCard from "./游戏卡片";

export default function GameCardList({ games }: { games: GameCardType[] }) {
  return <div>
    <span style={{
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    }}>
      游戏推荐
    </span>
    <div style={{
      display: 'flex',

      overflowX: 'auto',
      gap: '1rem',
      width: `100%`,
    }}>
      {games.map((game, index) => (
        <GameCard game={game} key={index} />
      ))}
    </div>
  </div>
}