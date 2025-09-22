import { Routes } from '@angular/router';
import { Accueil} from './pages/accueil/accueil';
import { Liste} from './pages/liste/liste';
import { Contact} from './pages/contact/contact';
import { Gestion} from './pages/gestion/gestion';
import { Page404} from './pages/page404/page404';


export const routes: Routes = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: 'accueil', component: Accueil },
    { path: 'liste', component: Liste },
    { path: 'contact', component: Contact },
    { path: 'gestion', component: Gestion },
    { path: 'page404' , component: Page404},
    { path: '**', redirectTo: 'accueil' }
];
