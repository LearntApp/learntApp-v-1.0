'use strict';

function validateForm() {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.validated-form');
    // Loop over them and prevent submission
    Array.from(forms)
    .forEach(function(form) {
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        }, false);
    });
}

function previewFile(input){
    var file = $("input[type=file]").get(0).files[0];

    if(file){
        var reader = new FileReader();

        reader.onload = function(){
            $("#profilePic").attr("src", reader.result);
        }

        reader.readAsDataURL(file);
    }
}

(function()
{

    window.addEventListener("load", validateForm, false);

    window.addEventListener("load", () =>
    {
        if(document.title === "User Dashboard")
        {
            
        }
    });
})(); // IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION