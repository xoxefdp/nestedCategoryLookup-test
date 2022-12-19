const INPUT_ERROR = {
  FIRST_ARG_NOT_ARRAY: 'Should receive an array of categories as first argument',
  SECOND_ARG_NOT_STRING: 'Should receive a string as second argument',
  SECOND_ARG_NOT_EMPTY: 'Should receive a string not empty'
}

const INTERNAL_ERROR = {
  NAME_PARAMETER_MISSING: 'Should category object contain name parameter',
  NAME_PARAMETER_TYPE_ERROR: 'Should category object name parameter value be a string',
  NAME_PARAMETER_EMPTY: 'Should category object name parameter value not empty',
  SUBCATEGORIES_PARAMETER_MISSING: 'Should category object contain subcategories parameter',
  SUBATEGORIES_PARAMETER_TYPE_ERROR: 'Should category object subcategories parameter value be an array'
}

export {
  INPUT_ERROR,
  INTERNAL_ERROR,
}
