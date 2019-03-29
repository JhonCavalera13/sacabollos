// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firestore: {
    // Initialize Firebase
    apiKey: "AIzaSyCU73Ih1FUNtWfllq9suiTeJVLsbYG4ns8",
    authDomain: "sacabollos-38bbc.firebaseapp.com",
    databaseURL: "https://sacabollos-38bbc.firebaseio.com",
    projectId: "sacabollos-38bbc",
    storageBucket: "sacabollos-38bbc.appspot.com",
    messagingSenderId: "421296031444"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
