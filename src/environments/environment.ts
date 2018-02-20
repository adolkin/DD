// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//Connect to Firebase
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCfFpHVlcTTRuszobzhlNK8qlFezkSkrDo",
    authDomain: "drag-drop-8e584.firebaseapp.com",
    databaseURL: "https://drag-drop-8e584.firebaseio.com",
    projectId: "drag-drop-8e584",
    storageBucket: "drag-drop-8e584.appspot.com",
    messagingSenderId: "551309222816"
  }
};
