const usersRouter = require("express").Router();
const { checkAuth, checkCookiesJWT } = require("../middlewares/auth");

const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  hashPassword,
} = require("../middlewares/users");

const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmail,
  checkCookiesJWT,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkCookiesJWT,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete(
  "/users/:id",
  checkCookiesJWT,
  checkAuth,
  findUserById,
  deleteUser,
  sendUserDeleted
);
module.exports = usersRouter;
