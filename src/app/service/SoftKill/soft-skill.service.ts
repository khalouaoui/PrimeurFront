import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http' ;
import { Settings } from 'src/app/settings/settings';
=======
import {HttpClient} from '@angular/common/http';
import {Settings} from '../../settings/settings';
import {SoftSkill} from '../../models/SoftSkill';
>>>>>>> ee171e65007fd3f6898ccdae159305e5eb9c7a40

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  constructor(private http: HttpClient) { }
<<<<<<< HEAD
  findAllSkills() {
    return this.http.get(Settings.SOFT_URL + '/');
  }
  createSoftSkill(id: number, soft: any) {
    return this.http.post(Settings.SOFT_URL + '/' + id, soft) ;
  }
  getSkills(id: number) {
     return this.http.get(Settings.SOFT_URL + 'all' + id) ;
  }

=======

  public findAllSoftSkill() {
      return this.http.get(Settings.APP_URL + '/');
  }

  public createSoftSkill(softSkill: SoftSkill) {
      return this.http.post(Settings.APP_URL + '/' , softSkill);
  }

  public findAllUsersSkills(id: number) {
      return this.http.get(Settings.APP_URL + '/all' + id);
  }
>>>>>>> ee171e65007fd3f6898ccdae159305e5eb9c7a40
}
