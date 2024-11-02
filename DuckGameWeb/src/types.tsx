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

// 游戏卡片
type GameCardType = {
    title: string  // 游戏标题
    types: string[]  // 游戏类型
    imageUrl: string  // 图片地址
    date: string  // 发布日期
    likes: number  // 点赞数
    views: number  // 浏览数
    comments: number // 评论数
    onClick?: () => void
}

export type { GameRecType, NewsType, GameCardType }