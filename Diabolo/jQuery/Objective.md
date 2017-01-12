# Development case
## Display in style
We want to develop a little page that displays a JSON structure in a nice and friendly way
Here’s a JSON source :
https://raw.githubusercontent.com/substack/node-browserify/master/package.json
The page shows an input field where the user can enter the URL of the JSON structure.
The page then displays an array with 3 columns.
The first column contains the key.
The second column shows a preview of the value depending on its type:
- String : shows the first 10 characters
- Array : shows the size of the array
- Object : shows the number of keys
The third column contains the type (String, Array, Object).
The array will only show the 10 first keys in the alphabetic order.
The page will be developed with JQuery 1.11.1
You will deliver that program as you would on a classic development project. It should be immediately runnable and testable.