var $form = document.getElementById('contact-form');

var $formElement = document.getElementById('contact-form').elements;

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log({ name: $formElement.name.value, email: $formElement.email.value, message: $formElement.message.value });
  $form.reset();
}
);
