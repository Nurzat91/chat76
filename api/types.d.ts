export interface Messages {
  id: string;
  author: string;
  message: string;
}
export type MessagesWithoutId = Omit<Messages, 'id'>;