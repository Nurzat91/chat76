import {Router} from 'express';
import {Messages, MessagesWithoutId} from "../types";

const messagesRouter = Router();

messagesRouter.get("/", async (req, res) => {
  res.send('messages get');
});

messagesRouter.post("/", async (req, res) => {
  const messages: MessagesWithoutId = {
    author: req.body.author,
    message: req.body.message,
  };
  res.send('messages post');
});

export default messagesRouter;