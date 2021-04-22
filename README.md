# Customised Chat
This repository is a modified version of the default [FiveM](https://github.com/citizenfx/cfx-server-data) chat. 
It has been modified to better suit [SkullFace](https://www.twitch.tv/skullhasface)'s RP server.

## Requirements

- FiveM (obviously)
- Git 
- Some form of bash (cause the scripts are bash scripts)
- NPM (node package manager. run `npm --version` to verify)

## Installation
1. cd to your `[gameplay]` folder in your server data
2. remove the existing `chat` folder
3. `git clone https://github.com/Lachee/fivem-chat.git chat`
4. `cd chat`
5. `./deploy.sh` ( obviously run this in your Bash for Windows. All my scripts use this )

### Update
Update using the `./deploy.sh`.  This will make sure you have everything

### Restart Script
Remember, you will need to restart the chat script every time you update it. 
Clients may need to reconnect too.