import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    skillsConfig = [
        {text: 'Java', width: 95},
        {text: 'HTML | CSS', width: 90},
        {text: 'JavaScript | TypeScript', width: 90},
        {text: 'C++', width: 75},
        {text: 'C#', width: 60},
        {text: 'Ruby', width: 50},
        {text: 'PHP', width: 40},
        {text: 'Python', width: 30},
        {text: 'Kotlin', width: 15}
    ];
    toolsConfig = [
        {text: 'Angular 2+', width: 95},
        {text: 'Angular Material', width: 95},
        {text: 'Spring 4.2+', width: 80},
        {text: 'Bootstrap 3+', width: 80},
        {text: 'SASS', width: 75},
        {text: 'LESS', width: 55},
        {text: 'Hibernate', width: 40},
        {text: 'Mockito', width: 30},
        {text: 'ExpressJS', width: 20}
    ];
    constructor() {
    }

    ngOnInit() {
    }

}
