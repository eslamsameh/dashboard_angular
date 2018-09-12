import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-form-elements",
  templateUrl: "./all-single-message.html",
  styleUrls: ["./all-single-message.scss"]
})
export class AllSingleMessageComponent implements OnInit {
  userid: 2;
  Send: any;
  converstation = [
    {
      userid: 1,
      message: "hello",
      admin: 0
    },
    {
      userid: 2,
      message: "hello",
      admin: 1
    },
    {
      userid: 1,
      message: "how are you",
      admin: 0
    },
    {
      userid: 2,
      message: "iam fine thanks",
      admin: 1
    },
    {
      userid: 2,
      message: "How Can I help you? sir",
      admin: 1
    },
    {
      userid: 1,
      message: "i have two apple and i can see",
      admin: 0
    },
    {
      userid: 1,
      message: "hello",
      admin: 0
    },
    {
      userid: 2,
      message: "hello",
      admin: 1
    },
    {
      userid: 1,
      message: "how are you",
      admin: 0
    },
    {
      userid: 2,
      message: "iam fine thanks",
      admin: 1
    },
    {
      userid: 2,
      message: "How Can I help you? sir",
      admin: 1
    },
    {
      userid: 1,
      message: "i have two eyes and i can see",
      admin: 0
    }
  ];

  constructor() {}
  ngOnInit() {
    setTimeout(() => {
      var objDiv = document.getElementById("div-card");
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 100);
  }
  OnPressSendMessage() {
    let data = {
      userid: this.userid,
      message: this.Send,
      admin: 1
    };
    this.converstation.push(data);
    setTimeout(() => {
      var objDiv = document.getElementById("div-card");
      objDiv.scrollTop = objDiv.scrollHeight;
}, 100);
    this.Send = "";
  }
}
