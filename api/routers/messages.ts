import {Router} from 'express';
import fileDb from "../fileDb";

const messagesRouter = Router();

messagesRouter.get("/", async (req, res, next) => {
  try {
    const messages = await fileDb.getItems();
    res.send(messages);
  } catch (e) {
    next(e);
  }
});

messagesRouter.post("/", async (req, res, next) => {
  try{
    const author =  req.body.author;
    const message =  req.body.message;
    if(!author || !message) {
      return res.status(422).send({error: 'Author and message must be present in the request'});
    }
    const savedMessages = await fileDb.addItem({author, message});
    res.send(savedMessages);
  }catch (e){
    next(e);
  }
});

export default messagesRouter;