var $openButton = document.querySelector('.open-button');

var $modal = document.querySelector('.modal');

var $surveyButton = document.querySelector('.survey-button');

$surveyButton.addEventListener('click', function () {
  $modal.className = 'modal-none';
});

$openButton.addEventListener('click', function () {
  $modal.className = 'modal';
});
