import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//importamos los componentes
import { AboutComponent, PortafolioComponent, PortafolioItemComponent, SearchComponent } from './components/index.paginas';

//arrray con la configuracion de rutas

const APP_ROUTES:Routes =[
    { path: '',  component:PortafolioComponent },
    { path: 'home',  component:PortafolioComponent },
    { path: 'about',  component:AboutComponent },
    { path: 'portafolio-item/:id',  component:PortafolioItemComponent },
    { path: 'search/:termino',  component:SearchComponent },
    { path: '**',pathMatch:'full', redirectTo:'' }
];


export const ROUTING :ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

