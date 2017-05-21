const path = require('path')

module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": [2, "global"],
        "comma-dangle": [1, {
          "arrays": "always-multiline",
          "objects": "always-multiline",
          "imports": "always-multiline",
          "exports": "always-multiline",
          "functions": "ignore",
        }],
        "semi": [2, "never"],
        "max-len": [0, 150, 2],
        "indent": [2, 2, {
            "SwitchCase": 1
        }],
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true,
            "mode": "minimum"
        }],
        "quote-props": [2, "as-needed", {
            "keywords": false,
            "unnecessary": false
        }],
        "arrow-body-style": [2, "as-needed"],
        "react/jsx-no-bind": [1, {
          "ignoreRefs": true,
          "allowArrowFunctions": true,
          "allowBind": false
        }],
        "no-confusing-arrow": ["error", {"allowParens": true}],
        "react/jsx-sort-vars": [0],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": [1],
        "react/forbid-prop-types" : [1],
        "react/jsx-closing-bracket-location": [0],
        "react/require-default-props": [1],
        "react/no-string-refs": [1],
        "react/no-unused-prop-types": [1, { skipShapeProps: true }],
        "react/prop-types": [1, { skipUndeclared: true }],
        "object-shorthand": [0, "always"],
        "no-unused-vars": [2, { ignoreRestSiblings: true }],
        "no-console": 1,
        "consistent-return": 0,
        "arrow-spacing": 2,
        "arrow-parens": [2, "always"],
        "no-unused-expressions": [2, {
            "allowShortCircuit": true,
            "allowTernary": true
        }],
        "no-else-return": [0],
        "array-callback-return": [0],
        "no-return-assign": [1],
        "no-underscore-dangle": [1],
        "no-prototype-builtins": [0],
        "no-template-curly-in-string": [0],
        "jsx-a11y/no-static-element-interactions": [0],
        "jsx-a11y/img-has-alt": [ 2, {
            "elements": [ "img", "object", "area", "input[type=\"image\"]" ],
            "img": ["Image"],
            "object": ["Object"],
            "area": ["Area"],
            "input[type=\"image\"]": ["InputImage"]
          }],
        "no-irregular-whitespace": [2],                             // disallow irregular whitespace outside of strings and comments
        "no-loop-func": [2],                                        // disallow creation of functions within loops
        "valid-typeof": [2],                                        // Ensure that the results of typeof are compared against a valid string
        "comma-spacing": [1, {"before": false, "after": true}],     // enforce spacing before and after comma
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    },
    "ecmaFeatures": {
        "arrowFunctions": true,                     // enable arrow functions
        "binaryLiterals": true,                     // enable binary literals
        "blockBindings": true,                      // enable let and const (aka block bindings)
        "classes": true,                            // enable classes
        "defaultParams": true,                      // enable default function parameters
        "destructuring": true,                      // enable destructuring
        "forOf": true,                              // enable for-of loops
        "generators": true,                         // enable generators
        "modules": true,                            // enable modules and global strict mode
        "objectLiteralComputedProperties": true,    // enable computed object literal property names
        "objectLiteralDuplicateProperties": true,   // enable duplicate object literal properties in strict mode
        "objectLiteralShorthandMethods": true,      // enable object literal shorthand methods
        "objectLiteralShorthandProperties": true,   // enable object literal shorthand properties
        "octalLiterals": true,                      // enable octal literals
        "regexUFlag": true,                         // enable the regular expression u flag
        "regexYFlag": true,                         // enable the regular expression y flag
        "restParams": true,                         // enable the rest parameters
        "spread": true,                             // enable the spread operator
        "superInFunctions": true,                   // enable super references inside of functions
        "templateStrings": true,                    // enable template strings
        "unicodeCodePointEscapes": true,            // enable code point escapes
        "globalReturn": true,                       // allow return statements in the global scope
        "jsx": true                                 // enable JSX
    },
    "globals": {
        "window": true,
        "document": true,
        "location": true,
        "sessionStorage": true,
        "localStorage": true,
        "expect": true,
        "beforeEach": true,
        "jest": true,
        "google": true,
    }
}
