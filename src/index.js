module.exports = function(action) {
    // namespace variable
    const ns = {};

    if (typeof action !== "string" || !action) {
      return;
    }

    this.action = action.toUpperCase();

    ns.REQUEST = this.action + "_REQUEST";
    ns.SUCCESS = this.action + "_SUCCESS";
    ns.FAILURE = this.action + "_FAILURE";

    ns.request = () => ({
      type: ns.REQUEST
    });

    ns.success = response => ({
      type: ns.SUCCESS,
      response
    });
  
    ns.failure = error => ({
      type: ns.FAILURE,
      error
    });
  
    ns.defaultState = {
      isLoading: false,
      isDone: false,
      error: null,
      response: {}
    };
  
    ns.reducer = (state=ns.defaultState, action) => {
      switch (action.type) {
        case ns.REQUEST:
          return Object.assign({}, state, {
            isLoading: true
          });
        case ns.SUCCESS:
          return Object.assign({}, state, {
            isLoading: false,
            done: true,
            response: action.response
          });
        case ns.FAILURE:
          return Object.assign({}, state, {
            isLoading: false,
            done: false,
            error: action.error
          });
        default:
          return state;
      }
    };
  
    return ns;
}
