fonts = ["Dotum", "arial black", "Century Gothic", "Gulim", "Impact", "Tahoma"]
selectors = ["#o", "#z", "#a", "#w", "#a2", "#ku", "#n", "#period", "#i", "#o2"]
getRandomFont = ->
  fonts[Math.floor(Math.random()*fonts.length)]

getRandomJqObj = ->
  $(selectors[Math.floor(Math.random()*selectors.length)])


$ ->
  scramble()

scramble = ->
  firstTimeOut = getRandomInt(0, 200)
  secondTimeOut = getRandomInt(firstTimeOut, firstTimeOut + 200)
  finalTimeOut = getRandomInt(secondTimeOut, secondTimeOut + 5000)
  jqObj = getRandomJqObj()
  scrambleFont(jqObj)
  setTimeout ->
    scrambleFont(jqObj)
  , firstTimeOut
  setTimeout ->
    toDefault(jqObj)
  , secondTimeOut
  setTimeout ->
    scramble()
  , finalTimeOut

getRandomInt = (min, max) ->
  Math.floor(Math.random() * (max - min)) + min

toDefault = (jqObj) ->
  changeFont(jqObj, "Helvetica")

changeFont = (jqObj, font) ->
  jqObj.css("font-family", font)

scrambleFont = (jqObj) ->
  font = getRandomFont()
  jqObj.css("font-family", font)