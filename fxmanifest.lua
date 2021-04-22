-- This resource is part of the default Cfx.re asset pack (cfx-server-data)
-- Altering or recreating for local use only is strongly discouraged.

version '1.0.2'
author 'Lachee, Cfx.re <root@cfx.re>'
description 'Modified version of the base chat.'
repository 'https://github.com/lachee/fivem-chat'

ui_page 'dist/ui.html'

client_script 'cl_chat.lua'
server_script 'sv_chat.lua'

files {
  'dist/ui.html',
  'dist/index.css',
  'dist/fonts/*.woff2',
}

fx_version 'adamant'
games { 'rdr3', 'gta5' }
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

dependencies {
  'webpack'
}

webpack_config 'webpack.config.js'
