---
title: Zoebot3
category: projects
tags:
  - TypeScript
  - NodeJs
  - Heroku
thumbnail: ../images/zoe-bot.png
link: https://github.com/prazdevs/zoebot3
maintained: true
---

A discord bot that shares from Reddit to Discord & Twitter, but also gives sparkly powers to your Discord experience
What can she do now ?

- Answer commands : ZoeBot3 can react to discord commands in channels she has access to, with a prefix (z! by default). Default implemented commands are ping and say. More to come!
- Fetch submissions from a given subreddit (default to r/zoemains, obviously) automatically every X seconds (default to 30)
- Post the fetched submissions, formatted as an embed to a Discord text channel the bot has access to. (Runtime database-stored channel settings coming soon).
  Tweet the fetched submissions, formatted in a short message (status < 280 characters), to a Twitter account set in the env.

I still maintain this project and will add more features to it.
