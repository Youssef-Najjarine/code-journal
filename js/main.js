/* global data */
/* exported data */
const entryFormImg = document.querySelector('[data-view="entry-form"] img');
const dataViewEntries = document.querySelector('[data-view="entries"]');
const entryForm = document.querySelector('[data-view="entry-form"]');
const entryFormForm1 = document.querySelector('.form1');
const entryFormTitle = document.querySelector('#title');
const entryFormPhotoUrl = document.querySelector('#photoUrl');
const entryFormNotes = document.querySelector('#notes');
const ul = document.querySelector('ul');
const navBarEntries = document.querySelector('.navBarEntries');
const h1 = document.querySelector('.entriesH1');
const newEntry = document.querySelector('.new');
const deleteEntry = document.querySelector('.deleteEntry');
const blackBox = document.querySelector('.blackBox');
const cancel = document.querySelector('.cancel');

window.addEventListener('DOMContentLoaded', populateEntries);
entryFormPhotoUrl.addEventListener('input', handleUrl);
entryFormForm1.addEventListener('submit', handleSaveButton);
navBarEntries.addEventListener('click', handleNavBarEntries);
h1.addEventListener('click', handleH1);
newEntry.addEventListener('click', handleNewEntry);
ul.addEventListener('click', handleEditIcon);
deleteEntry.addEventListener('click', handleDeleteEntry);
cancel.addEventListener('click', handCancel);

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
  entryFormForm1.reset();
  saveData();
  entryFormImg.src = 'images/placeholder-image-square.jpg';
  dataViewEntries.classList.remove('hidden');
  entryForm.classList.add('hidden');
  deleteEntry.classList.remove('hidden');
}

function saveData() {
  localStorage.setItem('data', JSON.stringify(data));
}

function createEntries(entry) {
  const li = document.createElement('li');

  li.innerHTML = `<div class="imgTextContent">
        <img src="${entry.photoUrl}">


        <div class="textContent">
          <h3>${entry.title}</h3>
          <p>${entry.notes}</p>
          </div>

        </div>
        <div class="pencilDiv">
          <a href="#" class="pencil" data-entry-id = "${entry.EntryId}"></a>
        </div>`;
  return li;

}

function populateEntries() {
  for (let i = 0; i < data.entries.length; i++) {
    ul.appendChild(createEntries(data.entries[i]));
  }
}

function handleNavBarEntries() {
  dataViewEntries.classList.remove('hidden');
  entryForm.classList.add('hidden');
  deleteEntry.classList.add('hidden');
}

function handleH1() {
  dataViewEntries.classList.add('hidden');
  entryForm.classList.remove('hidden');
  deleteEntry.classList.add('hidden');
}

function handleNewEntry() {
  dataViewEntries.classList.add('hidden');
  entryForm.classList.remove('hidden');
  deleteEntry.classList.add('hidden');
}

function handleEditIcon(event) {
  dataViewEntries.classList.add('hidden');
  entryForm.classList.remove('hidden');
  data.editing = event.target.closest('li');
  const dataEntryId = event.target.getAttribute('data-entry-id');
  entryFormTitle.value = data.entries[data.entries.length - dataEntryId].title;
  entryFormPhotoUrl.value = data.entries[data.entries.length - dataEntryId].photoUrl;
  entryFormNotes.value = data.entries[data.entries.length - dataEntryId].notes;
  entryFormImg.src = entryFormPhotoUrl.value;
  deleteEntry.classList.remove('hidden');
}

function handleDeleteEntry() {
  blackBox.classList.remove('hidden');
}

function handCancel() {
  blackBox.classList.add('hidden');
}
