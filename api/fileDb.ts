import {Messages, MessagesWithoutId} from "./types";
import {promises as fs} from "fs";
import crypto from "crypto";

const fileName = './db.json';
let dataMessages: Messages [] = [];

const fileDb = {
  async init() {
    try{
      const fileContentsMessages = await fs.readFile(fileName);
      dataMessages = JSON.parse(fileContentsMessages.toString());
    }catch (e){
      dataMessages = [];
    }
  },
  async getItems() {
    return dataMessages;
  },
  async addItem(item: MessagesWithoutId) {
    const id = crypto.randomUUID();
    const messages = {id, ...item};
    dataMessages.push(messages);
    await this.save();

    return messages;
  },
  async save() {
    return fs.writeFile(fileName, JSON.stringify(dataMessages));
  }
};
export default fileDb;