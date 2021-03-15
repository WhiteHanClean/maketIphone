document.addEventListener('DOMContentLoaded', () => {
    const tabs = () => {

        const cardDetailChangeElem = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitleElem = document.querySelector('.card-details__title');
        const cardImageItem = document.querySelector('.card__image_item');
        const cardDetailsPrice = document.querySelector('.card-details__price');
        const descriptionMemory = document.querySelector('.description__memory')

        const data = [{
                name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: 95990,
                memoryROM: 128
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 256GB Silver',
                img: 'img/iPhone-silver.png',
                price: 120990,
                memoryROM: 256
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price: 99990,
                memoryROM: 128
            }
        ];

        const deactive = () => {
            cardDetailChangeElem.forEach(btn => btn.classList.remove('active'));
        }
        cardDetailChangeElem.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('active')) {
                    deactive();
                    btn.classList.add('active');

                    cardDetailsTitleElem.textContent = data[index].name;
                    cardImageItem.src = data[index].img;
                    cardImageItem.alt = data[index].name;
                    cardDetailsPrice.textContent = data[index].price + 'R';
                    descriptionMemory.textContent = `Встроенная память (ROM)${data[index].memoryROM} ГБ`
                }
            });
        })
    };

    const accordion = () => {
        const characteristicsTitle = document.querySelectorAll('.characteristics__title');
        const characteristicsDescription = document.querySelectorAll('.characteristics__description');

        characteristicsTitle.forEach((elem, i) => {
            elem.addEventListener('click', () => {
                elem.classList.toggle('active');
                characteristicsDescription[i].classList.toggle('active');
            });
        });
    };


    tabs();
    accordion();
})