<!-- The entry file for {{name}}  -->
<template src="./template.html"></template>
<!-- {{script}} -->
<script {{#script}}src="./index.{{../script}}"{{/script}}{{^script}}src="./index.js"{{/script}} {{#script}}lang="{{../script}}"{{/script}}></script>
<!-- {{style}} -->
<style {{#style}}src="./styles.{{../style}}"{{/style}}{{^style}}src="./styles.css"{{/style}} {{#style}}lang="{{../style}}"{{/style}} scoped></style>