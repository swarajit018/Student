import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student';
import { StudentService } from './services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   students: Student[] = [];

  private studentService = inject(StudentService);

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe(data => {
        console.log("data",data);
        
        this.students = data;
      });
  }

}
