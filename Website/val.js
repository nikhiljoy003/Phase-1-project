jQuery("#frm").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            maxlength: 20,
            regex: /^[A-Za-z ]$/
        },
        username: {
            required: true,
            minlength: 3,
            maxlength: 20,
            regex: /^[A-Za-z0-9]$/
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            digits: true,
            minlength: 10,
            maxlength: 10
        },
        dob: {
            required: true
        },
        age: {
            required: true,
            number: true,
            min: 18
        },
        address: {
            required: true
        },
        password: {
            required: true,
            minlength: 8,
            regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/
        },
        gender: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Enter your name",
            minlength: "Name must be at least 3 characters long",
            maxlength: "Name cannot exceed 20 characters",
            regex: "Name can only contain letters and spaces"
        },
        username: {
            required: "Enter a username",
            minlength: "Username must be at least 3 characters long",
            maxlength: "Username cannot exceed 20 characters",
            regex: "Username can only contain letters and numbers"
        },
        email: {
            required: "Enter your email",
            email: "Enter a valid email"
        },
        phone: {
            required: "Enter your phone number",
            digits: "Phone number must contain only digits",
            minlength: "Enter a valid phone number",
            maxlength: "Phone number must be 10 digits long"
        },
        dob: {
            required: "Enter your date of birth"
        },
        age: {
            required: "Enter your age",
            number: "Enter a valid number",
            min: "Age must be above 18"
        },
        address: {
            required: "Please select your address"
        },
        password: {
            required: "Enter a password",
            minlength: "Password must be at least 8 characters long",
            regex: "Password must include uppercase , lowercase , digits and one special character"
        },
        gender: {
            required: "Please select your gender"
        }
    }
});

const city = {
    "Kerala": ["Ernakulam","Kollam","Thrissur","Thiruvanthapuram"],
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    "Karnataka": ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
};


const stateDropdown = document.getElementById("state");
for (const state in city) 
{
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
}


function populateCities() {
    const cityDropdown = document.getElementById("city");
    const selectedState = document.getElementById("state").value;

    cityDropdown.innerHTML = '<option value="">Select City</option>';

    if (selectedState) {
        const cities = city[selectedState];
        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            cityDropdown.appendChild(option);
        });
    }
}