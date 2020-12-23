package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

// Post represents a post
type Post struct {
	UserTag int    `json:"user_tag"`
	Date    string `json:"date"`
	Body    string `json:"body"`
}

var pathToPostsDB string = "posts.json"
var posts = make(map[int]Post)

func setHeaders(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
}

func getPosts(w http.ResponseWriter, r *http.Request) {
	setHeaders(w)

	json.NewEncoder(w).Encode("posts")
}

func addPost(w http.ResponseWriter, r *http.Request) {
	setHeaders(w)

	json.NewEncoder(w).Encode("Post added to database!")
}

func main() {
	fmt.Println("The server is active...")
	fmt.Println(" * Running on http://localhost:8080")
	fmt.Println(" * IP: localhost")
	fmt.Println(" * Port: 8080")

	r := mux.NewRouter()

	r.HandleFunc("/api/get-posts", getPosts).Methods("GET")
	r.HandleFunc("/api/add-post", addPost).Methods("POST")

	buildHandler := http.FileServer(http.Dir("../client/build"))
	r.PathPrefix("/").Handler(buildHandler)

	staticHandler := http.StripPrefix("/static/", http.FileServer(http.Dir("../client/build/static")))
	r.PathPrefix("/static/").Handler(staticHandler)

	http.ListenAndServe(":8080", r)
}
