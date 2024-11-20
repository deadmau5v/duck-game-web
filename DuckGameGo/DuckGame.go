package main

import (
	"DuckGame/auth"
	"DuckGame/datasource"
	"DuckGame/game"
	"DuckGame/initialization"
	"DuckGame/user"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	initialization.Initialize()

	app := gin.Default()
	requrieAuth := app.Group("/")
	requrieAuth.Use(auth.RequrieAuth)

	datasource.Setup()
	user.Setup(app, requrieAuth)
	game.Setup(app, requrieAuth)
	app.Run(":" + os.Getenv("PORT"))
}
