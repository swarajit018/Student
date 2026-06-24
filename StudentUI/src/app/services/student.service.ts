import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private http = inject(HttpClient);

  getStudents() {
    return this.http.get<Student[]>(
      'http://localhost:5007/api/student'
    );
  }
}