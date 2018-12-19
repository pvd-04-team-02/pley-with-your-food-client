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

const signedIn = () => {
    $('#accButton').hide()
    $('#showSettings').show()
}

const signedOut = () => {
    $('#showSettings').hide()
    $('#accButton').show()
}

module.exports = {
    authForms,
    mainForms,
    settingShow,
    signedIn,
    signedOut
}
