Demuestra el uso de un scroll. En este caso tenemos un `ScrollView` con seis items. Cada item tiene un texto, indicador de progreso y un check.

```js
<View style={styles.container}>
    <ScrollView style={styles.scroll}>
    {new Array(6).fill(null).map((v, i) => (
        <View key={i}>
        <Text style={[styles.scrollItem, styles.text]}>Some text</Text>
        <ActivityIndicator style={styles.scrollItem} size="large" />
        <Switch style={styles.scrollItem} />
        </View>
    ))}
    </ScrollView>
</View>
```

El estilo es:

```js
  scroll: {
    height: 1,
    alignSelf: "stretch"
  },
```