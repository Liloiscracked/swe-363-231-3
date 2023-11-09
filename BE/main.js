const customEmitter = require('./eventEmitter');

function simulateLogin(userId) {
  const randomTime = Math.random() * (2 - 0.1) + 0.1; // Random time between 0.1 and 2 seconds
  setTimeout(() => {
    customEmitter.emit('userLoggedIn', userId);
    simulateLogout(userId);
  }, randomTime * 1000);
}

function simulateLogout(userId) {
  const randomTime = Math.random() * (2 - 0.1) + 0.1; // Random time between 0.1 and 2 seconds
  setTimeout(() => {
    customEmitter.emit('userLoggedOut', userId);
    simulateLogin(userId + 1); // Simulate another user logging in
  }, randomTime * 1000);
}

// Listen for "userLoggedIn" event
customEmitter.on('userLoggedIn', (userId) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: USER_${userId} logged in`);
});

// Listen for "userLoggedOut" event
customEmitter.on('userLoggedOut', (userId) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: USER_${userId} logged out`);
});

// Start simulation with the first user logging in
simulateLogin(1);
