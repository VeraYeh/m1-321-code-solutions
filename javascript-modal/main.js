var $openButton = document.querySelector('.open-button');

var $modal = document.querySelector('.modal');

$modal.addEventListener('click', function () {
  $modal.className = 'modal-none';
});

$openButton.addEventListener('click', function () {
  $modal.className = 'modal';
});
