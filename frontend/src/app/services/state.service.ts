import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private titleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public title$: Observable<string> = this.titleSubject.asObservable();

  private breadcrumbSubject: BehaviorSubject<{ name: string, url: string }[]> = new BehaviorSubject<{ name: string, url: string }[]>([]);
  public breadcrumb$: Observable<{ name: string, url: string }[]> = this.breadcrumbSubject.asObservable();

  constructor(private titleService: Title) { }

  // Actualiza el título y el breadcrumb
  updateTitleAndBreadcrumb(url: string): void {
    let title = '';
    let breadcrumb: { name: string, url: string }[] = [];

    if (url.includes('/home')) {
      title = 'Inicio';
      breadcrumb = [
        { name: 'Inicio', url: '/home' }
      ];
    } else if (url.includes('/product/new')) {
      title = 'Nuevo producto';
      breadcrumb = [
        { name: 'Productos', url: '/products' },
        { name: 'Nuevo producto', url: '/product/new' }
      ];
    } else if (url.includes('/products')) {
      title = 'Todos los productos';
      breadcrumb = [
        { name: 'Productos', url: '/products' }
      ];
    } else {
      title = 'Pagina no encontrada';
      breadcrumb = [];
    }

    this.setTitle(title);
    this.setBreadcrumb(breadcrumb);
  }

  setTitle(title: string): void {
    this.titleSubject.next(title);
    this.titleService.setTitle(`La VegutaClick - ${title}`);
  }

  setBreadcrumb(breadcrumb: { name: string, url: string }[]): void {
    this.breadcrumbSubject.next(breadcrumb);
  }
}