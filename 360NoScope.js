// ==UserScript==
// @name        360NoScope
// @namespace   Violentmonkey Scripts
// @match        https://www.terrasco.pe/
// @include      *://*terrasco.pe/*
// @grant       none
// @version     1.0
// @author      Notclone
// @description A simple script to redirect from terrascope to good old terra finder
// ==/UserScript==

let url = window.location.href;

window.location.replace(url.replace("terrasco.pe", "finder.terra.money"));
