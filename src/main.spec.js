import { expect, describe, it } from '@jest/globals';
import { INPUT_ERROR, INTERNAL_ERROR } from './errors/constants'
import { getCategoryPath } from './main'

// ENVIRONMENT VARIABLES
const searchCategory4 = 'category4'
const searchCategory2 = 'category2'
const searchCategory5 = 'category5'
const absentCategory = 'cat'
const pathWithSearchCategory4 = '/category1/category3/category4'
const pathWithSearchCategory2 = '/category1/category2'
const pathWithSearchCategory5 = '/category5'
const nestedCategoriesTree = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: []
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    name: 'category5',
    subcategories: []
  }
];

// TESTS
describe('getCategoryPath', () => {
  it('should exist', () => {
    expect(getCategoryPath).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(typeof getCategoryPath).toBe('function')
  })

  // argument errors
  it('should receive two arguments', () => {
    expect(getCategoryPath.length).toBe(2)
  })

  it('should throw error if first argument is not an array', () => {
    expect(() => {
      getCategoryPath({})
    }).toThrowError(INPUT_ERROR.FIRST_ARG_NOT_ARRAY)
  })

  it('should throw error if second argument is not an string', () => {
    expect(() => {
      getCategoryPath([], 0)
    }).toThrowError(INPUT_ERROR.SECOND_ARG_NOT_STRING)
  })

  it('should throw error if second argument is an empty string', () => {
    expect(() => {
      getCategoryPath([], '')
    }).toThrowError(INPUT_ERROR.SECOND_ARG_NOT_EMPTY)
  })

  // internal errors
  it('should throw error if nested objects miss \'name\' param', () => {
    expect(() => {
      const categoriesTree = [{ subcategories: [] }]
      getCategoryPath(categoriesTree, searchCategory4)
    }).toThrowError(INTERNAL_ERROR.NAME_PARAMETER_MISSING)
  })

  it('should throw error if nested objects \'name\' param is not string', () => {
    expect(() => {
      const categoriesTree = [{ name: 0, subcategories: [] }]
      getCategoryPath(categoriesTree, searchCategory4)
    }).toThrowError(INTERNAL_ERROR.NAME_PARAMETER_TYPE_ERROR)
  })

  it('should throw error if nested objects \'name\' param is empty string', () => {
    expect(() => {
      const categoriesTree = [{ name: '', subcategories: [] }]
      getCategoryPath(categoriesTree, searchCategory4)
    }).toThrowError(INTERNAL_ERROR.NAME_PARAMETER_EMPTY)
  })

  it('should throw error if nested objects miss \'subcategories\' param', () => {
    expect(() => {
      const categoriesTree = [{ name: searchCategory4 }]
      getCategoryPath(categoriesTree, searchCategory4)
    }).toThrowError(INTERNAL_ERROR.SUBCATEGORIES_PARAMETER_MISSING)
  })

  it('should throw error if nested objects \'subcategories\' param is not an array', () => {
    expect(() => {
      const categoriesTree = [{ name: searchCategory4, subcategories: {} }]
      getCategoryPath(categoriesTree, searchCategory4)
    }).toThrowError(INTERNAL_ERROR.SUBATEGORIES_PARAMETER_TYPE_ERROR)
  })

  // functionality completed
  it(`should return empty string when '${absentCategory}' category is not found`, () => {
    expect(getCategoryPath(nestedCategoriesTree, absentCategory)).toBe('')
  })

  it(`should return a string with '${pathWithSearchCategory4}' if '${searchCategory4}' is found`, () => {
    expect(getCategoryPath(nestedCategoriesTree, searchCategory4)).toBe(pathWithSearchCategory4)
  })

  it(`should return a string with '${pathWithSearchCategory2}' if '${searchCategory2}' is found`, () => {
    expect(getCategoryPath(nestedCategoriesTree, searchCategory2)).toBe(pathWithSearchCategory2)
  })

  it(`should return a string with '${pathWithSearchCategory5}' if '${searchCategory5}' is found`, () => {
    expect(getCategoryPath(nestedCategoriesTree, searchCategory5)).toBe(pathWithSearchCategory5)
  })
})
