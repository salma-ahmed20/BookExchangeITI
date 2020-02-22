import { Book } from "./book_item.model";
import { User } from "./user.model";
export class RequestItemMin {
  Id: number;
  DateOfMessage: Date;
  SenderUser: User;
  RequestedBook: Book;
  RequestStatus: string;
}
