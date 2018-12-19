const authForms = () => {
    $('.allContent').hide()
    $('.authp').show()
    $('.allForms').hide()
}

const mainForms = () => {
    $('.allContent').show()
    $('.authp').hide()
    $('.allForms').hide()
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
