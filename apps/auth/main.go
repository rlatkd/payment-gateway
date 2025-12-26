package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"auth/internal/handlers"
	"auth/internal/repository"
	"auth/internal/utils"
	"auth/internal/middleware"

	_ "github.com/go-sql-driver/mysql"
	"golang.org/x/crypto/bcrypt"
)

func main() {
	dsn := "rlatkd:0000@tcp(127.0.0.1:3300)/AUTH?parseTime=true"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		log.Fatalf("DB 연결 실패: %v\n", err)
	}
	fmt.Println("MySQL Connected (localhost:3300)")

	hash, _ := bcrypt.GenerateFromPassword([]byte("0000"), bcrypt.DefaultCost)

	repository.CreateTestUser(db, string(hash))

	fmt.Println("Test User ensured: rlatkd / 0000")

	h := &handlers.AuthHandler{DB: db}

	mux := http.NewServeMux()

	mux.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
			if r.Method == http.MethodGet {
					h.LoginPage(w, r)
			} else {
					w.WriteHeader(http.StatusMethodNotAllowed)
			}
	})

	mux.HandleFunc("/api/auth/login", func(w http.ResponseWriter, r *http.Request) {
			if r.Method == http.MethodPost {
					h.LoginProcess(w, r)
			} else {
					w.WriteHeader(http.StatusMethodNotAllowed)
			}
	})

	mux.HandleFunc("/api/auth/refresh", func(w http.ResponseWriter, r *http.Request) {
			if r.Method == http.MethodPost {
					h.RefreshProcess(w, r)
			} else {
					w.WriteHeader(http.StatusMethodNotAllowed)
			}
	})

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "/login", http.StatusFound)
	})

	fmt.Println("Auth Server started at http://localhost:8080")

	go utils.Opener("http://localhost:8080")

	log.Fatal(http.ListenAndServe(":8080", middleware.Logger(middleware.EnableCORS(mux))))
}
