'use strict';

// Константы
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_PADDING_LEFT = 20;
var CLOUD_PADDING_TOP = 30;
var CLOUD_PADDING_BOTTOM = CLOUD_PADDING_TOP / 2;

var TEXT_HEIGHT = 16;

var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_MARGIN = 50;
var COLUMN_COLOR_MY = 'rgba(255, 0, 0, 1)';

// Функция отрисовки облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция определения максимального значения массива
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// Функция отрисовки колонки гистограммы
var columnDraw = function (ctx, columnX, columnY, columnHeight, columnColor) {
  ctx.fillStyle = columnColor;
  ctx.fillRect(columnX, columnY - TEXT_HEIGHT - columnHeight, COLUMN_WIDTH, columnHeight);
};

// Показываем статистику при победе
window.renderStatistics = function (ctx, names, times) {
  var cloudPaddingLeft = CLOUD_X + CLOUD_PADDING_LEFT;
  // Сначала рисуем тень облака со смещением по X и Y
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');

  // Рисуем само облако без смещения по X и Y
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // Заголовок окна результатов
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', cloudPaddingLeft, CLOUD_Y + CLOUD_PADDING_TOP);
  ctx.fillText('Список результатов:', cloudPaddingLeft, CLOUD_Y + CLOUD_PADDING_TOP + 20);

  // Получаем максимальный результат массива times
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    // Вычисляем кординаты X колонки
    var columnMargin = (COLUMN_WIDTH + COLUMN_MARGIN) * i / 1;
    var columnX = cloudPaddingLeft + 20 + columnMargin;

    // Вычисляем кординаты Y колонки
    var columnY = CLOUD_Y + CLOUD_HEIGHT - CLOUD_PADDING_BOTTOM;

    // Вычисляем высоту колонки
    var columnHeight = Math.round(COLUMN_HEIGHT * Math.round(times[i]) / maxTime);

    // Устанавливаем цвет подписей
    ctx.fillStyle = '#000';

    // Подписи игроков снизу
    ctx.fillText(names[i], columnX, columnY);

    // Подписи времени вверху
    ctx.fillText(Math.round(times[i]), columnX, columnY - TEXT_HEIGHT * 1.5 - columnHeight);

    // Колонка гистограммы
    var columnColor = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)';
    if (names[i] === 'Вы') {
      columnColor = COLUMN_COLOR_MY;
    }
    columnDraw(ctx, columnX, columnY, columnHeight, columnColor);
  }
};
