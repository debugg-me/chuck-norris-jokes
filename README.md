Your task is to use the [Chuck Norris API](https://api.chucknorris.io/) to achieve the following:
 - Get a random joke from the API
 - Get the categories of jokes available under the API

### Examples

#### Get a random joke from the API

`getRandomJoke()` should return a random joke from the API in the form of a JS object, like so:
```
{
    icon_url : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id : "cuMDk9QpSGSIJ3CO2xU7Kg",
    url : "",
    value : "Chuck Norris had to go pee, next thing you now the oceans were made"
}
```

`getJokeCategories()` should return the categories provieded by the api in the form of 
an array of strings, like so:

```
[
      "animal",
      "career",
      "celebrity",
      ...
]
```

### Writing your Code

You need to write your code in `norris.js`, it has a function declared for each of the task. Do not change these
function names as it might cause the tests to fail. You can however, declare functions for 
your own convenience and doing intermediate tasks.

### Executing tests

Using NPM:
```bash
$ npm test
```

Or if you prefer Yarn:
```bash
$ yarn test
```

### Feedback, Issues, Pull Requests
If you have feedback about this problem, or have found a problem in this excercise, head over there and create an issue. We are always happy to help!
