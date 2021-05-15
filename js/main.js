/* global data */
/* exported data */
const entryFormImg = document.querySelector('[data-view="entry-form"] img');
const entryFormPhotoUrl = document.querySelector('#photoUrl');

entryFormPhotoUrl.addEventListener('input', handleUrl);

function handleUrl() {
  entryFormImg.src = entryFormPhotoUrl.value;
}
