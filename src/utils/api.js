export const sendFormData = async (formData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, message: result.message || "Message sent!" };
    } else {
      return {
        success: false,
        message: result.message || result.error || "Error of sending",
      };
    }
  } catch {
    return { success: false, message: "Error of server" };
  }
};
