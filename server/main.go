package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	fmt.Println("The server is active...")
	fmt.Println(" * Running on http://localhost:8080")
	fmt.Println(" * IP: localhost")
	fmt.Println(" * Port: 8080")

	r := mux.NewRouter()

	r.HandleFunc("/api/get-posts", getPosts).Methods("GET")
	r.HandleFunc("/api/add-post", addPost).Methods("POST")

	http.ListenAndServe(":8080", r)
}

func getPosts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	json.NewEncoder(w).Encode("posts")
}

func addPost(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
}
