window.addEventListener('load', () => {
    // 1.两种登录方式切换
    const navGroup = document.querySelector('.nav').children
    const navSwitchFn = (index) => {
        for (let i = 0; i < navGroup.length; i++){
            navGroup[i].style.color = 'rgb(138, 138, 138)'
            navGroup[i].style['border-color'] = 'rgb(138, 138, 138)'
        }
        navGroup[index].style.color = 'rgb(33, 90, 229)'
        navGroup[index].style['border-color'] = 'rgb(33, 90, 229)'

        const displayShow=['flex','none']
        document.querySelector('.tel').style.display=displayShow[index]
        document.querySelector('.pwd').style.display=displayShow[1-index]
    }
    for (let i = 0; i < navGroup.length; i++){
        navGroup[i].addEventListener('click', () => {
            navSwitchFn(i)
        })
    }

    // 2.密码输入框的type属性切换
    const pwdIcon = document.querySelector('#pwdIcon')
    pwdIcon.addEventListener('click', () => {
        pwdIcon.previousElementSibling.type = pwdIcon.previousElementSibling.type==='text' ? 'password' : 'text'
        console.log(pwdIcon.previousElementSibling.type);
    })
})