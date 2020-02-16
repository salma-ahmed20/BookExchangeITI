import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  keyword = "name";
  data = [
    {
      id: 1,
      name: "Usa"
    },
    {
      id: 2,
      name: "England"
    }
  ];

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
}
