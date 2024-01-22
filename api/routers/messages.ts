import {Router} from 'express';
import {MessagesWithoutId} from "../types";
import fileDb from "../fileDb";

const messagesRouter = Router();

messagesRouter.get("/", async (req, res) => {
  const messages = await fileDb.getItems();
  res.send(messages);
});

messagesRouter.post("/", async (req, res) => {
  const messages: MessagesWithoutId = {
    author: req.body.author,
    message: req.body.message,
  };
  const savedMessages = await fileDb.addItem(messages);
  res.send(savedMessages);
});

export default messagesRouter;