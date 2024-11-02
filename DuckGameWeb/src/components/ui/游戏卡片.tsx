import { GameCardType } from "@/types";
import { Card } from "./card";
import { Dot, Eye, ThumbsUp } from "lucide-react";


export default function GameCard({ game }: { game: GameCardType }) {
    return <Card style={{
        display: "flex",
        flexDirection: "column-reverse",
        height: "13rem",
        backgroundImage: `url(${game.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "16rem",
        color: "white",
    }} className="rounded-xl border border-blue-950">
        <div style={{
            backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
            padding: "1rem",
            borderRadius: "0.5rem",
        }}>
            <span style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
            }}>
                {game.title}
            </span>
            <br />
            <span className="flex">
                <Dot className="text-blue-400"/>{game.types}
            </span>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "0.3rem", 
            }}>
                <div className="flex items-center gap-1">
                    {/* 点赞 */}
                    <ThumbsUp size={16} />{game.likes}
                </div>
                <div className="flex items-center gap-1">
                    {/* 点赞 */}
                    <Eye size={16} />{game.views}
                </div>
            </div>
        </div>
    </Card>
}