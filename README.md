# Customised Chat
This repository is a modified version of the default [FiveM](https://github.com/citizenfx/cfx-server-data) chat. 
It has been modified to better suit [SkullFace](https://www.twitch.tv/skullhasface)'s RP server.

# Installation
## Requirements
- FiveM
- ESX

## Via Git ( recommended )
From your resouces directory for the ESX server:
```
git clone https://github.com/Lachee/fivem-chat.git "[lachee]/lachee-chat"
```

Then in you server cfg:
- `ensure lachee-chat`

**Dont forget to remove the previous `[gameplay]/chat` script**

### Update
Update using the `./deploy.sh`.  This will make sure you have everything

### Restart Script
Remember, you will need to restart the chat script every time you update it. 
Clients may need to reconnect too.
