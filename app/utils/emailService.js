/**
 * Email Service Utility
 *
 * This file contains functions to send emails using EmailJS.
 *
 * To use this service:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create a new Email Service (Gmail, Outlook, etc.)
 * 3. Create an email template with template variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
 * 4. Replace the placeholders below with your actual EmailJS credentials
 */

/**
 * Sends an email using EmailJS service
 * @param {Object} data - The form data containing name, email, subject, and message
 * @returns {Promise<Response>} - Promise that resolves when the email is sent
 */
export const sendEmail = async (data) => {
  // Replace these with your actual EmailJS credentials
  const serviceID = "service_hhqewbq"; 
  const templateID = "template_nam3efr"; 
  const userID = "kMTryIOAsfpCp8i_f"; 

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
  };

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceID,
      template_id: templateID,
      user_id: userID,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  return response;
};

/**
 * Alternative implementation using the EmailJS browser library
 * This can be used if you've included the EmailJS script in your HTML
 * @param {Object} data - The form data
 * @returns {Promise<any>}
 */
export const sendEmailWithLibrary = (data) => {
  if (typeof window !== "undefined" && window.emailjs) {
    return window.emailjs.send(
      "service_hhqewbq",  // emailjs service id 
      "template_nam3efr", // emailjs template id
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      }
    );
  }

  return Promise.reject(new Error("EmailJS not available"));
};
