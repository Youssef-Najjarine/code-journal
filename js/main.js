/* global data */
/* exported data */
const entryFormImg = document.querySelector('[data-view="entry-form"] img');
const entryFormPhotoUrl = document.querySelector('#photoUrl');
const entryFormForm1 = document.querySelector('.form1');

entryFormPhotoUrl.addEventListener('input', handleUrl);
entryFormForm1.addEventListener('submit', handleSaveButton);

function handleUrl() {
  entryFormImg.src = entryFormPhotoUrl.value;
}

function handleSaveButton(event) {
  event.preventDefault();

}
