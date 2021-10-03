import { Component } from "@angular/core";

@Component({
    selector:'aap-warinig-alert',
    template:`<p>I'm Warning</p>`,
    styles:[`
        p{
            padding:20px;
            background-color:mistyrose;
            border: 1px solid red;
            color:red;
        }
    `]
})
export class WarningAlertComponent{}