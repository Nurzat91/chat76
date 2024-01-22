export interface Messages {
  date: string;
  message: string;
  author: string;
}

export interface MessagesTypes{
  id: string;
  date: string;
  message: string;
  author: string;
}

export interface ApiMessages {
  [id: string]: MessagesTypes;
}