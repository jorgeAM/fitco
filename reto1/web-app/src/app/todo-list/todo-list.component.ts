import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: Observable<any[]>;
  numItems: number;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('todos').valueChanges();

    this.items.subscribe((res) => (this.numItems = res.length));
  }
}
