# cajamar-test

```javascript
// TO-DO: Implement this function
const getCategoryPath = (categories, categoryName) => {
  let path;

  // FUNCTION CODE

  return path;
};
```

```javascript
// TEST DATA
const categories = [
  {
    "name": "category1",
    "subcategories": [
      {
        "name": "category2",
        "subcategories": [],
      },
      {
        "name": "category3",
        "subcategories": [
          {
            "name": "category4",
            "subcategories": [],
          },
        ],
      },
    ],
  },
  {
    "name": "category5",
    "subcategories": [],
  },
];
```

```javascript
// OUTPUT SAMPLES

console.log(getCategoryPath(categories, "category4"));
// should output: '/category1/category3/category4'

console.log(getCategoryPath(categories, "category2"));
// should output: '/category1/category2'

console.log(getCategoryPath(categories, "category5"));
// should output: '/category5'
```

## Project setup

```
npm install
```

### Lint and test

```
npm run test
```
