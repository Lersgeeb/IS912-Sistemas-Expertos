import { Component, OnInit, Input } from '@angular/core';

interface Step{
  icon: string;
  name: string;
  desc: string;
}

@Component({
  selector: 'app-process-step',
  templateUrl: './process-step.component.html',
  styleUrls: ['./process-step.component.scss']
})
export class ProcessStepComponent implements OnInit {
  @Input() step: Step = {
    icon: '',
    name: '',
    desc: '',
  }

  routeIcon = 'assets/icons/landingpage/';

  constructor() { }

  ngOnInit(): void {
    this.routeIcon = `${this.routeIcon}${this.step.icon}.svg`;
  }

}
