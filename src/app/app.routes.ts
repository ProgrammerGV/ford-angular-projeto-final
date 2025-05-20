import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';
import { ContactFormComponent } from './pages/contato/contato.component';

export const routes: Routes = [

    {
        path: "",
        loadComponent: () => {
            return import("./pages/layout/auth-layout/auth-layout.component")
                .then(c => c.AuthLayoutComponent)
        },
        children:[
            {
                path: "", 
                pathMatch: "full",
                redirectTo: "login" 
            },
            {
                path: "login",
                pathMatch: "full",
                
                loadComponent: () => {
                    return import("./pages/login/login.component")
                        .then(c => c.LoginComponent)
                }
            },
        ]
    },
    {
        path: "",
        canActivate: [loginGuard],
        loadComponent: () => {
            return import("./pages/layout/home-layout/home-layout.component")
                .then(c => c.HomeLayoutComponent)
        },
        children: [
            {
                path: "home",
                pathMatch: "full",
                loadComponent: () => {
                    return import("./pages/home/home.component")
                        .then(c => c.HomeComponent)
                }
            },
            {
                path: "dashboard",
                pathMatch: "full",
                loadComponent: () => {
                    return import("./pages/dashboard/dashboard.component")
                        .then(c => c.DashboardComponent)
                }
            },
            {
                path: "lancamentos",
                pathMatch: "full",
                loadComponent: () => {
                    return import("./pages/lancamentos/lancamentos.component")
                        .then(c => c.LancamentosComponent)
                }
            },
            {
                path: "contato",
                pathMatch: "full",
                loadComponent: () => {
                    return import("./pages/contato/contato.component")
                        .then(c => c.ContactFormComponent)
                }
            }
        ]
    },

    {
        path: "**",
        redirectTo: ""
    }
];