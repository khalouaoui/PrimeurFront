import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { SoftSkillComponent } from './models/soft-skill/soft-skill.component';
import { TechSkillComponent } from './models/tech-skill/tech-skill.component';
import { UserComponent } from './models/user/user.component';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule



    ],
    declarations: [AppComponent, SoftSkillComponent, TechSkillComponent, UserComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
