import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { ImprintComponent } from './pages/imprint-component/imprint-component';
import { PrivacyComponent } from './pages/privacy-component/privacy-component';

  export const routes: Routes = [
    { path: "", component:HomeComponent },
    { path: "imprint", component:ImprintComponent },
    { path: "privacy", component:PrivacyComponent }
];