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
  console.log('Width of figure is ' + (obj.downX - obj.topX));
};

const getFigureHeight = function (obj) {
    console.log('Height of figure is ' + (obj.topY - obj.downY));
};
getFigureHeight(figure);

