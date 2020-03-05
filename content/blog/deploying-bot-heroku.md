---
title: Making a Discord bot with TypeScript and deploying to Heroku
category: blog-temp
date: 2020-02-20
thumbnail: ../images/thumbnail.jpg
tags: [TypeScript, NodeJs, Heroku]
---

As being part of communities (mostly revolving around gaming), I use Discord a lot. With the exponential growth of the platform arrived the use of Bots. They allow automated tasks ranging from welcoming new members to moderating chats as well as organize minigames for users. I wanted to create my own bot, because there was no bot that had all the features I needed. The great news is that JavaScript is the language of choice when it comes to building Discord bots. The amazing [Discord.JS](https://discord.js.org/) library almost covers 100% of the Discord API.

### Building the bot

To create a bot, we need to access the Discord API and inject our keys into our bots.

##### Setting up on Discord's side

Before creating a bot, we need to create an application on the [Discord Developer portal](https://discordapp.com/developers/applications). Just click the `New Application` button, give it a name and `Create`. You can give your app some descriptive information if you want, keep in mind that it is your app and **not** the bot itself. To create it, go to the `Bot` tab, then `Add Bot`. This is where you can customize your bot, and how it will appear to other users. Copy the token and keep it preciously aside, the Node app will use it to connect to Discord.

Our final task in the Discord dashboard is to add the bot to one of our servers. Go to the `OAuth2` tab, tick the `bot` scope and pick the permissions you want your bot to be granted upon connection (you can change them later if you can edit roles on the server). For now `Send messages` will be enough. Copy the link generated, and navigate to it, you are prompted to pick a server (that you are admin of) for your bot to join. And voilà, your bot is now on the server, sleeping in the `offline` group.

##### Bootstrapping our server

Discord.JS gives a tiny example of a simple bot. Here is the code:

```javascript:title=server.js
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.D_TOKEN);
```

I assume you know how to create a node application so we just add the dependency with `yarn add discord.js` and paste our token in an environment variable called `D_TOKEN`. I use [dotenv](https://www.npmjs.com/package/dotenv) to keep the variables in the project, remember to never push your `.env` file! Now we run `node server.js` and our bot is automagically connected to our server! Type "ping" and it will respond with "pong".

That's great... but where's TypeScript ?