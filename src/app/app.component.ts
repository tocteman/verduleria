import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sabroso';
  userId = ""
  constructor(){
    localStorage.getItem("userId") ? 
    this.loadUserId() :
    this.setUserId()
  }

  loadUserId(){
    // llamar a provider o algo
  }

  setUserId(){
    const newId = uuidv4()
    this.userId = newId
    localStorage.setItem("userId", newId)
    // llamar a provider o algo
  }
}
