function Contact(first, last){
    this.Firstname = first;
    this.Lastname = last;
    Contact.prototype.Fullname = function(){
        return this.Firstname + " " + this.Lastname;
    };
};


// user unterface?\
// let myForm = document.getElementById("form");

// myForm.addEventListener("submit", (e) =>{
//     var inputtedFirstName = document.getElementById("fname").value;
//     var inputtedLastName = document.getElementById("lname").value;
    
//     var newContact = new Contact(inputtedFirstName, inputtedLastName);
//     alert(newContact).value;
    

//     document.getElementById("contact").append = "<li><span class='contacts'>" + newContact.Fullname() + "</span></li>";
// });
$(document).ready(function(){
    $("#form").submit(function(event){
        event.preventDefault();
        var inputtedFirstName = $("#fname").val();
        var inputtedLastName = $("#lname").val();
        

        var newContact = new Contact(inputtedFirstName, inputtedLastName);
    
        $("#contacts").append("<li><span class='contact'>" + newContact.Fullname()+  "</span></li>");
// alert(newContact);

    });
});
// // business logic
// function Contact(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
  
//   Contact.prototype.fullName = function() {
//     return this.firstName + " " + this.lastName;
//   }
  
//   // user interface logic
//   $(document).ready(function() {
//     $("form#new-contact").submit(function(event) {
//       event.preventDefault();
  
//       var inputtedFirstName = $("input#new-first-name").val();
//       var inputtedLastName = $("input#new-last-name").val();
  
//       var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
//       $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
//     //   $("input#new-first-name").val("");
//     //   $("input#new-last-name").val("");
//     });
//   }); 