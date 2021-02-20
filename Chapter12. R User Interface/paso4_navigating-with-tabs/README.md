We have a component with a Router that displays three routes. Each router uses a so called `TabContainer`:

```js
<Router>
  <Route
    exact
    path="/"
    render={() => (
      <Fragment>
        <TabContainer value={0} />
        <Typography component="div" style={tabContentStyle}>
          Item One
        </Typography>
      </Fragment>
    )}
  />
```

The `TabContainer` uses an `AppBar` that has `Tabs`:

```js
<AppBar position="static">
  <Tabs value={value}>
    <Tab label="Item One" component={Link} to="/" />
    <Tab label="Item Two" component={Link} to="/page2" />
    <Tab label="Item Three" component={Link} to="/page3" />
  </Tabs>
</AppBar>
```

We specify which Tab is active with `value`.

## Resumen

```js
<AppBar position="static">
  <Tabs value={value}>
    <Tab label="Item One" component={Link} to="/" />
```
