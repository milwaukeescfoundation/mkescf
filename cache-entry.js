// The winning serial is intentionally checked in the browser, per site owner's request.
// This is not tamper-resistant: verify ownership of the physical flier before awarding prizes.
const WINNING_SERIAL = "1041";
const serialForm = document.getElementById("serial-form");
const winnerForm = document.getElementById("winner-form");
const status = document.getElementById("status");
serialForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const serial = serialForm.elements.serial.value.trim();
  if (serial === WINNING_SERIAL) {
    document.getElementById("winning-serial").value = serial;
    serialForm.hidden = true;
    winnerForm.hidden = false;
    status.textContent = "Winning number! Complete the form to notify the foundation.";
  } else {
    status.textContent = "This serial number is not a winning number.";
  }
});
