function login() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if (username === 'SHIVEK' && password === '********') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. please try again.');
        document.getElementById("drop").innerHTML = 'Invalid Username Or Password';
    }
}
