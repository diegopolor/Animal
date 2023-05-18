import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LazyImageComponent } from './lazy-image/lazy-image.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MenuComponent } from './menu/menu.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { MenuItemComponent } from './menu/components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    LazyImageComponent,
    PaginationComponent,
    MenuComponent,
    SearchboxComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LazyImageComponent,
    PaginationComponent,
    MenuComponent
  ]
})
export class SharedModule { }
