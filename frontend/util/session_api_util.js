export const siggnup = user => { 
    return $.ajax({
        url: '/api/users/',
        method: 'POST',
        data: { user }
    })
};

export const loggin = user => { 
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
};

export const loggout = () => { 
    return $.ajax({
        url: '/api/session',
        method: 'DELETE',
    })
};

