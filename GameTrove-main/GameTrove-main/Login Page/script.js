document.addEventListener('DOMContentLoaded', function () {
  let signIButtonSwitch = document.getElementById('sign-in-btn-switch');
  let signUpButtonSwitch = document.getElementById('sign-up-btn-switch');

  let SignInOrUpButton = document.getElementById('sign-in-up-btn');

  let SignInOrUpTitle = document.getElementById('sign-in-up-title');

  let pageContentBox = document.querySelector('body .content');
  let sliderBox = document.querySelector('body .slider');

  let rememberMeCheckbox = document.getElementById('remember-me-checkbox');
  let forgotPassswordLabel = document.getElementById('forgot-password-label');

  let emailInput = document.getElementById('email-input');
  let emailInputIcon = document.getElementsByClassName('fa-envelope')[0];
  let arrow = document.createElement('i');
  arrow.classList = 'fa-solid fa-arrow-right';

  rememberMeCheckbox.style.display = 'none';

  emailInput.style.display = 'none';
  emailInputIcon.style.display = 'none';

  signIButtonSwitch.onclick = () => {

    if (signIButtonSwitch.style.backgroundColor !== 'rgb(31,37,70)') {
      signIButtonSwitch.style.backgroundColor = 'rgb(31,37,70)';
      signUpButtonSwitch.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

      sliderBox.style.borderRadius = '40px 80px 80px 40px';
      sliderBox.style.left = 'calc(0% - 1px)';
      pageContentBox.style.right = '0%';

      pageContentBox.style.opacity = 1;
      for (let i = 1; i >= 0; i -= 0.01) {
        setTimeout(function () {
          pageContentBox.style.opacity = i.toFixed(2);

          if (i <= 0.01) {
            emailInput.style.display = 'none';
            emailInputIcon.style.display = 'none';
            rememberMeCheckbox.style.display = 'none';
            forgotPassswordLabel.textContent = 'Forgot Password';
            SignInOrUpTitle.textContent = 'Sign In';
            SignInOrUpButton.textContent = 'Sign In';
            SignInOrUpButton.appendChild(arrow);
          }
        }, (1 - i) * 100);
      }

      for (let i = 0; i <= 1; i += 0.01) {
        setTimeout(function () {
          pageContentBox.style.opacity = i.toFixed(2);
        }, (1 + i) * 100);
      }
    }
  }

  signUpButtonSwitch.onclick = () => {
    if (signUpButtonSwitch.style.backgroundColor !== 'rgb(31,37,70)') {
      signUpButtonSwitch.style.backgroundColor = 'rgb(31,37,70)';
      signIButtonSwitch.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

      sliderBox.style.borderRadius = '80px 40px 40px 80px';
      sliderBox.style.left = 'calc(50% - 30px)';
      pageContentBox.style.right = 'calc(50% + 30px)';

      pageContentBox.style.opacity = 1;
      for (let i = 1; i >= 0; i -= 0.01) {
        setTimeout(function () {
          pageContentBox.style.opacity = i.toFixed(2);

          if (i <= 0.01) {
            emailInput.style.display = 'block';
            emailInputIcon.style.display = 'block';
            rememberMeCheckbox.style.display = 'block';
            forgotPassswordLabel.textContent = 'Remember Me';
            SignInOrUpTitle.textContent = 'Sign Up';
            SignInOrUpButton.textContent = 'Sign Up';
            SignInOrUpButton.appendChild(arrow);
          }
        }, (1 - i) * 100);
      }

      for (let i = 0; i <= 1; i += 0.01) {
        setTimeout(function () {
          pageContentBox.style.opacity = i.toFixed(2);
        }, (1 + i) * 100);
      }
    }
  }
})
function navHome(){
  let emailInput = document.getElementById('email-input').value.trim();
  let userNameInput = document.getElementById('username-input').value.trim();
  let passwordInput = document.getElementById('password-input').value.trim();
  
  if(userNameInput == "" || userNameInput == null ){
  window.alert('Ensure you fill in all required fields')
  return;
  }
  if (passwordInput == "" || passwordInput == null ){
  window.alert('Ensure you fill in all required fields')
  return;
  }
  if(emailInput == "" || emailInput == null ){
    window.alert('Account not found , please sign Up')
    return;
  }
    window.location.href = '../Home-Page/home.html';
    // GameTrove-main\Home-Page\home.html

}
