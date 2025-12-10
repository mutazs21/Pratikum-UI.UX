const validUsername = "ahmad2017";
const validPassword = "integrity";

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    
    if (inputUsername === validUsername && inputPassword === validPassword) {
        alert('Login Berhasil! Selamat datang, ' + validUsername);
        
        window.location.href = 'sukses.html';
    } else {
        alert('Login Gagal! Username atau password salah.');
        
        document.getElementById('password').value = '';
    }
});