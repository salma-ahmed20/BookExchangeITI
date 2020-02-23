import { Component, OnInit } from "@angular/core";
import { RouterLinkActive, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  // userId: number;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {}
}
