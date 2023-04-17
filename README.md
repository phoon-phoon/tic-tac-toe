# Game - Tic Tac Toe

## Installation

### Manually
```
npm install
npm run dev
```

### Docker Container
```
// First Time
docker-compose up --build --no-recreate -d

// Second Time
docker-compose up -d

// Test your container
docker-compose ps

// Build and Start App
docker exec -it tic_tac_toe sh
npm i && npm run dev
```

### Makefile
```
// First Time
make first

// Next time
make start
```