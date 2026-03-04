export const sendEmail = async (form) => {

    const formData = Object.fromEntries(
      new FormData(form).entries()
    );
    
     // ⭐ page name add
    formData.page = window.location.pathname;

    const button = form.querySelector("button[type='submit']");
    button.innerText = "Sending...";
    button.disabled = true;
  
    try {
  
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (data.success) {
        alert("✅ Enquiry Sent Successfully");
        form.reset(); // fields blank
      } else {
        alert("❌ Failed to send");
      }
  
    } catch (err) {
      alert("Server Error ❌");
    }
  
    button.innerText = "Send Message";
    button.disabled = false;
  };