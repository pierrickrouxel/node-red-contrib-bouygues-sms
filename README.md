node-red-contrib-bouygues-sms
====================

A <a href="http://nodered.org" target="_new">Node-RED</a> node to send SMS messages via the <a href="https://www.bouyguestelecom.fr" target="_new">Bouygues</a> service.

Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-bouygues-sms


Usage
-----

Sends an SMS message or make a voice call using the Bouygues service.

`msg.payload` is used as the body of the message. The node can be configured with the number
to send the message to.


You must have a contract with Bouygues to use this node.

Note : The service is limited to 5 sms per day.