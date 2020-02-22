import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RequestItemMin } from "src/app/models/request_item.model";

@Injectable({
  providedIn: "root"
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  getRequests(pageNumber, pageSize): Observable<RequestItemMin[]> {
    console.log(pageNumber);

    return this.http.get<RequestItemMin[]>(
      "http://localhost:52558/api/ModifiedRequest",
      {
        params: { pageNumber, pageSize }
      }
    );
  }
  newRequest(senderUserId, recievirUserId, wantedBookId, sendedBookId) {
    let req = new Request();
    req.BookId = sendedBookId;
    req.RecieverId = recievirUserId;
    req.RequestedBookId = wantedBookId;
    req.SenderId = senderUserId;

    console.log(req);
    debugger;

    return this.http.post("http://localhost:52558/api/request/add", req, {
      headers: { "content-type": "application/json" }
    });
  }
}
export class Request {
  BookId; // sended
  RequestedBookId; //requested
  SenderId; // user
  RecieverId;
}
