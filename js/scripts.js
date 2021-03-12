document.addEventListener('DOMContentLoaded', () => {
    const tabs = () => {

        const cardDetailChangeElem = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitleElem = document.querySelectorAll('.card-details__title');
        const cardImageItemElem = document.querySelector('card__image_item');
        const cardDetailsPriceElem = document.querySelector('card-details__price');
        const descriptionMemory = document.querySelector('description__memory');

        const data = [{
                name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: 95900,
                memoryRom: 128
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Silver',
                img: 'img/iPhone-silver.png',
                price: 120900,
                memoryRom: 256
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price: 99900,
                memoryRom: 128
            }
        ];

        const deactive = () => {
            cardDetailChangeElem.forEach(btn => btn.classList.remove('active'));
        }

        cardDetailChangeElem.forEach((btn, i) => {
            btn.addEventListener('click', () => {

                if (!btn.classList.contains('active')) {
                    deactive();
                    btn.classList.add('active');
                    cardDetailsTitleElem.textContent = data[i].name;
                  
                    cardImageItemElem.src = data[i].img;
                    cardImageItemElem.alt = data[i].name;
                    cardDetailsPriceElem.textContent = data[i].price + '₽';
                    descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryRom} ГБ`;
                }
            });
        })


    };
    tabs();
});