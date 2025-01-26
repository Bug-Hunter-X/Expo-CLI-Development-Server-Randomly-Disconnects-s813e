// This workaround attempts to detect and handle Expo CLI server disconnections.
// This is a temporary solution, and more robust solutions may be needed.

const net = require('net');
const { exec } = require('child_process');

const serverStatus = {
  connected: false
};

const checkServerConnection = () => {
  const client = new net.Socket();
  client.once('connect', () => {
    serverStatus.connected = true;
    console.log('Expo server is running');
    client.end();
  });
  client.once('error', (err) => {
    serverStatus.connected = false;
    console.log('Expo server connection error:', err);
    restartExpoServer();
  });
  client.connect(19000, 'localhost'); // Default Expo dev server port
};

const restartExpoServer = () => {
  console.log('Restarting Expo server...');
  exec('expo start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error restarting Expo server: ${error}`);
    } else {
      console.log('Expo server restarted successfully.');
    }
  });
};

setInterval(checkServerConnection, 5000); // Check every 5 seconds