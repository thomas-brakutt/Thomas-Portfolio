document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  const status = document.getElementById("form-status");
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    const data = {
      vorname: formData.get("vorname"),
      nachname: formData.get("nachname"),
      email: formData.get("email"),
      nachricht: formData.get("nachricht"),
      _subject: "Neue Kontaktanfrage über mein Portfolio",
      _captcha: "false",
    };

    submitButton.disabled = true;
    submitButton.textContent = "Wird gesendet ...";

    status.textContent = "";
    status.className = "form-status";

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/thomas.brakutt@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok || String(result.success) !== "true") {
        throw new Error(result.message || "Versand fehlgeschlagen");
      }

      status.textContent =
        "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.";
      status.classList.add("success");

      form.reset();
    } catch (error) {
      console.error("Fehler beim Kontaktformular:", error);

      status.textContent =
        "Die Nachricht konnte leider nicht gesendet werden. Bitte versuche es später erneut.";
      status.classList.add("error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Senden";
    }
  });
});
