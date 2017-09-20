import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  // userAnswer: string;
  // @Input() searchTerm;
  // @Output() finishedCheckingAnswer = new EventEmitter<string>();

  constructor() { }


  userSearch: string;

  @Output() userSearched = new EventEmitter<string>(); // userSearched is potato


  ngOnInit() {
  }

  performSearch(){
    // console.log(this.userSearch)
    this.userSearched.emit(this.userSearch)

  }

}

