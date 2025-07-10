// Basic frontend chatbot logic for Amzing Chatbot

document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.getElementById("chat-window");
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");

                            // Append a message to the chat window
                            function appendMessage(text, className) {
                                  const msg = document.createElement("div");
                                  msg.className = `chat-message ${className}`;
                                  msg.textContent = text;
                                  chatWindow.appendChild(msg);
                                  chatWindow.scrollTop = chatWindow.scrollHeight;
                            }

                            // Simple bot response logic (placeholder)
                            function getBotResponse(message) {
                                  const lower = message.toLowerCase();
                                  if (lower.includes("hello") || lower.includes("hi")) {
                                          return "Hello! How can I help you today?";
                                  }
                                  if (lower.includes("help")) {
                                          return "Sure, I'd be happy to help. What do you need assistance with?";
                                  }
                                  return "I'm not sure how to respond to that yet, but I'm learning!";
                            }

                            chatForm.addEventListener("submit", (e) => {
                                  e.preventDefault();
                                  const message = userInput.value.trim();
                                  if (!message) return;

                                                          // Show user message
                                                          appendMessage(message, "user-message");
                                  userInput.value = "";

                                                          // Bot response with slight delay to simulate processing
                                                          setTimeout(() => {
                                                                  const response = getBotResponse(message);
                                                                  appendMessage(response, "bot-message");
                                                          }, 500);
                            });
});
