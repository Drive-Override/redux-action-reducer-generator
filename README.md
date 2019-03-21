[![travis][travis]][travis-url] [![codecov][codecov]][codecov-url]

## Intro

The redux-action-reducer package helps to automatically generate default actions and reducers and
action constants with REQUEST, SUCCESS and FAILURE slugs.

### Initialization

```js
  import Generator from "redux-action-reducer-generator";

  const getPosts = new Generator("get_posts");

  // Add reducer to store
  const reducers = combineReducers({
    posts: getPosts.reducer
  })

  const store = createStore(reducers);
```

### Explaination

Taking our previous example, our redux generator object contains
the following action constants:

- getPosts.REQUEST => GET_POSTS_REQUEST
- getPosts.SUCCESS => GET_POSTS_SUCCESS
- getPosts.FAILURE => GET_POSTS_FAILURE

If you want to call the appropriate action all you have to do is
calling the method containing the request, success or failure function.

```js
  // calling the request action
  getPosts.request();
```

This will trigger the reducer to update the state property ```isLoading``` to true.

```js
  getPosts.success("foo");
```

When calling the success method simply pass anything you want to update your sate with.
This will automatically set the states ```isLoading``` property to false and set the
```done``` property to true.

Same works with the ```.failure("error");``` method. Passing in your error message or object
will trigger setting the state ```isLoading``` to false as well as in success, but setting
```done``` to false.

---

## Contributing

See [CONTRIBUTE.md](CONTRIBUTE.md).


[travis]: https://img.shields.io/travis/Drive-Override/redux-action-reducer-generator.svg?style=flat-square
[travis-url]: https://img.shields.io/travis/Drive-Override/redux-action-reducer-generator.svg?style=flat-square
[codecov]: https://img.shields.io/codecov/c/github/Drive-Override/redux-action-reducer-generator.svg?style=flat-square
[codecov-url]: https://img.shields.io/codecov/c/github/Drive-Override/redux-action-reducer-generator.svg?style=flat-square
