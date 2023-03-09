
const accordion_content_all = gclass('accordion-collapse');
let clicked = false;
let defaultBehavior = true;

console.log('accordion-collapse: ', accordion_content_all);

/* =STEP_1 - removing all '.show' classes from content DIVs */
for (const content_all of accordion_content_all) {
  console.log('content_all', content_all);
  !clicked && defaultBehavior ? content_all.classList.remove('show') : null; // yes working
  console.log('STEP_1: SHOW class has been removed from all accordion content blocks')
}

toggleItem(document.querySelectorAll('.accordion-header'), document.querySelectorAll('.accordion-collapse'));


function toggleItem(headerEl, contentEl) {
  for (var i = 0; i < headerEl.length; i++) {
    headerEl[i].addEventListener("click", function (e) {
      var current = this;
      var currentContent = current.parentNode.querySelector('.collapse');
      console.log('this: ', current, headerEl[i]);

      console.log('contentEl: ', contentEl);

      for (var i = 0; i < contentEl.length; i++) {
        console.log('contentEl[i]: ', contentEl[i]);
        console.log('if check: ', current != headerEl[i]);
        console.log('currentContent', currentContent);
        if (current != headerEl[i]) {
          contentEl[i].classList.remove('show');
        } else if (currentContent.classList.contains('show') === true) {
          currentContent.classList.remove('show');
        } else {
          currentContent.classList.add('show')
        }
      }
    });
  };
}

// Function to getElById with id as a parameter 
function gid(id) {
  return document.getElementById(id);
}

function gclass(className) {
  return document.getElementsByClassName(className);
}

function gq(idOrName) {
  return document.querySelector(idOrName);
}

function gqAll(idOrName) {
  return document.querySelectorAll(idOrName);
}