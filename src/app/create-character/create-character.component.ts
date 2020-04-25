import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'Light'},
    {display: 'Dark', value: 'Dark'}
  ]

  constructor(private swService: StarWarsService) { }

  onSubmit(form){
    console.log('submitting...',form.value)
    this.swService.createCharacter(form.value.name, form.value.side)

  }

  ngOnInit() {
  }

}
