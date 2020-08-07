'use strict';
const multiItemSlider = (function () {
    return function (selector) {
        let
            _mainElement = document.querySelector(selector), // основный элемент блока
            _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
            _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
            _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
            _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
            _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
            _positionLeftItem = 0, // позиция левого активного элемента
            _transform = 0, // значение транфсофрмации .slider_wrapper
            _step = 100, // величина шага (для трансформации)
            _images = ['https://i.picsum.photos/id/1018/800/400.jpg',
            'https://i.picsum.photos/id/1019/800/400.jpg',
            'https://i.picsum.photos/id/1020/800/400.jpg',
            'https://i.picsum.photos/id/1021/800/400.jpg',
            'https://i.picsum.photos/id/1022/800/400.jpg'];

        // наполняем слайдер
        _images.forEach((item, index, arr) => {
           _sliderWrapper.innerHTML = _sliderWrapper.innerHTML + `<div class="slider__item">
                <img src="${arr[index]}" alt="">
            </div>`
        });
        let position = {
            getMin: 0,
            getMax: _images.length - 1,
        };

        const _transformItem = function (direction) {
            if (direction === 'right') {
                if ((_positionLeftItem) >= position.getMax) {
                    return;
                }
                if (!_sliderControlLeft.classList.contains('slider__control_show')) {
                    _sliderControlLeft.classList.add('slider__control_show');

                }
                if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + 1) >= position.getMax) {
                    _sliderControlRight.classList.remove('slider__control_show');
                }
                _positionLeftItem++;
                _transform -= _step;
            }
            if (direction === 'left') {
                if (_positionLeftItem <= position.getMin) {
                    return;
                }
                if (!_sliderControlRight.classList.contains('slider__control_show')) {
                    _sliderControlRight.classList.add('slider__control_show');
                }
                if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
                    _sliderControlLeft.classList.remove('slider__control_show');
                }
                _positionLeftItem--;
                _transform += _step;
            }
            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        };

        // обработчик события click для кнопок "назад" и "вперед"
        const _controlClick = function (e) {
            if (e.target.classList.contains('slider__control')) {
                e.preventDefault();
                let direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
                _transformItem(direction);
            }
        };

        const _setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
            _sliderControls.forEach(function (item) {
                item.addEventListener('click', _controlClick);
            });
        };

        // инициализация
        _setUpListeners();

        return {
            right: function () { // метод right
                _transformItem('right');
            },
            left: function () { // метод left
                _transformItem('left');
            }
        }

    }
}());

let slider = multiItemSlider('.slider');