var $name = document.getElementById('user-name');

var $email = document.getElementById('user-email');

var $message = document.getElementById('user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of name', event.target.value);
}

$name.addEventListener('focus', handleFocus);

$name.addEventListener('blur', handleBlur);

$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);

$email.addEventListener('blur', handleBlur);

$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);

$message.addEventListener('blur', handleBlur);

$message.addEventListener('input', handleInput);
