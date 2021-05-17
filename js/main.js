/* global data */
/* exported data */
const entryFormImg = document.querySelector('[data-view="entry-form"] img');
const entryFormForm1 = document.querySelector('.form1');
const entryFormTitle = document.querySelector('#title');
const entryFormPhotoUrl = document.querySelector('#photoUrl');
const entryFormNotes = document.querySelector('#notes');

entryFormPhotoUrl.addEventListener('input', handleUrl);
entryFormForm1.addEventListener('submit', handleSaveButton);

function handleUrl() {
  entryFormImg.src = entryFormPhotoUrl.value;
}

function handleSaveButton(event) {
  event.preventDefault();
  const newObject = {};
  newObject.title = entryFormTitle.value;
  newObject.photoUrl = entryFormPhotoUrl.value;
  newObject.notes = entryFormNotes.value;
  newObject.EntryId = data.nextEntryId;
  data.entries.unshift(newObject);
  data.nextEntryId++;
  entryFormTitle.value = '';
  entryFormPhotoUrl.value = '';
  entryFormNotes.value = '';
  saveData();
  entryFormImg.src = 'images/placeholder-image-square.jpg';
}

function saveData() {
  localStorage.setItem('data', JSON.stringify(data));
}
