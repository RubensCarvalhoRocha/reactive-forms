import { Component } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  handleFormSubmit() {
    this.postBlog(this.blogForm.value.title, this.blogForm.value.body)
  }

  blogForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  postBlog(title: string | null | undefined, body: string | null | undefined) {
    console.log(`Posting blog titles ${title}, with the contents ${body}.`);
  }
}
