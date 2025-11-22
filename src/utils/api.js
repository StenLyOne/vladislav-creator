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
      return { success: true, message: "Сообщение отправлено!" };
    } else {
      return { success: false, message: result.error || "Ошибка при отправке" };
    }
  } catch (error) {
    return { success: false, message: "Ошибка сервера" };
  }
};
