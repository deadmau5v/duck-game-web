import { Button } from "./button"
import { GameCardType } from "@/types"
import GameCard from "./游戏卡片"
import { useState } from "react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./pagination"
import { Home } from "lucide-react"

function GameTypeBar() {
    const GameTypes = [
        "全部",
        'RPG',
        '冒险',
        'FPS',
        'RTS',
        '动作',
        '休闲',
        '模拟',
        '体育',
        '竞速',
        '格斗',
        '音乐',
        '益智',
        '卡牌',
        '塔防',
        '解谜',
        '恐怖',
        '生存',
    ]

    return (
        <div style={{
            display: 'flex',
            overflowX: 'auto',
        }}>
            {GameTypes.map((type, index) => {
                return (
                    <div key={index} className="mr-2 w-full">
                        <Button
                            title={type}
                            className="w-full bg-blue-100 rounded-xl border border-blue-900"
                            onClick={() => { }}
                        >{type}</Button>
                    </div>
                )
            })}
        </div>
    )
}

function GameList({ games }: { games: GameCardType[] }) {

    return <div style={{
        display: 'flex',
        width: '100%',
        gap: '1rem',

        flexWrap: 'wrap',
        justifyContent: 'space-evenly',

        marginTop: '1rem',
    }}>
        {
            games.map((game, index) => {
                return (
                    <GameCard key={index}
                        game={game}
                    />
                )
            })
        }
    </div>
}

function Pages() {

    const [page, setPage] = useState(1)

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
        }}>
            <Pagination style={{
                userSelect: 'none',
            }}>
                <PaginationContent>
                    <PaginationItem>
                        {/* 上一页 */}
                        {
                            page > 1 ?
                                <PaginationPrevious onClick={
                                    () => { setPage(page - 1) }
                                } /> :
                                <PaginationPrevious className="text-gray-400 hover:text-gray-400" />
                        }
                        {
                            page > 1 && <PaginationLink onClick={() => { setPage(1) }}><Home /></PaginationLink>
                        }
                    </PaginationItem>
                    <PaginationItem>
                        {page > 1 && <PaginationLink>{page - 1} </PaginationLink>}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink isActive>
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>{page + 1}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        {/* 下一页 */}
                        <PaginationNext title="下一页" onClick={() => {
                            setPage(page + 1)
                        }} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default function UpdateGameList({ games }: { games: GameCardType[] }) {
    return (
        <div className="mt-2">
            <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
            }}>
                最近更新
            </span>
            <GameTypeBar />
            <GameList games={games} />
            <Pages />
        </div>
    )
}