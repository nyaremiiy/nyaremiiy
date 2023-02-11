import { createStore } from 'redux';


const htmlElements = (state = {}, actions) => {
  switch (actions.type) {
    case 'ADD_HTML_ELEMENT': {
      return {
        ...state,
        [actions.data.name] : actions.data.data
      };
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(htmlElements, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const addHtmlElement = (data) => ({
  type: 'ADD_HTML_ELEMENT',
  data,
});
