import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  // Variables
  expandedMenuItems: { [key: string]: boolean } = {};

  // Menú de la barra lateral
  menuItems = [
    {
      text: 'Inicio',
      link: '/home',
    },
    {
      text: 'Productos',
      submenu: [
        {
          text: 'Nuevo Producto',
          link: '/product/new',
        },
        {
          text: 'Todos los Productos',
          link: '/products',
        },
        {
          text: 'Categorías',
          link: '/categories',
        },
      ],
    },
  ];

  ngOnInit() {
    for (const menuItem of this.menuItems) {
      this.expandedMenuItems[menuItem.text] = true;
    }
  }

  // Función para cambiar el estado
  toggleMenuItem(menuItem: any) {
    const key = menuItem.text;
    this.expandedMenuItems[key] = !this.expandedMenuItems[key];
  }

}
