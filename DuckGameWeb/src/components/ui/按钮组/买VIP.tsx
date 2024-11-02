import { Crown } from "lucide-react";
import { Button } from "../button";

export default function BuyVIP({ className }: { className?: string }) {
    return <>
        <Button className={"bg-yellow-300 rounded-2xl h-[26px] hover:bg-yellow-200 text-yellow-950 hover:text-yellow-800 transition-all " + className} style={{
            margin: 0,
        }}>
            <Crown />
            成为VIP
        </Button>
    </>
}