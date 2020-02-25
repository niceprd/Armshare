document.getElementById('dark-theme-btn').addEventListener('click', function() {
    let darkThemeEnabled = document.body.classList.toggle('dark-theme');
    localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});

if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
    document.body.classList.add('dark-theme');
}

document.getElementById('default-theme-btn').addEventListener('click', function() {
    let defaultThemeEnabled = document.body.classList.toggle('default-theme');
    localStorage.setItem('default-theme-enabled', defaultThemeEnabled);
});

if (JSON.parse(localStorage.getItem('default-theme-enabled'))) {
    document.body.classList.add('default-theme');
}