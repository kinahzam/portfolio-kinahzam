const toggleButton = document.getElementById('darkModeToggle');

// 1. Semak memori: Adakah pengguna dah pilih dark mode sebelum ni?
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// 2. Bila butang ditekan...
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // 3. Simpan pilihan terkini dalam memori
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});