debug:
	go run ./server/server.go

run:
	./server/bin/server

build:
	go build -o ./server/bin/server ./server/server.go
