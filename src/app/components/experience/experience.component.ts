import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title:string = 'Experience';
  constructor() { }

  experience:any=[
    {
      company : 'Adaptavant',
      role : 'Trainee',
      duration : '3 months',
      techs : 'Java, J2EE, Java SCript, JQuery'
    },
    {
      company : '3i Infotech',
      role : 'Development and Support',
      duration : '2 Years',
      techs : 'Java, JSF, Primefaces, SQL, PL/SQL'
    }
  ]

  

  ngOnInit() {
  }

}
