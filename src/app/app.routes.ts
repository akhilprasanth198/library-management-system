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
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { LoginComponent } from './login/login.component';

import { UserDetailsComponent } from './user-details/user-details.component';

    export const routes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root path to home
        { path: 'home', component: HomeComponent },
        { path: 'login', component: LoginComponent, children: [
            { path: 'user-login', component: UserLoginComponent,
                children:[
                    {
                        path:'user-dashboard',
                        component:UserDashboardComponent,
                    }
                ]
            },
            { path: 'user-registration', component: UserRegistrationComponent },
            { path: 'admin-login', component: AdminLoginComponent,
                children:[
                    {
                        path:'admin-dashboard',
                        component:AdminDashboardComponent,
                    }
                ]
            },
            { path: 'admin-registration', component: AdminRegistrationComponent }
        ]
        },
        { path: 'about', component: AboutComponent },
        { path: 'book-search', component: SearchComponent },
        {path :'user-details',component:UserDetailsComponent},
        {path : 'user-dashboard', component:UserDashboardComponent},
        { path: 'admin-dashboard', component: AdminDashboardComponent },
        { path: 'borrow-book', component: BorrowBookComponent },
        { path: 'return-book', component: ReturnBookComponent },
        { path: '**', redirectTo: 'home' }  // Wildcard route for 404 page, can customize as needed
    ];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppModule {}