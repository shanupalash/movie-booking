let totalBookings = 0; 

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const bookingData = {};
    for (let [key, value] of formData.entries()) {
        bookingData[key] = value;
    }
    const bookedStatusTable = document.getElementById("bookedStatus");
    const newRow = bookedStatusTable.insertRow(-1);
    const usernameCell = newRow.insertCell(0);
    const seatsCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);
    usernameCell.textContent = bookingData.username;
    seatsCell.textContent = bookingData.seat;
    actionCell.innerHTML = '<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>';

    totalBookings++; 
    document.getElementById("totalBookings").textContent = "Total Bookings: " + totalBookings;

    this.reset();
});

function editRow(button) {
    const row = button.closest('tr');
    const cells = row.getElementsByTagName('td');
    const username = cells[0].textContent;
    const seat = cells[1].textContent;
    document.getElementById("username").value = username;
    document.getElementById("seat").value = seat;

    button.style.display = "none";

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.onclick = function() {
        cells[0].textContent = document.getElementById("username").value;
        cells[1].textContent = document.getElementById("seat").value;
        button.style.display = "inline"; 
        this.remove();
    };
    button.parentElement.appendChild(saveButton);
}

// Function to delete row
function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
    totalBookings--; 
    document.getElementById("totalBookings").textContent = "Total Bookings: " + totalBookings;
}

