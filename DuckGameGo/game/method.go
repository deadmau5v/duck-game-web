package game

import (
	"DuckGame/datasource"

	"github.com/gin-gonic/gin"
)

func List(ctx *gin.Context) {
	var games []datasource.Game
	datasource.DB.Find(&games)

	ctx.JSON(200, gin.H{
		"code": 0,
		"msg":  "ok",
		"data": games,
	})
}

func Add(ctx *gin.Context) {
	var game datasource.Game
	err := ctx.BindJSON(&game)
	if err != nil {
		ctx.JSON(400, gin.H{
			"code": 400,
			"msg":  "参数错误",
		})
		return
	}
	datasource.DB.Create(&game)

	ctx.JSON(200, gin.H{
		"code": 0,
		"msg":  "ok",
	})
}

func Delete(ctx *gin.Context) {
	var game datasource.Game
	err := ctx.BindJSON(&game)
	if err != nil {
		ctx.JSON(400, gin.H{
			"code": 400,
			"msg":  "参数错误",
		})
		return
	}
	datasource.DB.Delete(&game)

	ctx.JSON(200, gin.H{
		"code": 0,
		"msg":  "ok",
	})
}

func Update(ctx *gin.Context) {
	var data struct {
		srcGame datasource.Game
		dstGame datasource.Game
	}
	err := ctx.BindJSON(&data)
	if err != nil {
		ctx.JSON(400, gin.H{
			"code": 400,
			"msg":  "参数错误",
		})
		return
	}
	datasource.DB.Model(&data.srcGame).Updates(&data.dstGame)
}
