Vamos a crear un componente que se pueda arrastrar. El componente será custom y basado en un `ScrollView`. El `ScrollView` se desplazará horizontalmente 

## Estilo y Propiedades

```js
<View style={styles.swipeContainer}>
      <ScrollView {...scrollProps}>
```

En el estilo indicamos que la orientación sea horizontal:

```js
swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 30,
    marginTop: 50
  },
```

Y en las propiedades indicamos que el scrollview sea horizontal - `horizontal`, y habilitamos el paginado con `pagingEnabled`:

```js
  const scrollProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    scrollEventThrottle: 10,
    onScroll
  };
```

## Lógica

En las propiedades hemos indicado cual es el event handler para `onScroll`:

```js
  function onScroll(e) {
    e.nativeEvent.contentOffset.x === 200 && onSwipe();
  }
```

Lo que hacemos es que __cuando se haya desplazado el control hasta 200__ es __ejecutar el handler `onSwipe`__ que se haya pasado en el props. Si antes de llegar a 200 se suelta el control, se restaura todo a como estaba:

El control se pinta como sigue, como un `ScrollView` formado por botones:

```js
<View style={styles.swipeContainer}>
    <ScrollView {...scrollProps}>
    <TouchableOpacity>
        <View style={styles.swipeItem}>
        <Text style={styles.swipeItemText}>{name}</Text>
        </View>
    </TouchableOpacity>
    <View style={styles.swipeBlank} />
    </ScrollView>
</View>
```

## Usar el Swipeable

Mostramos una lista de Swipeables. El handler que pasamos al swipeable actualiza el estado del padre eliminando un item. Esto hace que el padre pinte de nuevo los hijos: 

```js
function onSwipe(id) {
    //Actualiza el estado, provocara el repintado del componente
    return () => {
      setItems(items.filter(item => item.id !== id));
    };
  }

  //El componente se pinta con los datos del estado. Al actualizar el estado se actualiza la lista de componentes que se muestra
  return (
    <View style={styles.container}>
      {items.map(item => (
        <Swipeable key={item.id} onSwipe={onSwipe(item.id)} name={item.name} />
      ))}
    </View>
  );
}
```