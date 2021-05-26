/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

const localData = localStorage.getItem('data');
if (localData !== null) {
  data = JSON.parse(localData);
}
