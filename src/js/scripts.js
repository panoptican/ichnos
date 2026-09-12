/**
 * ICHNOS - Main site scripts
 *
 * The about and submit text lives in the page (#about, #submit). The nav and
 * the empty cards open that same text in a dialog; without JS the links jump
 * to the sections.
 */

$(document).ready(function() {
  function openNote(id) {
    var prose = document.querySelector('#' + id + ' .notes-prose');
    if (!prose || typeof vex === 'undefined') return false;
    vex.dialog.alert({ unsafeMessage: prose.innerHTML });
    return true;
  }

  $('.about-link').click(function(event) {
    if (openNote('about')) event.preventDefault();
  });

  $('.submit-link').click(function(event) {
    if (openNote('submit')) event.preventDefault();
  });
});
