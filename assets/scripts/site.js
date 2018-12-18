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

module.exports = {
    authForms,
    mainForms
}