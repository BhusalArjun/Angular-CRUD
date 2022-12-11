import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  contactForm!: NgForm;
  data: string = 'Ram Bahadur';
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any): void {
    console.log('event: ', event.value);
  }

  submit(form:any){
    console.log('form details: ', form);
  }

}
