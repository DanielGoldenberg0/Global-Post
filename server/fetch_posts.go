package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
)

func fetchPost(path string) []Post {
	data, err := ioutil.ReadFile("./" + path)
	if err != nil {
		fmt.Println(err)
	}

	var posts []Post

	err = json.Unmarshal(data, &posts)
	if err != nil {
		fmt.Println(err)
	}

	return posts
}
