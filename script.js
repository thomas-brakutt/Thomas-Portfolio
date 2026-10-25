document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  // Auf anderen Seiten existiert das Kontaktformular nicht.
  if (!form) {
    return;
  }

  const status = document.getElementById("form-status");
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Browser-Validierung prüfen
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    const data = {
      vorname: formData.get("vorname"),
      nachname: formData.get("nachname"),
      email: formData.get("email"),
      nachricht: formData.get("nachricht"),
    };

    submitButton.disabled = true;
    submitButton.textContent = "Wird gesendet ...";

    status.textContent = "";
    status.className = "form-status";

    try {
      const response = await fetch(
        "https://fixdottwzzclksjuqwqa.supabase.co/functions/v1/send-contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Nachricht konnte nicht gesendet werden.",
        );
      }

      status.textContent =
        "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.";

      status.classList.add("success");

      form.reset();
    } catch (error) {
      console.error(error);

      status.textContent =
        "Die Nachricht konnte leider nicht gesendet werden. Bitte versuche es später erneut.";

      status.classList.add("error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Senden";
    }
  });
});
