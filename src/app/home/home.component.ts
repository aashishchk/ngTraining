import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('txtInput') txtInput: ElementRef;
  inputText = '';
  userInputText: string[] = [];
  maxLen = 100;
  remText: string;
  constructor() {}

  ngOnInit() {
    this.setRemText(0);
  }

  setRemText(count) {
    this.remText = this.maxLen - count + ' chars remaining';
  }
  textLenCount(tgt: Event) {
    const count = (<HTMLInputElement>tgt.target).value.length;
    this.setRemText(count);
  }
  addInputText() {
    if (this.inputText) {
      this.userInputText.push(this.inputText);
      this.inputText = '';
      this.setRemText(0);
      this.txtInput.nativeElement.focus();
    }
  }
}
