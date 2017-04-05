module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Component name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Component description",
      "default": "A Vue.js component"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "jspreprocesor": {
      "type": "confirm",
      "message": "Do you want some Script PreProcessor?",
      "default": false
    },
    "script": {
      "when": "jspreprocesor",
      "type": "list",
      "required": true,
      "choices": [
        {
          "name": "JS",
          "value": "js",
          "short": "JS"
        },
        {
          "name": "Coffee Script",
          "value": "coffee",
          "short": "Coffe"
        }
      ]
    },
    "stylepreprocesor": {
      "type": "confirm",
      "message": "Do you want some Style PreProcessor?",
      "default": false
    },
    "style": {
      "when": "stylepreprocesor",
      "type": "list",
      "required": true,
      "choices": [
        {
          "name": "CSS",
          "value": "css",
          "short": "CSS"
        },
        {
          "name": "LESS",
          "value": "less",
          "short": "LESS"
        },
        {
          "name": "SASS",
          "value": "sass",
          "short": "Sass"
        },
        {
          "name": "STYLUS",
          "value": "styl",
          "short": "Stylus"
        }
      ]
    }
  },
  "filters": {
    "styles.styl": "stylepreprocesor && style === 'styl'",
    "styles.sass": "stylepreprocesor && style === 'sass'",
    "styles.less": "stylepreprocesor && style === 'less'",
    "styles.css": "!stylepreprocesor || (stylepreprocesor && style === 'css')",
    "index.js": "!jspreprocesor || (jspreprocesor && script === 'js')",
    "index.coffee": "jspreprocesor && script === 'coffee'"
  },
  complete(data, {logger, files})
  {
    logger.log(data)
    logger.log(files)

    if (!data.inPlace) {
      logger.log(`cd ${data.destDirName}`)
    }
  }

}
