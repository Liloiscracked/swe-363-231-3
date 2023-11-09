const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Predefined questions and answers
const responses = {
  'How are you?': 'not good the homeworks are tuff',
  'What is your name?': 'I\'m just a lame chatbot.',
  'Exit': 'Goodbye! Have a great day bro ^-^',
};

function chatbot() {
  rl.question('You: ', (userInput) => {
    // Convert user input to lowercase for case-insensitive matching
    const lowerCaseInput = userInput.toLowerCase();

    // Check if the user wants to exit
    if (lowerCaseInput === 'exit' || lowerCaseInput === 'quit') {
      console.log(responses['Exit']);
      rl.close();
    } else {
      // Check if the input matches a predefined question
      const response = responses[userInput] || 'I\'m not sure how to respond to that.';
      console.log(`Bot: ${response}`);
      // Continue the conversation
      chatbot();
    }
  });
}

// Start the chatbot
console.log('Chatbot: Hi! Type "exit" or "quit" to end the conversation.');
chatbot();
