import { Component, OnInit } from '@angular/core';
import { CareerHttpService } from '../career-http.service';
import { Router } from '@angular/router';
//import { Career } from './career'
declare var $: any

@Component({
  selector: 'app-manage-career',
  templateUrl: './manage-career.component.html',
  styleUrls: ['./manage-career.component.css'],
  providers: [CareerHttpService]
})
export class ManageCareerComponent implements OnInit {
 city:string;
 location:string;
 careers: Career[];
  selected: Career;
  career:Career;
  del:{_id:string;};
    constructor(private router: Router, private _careerHttpService: CareerHttpService){
    }
   getCareers(){
	   //default advisor when data not fetched
      this.careers=[{_id:'',title:'',technology:[''],minexp:0,maxexp:0,description:'',city:'',location:'',email:''}];
    //     this._careerHttpService.getCareers().then(data => this.careers = data);
    this._careerHttpService.getCareers().subscribe(data => this.careers = data);
	 console.log(this.careers);
		}
    ngOnInit() {     
    this.getCareers();
    this.selected={_id:'',title:'',technology:[''],minexp:0,maxexp:0,description:'',city:'',location:'',email:''};
    this.career={_id:'',title:'',technology:[''],minexp:0,maxexp:0,description:'',city:'',location:'',email:''};
    this.del={_id:''};
}
  onSelect(mod) {
    if(this.selected === mod){
      this.selected={_id:'',title:'',technology:[''],minexp:0,maxexp:0,description:'',city:'',location:'',email:''};
      this.city='choose-your-city';
      this.location='';
    }
    else{
      this.selected=mod;
      this.city=mod.city;
      this.location=mod.location;
    }
console.log(this.selected);

}
onChange(cityvalue) {
    console.log(cityvalue);
    this.city = cityvalue;
    console.log(this.city);
}

//deldeldel



onDelete(car) {
   var r = confirm("are you sure you want to delete");
    if (r == true) {
var id=car._id
this.del={
  _id:id
}
var deldata=JSON.stringify(this.del);
$.ajax({
    type:'POST',
    url:'http://localhost:3000/deldata',
    data:deldata,
    contentType: "application/json; charset=utf-8",
    traditional: true,
    success: function(data){
        alert('deleted');
        console.log(JSON.stringify(this.career));
         window.location.replace("http://localhost:3000");
    },
    error:function(){
        alert('sorry could not update some error occured');
    }
});
    } else {
        alert("You cancelled");
    }
}


onDeletemulti(){
    var del=[];
      var a:{
        del:string[]
    }
     var checkboxes = document.getElementsByName('delete');
     for(var i=0, n=checkboxes.length;i<n;i++) {
         if((<HTMLInputElement>checkboxes[i]).checked){
               del.push((<HTMLInputElement>checkboxes[i]).value);
         }
  }
     a={
         del:del
     }
           console.log(a);
           var delmulti=JSON.stringify(a);
           console.log(delmulti);
           $.ajax({
            type:'POST',
            url:'http://localhost:3000/delmulti',
            data:delmulti,
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function(data){
        alert('updated');
        console.log(JSON.stringify(this.career));
    },
    error:function(){
        alert('sorry could not update some error occured');
    }
});
}

addprop(event){
    var checkboxes = document.getElementsByName('delete');
     for(var i=0, n=checkboxes.length;i<n;i++) {
    (<HTMLInputElement>checkboxes[i]).checked = event.target.checked;
  }
}


//formormofmormomormocmodm

onClick(e) {
   e.preventDefault();
   var r = confirm("are you sure you want to update");
    if (r == true) {
   var id=this.selected._id;
   var city=$("."+id+" #rank").val();
   this.career.city=city;
   var location=$("."+id+" #" + city).val();
   this.career.location =location;
   var title=$("."+id+" #title").val();
   this.career.title = title;
   var minexp = parseInt($("."+id+" #minexp").val());
  this.career.minexp = minexp;
  var maxexp = parseInt($("."+id+" #maxexp").val());
  this.career.maxexp = maxexp;
  var description = $("."+id+" #description").val();
  this.career.description = description;
  var email = $("."+id+" #email").val();
  this.career.email = email;
  var technology=[];
   $("."+id+' .technology').each(function () {
       if ( $(this).val() != null && $(this).val() != "" ){
        technology.push($(this).val().toString());
}
});
this.career={
  _id:id,
  title:title,
  technology:technology,
  minexp:minexp,
  maxexp:maxexp,
  description:description,
  city:city,
  location:location,
  email:email
}

console.log(this.career.technology);
console.log(this.career.email);
console.log(this.career.city);
console.log(this.career._id);



var careerdata=JSON.stringify(this.career);
$.ajax({
    type:'POST',
    url:'http://localhost:3000/careerup',
    data:careerdata,
    contentType: "application/json; charset=utf-8",
    traditional: true,
    success: function(data){
        alert('updated');
        console.log(JSON.stringify(this.career));
         window.location.replace("http://localhost:3000");
    },
    error:function(){
        alert('sorry could not update some error occured');
    }
});
    } else {
        alert("You cancelled");
    }
}
}

export interface  Career {
_id:string;
title: string;
  technology: string[];
  minexp: number;
  maxexp: number;
  description: string;
  city: string;
  location: string;
  email: string;
}
