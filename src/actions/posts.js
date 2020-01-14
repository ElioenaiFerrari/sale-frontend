export const addTitle = title => {
  return { type: 'ADD_TITLE', title };
};

export const addImageURL = imageURL => {
  return { type: 'ADD_IMAGE', imageURL };
};

export const addDescription = description => {
  return { type: 'ADD_DESCRIPTION', description };
};
