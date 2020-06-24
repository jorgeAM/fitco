import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  todos = [];

  constructor(firestore: AngularFirestore) {
    firestore
      .collection("todos")
      .valueChanges()
      .subscribe((res) => {
        this.todos = res;
      });
  }
}
