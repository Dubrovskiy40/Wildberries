const search = () => {
    const inputBlock = document.querySelector('.search-block');
    const input = document.querySelector('.search-block > .form-control');
    const searchBtn = document.querySelector('.search-block > .btn-outline-secondary');

    // inputBlock.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     console.log(input.value);
    // });

    searchBtn.addEventListener('click', () => {
        console.log(input.value);
    })
};

search();