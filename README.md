## Installation

To install the `@miladsoft/mini-apps-sdk` library using npm, run the following command:

```sh
npm install @miladsoft/mini-apps-sdk
```

## Usage

To use the library in your project, follow these steps:

1. **Import the Library:**

   First, you need to import the necessary modules from the library. Use the following import statement in your JavaScript or TypeScript file:

   ```js
   import { init } from '@miladsoft/mini-apps-sdk'
   ```

2. **Initialize the SDK:**

   Call the `init` function to initialize the SDK and get access to various features and components provided by the library:

   ```js
   const {
     ready,
     mainButton,
     close,
   } = init()
   ```

3. **Prepare the App:**

   Use the `ready` method to signal that your app is ready. This is usually done after all initial setup is complete:

   ```js
   ready()
   ```

4. **Configure the Main Button:**

   You can customize the main button's text and define its behavior when clicked. For example, to set the text to "CLOSE MINI APP" and close the app when clicked, you can do the following:

   ```js
   mainButton.text = 'CLOSE MINI APP'
   mainButton.onClick(() => close())
   ```

Here is a complete example that puts all the steps together:

```js
import { init } from '@miladsoft/mini-apps-sdk'

// Initialize the SDK
const {
  ready,
  mainButton,
  close,
} = init()

// Signal that the app is ready
ready()

// Configure the main button
mainButton.text = 'CLOSE MINI APP'
mainButton.onClick(() => close())
```

By following these steps, you can successfully integrate and use the `@miladsoft/mini-apps-sdk` library in your project.
