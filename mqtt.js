class Mqtt {
  constructor() {
    this.clientid =
      "vhh" + new Date().getMilliseconds() + new Date().getSeconds();

    this.client = new Paho.MQTT.Client(
      "mqtt.eclipseprojects.io",
      443,
      clientid
    );

    this.client.onConnectionLost = this.onConnectionLost;
    this.client.onMessageArrived = this.onMessageArrived;
    this.client.connect({ onSuccess: this.onConnect });
  }

  onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    this.client.subscribe("/World");
    message = new Paho.MQTT.Message("Hello");
    message.destinationName = "/World";
    this.client.send(message);
  }
  onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0)
      console.log("onConnectionLost:" + responseObject.errorMessage);
  }
  onMessageArrived(message) {
    console.log("onMessageArrived:" + message.payloadString);
    this.client.disconnect();
  }
}

console.log("mqtt class loaded");
