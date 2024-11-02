import { Card, CardContent } from "@/components/ui/card";
import { Eye, Clock, Star } from "lucide-react";
import gameLogo from "@/assets/game.jpg";
import { GameRecType } from "@/types"

// 大图展示 只展示第一个数据
function ItemCard({ item, style }: { item: GameRecType, style?: React.CSSProperties }) {
    return (
        <Card className="bg-gradient-to-b from-gray-800 to-gray-900 text-white border-blue-900 mobile-hide" style={{
            width: "1200px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0.5rem",

            ...style
        }}>


            <CardContent className="p-4 w-full bg-gradient-to-b from-transparent to-blue-950" >
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <div className="flex">
                        <Star className="h-4 w-4 mr-1" /><span className="text-sm text-gray-400">{item.likes}</span>
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <span>{item.author}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{item.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>{item.views}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};


// 游戏列表 不展示图片
function ItemListCard({ items }: { items: GameRecType[] }) {
    return (
        <div className="w-full" style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 4fr)",
            gap: "1rem",
        }}>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
}

// 游戏推荐不显示图片的每个项目
function Item({ item }: { item: GameRecType }) {
    return (
        <div className="flex items-center justify-between w-full bg-white rounded-xl py-3 px-5 border-blue-900 border">
            <div className="mr-4 pad-hide">
                <img src={item.imageUrl} alt="" className="h-20 rounded-[6px]" />
            </div>
            <div className="w-full">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{item.type}</span> ·
                    <span>{item.author}</span> ·
                    <span>{item.date}</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span className="text-sm text-gray-400">{item.likes}</span>
            </div>
        </div>
    );
}


// 入口 游戏推荐
export default function GameRecommendations({ style }: { style?: React.CSSProperties }) {
    const testData = {
        title: "赛博朋克2077",
        author: "CD Projekt Red",
        date: "2022-1-1",
        views: 100,
        likes: 80,
        imageUrl: `${gameLogo}`,
        type: "动作射击",
    }
    const Games: GameRecType[] = [
        testData, testData, testData, testData, testData, testData, testData
    ] // Todo 假数据

    return <div className="flex w-full" style={{
        ...style
    }}>
        <ItemCard item={Games[0]} style={{
            marginRight: "1rem",
        }} />
        <ItemListCard items={Games.slice(1, 5)} />
    </div>
}