package datasource

import (
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() *gorm.DB {
	dsn := os.Getenv("DB_DSN")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	return db
}

func Migrate(db *gorm.DB) {
	db.AutoMigrate(&Game{}, &Comment{}, &User{})
}

func Setup() {
	DB = ConnectDatabase()
	Migrate(DB)
}
