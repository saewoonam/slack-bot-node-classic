## slack-bot-node-classic
Very simple slack bot that uses the "classic" permissions so that it can be run on computers behind a firewall to implement the bot
### Notes
*  Need to create a "classic"/"legacy" bot [link](https://api.slack.com/apps?new_classic_app=1)
*  this example also includes the web api, the rtm api only works in the "classic" mode
*  created an environment variable "bot".. This has the OATH token for authentication.  It should begin with the string 'xoxb'

