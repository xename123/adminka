const { readData } = require("../utils/data");

async function getAllGames(req, res, next) {
    const games = await readData("./data/games.json");
    if (!games) {
        res.status(400);
        res.send({
            status: "error",
            message: "Нет игр в базе данных. Добавьте игру.",
        });
        return;
    }
    req.games = games;
    next();
}
module.exports = getAllGames;
