import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {trigger,  state,  style,  animate,  transition} from '@angular/animations';



@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)'}),
        animate('0.8s 0.1ms ease-in')
      ]),
      transition(':leave', [
        animate('0.8s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ContactMeComponent implements OnInit {
  showOrHide:String='Show';
  toggleError:Boolean;
  errMsg:String;
  clicked:Boolean=false;
  success:Boolean;
  message:String;
  buttonText:String='Send';
  successAlert:Boolean=false;
  title:string = 'Contact Me';
  constructor(private fb:FormBuilder,private httpClient:HttpClient) {
    
   }
  contactMe:FormGroup;
  ngOnInit() {
    this.contactMe = this.fb.group({
      'name':['',[Validators.required,Validators.minLength(5)]],
      'email':['',[Validators.required,Validators.email]],
      'mobile':['',[Validators.required,Validators.pattern("(6|7|8|9)\\d{9}")]],
      'message':['',[Validators.required,Validators.minLength(15)]]
    });
  }

  

  validator(control:string,errorType:string){
    return this.contactMe.get(control).hasError(errorType) && this.contactMe.get(control).touched;
  }

@Input() status:String;

  onSubmit(){
    Object.keys(this.contactMe.value).forEach(controlName=>this.contactMe.get(controlName).markAsTouched());
    if(this.contactMe.valid){
    this.contactMe.disable();
    this.clicked=true;
    this.buttonText='Sending...';
      this.httpClient.post('https://email-647a.restdb.io/mail',this.getMessage(),{
        headers : {
          'x-apikey' : '5c603566f210985199db550b'
        }
      }).subscribe(()=>{},
      (error:HttpErrorResponse)=>{
        this.success=false;
        this.message=`Check Your Internet Connectivity`;
        this.errMsg=error.message;
        this.successAlert=true;
        this.clicked=false;
        this.buttonText='Send';
        this.contactMe.enable();
      },
      ()=>{
        this.success=true;
        this.message='Mail has been sent successfully';
        this.successAlert=true;
        this.contactMe.reset();
        this.clicked=false;
        this.buttonText='Send';
        this.contactMe.enable();
      });
    }
  }

  
  toggleSuccess(event){
    this.successAlert = !this.successAlert;
  }

  showMessage(){
    this.toggleError=!this.toggleError;
    this.showOrHide = this.toggleError==true?'Hide':'Show';
  }

  getMessage(){
    return {
      "to":"rsshreenaath@gmail.com",
      "subject":"Contact Shree", 
      "html": `<p><b>Name : </b>${this.contactMe.get('name').value}</p>
               <p><b>Email : </b>${this.contactMe.get('email').value}</p>
               <p><b>Mobile : </b>${this.contactMe.get('mobile').value}</p>
               <p><b>Message : </b>${this.contactMe.get('message').value}</p>`,
      "company": "Shree & Co", 
      "sendername": `${this.contactMe.get('name').value}`
  }
  }
}
