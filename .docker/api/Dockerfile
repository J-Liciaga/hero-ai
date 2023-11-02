# Use the Go 1.18 runtime as a parent image
FROM golang:1.19 AS builder

# Set the working directory inside the container to match the entire project
WORKDIR /app

# Copy the entire project
COPY . .

# Set the working directory to the Go API location
WORKDIR /app/apps/api

# Download all dependencies
RUN go mod download

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o hero-ai-app .

### Start a new stage from scratch ###
FROM alpine:latest

RUN apk --no-cache add ca-certificates

# Copy the binary from the builder stage
COPY --from=builder /app/apps/api/hero-ai-app /hero-ai-app

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run hero-ai-app when the container launches
CMD ["/hero-ai-app"]