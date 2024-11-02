import { Bird, Coffee, Flame, LucideProps, Rabbit, Swords } from "lucide-react"
import React from "react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

function Tag({ title, desc, icon }: {
    title: string,
    desc: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}) {
    return (
        <div style={{
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            flex: "1 1 auto",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0, // 防止图标缩小
            }} className="bg-blue-400 rounded-full h-16 w-16">
                {React.createElement(icon, { size: 32, color: "white" })}
            </div>
            <div style={{
                paddingLeft: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <div style={{
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}>
                    {title}
                </div>
                <div style={{
                    color: "rgba(0,0,0,0.5)",
                    fontSize: "0.8rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}>
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default function AboutTags() {
    return (
        <div style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: "flex",
            flexWrap: "wrap", // 启用自动换行
        }}>
            <Tag title="价格良心" desc="一杯奶茶钱" icon={Coffee} />
            <Tag title="每日白嫖" desc="签到领奖励" icon={Bird} />
            <Tag title="快速更新" desc="游玩最新版" icon={Rabbit} />
            <Tag title="多人游玩" desc="一起玩开黑" icon={Swords} />
            <Tag title="游戏社区" desc="交流心得" icon={Flame} />
        </div>
    )
}