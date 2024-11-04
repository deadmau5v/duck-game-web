package datasource

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() *gorm.DB {
	dsn := "root:123456@tcp(127.0.0.1:3306)/DuckGame?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
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
