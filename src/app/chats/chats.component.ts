
import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { RequestItemMin } from '../models/request_item.model';
import { RequestsMinService } from '../services/requests-min.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  @Input() showRequests: boolean;
  @Output() closeRequests = new EventEmitter<boolean>();
  listOfRequests: RequestItemMin[];
  constructor(private requestsMinService: RequestsMinService) {}

  ngOnInit() {
    this.listOfRequests = this.requestsMinService.getListOfRequests();
  }
  onCloseClick() {
    this.showRequests = false;
    this.closeRequests.emit(this.showRequests);
  }
}

