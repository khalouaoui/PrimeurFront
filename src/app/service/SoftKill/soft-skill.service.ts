import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Settings} from '../../settings/settings';
import {SoftSkill} from '../../models/SoftSkill';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  constructor(private http: HttpClient) { }

  public findAllSoftSkill() {
      return this.http.get(Settings.APP_URL + '/');
  }

  public createSoftSkill(softSkill: SoftSkill) {
      return this.http.post(Settings.APP_URL + '/' , softSkill);
  }

  public findAllUsersSkills(id: number) {
      return this.http.get(Settings.APP_URL + '/all' + id);
  }
}
