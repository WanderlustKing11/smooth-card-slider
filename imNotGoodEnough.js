let activeIndex = 0;

const groups = document.getElementsByClassName('card-group');

document.addEventListener('DOMContentLoaded', () => {
  const loveButton = document.getElementById('love-button');
  const hateButton = document.getElementById('hate-button');

  loveButton.addEventListener('click', handleLoveClick);
  hateButton.addEventListener('click', handleHateClick);
});

const handleLoveClick = () => {
  // Bump active index
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);


  // Active group becomes after
  currentGroup.dataset.status = 'after';

  // Next group becomes active-from-before
  nextGroup.dataset.status = 'becoming-active-from-before';

  // Next group becomes active
  setTimeout(() => {
    nextGroup.dataset.status = 'active';
    activeIndex = nextIndex;
  }, 100);  
}

const handleHateClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentGroup.dataset.status = "before";
  
  nextGroup.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  }, 100);
}