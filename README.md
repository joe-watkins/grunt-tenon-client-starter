#Grunt Tenon Client Starter
This is a simple starter package to get up and running with Grunt [Tenon](http://www.tenon.io). Be sure to [signup for a free account at Tenon.io](http://www.tenon.io/register.php) to obtain the API key needed for using this Grunt plugin.

## Setup
1. From the command line run ``npm install`` this will setup the required node modules
2. Add your Tenon.io API Key to the Gruntfile.js on line #19
3. From the command line run ``grunt`` to start up Grunt.
4. Make edits to the index.html file and watch Grunt-Tenon work its magic.  Keep you eyes on the terminal for output from the Tenon plugin.

## Basic Grunt Settings
```
tenon: {
  options: {
    key: 'you api key here', // ADD YOUR API KEY HERE
    filter: [31, 54],
    level: 'AA' // AA OR AAA
  },
  all: {
    options: {
      saveOutputIn: 'allHtml.json',
      snippet: true,
      asyncLim: 2
    },
    src: ['index.html']
  },
  index: {
    src: ['index.html']
  }
}
```
