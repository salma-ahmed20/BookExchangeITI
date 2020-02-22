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
}
