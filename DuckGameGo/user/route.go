package user

import (
	"DuckGame/datasource"

	"github.com/gin-gonic/gin"
)

func ListUsers(c *gin.Context) {
	var users []datasource.User
	datasource.DB.Find(&users)

	c.JSON(200, gin.H{
		"code": 0,
		"msg":  "ok",
		"data": users,
	})
}

func Setup(app *gin.Engine) {
	route := app.Group("/user")
	route.GET("/list", ListUsers)
}
