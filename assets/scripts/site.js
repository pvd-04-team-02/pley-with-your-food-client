const authForms = () => {
    $('.allContent').hide()
    $('.authp').show() 
    $('#goBack').show()
    $('#accButton').hide()
}

const mainForms = () => {
    $('.allContent').show()
    $('.authp').hide()
}

const settingShow = () => {
 $('.allContent').hide()
 $('.authp').hide()
 $('.settingsp').show()
 $('#goBack').show()
 $('#showSettings').hide()
}

const signedIn = () => {
    $('#accButton').hide()
    $('#showSettings').show()
    $('#goBack').hide()
}

const signedOut = () => {
    $('#showSettings').hide()
    $('#accButton').show()
}

const goBack = () => {
    $('#goBack').hide()
    $('.allContent').show()
    $('.authp').hide()
    $('.settingsp').hide()
    $('#showSettings').show()
}

module.exports = {
    authForms,
    mainForms,
    settingShow,
    signedIn,
    signedOut,
    goBack
}
