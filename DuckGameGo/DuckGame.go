package main

import (
	"DuckGame/datasource"
	"DuckGame/game"
	"DuckGame/user"

	"github.com/gin-gonic/gin"
)

func main() {
	app := gin.Default()
	datasource.Setup()
	user.Setup(app)
	game.Setup(app)
	app.Run(":5411")
}
