function filterDownloads(e) {
  const downloads = document.querySelectorAll(".dl-container div"); // select all downloads
  let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute
  animals.forEach(animal => {
    animal.classList.contains(filter) // does the animal have the filter in its class list?
    ? animal.classList.remove('hidden') // if yes, make sure .hidden is not applied
    : animal.classList.add('hidden'); // if no, apply .hidden
  });
};
