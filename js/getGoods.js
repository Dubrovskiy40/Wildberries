const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');
    const more = document.querySelector('.more');

    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector('.long-goods-list');

        goodsContainer.innerHTML = '';

        goods.forEach((good) => {
            const goodsBlock = document.createElement('div');

            goodsBlock.classList.add('col-lg-3');
            goodsBlock.classList.add('col-sm-6');
            goodsBlock.data = good;

            goodsBlock.innerHTML = `
                <div class="goods-card">
                    <span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
                    <img src="db/${good.img}" alt="${good.name}" class="goods-image">
                    <h3 class="goods-title">${good.name}</h3>
                    <p class="goods-description">${good.description}</p>
                    <button class="button goods-card-btn add-to-cart" data-id="${good.id}">
                        <span class="button-price">$${good.price}</span>
                    </button>
                </div>
            `;

            goodsContainer.append(goodsBlock);
        })
    };

    const getData = (value, category) => {
        fetch('https://wildberriestest-dc6fa-default-rtdb.firebaseio.com/db.json')
            .then(response => response.json())
            .then(data => {
                const array = category ? data.filter(item => item[category] === value) : data;

                localStorage.setItem('goods', JSON.stringify(array));

                if (window.location.pathname !== '/goods.html') {
                    window.location.href = '/goods.html';
                } else {
                    renderGoods(array);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const linkValue = link.textContent;
            const category = link.dataset.field;

            getData(linkValue, category);
        })
    });

    // проверяем, если в localStorage что-то есть
    if (localStorage.getItem('goods') && window.location.pathname === '/goods.html') {
        renderGoods(JSON.parse(localStorage.getItem('goods')));
    }

    //клик по кнопке на главной странице
    if (more) {
        more.addEventListener('click', (event) => {
            event.preventDefault();

            getData();
        })
    }
};

getGoods();