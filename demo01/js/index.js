window.addEventListener('load', () => {
    // const bookList = [
    //     {
    //         name: '人类简史',
    //         auth: '尤瓦尔·赫拉利',
    //         publisher: '中信出版社',
    //         img: '"./assets/book01.jpg"',
    //         detail: ''
    //     },
    //     {
    //         name: '三体3',
    //         auth: '刘慈欣',
    //         publisher: '重庆出版社',
    //         img: '"./assets/book02.jpg"',
    //         detail: ''
    //     },
    //     {
    //         name: '三体1',
    //         auth: '刘慈欣',
    //         publisher: '重庆出版社',
    //         img: '"./assets/book03.jpg"',
    //         detail: ''
    //     },
    //     {
    //         name: '三体2',
    //         auth: '刘慈欣',
    //         publisher: '重庆出版社',
    //         img: '"./assets/book04.jpg"',
    //         detail: ''
    //     }
    // ]

    // 1.控制轮播图
    // const swipe = document.querySelector('.swipe-box')
    // let pla = 0
    // const plaAdd = () => {
    //     pla -= 100
    //     console.log(pla);
    //     if (pla === -400) {
    //         clearInterval(timer)
    //         timer = null
    //         pla=0
    //     }
    //     swipe.style.left=`${pla}%`
    //     // if(pla===)
    // }
    // let timer=setInterval(() => {
    //     plaAdd()
    // }, 1000)
    
    // 2.登录跳转
    const loginBtn = document.querySelector('#login')
    loginBtn.addEventListener('click', () => [
        location.href ='http://127.0.0.1:5500/login.html'
    ])
})