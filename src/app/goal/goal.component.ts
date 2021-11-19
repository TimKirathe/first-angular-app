import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online site where I can stream it', new Date(2021, 10, 17)),
    new Goal(2, 'Buy Cookies', 'Go to the nearest Duka', new Date(2021, 10, 21)),
    new Goal(3,'Get new Phone Case',  'Find a shop selling one you like', new Date(2021, 11, 31)),
    new Goal(4,'Get Dog Food',  'Go to the nearest Duka', new Date(2021, 10, 21)),
    new Goal(5,'Solve moringa work',  'Put in the hours', new Date(2021, 10, 21)),
    new Goal(6,'Plot my escape',  'Find the necessary weak points', new Date(2021, 11, 17))
  ];

  toggleDetails(index: string | number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`);

    if (toDelete) {
      this.goals.splice(index,1);
    }
  }
}

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
