### Portfolio
My personal resume

## Getting started
The project needs to be behind a web server. Here is how to host a simple webserver:

1. You will need `node.js` and `git`
2. Use `npm` to install the following modules if you don't have it currently: bower, gulp

e.g. `npm install -g bower`

3. Navigate to project directory and install dependencies: `npm install` and `bower install`
4. Gulp will run node.js to spin up a server behind localhost: `gulp serve`. You can navigate to `localhost:3000` to view the project. In case you want to host the project in a different port, you can set `NODE_ENV` environment varialbe to whichever port you prefer, or open file `bin/www` and change default port number
