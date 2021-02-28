```ps
npm install
```

```ps
PS [EUGENIO] >npm run android

> @ android C:\Users\Eugenio\Downloads\react\Chapter19. RN Geolocation\paso3_plotting-points
> expo start --android

Starting project at C:\Users\Eugenio\Downloads\react\Chapter19. RN Geolocation\paso3_plotting-points
Developer tools running on http://localhost:19002
Opening developer tools in the browser...
Invalid regular expression: /(node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class
SyntaxError: Invalid regular expression: /(node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class
    at new RegExp (<anonymous>)
    at blacklist (C:\Users\Eugenio\Downloads\react\Chapter19. RN Geolocation\paso3_plotting-points\node_modules\metro-config\src\defaults\blacklist.js:34:10)
    at Function.getDefaultValues (C:\Users\Eugenio\Downloads\react\Chapter19. RN Geolocation\paso3_plotting-points\node_modules\metro-config\src\defaults\index.js:79:18)
    at getDefaultConfig (C:\Users\Eugenio\AppData\Roaming\npm\node_modules\expo-cli\node_modules\@expo\metro-config\src\ExpoMetroConfig.ts:113:9)
    at Object.loadAsync (C:\Users\Eugenio\AppData\Roaming\npm\node_modules\expo-cli\node_modules\@expo\metro-config\src\ExpoMetroConfig.ts:167:23)
    at runMetroDevServerAsync (C:\Users\Eugenio\AppData\Roaming\npm\node_modules\expo-cli\node_modules\@expo\dev-server\src\MetroDevServer.ts:40:45)
    at startDevServerAsync (C:\@expo\xdl@59.0.24\src\start\startDevServerAsync.ts:44:40)
    at startAsync (C:\@expo\xdl@59.0.24\src\start\startAsync.ts:40:22)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @ android: `expo start --android`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the @ android script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

En el archivo `C:\Users\Eugenio\Downloads\react\Chapter19. RN Geolocation\paso3_plotting-points\node_modules\metro-config\src\defaults\blacklist.js`, reemplazar:

```js
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

por

```js
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

Ejecutamos

```ps
PS [EUGENIO] >npx patch-package metro-config

npx: installed 150 in 7.061s
patch-package 6.3.1
• Creating temporary folder
• Installing metro-config@0.51.1 with npm
```

Añadimos en el `package.js`

```json
{
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "postinstall": "npx patch-package",
```