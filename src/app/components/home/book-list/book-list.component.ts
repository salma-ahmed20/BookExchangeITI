import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    ($(".furniture--4") as any).owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: false,
      autoplayTimeout: 10000,
      items: 4,
      navText: [
        '<i class="zmdi zmdi-chevron-left"></i>',
        '<i class="zmdi zmdi-chevron-right"></i>'
      ],
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
        1920: {
          items: 4
        }
      }
    });
  }
  books = [
    { id: 1, name: "img1" },
    { id: 4, name: "img4" },
    { id: 3, name: "img3" },
    { id: 5, name: "img5" },
    { id: 5, name: "img5" },
    { id: 5, name: "img5" },
    { id: 5, name: "img5" }
  ];

  constructor() {
    console.log(this.books);
  }

  ngOnInit() {}
}
