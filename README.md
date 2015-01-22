An exploration of packaging tools I did for Indy.js.

Feel free to create an issue or ping me on [Twitter](@kyleashipley) if you have any questions.

I started creating how-to docs, but left them woefully incomplete. I'll try to circle back around on these later, or you can submit a PR.

## browserify
- Probably the most common tool and easiest to get started with.
- See package.json for the available commands (just `npm run watchify` here)
- See [generic-rpg](https://github.com/panozzaj/generic-rpg/blob/master/gulpfile.coffee) for an example of how to incorporate watchify (browserify would be similar) into a Gulp (Grunt would be similar) toolchain.

## RequireJS
- Also pretty common; most libraries have a check for returning AMD vs. CommonJS format.
- Doesn't require a command-line to run in development -- all in-browser
  - See `index.html`, and view source on the page after it loads to see what RequireJS is actually doing
- Didn't have time to figure out the deployment-side story. Ping one of the ET guys for help there!

## Webpack
- Most powerful, but a big ugly at times (and the documentation is rough but improving)
- See `webpack.config.js` for the configuration options
- See [todo-flux](https://github.com/shipstar/todo-flux) for an example that uses the [react-hot-loader](http://gaearon.github.io/react-hot-loader/) I mentioned.

# JSPM
- Has been around a while, but recently got really interesting
- Uses its own package manager, but can pull from multiple sources (npm, bower, github, a vendor directory, etc)
- [This video](http://glenmaddern.com/articles/javascript-in-2015) is what inspired me to look into it
- See [jspm-test](https://github.com/shipstar/jspm-test) for an example including React (although I can't get `jspm bundle` to work on a JSX entry point at the moment).
