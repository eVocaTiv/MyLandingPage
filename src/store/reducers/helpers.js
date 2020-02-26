// https://redux.js.org/recipes/reducing-boilerplate/

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

// utility function to update object
function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

// utility function to update array
function updateItemsInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map((item) => {
    if (item.id !== itemId) {
      return item;
    }
    // update only the desired item.
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });
  return updatedItems;
}

export { createReducer, updateObject, updateItemsInArray };
