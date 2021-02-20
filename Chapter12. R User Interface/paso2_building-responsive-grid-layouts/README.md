Material-UI has a Grid component that we can use to compose complex layouts that are
responsive. At a high level, a Grid component can be either a container or an item within a
container

```js
      <Grid container spacing={3}>
        <Grid item xs={12}>
            ...
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            ...
            </Grid>
            <Grid item xs={6}>
            ...
            </Grid>
            <Grid item xs={6}>
            ...
            </Grid>
            <Grid item xs={6}>
            ...
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        ...
        </Grid>
      </Grid>
```

The xs breakpoint property value of 12 means that the header will always span the entire
width of the screen since 12 is the highest value you can use here:
      
```js
<Grid item xs={12}>
    <Paper style={headerFooterStyle}>
    <Typography>Header</Typography>
    </Paper>
</Grid>
```

In the navigation section, we have a grid container nested inside of a grid item.

Notice that the direction property value of column used in the navigation section makes the navigation items flow vertically instead of the horizontal default:

```js
<Grid item xs={4}>
    <Paper>
    <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
        <Typography style={navStyle}>Nav Item 1</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography style={navStyle}>Nav Item 2</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography style={navStyle}>Nav Item 3</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography style={navStyle}>Nav Item 4</Typography>
        </Grid>
    </Grid>
    </Paper>
</Grid>
```

## Resumen Grid

```js
<Grid container spacing={2} direction="column">
<Grid container spacing={3}>
<Grid item xs={12}>
```