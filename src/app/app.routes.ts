    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    import { AboutComponent } from './about/about.component';
    import { UserLoginComponent } from './login/user-login/user-login.component';
    import { UserRegistrationComponent } from './login/user-registration/user-registration.component';
    import { AdminLoginComponent } from './login/admin-login/admin-login.component';
    import { AdminRegistrationComponent } from './login/admin-registration/admin-registration.component';
    import { SearchComponent } from './search/search.component';
    import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
    import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
    import { LoginComponent } from './login/login.component';
    import { AddbookComponent } from './addbook/addbook.component';
    import { UserDetailsComponent } from './user-details/user-details.component';
    import { BookDetailsComponent } from './book-details/book-details.component';
    import { UserSearchComponent } from './user-search/user-search.component';
    import { NavlogComponent } from './navlog/navlog.component';
import { UsernavComponent } from './usernav/usernav.component';

    export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  // Keep only one default redirect
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent, children: [
    { path: 'user-login', component: UserLoginComponent },
        { path: 'user-registration', component: UserRegistrationComponent },
        { path: 'admin-login', component: AdminLoginComponent },
        { path: 'admin-registration', component: AdminRegistrationComponent }
        ]
    },
    {path:'adminNav',component:NavlogComponent,
        children: [
            { path: 'book-search', component: SearchComponent },
            { path: 'add-book', component: AddbookComponent },
            { path: 'user-search', component: UserSearchComponent },

          ]
    },
    {path:'userNav',component:UsernavComponent,
        children: [
            { path: 'book-search', component: SearchComponent },
            { path: '', component: AddbookComponent },

          ]
    },

    { path: 'about', component: AboutComponent },
    // { path: 'book-search', component: SearchComponent },
    // { path: 'user-dashboard', component: UserDashboardComponent },
    // { path: 'admin-dashboard', component: AdminDashboardComponent },
    // { path: 'book-details', component: BookDetailsComponent },
    // { path: 'user-search', component: UserSearchComponent },
    { path: 'navlog', component: NavlogComponent },
    ];

    @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule {}
