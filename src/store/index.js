import { createStore } from 'redux';

const menuActive = (state = false, actions) => {
  switch (actions.type) {
    case 'CLICK': {
      return !state;
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(
  menuActive,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const addHtmlElement = () => ({
  type: 'CLICK',
});
