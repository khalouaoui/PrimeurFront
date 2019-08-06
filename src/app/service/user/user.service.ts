import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';
import {Settings} from '../../settings/settings';
import {TechSkill} from '../../models/TechSkill';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  findAllUsers() {
      return this.http.get(Settings.APP_URL + "/");
  }

  findById(id: number) {
      return this.http.get(Settings.APP_URL + "/" + id);
  }

  findByName(nom: String) {
      return this.http.get(Settings.APP_URL + "/name/" + nom);
  }

  findByPrenom(prenom: String) {
      return this.http.get(Settings.APP_URL + "/find/" + prenom);
  }

  findByTechSkills(techskill: TechSkill) {
      return this.http.get(Settings.APP_URL + "/find/" +TechSkill);
  }

  public createUser(user: User) {
      console.log('user service body :', user);
      return this.http.post(Settings.APP_URL +"/" , user);
  }

  deleteById(id: number) {
      return this.http.delete(Settings.APP_URL +"/" + id);
  }
}
