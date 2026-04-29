function switchTab(type) {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const demoInfo = document.getElementById('demo-info');
        const subtitle = document.getElementById('subtitle-text');
        const tabs = document.querySelectorAll('.tab');

        if (type === 'login') {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            demoInfo.classList.remove('hidden');
            subtitle.innerText = 'Kirish';
            tabs[0].classList.add('active');
            tabs[1].classList.remove('active');
        } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
            demoInfo.classList.add('hidden');
            subtitle.innerText = "Ro'yxatdan o'ting";
            tabs[1].classList.add('active');
            tabs[0].classList.remove('active');
        }
    }