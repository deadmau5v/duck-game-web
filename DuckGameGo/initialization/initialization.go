package initialization

import (
	"log"

	"github.com/joho/godotenv"
)

func Initialize() {
	// 加载环境变量
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
