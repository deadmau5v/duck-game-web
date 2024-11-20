package game

import (
	"github.com/gin-gonic/gin"
)

func Setup(app *gin.Engine, requrieAuth *gin.RouterGroup) {
	requrieAuth.POST("/game", Add)
	requrieAuth.GET("/game", List)
	requrieAuth.DELETE("/game", Delete)
	requrieAuth.PUT("/game", Update)
}
