# Indexing Basic Needs

We're live! Check out the site: https://www.basicneeds.center

## Dev Setup

### Ruby and Rails

You'll need to install Rails 5.2+. Installation is notorious for being troublesome sometimes. You can try [this guide](http://blog.teamtreehouse.com/install-rails-5-mac) first and see how well it works for you. You should also use Ruby 2.4.1+.

For reference I'm using Rails 5.2.2 and Ruby 2.4.1p111.

### Database

We're using PostgresQL as our database. They have their own app to manage running local DB server, but we'll use Homebrew to start and stop the service.

```
brew install postgresql
```

If the service doesn't start automatically, run this to start the service.

```
brew services start postgresql
```

It will continuously run in the background to enable connections to your database until you stop it with `brew services stop postgresql`.

### Environment

Install our Ruby gems with:

```
bundle install
```

If you don't have `yarn` installed on your system (it's a replacement for `npm`), you can probably install it using `brew`:

```
brew install yarn
```

Then install our `node_modules` with:

```
yarn install
```

You may have installed the most recent version of `webpack-dev-server` at this step, but it has a compile bug, which can be fixed by downgrading the server to this version:

```
yarn upgrade webpack-dev-server@^2.11.1 -D
```

### Running Locally

Start the server with this command:

```
yarn start
```

## License

Check back later for dis.
