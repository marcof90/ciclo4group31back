const msg = {
    badRequest: {
        code: 400,
        error: true,
        msg: 'Data error'
    },
    fieldsRequired: {
        code: 400,
        error: true,
        msg: 'Please enter all fields'
    },
    authFailed: {
        code: 401,
        error: true,
        msg: 'Auth failed'
    }
}

module.exports = msg