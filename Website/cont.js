jQuery('#frm').validate({
    rules:{
        name: {
            required: true,
            minlength: 3,
            maxlength: 20,
            regex: /^[A-Za-z ]+$/
        },
        email:{
            required:true,
            email:true
        },    
        mesg:"required", 

    },messages:{
        name: {
            required: "Enter your name",
            minlength: "Name must be at least 3 characters long",
            maxlength: "Name cannot exceed 20 characters",
            regex: "Name can only contain letters and spaces"
        },
        email:{
            required:"Enter email",
            email:"Enter valid email",
        },
        mesg:"Write a message",
    }
}
)