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

    async function getStudents() {
    const response = await fetch('http://localhost:8080/api/students');
    const data = await response.json(); // Kelgan JSON ma'lumotni o'qiymiz
    console.log(data);
    }



    async function yuklashMahsulotlar() {
    try {
        // Backend portingiz 8080 bo'lsa:
        const response = await fetch('http://localhost:8080/api/products');
        
        if (!response.ok) {
            throw new Error("Ma'lumotni olib bo'lmadi");
        }

        const mahsulotlar = await response.json();
        console.log(mahsulotlar); // Konsolda tekshirish

        // Ekranga chiqarish (HTML-da 'products-list' id-li element bo'lishi kerak)
        const list = document.getElementById('products-list');
        list.innerHTML = mahsulotlar.map(p => `
            <div class="card">
                <h3>${p.name}</h3>
                <p>Narxi: ${p.price} $</p>
            </div>
        `).join('');

    } catch (error) {
        console.error("Xatolik:", error);
    }
}

yuklashMahsulotlar();












const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const overlay = document.getElementById('menuOverlay');

// Menyuni ochish
openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

// Menyuni yopish
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});














  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    document.getElementById('burgerBtn').classList.toggle('open', isOpen);
    document.getElementById('mobileMenu').classList.toggle('open', isOpen);
  }










