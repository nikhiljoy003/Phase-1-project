const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const dob = document.getElementById('dob').value;
        const age = document.getElementById('age').value;
        const password = document.getElementById('password').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        
        if (!validatename(name)) {
            alert('Invalid Name');
            return;
        }

        if (!validateusername(username)) {
            alert('Invalid Username.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Invalid email format.');
            return;
        }

        if (!validatePhone(phone)) {
            alert('Invalid phone number.');
            return;
        }

        if (dob === '') {
            alert('Date of birth is required.');
            return;
        }

        if (!validateage(age)) {
            alert('Age must be above 18');
            return;
        }

        if (!validatepassword(password)) {
            alert('Password must be at least 8 characters long with uppercase , lowercase.');
            return;
        }

        if (!gender) {
            alert('Please select a gender.');
            return;
        }

        alert('Registration successful!');
        form.submit();
    });

    function validatename(name) {
        const re = /^[A-Za-z ]{3,20}$/;
        return re.test(name);
    }

    function validateusername(username) {
        const re = /^[A-Za-z0-9]{3,20}$/;
        return re.test(username);
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    }

    function validateage(age) {
        const re = /^(1[89]|[2-9]\d)$/;
        return re.test(age);
    }

    function validatepassword(password) {
        const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
        return re.test(password);
    }



