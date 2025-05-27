import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    { 
        path: "", 
        pathMatch: "full", 
        redirectTo: "home" 
    },
    {
        path: "",
        loadComponent: () => import("./pages/layout/home-layout/home-layout.component").then(c => c.HomeLayoutComponent),
        children: [
            { 
                path: "home", 
                pathMatch: "full", 
                loadComponent: () => import("./pages/home/home.component").then(c => c.HomeComponent) 
            },
            { 
                path: "dashboard", 
                pathMatch: "full", 
                canActivate: [loginGuard],
                loadComponent: () => import("./pages/dashboard/dashboard.component").then(c => c.DashboardComponent) 
            },
            { 
                path: "lancamentos", 
                pathMatch: "full", 
                loadComponent: () => import("./pages/lancamentos/lancamentos.component").then(c => c.LancamentosComponent) 
            },
            { 
                path: "contato", 
                pathMatch: "full", 
                loadComponent: () => import("./pages/contato/contato.component").then(c => c.ContactFormComponent) 
            }
        ]
    },
    {
        path: "",
        loadComponent: () => import("./pages/layout/auth-layout/auth-layout.component").then(c => c.AuthLayoutComponent),
        children: [
            { 
                path: "login", 
                pathMatch: "full", 
                loadComponent: () => import("./pages/login/login.component").then(c => c.LoginComponent) 
            }
        ]
    },
    { 
        path: "**", 
        redirectTo: "home" 
    }
];