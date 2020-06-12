// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
import socket from "./socket"
import PhoenixWS from "./phoenix_ws"

function initializeChat() {
  // Build a new PhoenixWS from the phoenix socket
  const connection = new PhoenixWS(socket, "room:lobby", {});

  connection.onopen = () => {
    console.log('connected');
  };

  connection.onclose = () => {
    console.error('disconnected');
  };

  connection.onerror = (error) => {
    console.error('failed to connect', error);
  };

  connection.onmessage = (event) => {
    console.log('received', event.data);
    let li = document.createElement('li');
    li.innerText = event.data;
    document.querySelector('#chat').append(li);
  };

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let message = document.querySelector('#message').value;
    connection.send(message);
    document.querySelector('#message').value = '';
  });
}


initializeChat();