module.exports = function(RED) {
  const BouygueSMS = require('bouygues-sms');

  function BouyguesSMSNode(config) {
      RED.nodes.createNode(this, config);

      this.username = this.credentials.username;
      this.password = this.credentials.password;
      this.to = config.to;

      this.on('input', (msg) => {
          let sms = new BouygueSMS(this.username || msg.username, this.password || msg.password);

          sms.send(msg.payload, this.to || msg.to, (error) => {
            if (error) {
              this.error(error, msg);
            } else {
              this.send(msg);
            }
          });
      });
  }

  RED.nodes.registerType('bouygues-sms', BouyguesSMSNode, {
    credentials: {
      username: { type: 'text' },
      password: { type: 'password' }
    }
  });
}