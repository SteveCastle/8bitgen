import {GraphQLNonNull} from 'graphql';

// if the add & update schemas have different required fields, use this
export const makeRequired = (fields, requiredFieldNames) => {
  const newFields = Object.assign({}, fields);
  requiredFieldNames.forEach(name => {
    newFields[name] = Object.assign({}, newFields[name], {type: new GraphQLNonNull(newFields[name].type)});
  });
  return newFields;
};