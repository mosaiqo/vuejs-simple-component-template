<!-- The entry file for {{name}}  -->
<template src="./template.html"></template>
<script {{^scripts}}src="./index.js"{{/scripts}}{{#scripts}}src="./index.{{scripts}}"{{/scripts}} {{#scripts}}lang="{{scripts}}"{{/scripts}}></script>
<style {{^styles}}src="./styles.css"{{/styles}} {{#styles}}src="./styles.{{styles}}"{{/styles}} {{#styles}}lang="{{styles}}"{{/styles}} scoped></style>