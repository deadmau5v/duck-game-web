import SearchBar from "@/components/ui/searchbar";
import bg from "@/assets/bg.jpg";

export default function Search() {

    const hot_search = [
        "幻兽帕鲁", "星空", "黑神话", "赛博朋克2077", "装甲核心6", "王国之泪", "森林之子"
    ]

    return <div style={{
        backgroundImage: `url(${bg})`,
        width: "100%",
        height: "35rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "10rem",
            width: "100%",
        }}>
            <h1 style={{
                fontSize: "2rem",
                color: "white",
                textShadow: "0 0 10px black",
                marginBottom: "0.5rem",
            }}>DuckGame-游戏分享小站</h1>
            <div style={{
                color: "white",
                textShadow: "0 0 10px black",
            }}>
                游戏仓库持续更新中...
            </div>
        </div>
        <div style={{
            height: "3.5rem",
            width: "60%",
            display: "flex",
            justifyContent: "center",
        }}>
            <SearchBar />
        </div>
        <div style={{
            paddingTop: "0.5rem",
            color: "rgb(255,255,255,0.5)",
            maxWidth: "70%",
        }}>
            热门搜索：{hot_search.join(", ")}...
        </div>
    </div>
}