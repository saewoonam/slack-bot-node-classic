const { RTMClient } = require('@slack/rtm-api');
const { WebClient } = require('@slack/web-api');

// Read a token from the environment variables
const token = process.env.bot;

// Initialize
const rtm = new RTMClient(token);
const web = new WebClient(token);

rtm.on('message', async (event) => {
  // console.log(event);
  console.log('rtm.activeUserId', rtm.activeUserId)
  console.log('rtm.activeTeamId', rtm.activeTeamId)
  console.log(typeof(event.channel))
  if (event.channel[0]=='D') {
    const reply = await rtm.sendMessage(`Thanks for the message <@${event.user}>`, event.channel)
    console.log(reply.ts, "msg from ", event.user)
  } else {
    if (event.text.includes(rtm.activeUserId)) {
      const reply = await rtm.sendMessage(`Thanks for the mention <@${event.user}>`, event.channel)
      console.log(reply.ts, "mention from ", event.user, "in", event.channel)
    }
  }
  // console.log(event)
});

async function main() {
  // Connect to Slack
  const { self, team } = await rtm.start();
  console.log(self);
  console.log(team);
  console.log('rtm.activeUserId', rtm.activeUserId)
  console.log('rtm.activeTeamId', rtm.activeTeamId)
  // response = await web.users.list();
  // console.log(response);
}

main();
