let messagesArray = [];
let messageCount = 0;
function showForm() {
  document.getElementById('messageContainer').classList.add('hidden');
  document.getElementById('contactForm').classList.remove('hidden');
}

function takeInputForm() {
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const messageText = document.getElementById('message').value;

  
  if (!firstName || !lastName || !email || !subject || !messageText) {
    alert('Fill all required fields (*)');
    return false;
  }

  messageCount++;
  
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  const message = {
    date: formattedDate,
    time: formattedTime
  };

  
  messagesArray.push(message);

  document.getElementById('contactForm').classList.add('hidden');

  const messageContainer = document.getElementById('messageContainer');
  messageContainer.innerHTML = '';
  for (let i = 0; i < messagesArray.length; i++) {
    const msg = messagesArray[i];
    messageContainer.innerHTML += `
      <p>Thank you! Your message has been sent!</p>
      <p>You sent message ${messageCount} times: </p>
      <p>Date: ${msg.date}</p>
      <p>Time: ${msg.time}</p>
    `;
  }
  messageContainer.innerHTML += `<p>To send another message, <a href="#" onclick="showForm()">click here</a>.</p>`;
  messageContainer.classList.remove('hidden');

  return false; 
}


