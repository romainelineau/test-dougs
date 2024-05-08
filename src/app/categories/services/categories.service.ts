import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category.model";
import { VisibleCategory } from "../models/visible-category.model";

@Injectable({
    providedIn: 'root',
})
export class CategoriesService {

    constructor(private http: HttpClient) {}

    getAllCategories(): Observable<Category[]> {        
        return this.http.get<Category[]>(`http://localhost:3000/all-categories`);
    }

    getVisibleCategories(): Observable<VisibleCategory[]> {        
        return this.http.get<VisibleCategory[]>(`http://localhost:3000/visible-categories`);
    }
}
