// Variáveis necessárias para o funcionamento do código;
// Handler do botão de confirmar o login;
function loginBttnHandler() {
  const loginUsr = document.querySelector('#login-email');
  const loginPwd = document.querySelector('#login-pwd');
  if (!loginUsr.value || !loginPwd.value) {
    alert('Email ou senha inválidos');
  } else {
    alert('Olá, Tryber!');
    loginUsr.value = '';
    loginPwd.value = '';
  }
}
// Listener do botão de confirmar login
const loginBttnListener = () => {
  const loginBttn = document.querySelector('#login-confirm');
  loginBttn.addEventListener('click', loginBttnHandler);
};
// Listener do carregamento da página;
window.onload = () => {
  loginBttnListener();
};
