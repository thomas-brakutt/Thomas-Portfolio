// Event-Listener für Buttons hinzufügen
document.addEventListener("DOMContentLoaded", function () {
  // Button für "Meine Projekte"
  const projekteButton = document.getElementById("projekte-button");
  if (projekteButton) {
    projekteButton.addEventListener("click", function () {
      window.location.href = "projekte.html";
    });
  }

  // Button für "Kontakt"
  const kontaktButton = document.getElementById("kontakt-button");
  if (kontaktButton) {
    kontaktButton.addEventListener("click", function () {
      window.location.href = "kontakt.html";
    });
  }
});
