// JavaScript Event Handling & Interactive Elements Assignment
// This script handles all interactive functionality for the page

    // Button Click Event
    const clickBtn = document.getElementById('click-btn');
    const clickOutput = document.getElementById('click-output');
    
    clickBtn.addEventListener('click', function() {
        clickOutput.textContent = "Button was clicked! 🎉";
        clickOutput.classList.add('success-message');
        // Add animation effect
        clickOutput.classList.add('pulse');
        setTimeout(() => {
            clickOutput.classList.remove('pulse');
        }, 500);
    });
    
    // Hover Effects
    const hoverBox = document.getElementById('hover-box');
    const hoverOutput = document.getElementById('hover-output');
    
    hoverBox.addEventListener('mouseenter', function() {
        hoverBox.style.backgroundColor = '#27ae60';
        hoverBox.style.transform = 'scale(1.1)';
        hoverOutput.textContent = 'Mouse entered the box! 🖱️';
    });
    
    hoverBox.addEventListener('mouseleave', function() {
        hoverBox.style.backgroundColor = '#e74c3c';
        hoverBox.style.transform = 'scale(1)';
        hoverOutput.textContent = 'Mouse left the box! 👋';
    });
    
    // Keypress Detection
    const keyInput = document.getElementById('key-input');
    const keyOutput = document.getElementById('key-output');
    
    keyInput.addEventListener('keyup', function(event) {
        const key = event.key;
        const keyCode = event.keyCode || event.which;
        
        keyOutput.textContent = `Key pressed: "${key}" (KeyCode: ${keyCode})`;
        keyOutput.classList.add('success-message');
        setTimeout(() => {
            keyOutput.classList.remove('success-message');
        }, 1000);
    });
    
    // Secret Action (Double-click)
    const secretBox = document.getElementById('secret-box');
    const secretOutput = document.getElementById('secret-output');
    
    secretBox.addEventListener('dblclick', function() {
        secretBox.classList.add('pulse');
secretOutput.textContent = '🎁 You found the secret! Here is a random number: ' + Math.floor(Math.random() * 1000);        
        setTimeout(() => {
            secretBox.classList.remove('pulse');
        }, 500);
    });
    
    // ===== SECTION 2: INTERACTIVE ELEMENTS =====
    
    // Color Changing Button
    const colorBtn = document.getElementById('color-btn');
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
    let currentColorIndex = 0;
    
    colorBtn.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        colorBtn.style.backgroundColor = colors[currentColorIndex];
        colorBtn.textContent = `Color #${currentColorIndex + 1}`;
    });
    
    // Image Gallery
    const galleryImg = document.getElementById('gallery-img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const imageCaption = document.getElementById('image-caption');
    
    // In a real project, these would be actual image URLs
    // For this assignment, we'll use placeholder images with different sizes
    const images = [
        { src: 'https://images.pexels.com/photos/30601566/pexels-photo-30601566/free-photo-of-silhouette-of-palm-trees-at-twilight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', caption: 'Image 1 of 5' },
        { src: 'https://images.pexels.com/photos/31851616/pexels-photo-31851616/free-photo-of-vast-altiplano-landscape-with-snow-capped-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', caption: 'Image 2 of 5' },
        { src: 'https://images.pexels.com/photos/31837999/pexels-photo-31837999/free-photo-of-stunning-monument-valley-buttes-under-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', caption: 'Image 3 of 5' },
        { src: 'https://images.pexels.com/photos/31840057/pexels-photo-31840057/free-photo-of-misty-forest-road-in-ocypel-poland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', caption: 'Image 4 of 5' },
        { src: 'https://images.pexels.com/photos/31469968/pexels-photo-31469968/free-photo-of-majestic-alpine-ibex-in-stunning-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', caption: 'Image 5 of 5' }
    ];
    
    let currentImageIndex = 0;
    
    function updateGallery() {
        galleryImg.classList.add('pulse');
        galleryImg.src = images[currentImageIndex].src;
        imageCaption.textContent = images[currentImageIndex].caption;
        
        setTimeout(() => {
            galleryImg.classList.remove('pulse');
        }, 500);
    }
    
    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateGallery();
    });
    
    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateGallery();
    });
    
    // Tabs System
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(button => {
        button.addEventListener('click', function() {
            const tabNumber = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to current button and pane
            this.classList.add('active');
            document.getElementById('tab' + tabNumber).classList.add('active');
        });
    });
    
    // Animated Counter (Bonus)
    const counterValue = document.getElementById('counter-value');
    const decreaseBtn = document.getElementById('counter-decrease');
    const increaseBtn = document.getElementById('counter-increase');
    let count = 0;
    
    function updateCounter() {
        counterValue.textContent = count;
        
        // Add animation
        counterValue.classList.add('pulse');
        setTimeout(() => {
            counterValue.classList.remove('pulse');
        }, 300);
        
        // Change color based on value
        if (count > 0) {
            counterValue.style.color = '#2ecc71';
        } else if (count < 0) {
            counterValue.style.color = '#e74c3c';
        } else {
            counterValue.style.color = '#333';
        }
    }
    
    decreaseBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    increaseBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    // ===== SECTION 3: FORM VALIDATION =====
    const validationForm = document.getElementById('validation-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const formResult = document.getElementById('form-result');
    
    // Password requirement elements
    const lengthCheck = document.getElementById('length-check');
    const uppercaseCheck = document.getElementById('uppercase-check');
    const numberCheck = document.getElementById('number-check');
    
    // Helper function to show validation message
    function showValidationMessage(input, message, isValid) {
        const feedbackElement = input.nextElementSibling;
        
        if (isValid) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            feedbackElement.textContent = message;
            feedbackElement.className = 'validation-feedback success-message';
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
            feedbackElement.textContent = message;
            feedbackElement.className = 'validation-feedback error-message';
        }
    }
    
    // Username validation
    usernameInput.addEventListener('input', function() {
        const username = this.value.trim();
        
        if (username === '') {
            showValidationMessage(this, 'Username is required', false);
        } else if (username.length < 3) {
            showValidationMessage(this, 'Username must be at least 3 characters', false);
        } else {
            showValidationMessage(this, 'Username looks good!', true);
        }
    });
    
    // Email validation
    emailInput.addEventListener('input', function() {
        const email = this.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            showValidationMessage(this, 'Email is required', false);
        } else if (!emailRegex.test(email)) {
            showValidationMessage(this, 'Please enter a valid email address', false);
        } else {
            showValidationMessage(this, 'Email format is valid!', true);
        }
    });
    
    // Password validation
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        
        // Check requirements
        const hasLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        
        // Update requirement indicators
        lengthCheck.className = hasLength ? 'requirement-met' : '';
        uppercaseCheck.className = hasUppercase ? 'requirement-met' : '';
        numberCheck.className = hasNumber ? 'requirement-met' : '';
        
        if (password === '') {
            showValidationMessage(this, 'Password is required', false);
        } else if (hasLength && hasUppercase && hasNumber) {
            showValidationMessage(this, 'Password meets all requirements!', true);
        } else {
            showValidationMessage(this, 'Password doesn\'t meet all requirements', false);
        }
        
        // Also validate confirm password if it has a value
        if (confirmPasswordInput.value) {
            validatePasswordMatch();
        }
    });
    
    // Confirm password validation
    function validatePasswordMatch() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (confirmPassword === '') {
            showValidationMessage(confirmPasswordInput, 'Please confirm your password', false);
        } else if (password !== confirmPassword) {
            showValidationMessage(confirmPasswordInput, 'Passwords do not match', false);
        } else {
            showValidationMessage(confirmPasswordInput, 'Passwords match!', true);
        }
    }
    
    confirmPasswordInput.addEventListener('input', validatePasswordMatch);
    
    // Form submission
    validationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Check if all inputs are valid
        const allInputsValid = [
            usernameInput,
            emailInput,
            passwordInput,
            confirmPasswordInput
        ].every(input => input.classList.contains('valid'));
        
        if (allInputsValid) {
            formResult.textContent = 'Form submitted successfully! 🎉';
            formResult.className = 'success-message';
            formResult.style.backgroundColor = '#d4edda';
            formResult.style.padding = '15px';
            formResult.style.borderRadius = '4px';
            
            // Reset form after successful submission
            setTimeout(() => {
                validationForm.reset();
                document.querySelectorAll('.validation-feedback').forEach(feedback => {
                    feedback.textContent = '';
                    feedback.className = 'validation-feedback';
                });
                document.querySelectorAll('input').forEach(input => {
                    input.className = '';
                });
                lengthCheck.className = '';
                uppercaseCheck.className = '';
                numberCheck.className = '';
            }, 3000);
        } else {
            formResult.textContent = 'Please fix the errors before submitting! ⚠️';
            formResult.className = 'error-message';
            formResult.style.backgroundColor = '#f8d7da';
            formResult.style.padding = '15px';
            formResult.style.borderRadius = '4px';
            
            // Shake animation for the form
            validationForm.classList.add('shake');
            setTimeout(() => {
                validationForm.classList.remove('shake');
            }, 500);
        }
    });
    
