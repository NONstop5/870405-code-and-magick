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
    'name': names[getRandomValue(names.length - 1)] + ' ' + lastNames[getRandomValue(lastNames.length - 1)],
    'coatColor': coatColors[getRandomValue(coatColors.length - 1)],
    'eyesColor': eyeColors[getRandomValue(eyeColors.length - 1)]
  },
  {
    'name': names[getRandomValue(names.length - 1)] + ' ' + lastNames[getRandomValue(lastNames.length - 1)],
    'coatColor': coatColors[getRandomValue(coatColors.length - 1)],
    'eyesColor': eyeColors[getRandomValue(eyeColors.length - 1)]
  },
  {
    'name': names[getRandomValue(names.length - 1)] + ' ' + lastNames[getRandomValue(lastNames.length - 1)],
    'coatColor': coatColors[getRandomValue(coatColors.length - 1)],
    'eyesColor': eyeColors[getRandomValue(eyeColors.length - 1)]
  },
  {
    'name': names[getRandomValue(names.length - 1)] + ' ' + lastNames[getRandomValue(lastNames.length - 1)],
    'coatColor': coatColors[getRandomValue(coatColors.length - 1)],
    'eyesColor': eyeColors[getRandomValue(eyeColors.length - 1)]
  }
];

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
var wizardsFragment = document.createDocumentFragment();
var setupSimilarList = document.querySelector('.setup-similar-list');
var artifactsShop = document.querySelector('.setup');
var similarWizardsList = document.querySelector('.setup-similar');

wizards.forEach(function (wizardObj) {
  wizardsFragment.appendChild(cloneWizardElement(wizardTemplate, wizardObj));
});

setupSimilarList.appendChild(wizardsFragment);

artifactsShop.classList.remove('hidden');

similarWizardsList.classList.remove('hidden');
