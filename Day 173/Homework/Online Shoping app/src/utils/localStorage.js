export const getLocal = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
}

export const setLocal = (key, accounts) => {
    localStorage.setItem(key, JSON.stringify(accounts));
}