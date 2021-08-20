import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rekenmachine',
  templateUrl: './rekenmachine.component.html',
  styleUrls: ['./rekenmachine.component.css']
})
export class RekenmachineComponent implements OnInit {

  invoer = new FormControl('');

  currentCaretLocation : number = 0;

  constructor() { }



  ngOnInit(): void {
  }

  onClick( char: string): void {
    let v:string = this.invoer.value;
    let newVal = v.substr(0, this.currentCaretLocation) + char + v.substr(this.currentCaretLocation, v.length)
    this.invoer.setValue( newVal) ;
    this.currentCaretLocation++;
  }

  onKey(event: any) : void {
    this.currentCaretLocation = event.target.selectionStart;
  }

  onMouse(event: any) : void {
    this.currentCaretLocation = event.target.selectionStart;
  }

}
