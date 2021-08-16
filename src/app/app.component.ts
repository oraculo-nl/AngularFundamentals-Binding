import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

class Antwoord {
  eigenschap() {
    return "hello";
  }
};

class Klant {
  naam = "Google";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  antwoord1: any ;
  antwoord2: any = new Antwoord();
  klant = new Klant();

  title = 'AngularFundamentals-Binding';
  interpolationVariabele = "interpolation";


  parameter = "TypeScript";

  tweeWeg:any = "bla";

  reactiveInput = new FormControl('')

  clickButton(param?:string):void {
    if (param)
      alert('hello '+param+'!');
    else
      alert('hello from Angular!');
  }

  telOp(getal:number):number {
    return getal+100;
  }

  onItemClick(event:Event)
  {
    console.log("Event: ",event);
  }

}
