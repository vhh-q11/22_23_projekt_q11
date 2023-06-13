clientid = "vhh" + new Date().getMilliseconds() + new Date().getSeconds();

client = new Paho.MQTT.Client("mqtt.eclipseprojects.io", 443, clientid);

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({ onSuccess: onConnect });

function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("/World");
  message = new Paho.MQTT.Message("Hello");
  message.destinationName = "/World";
  client.send(message);
}
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0)
    console.log("onConnectionLost:" + responseObject.errorMessage);
}
function onMessageArrived(message) {
  console.log("onMessageArrived:" + message.payloadString);
  client.disconnect();
}
