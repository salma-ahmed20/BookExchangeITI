import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  showRequests: boolean;
  constructor() {}

  ngOnInit() {
    this.searchToggler();
  }
  onShowMinRequestsClick() {
    this.showRequests = true;
  }
  toggleRequestStates(event) {
    this.showRequests = event;
  }
  searchToggler() {
    var trigger = $(".search__active"),
      container = $(".search_active");
    trigger.on("click", function(e) {
      e.preventDefault();
      container.toggleClass("is-visible");
    });
    $(".close__wrap").on("click", function() {
      container.removeClass("is-visible");
    });
  }
}
