const store = require('./store.js')

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
    $('.site__content').hide()
}

const signedOut = () => {
    $('#showSettings').hide()
    $('#accButton').show()
    $('.site__content').show()
}

const goBack = () => {
    $('#goBack').hide()
    $('.allContent').show()
    $('.authp').hide()
    $('.settingsp').hide()
    if (store.user) {
        $('#showSettings').show()
    } else { $('#accButton').show()
        
    }
}

module.exports = {
    authForms,
    mainForms,
    settingShow,
    signedIn,
    signedOut,
    goBack
}
