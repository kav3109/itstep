let figure = {
    topX: 0,
    topY: 10,
    downX: 10,
    downY: 0
};
const getFigureParam = function (obj) {
  console.log('First coordinate ' + obj.topX + ', ' + obj.topY);
  console.log('Second coordinate ' + obj.downX + ', ' + obj.downY);
};

const getFigureWidth = function (obj) {
  return obj.downX - obj.topX;
};

const getFigureHeight = function (obj) {
    return obj.topY - obj.downY;
};
const getPloshad = function (obj) {
    return getFigureWidth(obj)*getFigureHeight(obj);
};
const getPerimetr = function (obj) {
    return (getFigureWidth(obj)+getFigureHeight(obj))*2;
};
const changeWidth = function(obj, param) {
    return obj.downX = obj.downX + param;
};
const changeHeight = function(obj, param) {
    return obj.topY = obj.topY + param;
};
const changeFigureParam = function(obj, width, height) {
    changeWidth(obj, width);
    changeHeight(obj, height);
};
const moveFigure = function (obj, x, y) {
    obj.topY = obj.topY + y;
    obj.topX = obj.topX + x;
    obj.downY = obj.downY + y;
    obj.downX = obj.downX + x;
};
 let dot = {
   dotX: 11,
   dotY: 11
 };
 const hit = function (objFigure, objDot) {
     return objDot.dotX < objFigure.downX && objDot.dotX > objFigure.topX && objDot.dotY < objFigure.topY && objDot.dotY > objFigure.downY;
 };
 console.log(hit(figure, dot));