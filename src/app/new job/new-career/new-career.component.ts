import { Component, OnInit } from '@angular/core';
import { Career } from './career'

declare var $: any
@Component({
  selector: 'app-new-career',
  templateUrl: './new-career.component.html',
  styleUrls: ['./new-career.component.css']
})

export class NewCareerComponent implements OnInit {
  city: string;
  career:Career;
  constructor() { }
  ngOnInit() {
  this.career = {title:'',technology:[''],minexp:0,maxexp:0,description:'',city:'',location:'',email:''};
  }
onChange(cityvalue) {
    console.log(cityvalue);
    this.city = cityvalue;
    console.log(this.city);
}
onClick(e) {
   e.preventDefault();
   var city=$("#rank").val();
   this.career.city=city;
   var location=$("#" + city).val();
   this.career.location =location;
   var title=$("#title").val();
   this.career.title = title;
   var minexp = parseInt($("#minexp").val());
  this.career.minexp = minexp;
  var maxexp = parseInt($("#maxexp").val());
  this.career.maxexp = maxexp;
  var description = $("#description").val();
  this.career.description = description;
  var email = $("#email").val();
  this.career.email = email;
  var technology=[];
   $('.technology').each(function () {
       if ( $(this).val() != null && $(this).val() != "" ){
        technology.push($(this).val().toString());
}
});
this.career={
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
var careerdata=JSON.stringify(this.career);
$.ajax({
    type:'POST',
    url:'http://localhost:3000/career',
    data:careerdata,
    contentType: "application/json; charset=utf-8",
    traditional: true,
    success: function(data){
      (<HTMLFormElement>document.getElementById("target")).reset(); 
        alert('career posted successfully');
        console.log(JSON.stringify(this.career));
    },
    error:function(){
        alert('error');
    }
});
}
}
