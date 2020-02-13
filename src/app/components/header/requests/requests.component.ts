import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.css"]
})
export class RequestsComponent implements OnInit {
  @Input() showRequests: boolean;
  constructor() {}

  ngOnInit() {}
}
