

function connect() {
  clientid =
    "vhh" + new Date().getMilliseconds() + new Date().getSeconds();

  client = new Paho.MQTT.Client(
    "mqtt.eclipseprojects.io",
    443,
    clientid
  );

  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
    timeout: 3,
    useSSL: true,
    cleanSession: true,
    reconnect: true,
    onSuccess: onConnect,
    onFailure: function (message) {
      console.log(
        new Date().toUTCString() +
        "Connection failed: " +
        message.errorMessage +
        "Retrying"
      );
    },
  };
  // connect the client

  client.connect(options);
}

function onConnect() {
  isConnected = "ja";
  console.log("function onConnect");
  listener.test();
}

function onConnectionLost(responseObject) {
  console.log("connection lost");

  if (responseObject.errorCode !== 0)
    console.log("onConnectionLost:" + responseObject.errorMessage);
}

function onMessageArrived(message) {
   console.log("onMessageArrived:" + message.payloadString);
}




function sendMessage(text, topic) {
  var message = new Paho.MQTT.Message(text);
  message.destinationName = topic;
  client.send(message);
}

function subscribe(topic) {
  client.subscribe(topic);
}

