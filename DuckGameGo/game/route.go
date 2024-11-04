package game

import (
	"github.com/gin-gonic/gin"
)

func Setup(app *gin.Engine) {
	route := app.Group("/game")
	route.GET("/list", List)
}
