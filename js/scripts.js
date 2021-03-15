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
        const characteristicsListElem = document.querySelector('.characteristics__list');
        const characteristicsItemElems = document.querySelectorAll('.characteristics__item');

       
        characteristicsItemElems.forEach(elem => {
            if (elem.children[1].classList.contains('active')){
                elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
            }
        })  

        const open = (button, dropDown) => {
            closeAllDrops(button, dropDown);
            dropDown.style.height = dropDown.scrollHeight + 'px';
            button.classList.add('active');
            dropDown.classList.add('active');
        };
        const close = (button, dropDown) => {
            button.classList.remove('active');
            dropDown.classList.remove('active');
            dropDown.style.height = '';
        };

        const closeAllDrops = (button, dropDown) => {
            characteristicsItemElems.forEach((elem) => {
                if (elem.children[0] !== button && elem.children[1] !== dropDown) {
                    close(elem.children[0], elem.children[1]);
                }
            })
        }

        characteristicsListElem.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('characteristics__title')) {
                const parent = target.closest('.characteristics__item');
                const description = parent.querySelector('.characteristics__description');

                description.classList.contains('active') ?
                    close(target, description) :
                    open(target, description);
            }
        });
        document.body.addEventListener('click', (event) => {
            const target = event.target;
            if (!target.closest('.characteristics__list')) {
                closeAllDrops();
            }
        })
    };
    

    tabs();
    accordion();
})