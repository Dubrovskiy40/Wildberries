const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://wildberriestest-dc6fa-default-rtdb.firebaseio.com/db.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })

    localStorage.setItem('goods', JSON.stringify({name: 'all'}));

    const goods = JSON.parse(localStorage.getItem('goods'));
    console.log(goods);
    console.log(localStorage);
    localStorage.removeItem('goods');
    console.log(localStorage);
};

getGoods();