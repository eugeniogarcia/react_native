The Drawer component, just like a physical drawer, slides open to reveal contents that are
easily accessed.

Everything that this component renders is within the Router component because the items in the drawer are links to routes:

```js
return (
  <Router>
    <Button onClick={toggleDrawer}>Open Nav</Button>
    <section>
    <Route path="/first" component={First} />
    <Route path="/second" component={Second} />
    <Route path="/third" component={Third} />
    </section>
```

The drawer itself is opened when the Open Nav button is clicked.

```js
  const [open, setOpen] = useState(false);

  function toggleDrawer({ type, key }) {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }

    setOpen(!open);
  }
```

- The open state controls the visibility of the drawer using the property `open` of the drawer. When that is true, the drawer is open, else is closed.
- The onClose handler of the Drawer component calls this function too so that the drawer closes when any of the links within it are activated.

```js
<Drawer open={open} onClose={toggleDrawer}>
<div
    style={{ width: 250 }}
    role="presentation"
    onClick={toggleDrawer}
    onKeyDown={toggleDrawer}
>
    <List>
    {links.map(link => (
        <ListItem button key={link.url} component={Link} to={link.url}>
        <Switch>
            <Route
            exact
            path={link.url}
            render={() => (
                <ListItemText
                primary={link.name}
                primaryTypographyProps={{ color: "primary" }}
                />
            )}
            />
            <Route
            path="/"
            render={() => <ListItemText primary={link.name} />}
            />
        </Switch>
        </ListItem>
    ))}
    </List>
```

__The items that are displayed in a Drawer component are actually list items__, as you can see here. _Within ListItem, we have the Route component that generates the link text, by rendering a ListItemText component_.

```js
<List>
    {links.map(link => (
        <ListItem button key={link.url} component={Link} to={link.url}>
```

 There are actually two Route components within a Switch component. The reason is so that we can style the list item differently if it matches the current path:

 ```js
<Switch>
    <Route
    exact
    path={link.url}
    render={() => (
        <ListItemText
            primary={link.name}
            primaryTypographyProps={{ color: "primary" }}
        />
    )}
    />
    <Route
    path="/"
    render={() => <ListItemText primary={link.name} />}
    />
```

When clicking on any the links we toggle the state, and the the drawer closes and renders the content of the selected route. Then, when you open the drawer again, you'll notice that the First Page link is rendered as the active link.

## Resumen

```js
<Drawer open={open} onClose={toggleDrawer}>
...
</Drawer>
```

```js
<List>
    <ListItem button key={link.url} component={Link} to={link.url}>
        <Switch>
            <Route
            exact
            path={link.url}
            render={() => (
                <ListItemText
                primary={link.name}
                primaryTypographyProps={{ color: "primary" }}
                />
            )}
            />
            <Route
            path="/"
            render={() => <ListItemText primary={link.name} />}
            />
        </Switch>
    </ListItem>
</List>
```