import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Champ honeypot pour piéger les bots
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Protection Honeypot: si le champ caché est rempli, c'est un bot
    if (formData.honeypot) {
      console.log("Bot détecté via honeypot");
      return;
    }

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: "",
        });
        setErrors({});
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Champs Web3Forms requis */}
      <input
        type="hidden"
        name="access_key"
        value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
      />
      <input type="hidden" name="from_name" value="Portfolio Contact Form" />
      <input type="hidden" name="subject" value="Nouveau message de contact" />

      {/* Honeypot: champ invisible pour piéger les bots */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Nom complet <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          placeholder="Votre nom"
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Adresse email <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          placeholder="votre@email.com"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>
          Sujet <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`${styles.input} ${
            errors.subject ? styles.inputError : ""
          }`}
          placeholder="Sujet de votre message"
        />
        {errors.subject && (
          <span className={styles.error}>{errors.subject}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${styles.textarea} ${
            errors.message ? styles.inputError : ""
          }`}
          placeholder="Décrivez votre projet..."
          rows="6"
        />
        {errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={styles.submitButton}
      >
        {status === "sending" ? (
          <>
            <i className="fa-solid fa-spinner fa-spin mr-2"></i>
            Envoi en cours...
          </>
        ) : (
          <>
            <i className="fa-solid fa-paper-plane mr-2"></i>
            Envoyer le message
          </>
        )}
      </button>

      {status === "success" && (
        <div className={styles.successMessage}>
          <i className="fa-solid fa-check-circle mr-2"></i>
          Message envoyé avec succès! Je vous répondrai bientôt.
        </div>
      )}

      {status === "error" && (
        <div className={styles.errorMessage}>
          <i className="fa-solid fa-exclamation-circle mr-2"></i>
          Une erreur est survenue. Veuillez réessayer.
        </div>
      )}
    </form>
  );
}

export default ContactForm;
