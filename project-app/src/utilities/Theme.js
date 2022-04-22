
function setTheme(themeName) {
    sessionStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function keepTheme() {
    if (sessionStorage.getItem('theme')) {
        if (sessionStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-dark');
        } else if (sessionStorage.getItem('theme') === 'theme-light') {
            setTheme('theme-light')
        }
    } else {
        setTheme('theme-dark')
    }
}

module.exports = {
    setTheme,
    keepTheme
}






