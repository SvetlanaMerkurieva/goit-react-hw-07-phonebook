export const logger = store => next => action => {
  console.group(action.type);
  return next(action);
};
