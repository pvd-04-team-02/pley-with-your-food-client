const authForms = () => {
    $('.allContent').hide()
    $('.authp').show()
}

const mainForms = () => {
    $('.allContent').show()
    $('.authp').hide()
}

module.exports = {
    authForms,
    mainForms
}