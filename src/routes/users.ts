import { Request, Response, Router } from "express";
import Users from "models/user.model";

const userRouter = Router();

userRouter.route("/").get((req: Request, res: Response) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

userRouter.route("/add").post((req: Request, res: Response) => {
  const username = req.body.username;
  const newUser = new Users({ username });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default userRouter;
