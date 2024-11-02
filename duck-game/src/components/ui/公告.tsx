import { Megaphone } from "lucide-react"
import { Card, CardContent } from "./card"

export default function Notice({ children, style }: {
    children: React.ReactNode,
    style?: React.CSSProperties,
}) {
    return <Card className="mx-[4rem] text-blue-950 bg-blue-100 border-blue-900" style={{
        borderRadius: "0.5rem",
        ...style,
    }}>
        <CardContent className="my-2 py-[0.5rem]" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Megaphone size={32} style={{
                minWidth: "2rem",
                marginRight: "0.5rem",
            }} />
            {children}
        </CardContent>
    </Card>

}