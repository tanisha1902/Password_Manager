document.getElementById('password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const website = document.getElementById('website').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (website && username && password) {
        addPassword(website, username, password);
        document.getElementById('password-form').reset();
    }
});

function addPassword(website, username, password) {
    const passwordList = document.getElementById('password-list');

    const passwordItem = document.createElement('div');
    passwordItem.classList.add('password-item');

    const siteName = document.createElement('h3');
    siteName.textContent = website;

    const userName = document.createElement('p');
    userName.textContent = `Username: ${username}`;

    const pass = document.createElement('p');
    pass.textContent = `Password: ${password}`;

    passwordItem.appendChild(siteName);
    passwordItem.appendChild(userName);
    passwordItem.appendChild(pass);

    passwordList.appendChild(passwordItem);
}
