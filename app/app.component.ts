import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  S <student-info><student-info>
  <a routerLink="/heroes">Heroes</a>
   <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Minimal NgModule-hello world-agnel amodia-sharada amodia';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/