export const sendFormData = async (formData) => {
  try {
    // Пробуждаем сервер перед отправкой формы
    await fetch("https://senderbot-9qcp.onrender.com/wake-up").catch(() => {});

    const response = await fetch("https://senderbot-9qcp.onrender.com/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, message: "Meassege send!" };
    } else {
      return { success: false, message: result.error || "Error of sending" };
    }
  } catch (error) {
    return { success: false, message: "Error of server" };
  }
};
