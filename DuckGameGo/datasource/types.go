package datasource

import (
	"time"
)

type User struct {
	ID       uint   `gorm:"primaryKey;autoIncrement"`
	Name     string `json:"name"`
	Password string `json:"password"`
}

type Game struct {
	ID         uint      `gorm:"primaryKey;autoIncrement"`
	CreateTime time.Time `gorm:"autoCreateTime"`
	UpdateTime time.Time `gorm:"autoUpdateTime"`

	Date     time.Time `json:"date"`
	Title    string    `json:"title"`
	Author   string    `json:"author"`
	Views    int       `json:"views"`
	Likes    int       `json:"likes"`
	Type     string    `json:"type"`
	ImageUrl string    `json:"imageUrl"`
	Content  string    `json:"content"`
}

type Comment struct {
	ID     uint `gorm:"primaryKey;autoIncrement"`
	GameID uint // Foreign key for Game
	Game   Game `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	UserID uint // Foreign key for User
	User   User `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	Content string `json:"content"`
}

// 游戏推荐的返回数据结构
type GameRec struct {
	Title    string `json:"title"`
	Author   string `json:"author"`
	Date     string `json:"date"`
	Views    int    `json:"views"`
	Likes    int    `json:"likes"`
	ImageUrl string `json:"imageUrl"`
	Type     string `json:"type"`
}

// 游戏卡片的返回数据结构
type GameCard struct {
	Title    string   `json:"title"`
	Types    []string `json:"types"`
	ImageUrl string   `json:"imageUrl"`
	Date     string   `json:"date"`
	Likes    int      `json:"likes"`
	Views    int      `json:"views"`
	Comments int      `json:"comments"`
}

// NewsType 主页新闻类型
type NewsType struct {
	content string
	time    time.Time
}
