// Handler do comment text area;
function commentHandler(e) {
  const { length } = e.value;
  const counter = document.querySelector('#counter');
  counter.innerHTML = `${500 - length}`;
}
// Listener do comment text area;
const commentListener = () => {
  const comment = document.querySelector('#textarea');
  comment.addEventListener('keyup', (e) => commentHandler(e.target));
};
// Handler do checkbox de agreement;
function agreementHandler() {
  const submitBtn = document.querySelector('#submit-btn');
  if (submitBtn.disabled) {
    submitBtn.disabled = false;
    return;
  }
  submitBtn.disabled = true;
}
// Listener do checkbox de agreement;
const agreementListener = () => {
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('click', agreementHandler);
};
// Handler do botão de confirmar o login;
function loginBtnHandler() {
  const loginUsr = document.querySelector('#login-email');
  const loginPwd = document.querySelector('#login-pwd');
  if (!loginUsr.value || !loginPwd.value) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
    loginUsr.value = '';
    loginPwd.value = '';
  }
}
// Listener do botão de confirmar login
const loginBtnListener = () => {
  const loginBtn = document.querySelector('#login-confirm');
  loginBtn.addEventListener('click', loginBtnHandler);
};
// Listener do botão de submit 
const submitListener = () => {
  const submitBtn = querySelector('#submit-btn');
  submitBtn.addEventListener('click',prevent)
}
// Listener do carregamento da página;
window.onload = () => {
  loginBtnListener();
  commentListener();
  agreementListener();
  submitListener();
};

