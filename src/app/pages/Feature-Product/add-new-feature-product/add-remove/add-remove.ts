import { Component, Input } from "@angular/core";

@Component({
  selector: "ngx-add-remove",
  templateUrl: "./add-remove.html",
  styleUrls: ["./add-remove.scss"]
})
export class addOrRemoveComponent {
  @Input()
  DataSource: any;
  Add: any = true;
  OnPressRemove(id) {
    this.Add = !this.Add;
  }
  OnPressAdd(id) {
    this.Add = !this.Add;
  }
}
