document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const noteText = document.getElementById("note-text");
  const saveBtn = document.getElementById("save-btn");
  const notesList = document.getElementById("notes-list");

  // Load saved notes when popup opens
  loadNotes();

  // Save note when button is clicked
  saveBtn.addEventListener("click", () => {
    const text = noteText.value.trim();

    if (text) {
      saveNote(text);
      noteText.value = "";
    }
  });

  // Function to save a note
  function saveNote(text) {
    // Get current notes from storage
    chrome.storage.local.get(["notes"], (result) => {
      const notes = result.notes || [];

      // Add new note
      const newNote = {
        id: Date.now(),
        text: text,
        date: new Date().toLocaleString(),
      };

      notes.unshift(newNote); // Add to beginning of array

      // Save updated notes
      chrome.storage.local.set({ notes: notes }, () => {
        loadNotes(); // Refresh the notes list
      });
    });
  }

  // Function to load and display notes
  function loadNotes() {
    chrome.storage.local.get(["notes"], (result) => {
      const notes = result.notes || [];

      // Clear the notes list
      notesList.innerHTML = "";

      if (notes.length === 0) {
        notesList.innerHTML =
          '<div class="no-notes">No notes yet. Create one!</div>';
        return;
      }

      // Add each note to the list
      notes.forEach((note) => {
        const noteElement = document.createElement("div");
        noteElement.className = "note-item";
        noteElement.innerHTML = `
          <div class="note-text">${note.text}</div>
          <div class="note-date">${note.date}</div>
          <button class="delete-btn" data-id="${note.id}">×</button>
        `;

        notesList.appendChild(noteElement);
      });

      // Add event listeners to delete buttons
      document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const noteId = Number.parseInt(this.getAttribute("data-id"));
          deleteNote(noteId);
        });
      });
    });
  }

  // Function to delete a note
  function deleteNote(id) {
    chrome.storage.local.get(["notes"], (result) => {
      const notes = result.notes || [];

      // Filter out the note with the given id
      const updatedNotes = notes.filter((note) => note.id !== id);

      // Save updated notes
      chrome.storage.local.set({ notes: updatedNotes }, () => {
        loadNotes(); // Refresh the notes list
      });
    });
  }
});
