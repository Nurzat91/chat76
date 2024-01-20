export interface Messages {
  author: string;
  message: string;
}
export type MessagesWithoutId = Omit<Messages, 'id'>;