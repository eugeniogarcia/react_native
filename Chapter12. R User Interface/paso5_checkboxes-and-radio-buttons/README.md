This example has two pieces of state. The checkbox state controls the value of the Checkbox
component, while the radio value controls the state of the RadioGroup component. 

```js
const [checkbox, setCheckbox] = useState(false);
const [radio, setRadio] = useState("First");
```

The checkbox state is passed to the checked property of the Checkbox component, while the
radio state is passed to the value property of the RadioGroup component. Both components have onChange handlers that call their respective state setter functions: setCheckbox() and setRadio(). 

```js
<FormControlLabel label={`Checkbox ${checkbox ? "(checked)" : ""}`}

control={
    <Checkbox
    checked={checkbox}
    onChange={() => setCheckbox(!checkbox)}
    />
}
/>
```

```js
<FormControl component="fieldset">
    <FormLabel component="legend">{radio}</FormLabel>
    <RadioGroup value={radio} onChange={e => setRadio(e.target.value)}>
        <FormControlLabel value="First" label="First" control={<Radio />} />
        <FormControlLabel value="Second" label="Second" control={<Radio />} />
        <FormControlLabel value="Third" label="Third" control={<Radio />} />
    </RadioGroup>
</FormControl>
```

You'll notice that many other Material-UI components are involved in the display of these controls. For example, the label for the checkbox is displayed using the FormControlLabel component and the radio control uses a FormControl component and a FormLabel component.
