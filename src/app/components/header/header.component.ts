import { LoginService } from "./../../services/user/login/login.service";
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  QueryList
} from "@angular/core";
import { Router } from "@angular/router";
import { ModalService } from "../shared/_modal";
import { RequestsService } from "src/app/services/requests/requests.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChildren("accountBar") account: QueryList<any>;

  ngAfterViewInit(): void {
    this.settingToggler();
    this.searchToggler();
    this.mobileMenu();
    this.stickyHeader();

    // console.log(this.account);

    // this.account.changes.subscribe(change => {
    //   this.stickyHeader();
    // });
  }
  showRequests: boolean;
  showLoginAndSignUp: boolean = true;
  constructor(
    private router: Router,
    private login: LoginService,
    private modalService: ModalService,
    private requestsService: RequestsService
  ) {}

  ngOnInit() {
    this.login.isLoggedIn();
    this.login.loggedIn.subscribe(res => {
      this.showLoginAndSignUp = !res;
    });
    this.login.isLoggedIn();
  }
  mobileMenu() {
    ($("nav.mobilemenu__nav") as any).meanmenu({
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanScreenWidth: "991",
      meanExpandableChildren: true,
      meanMenuContainer: ".mobile-menu",
      onePage: true
    });
  }

  onShowMinRequestsClick() {
    this.showRequests = true;
  }
  toggleRequestStates(event) {
    this.showRequests = event;
  }
  settingToggler() {
    var settingTrigger = $(".setting__active"),
      settingContainer = $(".setting__block");
    settingTrigger.on("click", function(e) {
      e.preventDefault();
      settingContainer.toggleClass("is-visible");
    });
    settingTrigger.on("click", function(e) {
      e.preventDefault();
      settingContainer.toggleClass("");
    });
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

  stickyHeader() {
    $(window).on("scroll", function() {
      var sticky_menu = $(".sticky__header");
      var pos = sticky_menu.position();
      if (sticky_menu.length) {
        var windowpos = (sticky_menu as any).top;
        $(window).on("scroll", function() {
          var windowpos = $(window).scrollTop();
          if (windowpos > pos.top + 250) {
            sticky_menu.addClass("is-sticky");
          } else {
            sticky_menu.removeClass("is-sticky");
          }
        });
      }
    });
  }
  test(id: string) {
    // [routerLink]='[{ outlets: { modalShared: ["book","add"] } }]'
    // this.router.navigate([{ outlets: { modalShared: ["book", "add"] } }]);
    // (click)="test()"
    this.modalService.open(id);
  }
}
