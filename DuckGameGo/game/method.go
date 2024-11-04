package game

import (
	"DuckGame/datasource"

	"github.com/gin-gonic/gin"
)

func List(ctx *gin.Context) {
	games := []datasource.Game{}
	datasource.DB.Find(&games)

	ctx.JSON(200, gin.H{
		"code": 0,
		"msg":  "ok",
		"data": games,
	})
}

func Add(ctx *gin.Context) {
	var game datasource.Game
	ctx.BindJSON(&game)
	datasource.DB.Create(&game)

	ctx.JSON(200, gin.H{
		"code": 0,
		"msg":  "ok",
	})
}
