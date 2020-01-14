export default function posts(state = {}, action) {
  switch (action.type) {
    case 'ADD_TITLE':
      return { ...state, title: action.title };
    case 'ADD_IMAGE':
      return { ...state, image_url: action.imageURL };
    case 'ADD_DESCRIPTION':
      return { ...state, description: action.description };
    default:
      return state;
  }
}
