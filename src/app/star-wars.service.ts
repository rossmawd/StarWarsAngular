import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {

  private characters = [
    {name: 'Luke Skywalker', side: 'Light'},
    {name: 'Darth Vader', side: 'Dark'}
  ]
  private logService: LogService

  constructor(logService: LogService){
    this.logService = logService
  }

  createCharacter(newName, newSide){
    let newChar = {name: newName, side: newSide}
    this.characters.push(newChar)
  }

  getCharacters = (chosenList) : any[] => {
    if (chosenList === 'All') {
      return this.characters.slice() //returns a copy of an array
    }
    console.log('getting chars')
    return this.characters.filter((char) => {
      return char.side === chosenList
    })
}

onSideChosen(charInfo) {
  const position = this.characters.findIndex(char => {
    return char.name === charInfo.name;
  })
  this.characters[position].side = charInfo.side
  this.logService.writeLog('changed side of'+ charInfo.name + '.New side: ' + charInfo.side)
}
}
