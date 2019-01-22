/**
 * Check out https://googlechrome.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    'index.html',
    'manifest.json'
  ]
);

self.toolbox.router.get( /\.js/,   self.toolbox.fastest ) ;
self.toolbox.router.get( /\.css/,  self.toolbox.fastest ) ;
self.toolbox.router.get( /\.html/, self.toolbox.fastest ) ;

// self.toolbox.router.any( /Getsvg/,            self.toolbox.networkOnly );

// self.toolbox.router.any('/*', self.toolbox.cacheFirst );
// self.toolbox.router.default = self.toolbox.cacheFirst;
