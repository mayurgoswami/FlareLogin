const username = document.querySelector('#username');
const password = document.querySelector('#password');
const labels = document.querySelectorAll('label');

const loginFacebook = document.querySelector('.login_facebook');
const facebookLogoPath = document.querySelector('.facebook_logo_path');
const facebookLogo = document.querySelector('.facebook_logo');

const loginInstagram = document.querySelector('.login_instagram');
const instagramLogoPath = document.querySelectorAll('.instagram_logo_path');
const instagramLogo = document.querySelector('.instagram_logo');
const instagramTitle = document.querySelector('.instagram_title');

const loginTwetter = document.querySelector('.login_twetter');
const twetterLogoPath = document.querySelector('.twetter_logo_path');
const twetterLogo = document.querySelector('.twetter_logo');

username.addEventListener('focus', () => {
    labels[0].style.color = '#255d48';
});

username.addEventListener('blur', () => {
    labels[0].style.color = '#000000';
});

password.addEventListener('focus', () => {
    labels[1].style.color = '#255d48';
});

password.addEventListener('blur', () => {
    labels[1].style.color = '#000000';
});

loginFacebook.addEventListener('mouseover', () => {
    facebookLogoPath.setAttribute('fill', '#4267B2');
    loginFacebook.style.background = '#ffffff';
    loginFacebook.style.color = '#4267B2';
    facebookLogo.style.borderColor = '#f2f2f2';
});

loginFacebook.addEventListener('mouseleave', () => {
    facebookLogoPath.setAttribute('fill', '#ffffff');
    loginFacebook.style.background = '#4267B2';
    loginFacebook.style.color = '#ffffff';
    facebookLogo.style.borderColor = '#3e61a8';
});

loginInstagram.addEventListener('mouseover', () => {
    instagramLogoPath.forEach(_logo => {
        _logo.setAttribute('fill', '#ffffff');
    });
    instagramTitle.style.webkitTextFillColor = '#ffffff';
    loginInstagram.style.background = 'linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)';
    instagramLogo.style.borderColor = '#fffff';
});

loginInstagram.addEventListener('mouseleave', () => {
    instagramLogoPath.forEach(_logo => {
        _logo.setAttribute('fill', 'url(#instagramGradient)');
    });
    instagramTitle.style.webkitTextFillColor = 'transparent'
    loginInstagram.style.background = '#ffffff';
    instagramLogo.style.borderColor = '#f2f2f2';
});

loginTwetter.addEventListener('mouseover', () => {
    twetterLogoPath.setAttribute('fill', '#ffffff');
    loginTwetter.style.background = '#1da1f2';
    loginTwetter.style.color = '#ffffff';
    twetterLogo.style.borderColor = '#1683c7';
});

loginTwetter.addEventListener('mouseleave', () => {
    twetterLogoPath.setAttribute('fill', '#1da1f2');
    loginTwetter.style.background = '#ffffff';
    loginTwetter.style.color = '#1da1f2';
    twetterLogo.style.borderColor = '#f2f2f2';
});

let passwordVisible = false;

let showPassword = btn => {
    if (passwordVisible) {
        btn.src = 'res/nvis_untouch.png';
        password.type = 'password';
        passwordVisible = false;
    }
    else {
        btn.src = 'res/vis_untouch.png';
        password.type = 'text';
        passwordVisible = true;
    }
}