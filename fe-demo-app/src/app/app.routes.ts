import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
        

    },
    {
        path:'About',
        component:AboutComponent,
        

    },
    {
        path:'Product',
        component:ProductComponent,
        

    },
    {
        path:'Contact',
        component:ContactComponent,
        

    },
    {
        path:'Signup',
        component:SignupComponent,
        

    },
    
];
