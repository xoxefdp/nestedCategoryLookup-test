import { INPUT_ERROR, INTERNAL_ERROR } from './constants'

const checkArgumentErrors = (categories, category) => {
  if (!(categories && Array.isArray(categories))) {
    throw new Error(INPUT_ERROR.FIRST_ARG_NOT_ARRAY)
  }

  if (!(typeof category === 'string')) {
    throw new Error(INPUT_ERROR.SECOND_ARG_NOT_STRING)
  }

  if (category?.length === 0) {
    throw new Error(INPUT_ERROR.SECOND_ARG_NOT_EMPTY)
  }
}

const checkInternalErrors = (und) => {
  if (typeof und === 'object' && !Array.isArray(und)) {
    if (!und.hasOwnProperty('name')) {
      throw new Error(INTERNAL_ERROR.NAME_PARAMETER_MISSING)
    }

    if (typeof und.name !== 'string') {
      throw new Error(INTERNAL_ERROR.NAME_PARAMETER_TYPE_ERROR)
    }

    if (und.name.length === 0) {
      throw new Error(INTERNAL_ERROR.NAME_PARAMETER_EMPTY)
    }

    if (!und.hasOwnProperty('subcategories')) {
      throw new Error(INTERNAL_ERROR.SUBCATEGORIES_PARAMETER_MISSING)
    }

    if (!Array.isArray(und.subcategories)) {
      throw new Error(INTERNAL_ERROR.SUBATEGORIES_PARAMETER_TYPE_ERROR)
    }
  }
}

export {
  checkArgumentErrors,
  checkInternalErrors
}
