import { useEffect, useState } from "react"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"
import { Megaphone } from "lucide-react"
import { NewsType } from "@/types"
import { timeDiff } from "@/lib/utils"


export default function News({ style }: { style?: React.CSSProperties }) {

    // Todo 新闻数据
    const news: NewsType[] = [
        { content: "《DeadLock》 发布", time: new Date() },
        { content: "《守望先锋》 下架", time: new Date() },
        { content: "用户 deadmau5v 充值 VIP", time: new Date() },
    ]

    const [NewsIndex, setNewsIndex] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (NewsIndex == news.length - 1) {
                setNewsIndex(0)
            } else {
                setNewsIndex(NewsIndex + 1)
            }
        }, 3000)
        return () => clearInterval(interval)
    })

    return (
        <Card className="mx-[4rem] py-2 text-blue-950 bg-blue-100 border-blue-900" style={{
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "center",
            ...style
        }}>
            <CardContent style={{
                display: "flex",
                height: "100%",
                width: "100%",
                justifyContent: "space-between",
            }} className="px-10 py-2">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }} className="bg-blue-200 rounded-xl px-2 ml-2">
                    <Megaphone /> 网站公告
                </div>
                <div>
                    {news[NewsIndex].content}
                </div>
                {/* XXX分钟前 计算时间差 */}
                <Badge className="bg-blue-200 ml-2">
                    {timeDiff(news[NewsIndex].time)}
                </Badge>
            </CardContent>
        </Card>
    )
}