// 游戏推荐数据结构
type GameRecType = {
    title: string;
    author: string;
    date: string;
    views: number;
    likes: number;
    imageUrl: string;
    type: string;
}

// 滚动新闻数据结构
type NewsType = {
    content: string
    time: Date
}

export type { GameRecType, NewsType }