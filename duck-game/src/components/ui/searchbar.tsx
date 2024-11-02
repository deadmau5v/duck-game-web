import { Search } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

export default function SearchBar() {
    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "0 1rem",
        boxSizing: "border-box",
        border: "3px solid rgb(0,0,0,0.3)",
        borderRadius: "2rem",
        backgroundColor: "rgb(255,255,255,0.8)",
    }}>
        <Input placeholder="输入游戏名或关键词..." style={{
            width: "100%",
            height: "100%",
            padding: "0.5rem",
            boxSizing: "border-box",
            border: "none",
        }} />
        <Button>
            <Search />
        </Button>
    </div>
}