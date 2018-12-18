const authForms = () => {
    $('.allContent').hide()
    $('.authp').show()
}

const mainForms = () => {
    $('.allContent').show()
    $('.authp').hide()
}

const randrForms = () => {
    // $('.allForms').hide()
}

module.exports = {
    authForms,
    mainForms,
    randrForms
}