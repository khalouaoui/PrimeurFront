import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.scss'],
  animations: [routerTransition()]
})
export class SoftSkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
