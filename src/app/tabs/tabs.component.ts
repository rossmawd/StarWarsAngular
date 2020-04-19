import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
 characters = []
  chosenList = 'All' //stores which side the user has clicked

  constructor(private swService: StarWarsService) { }

  ngOnInit() {
  }

getCharacters() {
  this.characters = this.swService.getCharacters(this.chosenList)
  return this.characters
}

  onChoose(side) {
    this.chosenList = side
  }

  // onSideChosen(charInfo) {
  //   const position = this.characters.findIndex(char => {
  //     return char.name === charInfo.name;
  //   })
  //   this.characters[position].side = charInfo.side
  // }


}
