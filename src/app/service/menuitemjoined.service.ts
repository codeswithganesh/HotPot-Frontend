import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../model/datastructure'; // Adjust the import based on your project structure

@Injectable({
  providedIn: 'root'
})
export class MenuitemjoinedService {

  private apiUrl = 'https://localhost:7121/api/MenuItem'; // Base URL for the API

  constructor(private http: HttpClient) {}

  // Fetch all menu items
  getAllMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
  }

  // Add a new menu item
  addMenuItem(menuItem: MenuItem): Observable<MenuItem> {
    return this.http.post<MenuItem>(this.apiUrl, menuItem);
  }

  // Delete a menu item
  deleteMenuItem(menuItemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${menuItemId}`);
  }
}
