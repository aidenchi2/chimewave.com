document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const messageText = messageInput.value.trim();

  if (messageText === "") return;

  const chatBox = document.getElementById('chat-box');

  const newMessage = document.createElement('div');
  newMessage.classList.add('message');
  newMessage.innerHTML = `<span>User:</span><p>${messageText}</p>`;
  
  chatBox.appendChild(newMessage);
  
  messageInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}
