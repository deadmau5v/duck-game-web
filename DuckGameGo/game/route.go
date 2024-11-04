package game

import (
	"github.com/gin-gonic/gin"
)

func Setup(app *gin.Engine) {
	route := app.Group("/game")
	route.POST("/game", Add)
	route.GET("/game", List)
	route.DELETE("/game", Delete)
	route.PUT("/game", Update)
}
