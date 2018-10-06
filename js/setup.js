'use strict';

// Функция открывает/закрывает окно артифактов
var showArtifactsShop = function (flag, shopElem) {
  if (flag) {
    shopElem.classList.remove('hidden');
  } else {
    shopElem.classList.add('hidden');
  }
};

// Функция создает ипоказывает похожих волшебников
var createSimilarWizardsList = function (wizards) {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var wizardsFragment = document.createDocumentFragment();
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardsList = document.querySelector('.setup-similar');

  wizards.forEach(function (wizardObj) {
    wizardsFragment.appendChild(cloneWizardElement(wizardTemplate, wizardObj));
  });

  setupSimilarList.appendChild(wizardsFragment);

  similarWizardsList.classList.remove('hidden');
};

// Функция клонирует волшебника на основе шаблона
var cloneWizardElement = function (wizardTemplate, wizardObj) {
  var wizard = wizardTemplate.cloneNode(true);
  wizard.querySelector('.setup-similar-label').textContent = wizardObj['name'];
  wizard.querySelector('.wizard-coat').style.fill = wizardObj['coatColor'];
  wizard.querySelector('.wizard-eyes').style.fill = wizardObj['eyesColor'];
  return wizard;
};

// Функция генерирует случайное число
var getRandomValue = function (maxValue) {
  return Math.floor(Math.random() * maxValue);
};

// Функция установки цвета у елементов нашего волшебника
var setColorElemOnClick = function (elem, colorArr, inputHiddenElem) {
  elem.addEventListener('click', function () {
    var rndColor = colorArr[getRandomValue(colorArr.length)];
    if (inputHiddenElem === undefined) {
      elem.style.fill = rndColor;
    } else {
      elem.style.background = rndColor;
      inputHiddenElem.value = rndColor;
    }
  });
};

// Функция добавления событий
var addEvents = function (artifactsShop) {
  var openArtifactsShopIcon = document.querySelector('.setup-open');
  var closeArtifactsShopIcon = document.querySelector('.setup-close');
  var userNameInput = document.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEye = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballHiddenInput = fireball.querySelector('input');

  setColorElemOnClick(wizardCoat, coatColors);
  setColorElemOnClick(wizardEye, eyeColors);
  setColorElemOnClick(fireball, fireballColors, fireballHiddenInput);

  openArtifactsShopIcon.addEventListener('click', function () {
    showArtifactsShop(true, artifactsShop);
  });

  openArtifactsShopIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      showArtifactsShop(true, artifactsShop);
    }
  });

  closeArtifactsShopIcon.addEventListener('click', function () {
    showArtifactsShop(false, artifactsShop);
  });

  closeArtifactsShopIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      showArtifactsShop(false, artifactsShop);
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (evt.target !== userNameInput) {
        showArtifactsShop(false, artifactsShop);
      }
    }
  });
};

// Данные
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizards = [
  {
    'name': names[getRandomValue(names.length)] + ' ' + lastNames[getRandomValue(lastNames.length)],
    'coatColor': coatColors[getRandomValue(coatColors.length)],
    'eyesColor': eyeColors[getRandomValue(eyeColors.length)]
  },
  {
    'name': names[getRandomValue(names.length)] + ' ' + lastNames[getRandomValue(lastNames.length)],
    'coatColor': coatColors[getRandomValue(coatColors.length)],
    'eyesColor': eyeColors[getRandomValue(eyeColors.length)]
  },
  {
    'name': names[getRandomValue(names.length)] + ' ' + lastNames[getRandomValue(lastNames.length)],
    'coatColor': coatColors[getRandomValue(coatColors.length)],
    'eyesColor': eyeColors[getRandomValue(eyeColors.length)]
  },
  {
    'name': names[getRandomValue(names.length)] + ' ' + lastNames[getRandomValue(lastNames.length)],
    'coatColor': coatColors[getRandomValue(coatColors.length)],
    'eyesColor': eyeColors[getRandomValue(eyeColors.length)]
  }
];

var artifactsShop = document.querySelector('.setup');

createSimilarWizardsList(wizards);

showArtifactsShop(true, artifactsShop);

addEvents(artifactsShop);
