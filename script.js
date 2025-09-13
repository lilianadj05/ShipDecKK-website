document.addEventListener('DOMContentLoaded', function() {
    // HAMBURGER MENU - NAVBAR
    const navToggleLabel = document.querySelector('.nav-toggle-label');
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    if (navToggleLabel) {
        navToggleLabel.addEventListener('click', function() {
                nav.classList.toggle('active');
        });
    }
    
    // FORM VALIDATION
    const joinForm = document.getElementById('joinForm');
    
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // RESET ERROR MESSAGES
            document.querySelectorAll('.error-message').forEach(el => {
                el.textContent = '';
            });
            
            let isValid = true;
            
            // FULL NAME
            const fullName = document.getElementById('fullName');
            if (!fullName.value.trim()) {
                document.getElementById('fullName').textContent = 'Full name is required';
                isValid = false;
            } else if (fullName.value.trim().length < 2) {
                document.getElementById('fullName').textContent = 'Full name must be at least 2 characters';
                isValid = false;
            }
            
            // EMAIL
            const email = document.getElementById('email');
            const emailValue = email.value.trim();

            if (!emailValue) {
                document.getElementById('emailError').textContent = 'Email is required';
                isValid = false;
            } else {
                const hasAtSymbol = emailValue.includes('@');
                const atIndex = emailValue.indexOf('@');
                const hasDotAfterAt = emailValue.indexOf('.', atIndex) > atIndex;
                const hasTextBeforeAt = atIndex > 0;
                const hasTextAfterAt = atIndex < emailValue.length - 1;
                const hasTextAfterLastDot = emailValue.lastIndexOf('.') < emailValue.length - 1;
                
                if (!hasAtSymbol || !hasDotAfterAt || !hasTextBeforeAt || !hasTextAfterAt || !hasTextAfterLastDot) {
                    document.getElementById('emailError').textContent = 'Please enter a valid email address';
                    isValid = false;
                }
            }
            
            // PASSWORD
            const password = document.getElementById('password');
            if (!password.value) {
                document.getElementById('passwordError').textContent = 'Password is required';
                isValid = false;
            } else if (password.value.length < 8) {
                document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
                isValid = false;
            } else if (!/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value)) {
                document.getElementById('passwordError').textContent = 'Password must contain at least one uppercase letter and one number';
                isValid = false;
            }
            
            // PHONE NUMBER
            const phone = document.getElementById('phoneNumber');
            const phoneValue = phone.value.trim();

            if (!phoneValue) {
                document.getElementById('phoneError').textContent = 'Phone number is required';
                isValid = false;
            } else {
                let digitsOnly = ''; //hapus yg bukan angka
                for (let i = 0; i < phoneValue.length; i++) {
                    const char = phoneValue.charAt(i);
                    if (char >= '0' && char <= '9') {
                        digitsOnly += char;
                    }
                }
    
                if (digitsOnly.length < 10 || digitsOnly.length > 15) {
                    document.getElementById('phoneError').textContent = 'Please enter a valid phone number (10-15 digits)';
                    isValid = false;
                }
            }
            
            // CHECKBOX
            const promotional = document.getElementById('promotional');
            
            if (isValid) {
                alert('Form submitted successfully!');
                joinForm.reset();
            }
        });
    }
    
    // FOOTER SUBSCRIPTION
    const footerForm = document.querySelector('.footer-subscribe-form');
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            document.getElementById('emailError').textContent = '';
            
            let isValid = true;
            const email = document.getElementById('email');
            const emailValue = email.value.trim();

            if (!emailValue) {
                document.getElementById('emailError').textContent = 'Email is required';
                isValid = false;
            } else {
                const hasAtSymbol = emailValue.includes('@');
                const atIndex = emailValue.indexOf('@');
                const hasDotAfterAt = emailValue.indexOf('.', atIndex) > atIndex;
                const hasTextBeforeAt = atIndex > 0;
                const hasTextAfterAt = atIndex < emailValue.length - 1;
                const hasTextAfterLastDot = emailValue.lastIndexOf('.') < emailValue.length - 1;
                
                if (!hasAtSymbol || !hasDotAfterAt || !hasTextBeforeAt || !hasTextAfterAt || !hasTextAfterLastDot) {
                    document.getElementById('emailError').textContent = 'Please enter a valid email address';
                    isValid = false;
                }
            }
            
            if (isValid) {
                alert('Thank you for subscribing to our newsletter!');
                email.value = '';
            }
        });
    }
});