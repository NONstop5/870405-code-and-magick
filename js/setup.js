'use strict';

// Клонирует волшебника на основе шаблона
var cloneWizardElement = function (wizardTemplate, wizardObj) {
  var wizard = wizardTemplate.cloneNode(true);
  wizard.querySelector('.setup-similar-label').textContent = wizardObj['name'];
  wizard.querySelector('.wizard-coat').style.fill = wizardObj['coatColor'];
  wizard.querySelector('.wizard-eyes').style.fill = wizardObj['eyesColor'];
  return wizard;
};

// Генерирует случайное число
var getRandomValue = function (maxValue) {
  return Math.round(Math.random() * maxValue);
};

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    'name': names[getRandomValue(7)] + ' ' + lastNames[getRandomValue(7)],
    'coatColor': coatColors[getRandomValue(5)],
    'eyesColor': eyeColors[getRandomValue(4)]
  },
  {
    'name': names[getRandomValue(7)] + ' ' + lastNames[getRandomValue(7)],
    'coatColor': coatColors[getRandomValue(5)],
    'eyesColor': eyeColors[getRandomValue(4)]
  },
  {
    'name': names[getRandomValue(7)] + ' ' + lastNames[getRandomValue(7)],
    'coatColor': coatColors[getRandomValue(5)],
    'eyesColor': eyeColors[getRandomValue(4)]
  },
  {
    'name': names[getRandomValue(7)] + ' ' + lastNames[getRandomValue(7)],
    'coatColor': coatColors[getRandomValue(5)],
    'eyesColor': eyeColors[getRandomValue(4)]
  }
];

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
var wizardsFragment = document.createDocumentFragment();

wizards.forEach(function (wizardObj) {
  wizardsFragment.appendChild(cloneWizardElement(wizardTemplate, wizardObj));
});

var setupSimilarList = document.querySelector('.setup-similar-list');
setupSimilarList.appendChild(wizardsFragment);

var artifactsShop = document.querySelector('.setup');
artifactsShop.classList.remove('hidden');

var similarWizardsList = document.querySelector('.setup-similar');
similarWizardsList.classList.remove('hidden');
