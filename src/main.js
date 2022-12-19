import { checkArgumentErrors, checkInternalErrors } from './errors/check'

const getCategoryPath = (categories, searchedCategory) => {
  const steps = []
  let path = ''
  let hasBeenFound = false

  checkArgumentErrors(categories, searchedCategory)

  const _searchCategoryPath = (undetermined) => {
    checkInternalErrors(undetermined)

    if (!undetermined || (typeof undetermined !== 'object' && !Array.isArray(undetermined))) {
      hasBeenFound = false
    } else if (undetermined.hasOwnProperty('name') && undetermined['name'] === searchedCategory) {
      hasBeenFound = true
    } else if (Array.isArray(undetermined)) {
      for (const category of undetermined) {
        steps.push(category.name)
        hasBeenFound = _searchCategoryPath(category)
        if (hasBeenFound) {
          return hasBeenFound
        }
        steps.pop()
      }
    } else if (undetermined.hasOwnProperty('subcategories') && undetermined['subcategories'].length > 0) {
        hasBeenFound = _searchCategoryPath(undetermined.subcategories)
        if (hasBeenFound) {
          return hasBeenFound
        }
        steps.pop()
    }

    return hasBeenFound
  }

  _searchCategoryPath(categories)

  if (steps.length > 0) {
    path = '/' + steps.join('/')
  }

  return path
}

export {
  getCategoryPath
}
