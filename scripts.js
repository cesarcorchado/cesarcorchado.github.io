AOS.init({ duration: 1000, once: true });

// ===== MODO OSCURO / CLARO =====
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

// ===== EMAILJS CONFIG =====
emailjs.init("TU_USER_ID_DE_EMAILJS"); // ← Reemplaza con tu User ID desde EmailJS

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
        from_name: form.name.value,
        reply_to: form.email.value,
        message: form.message.value
    }).then(() => {
        status.innerHTML = "<span class='text-success'>✅ Mensaje enviado correctamente.</span>";
        form.reset();
    }, (err) => {
        status.innerHTML = "<span class='text-danger'>❌ Error al enviar el mensaje.</span>";
    });
});