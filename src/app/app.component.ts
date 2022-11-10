import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sesection = {id:"",name:""}
  guardardata(){
    let data = {id:1 ,name:"xyx"}

    localStorage.setItem("session",JSON.stringify(data))
  }
  loadData(){
    let data:any = localStorage.getItem("session")
    alert(data)
    this.sesection = JSON.parse(data)
  }
}
