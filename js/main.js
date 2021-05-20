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

window.addEventListener('DOMContentLoaded', populateEntries);
entryFormPhotoUrl.addEventListener('input', handleUrl);
entryFormForm1.addEventListener('submit', handleSaveButton);
navBarEntries.addEventListener('click', handleNavBarEntries);
h1.addEventListener('click', handleH1);
newEntry.addEventListener('click', handleNewEntry);

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
}

function saveData() {
  localStorage.setItem('data', JSON.stringify(data));
}

function createEntries(entry) {
  const li = document.createElement('li');
  li.setAttribute('data-entry-id', entry.EntryId);

  li.innerHTML = `<div class="imgTextContent">
        <img src="${entry.photoUrl}">


        <div class="textContent">
          <h3>${entry.title}</h3>
          <p>I ${entry.notes}</p>
          </div>

        </div>
        <div class="pencilDiv">
          <a href="#" class="pencil"></a>
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
}
function handleH1() {
  dataViewEntries.classList.add('hidden');
  entryForm.classList.remove('hidden');
}

function handleNewEntry() {
  dataViewEntries.classList.add('hidden');
  entryForm.classList.remove('hidden');
}
