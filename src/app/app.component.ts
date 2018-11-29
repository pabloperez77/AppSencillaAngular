import { Component } from '@angular/core';
import { Response } from '../modules/response'

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent {
  responses: Array<Response> = [];

  newPanel(panel){
    const currentPanel = panel.trim();
    console.log(currentPanel,"padre");

    if(currentPanel !== ''){
        const newAnswer: Response = {
            panel: currentPanel
        }
        this.responses.unshift(newAnswer)
    }else {
        console.error('no has introducido un panel')
    }
  }
}