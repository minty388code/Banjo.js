# Banjo.js
Banjo.js is a new small javascript framework that is based around directives to add minimal functionality in your markup

## Documentation
## WARNING! all directives must have 'data-' before them, for example: 'data-b-model'
### Ver 1.0

#### b-model
The 'b-model' directive is used to assign a model to an element that can then be binded onto another element (ver 1.0 only allows text binding and might be a bit buggy)

#### b-bind
The 'b-bind' directive is used to bind an already made model to an element

#### b-show
The 'b-show' directive is a directive that can control whether an element is rendered or not, it currenty accepts only 2 values, 'show' and 'hide' and anything else will be proccessed to be visible
