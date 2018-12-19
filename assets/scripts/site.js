const authForms = () => {
    $('.allContent').hide()
    $('.authp').show() 
}

const mainForms = () => {
    $('.allContent').show()
    $('.authp').hide()
}

const settingShow = () => {
 $('.allContent').hide()
 $('.authp').hide()
 $('.settingsp').show()
}

module.exports = {
    authForms,
    mainForms,
    settingShow
}
