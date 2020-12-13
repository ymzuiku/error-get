# error-get

## Install

```sh
$ npm install error-get
```

## Use

```js
import errorGet from "error-get";

const errorInPromise = async (str = "promise") => {
  throw "error in " + str;
};
errorGet(errorInPromise()).then((err) => {
  console.log(err); //error in promise
});

errorGet(errorInPromise).then((err) => {
  console.log(err); //error in promise
});

errorGet(errorInPromise, ["hello"]).then((err) => {
  console.log(err); //error in hello
});
```
