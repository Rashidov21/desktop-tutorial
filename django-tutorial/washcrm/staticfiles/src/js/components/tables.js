const TABLE_SELECT_ALL_CLASS = '.table-select-all';
const TABLE_SELECT_ROW_CLASS = '.table-select-row';

// Toggle a table row
function toggleCheckbox(element, checked) {
  element.checked = checked;

  if (checked === true) {
    element.closest('tr').classList.add('selected');
  } else {
    element.closest('tr').classList.remove('selected');

    const tableSelectAllCheckboxes = element.closest('table').querySelectorAll(TABLE_SELECT_ALL_CLASS);

    Array.from(tableSelectAllCheckboxes).forEach(allCheckbox => {
      // remove checked stated
      allCheckbox.checked = false;
      allCheckbox.classList.remove('all-selected');
    });
  }
}

// Get all checkboxes in a table that are unchecked
function getUncheckedBoxes(elements) {
  const checkboxesUnchecked = [];

  Array.from(elements).forEach(checkbox => {
     if (!checkbox.checked) {
        checkboxesUnchecked.push(checkbox);
     }
  });

  return checkboxesUnchecked;
}

document.addEventListener("DOMContentLoaded", function() {
  // Sidebar toggle
  const toggleElements = document.querySelectorAll('.sidebar-toggle');

  Array.from(toggleElements).forEach(element => {
    element.addEventListener('click', event => {
      document.querySelectorAll('.adminx-sidebar')[0].classList.toggle('in');
    });
  });

  // Highlight table rows when selected
  const rowCheckboxes = document.querySelectorAll(TABLE_SELECT_ROW_CLASS);

  Array.from(rowCheckboxes).forEach(element => {
    element.addEventListener('change', event => {
      toggleCheckbox(element, element.checked);

      // when all are selected we should highlight the "all" selector for better usability
      if (getUncheckedBoxes(element.closest('table').querySelectorAll(TABLE_SELECT_ROW_CLASS)).length === 0) {
        Array.from(element.closest('table').querySelectorAll(TABLE_SELECT_ALL_CLASS)).forEach(checkbox => {
          checkbox.checked = true;
          checkbox.classList.add('all-selected');
        })
      }
    });
  });

  // select all rows in a table
  const selectAllRowsCheckboxes = document.querySelectorAll(TABLE_SELECT_ALL_CLASS);

  Array.from(selectAllRowsCheckboxes).forEach(element => {
    element.addEventListener('change', event => {
      const tableRowCheckboxes = element.closest('table').querySelectorAll(TABLE_SELECT_ROW_CLASS);

      if (element.checked) {
        element.classList.add('all-selected');
        Array.from(tableRowCheckboxes).forEach(checkbox => {
          toggleCheckbox(checkbox, true);
        });
      } else {
        element.classList.remove('all-selected');
        Array.from(tableRowCheckboxes).forEach(checkbox => {
          toggleCheckbox(checkbox, false);
        });
      }
    });
  });
});