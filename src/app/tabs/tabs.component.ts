import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ]
  chosenList = 'all' //stores which side the user has clicked
  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side
  }

  getCharacters = () : any[] => {
    if (this.chosenList === 'all') {
      return this.characters.slice() //returns a copy of an array
    }
    console.log('getting chars')
    return this.characters.filter((char) => {
      return char.side === this.chosenList
    })
}

}
