const gamesRouter = require("express").Router();
const middleware = require("../middlewares/games");
const {
    sendAllGames,
    deleteGame,
    addGameController,
} = require("../controllers/games");

gamesRouter.get("/games", middleware, sendAllGames);
gamesRouter.delete("/games/:id", middleware, deleteGame);
gamesRouter.post("/games", middleware, addGameController);

module.exports = gamesRouter;
