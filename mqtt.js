class Mqtt {
  
  constructor() {
    this.isConnected = "nein";
  }

  connect() {
    
    this.clientid =
      "vhh" + new Date().getMilliseconds() + new Date().getSeconds();

    this.client = new Paho.MQTT.Client(
      "mqtt.eclipseprojects.io",
      443,
      this.clientid
    );

    this.client.onConnectionLost = this.onConnectionLost;
    this.client.onMessageArrived = this.onMessageArrived;
    var options = {
      timeout: 3,
      useSSL: true,
      cleanSession: true,
      reconnect: true,
      onSuccess: this.onConnect,
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

    this.client.connect(options);
  }

  onConnect() {
    this.isConnected = "ja";
    console.log("function onConnect");
    console.log("connected: " + this.isConnected);
  }

  onConnectionLost(responseObject) {
    console.log("connection lost");
  
    if (responseObject.errorCode !== 0)
      console.log("onConnectionLost:" + responseObject.errorMessage);
  }

  onMessageArrived(message) {
    console.log(this.isConnected);
    console.log("onMessageArrived:" + message.payloadString);
  }

  sendMessage(text, topic) {
    console.log("sendMessage");
    console.log(this.isConnected);

    

    var message = new Paho.MQTT.Message(text);
    message.destinationName = topic;
    this.client.send(message);
  }

  subscribe(topic) {
    this.isConnected+=".";
    console.log(this.isConnected);
    this.client.subscribe(topic);
  }
}
