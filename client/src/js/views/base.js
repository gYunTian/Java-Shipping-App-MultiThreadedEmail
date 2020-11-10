export const elements = {
    signInEmailInput: document.querySelector('.sign-in-email-input'),
    signInPasswordInput: document.querySelector('.sign-in-password-input'),
    signInBtn: document.querySelector('#sign-in'),
    resetPwButton: document.querySelector('#reset-password'),
    signUpDisplayNameInput: document.querySelector(
        '.sign-up-display-name-input'
    ),
    signUpEmailInput: document.querySelector('.sign-up-email-input'),
    signUpPasswordInput: document.querySelector('.sign-up-password-input'),
    signUpPasswordCfmInput: document.querySelector(
        '.sign-up-password-cfm-input'
    ),
    signUpBtn: document.querySelector('#sign-up'),
    signOutBtn: document.querySelector('#sign-out'),
    spinner: document.querySelector('.spinner-wrapper'),
    greeting: document.querySelector('.greeting'),
    dateSelectionContainer: document.querySelector('.date-selection-container'),
    dataTableBody: document.querySelector('.data-table-body'),
    dataTableHead: document.querySelector('.data-table-head'),
};

const ENDPOINT = 'http://localhost:8080/api';

const CORS = 'https://cors-anywhere.herokuapp.com';

export const APIs = {
    addUser: `${ENDPOINT}/addUser`,
    getUserByEmail: `${ENDPOINT}/userByEmail`, // ?Not needed anymore
    loginUser: `${ENDPOINT}/loginUser`, // *Using this to authenticate users
    getVessels: `${ENDPOINT}/vessels`,
    addFav: `${ENDPOINT}/addVoyageFav`,
    getFavs: `${ENDPOINT}/voyageFavsByUserId`,
    deleteFav: `${ENDPOINT}/deleteVoyageFav`,
    addSub: `${ENDPOINT}/addVoyageSub`,
    getSubs: `${ENDPOINT}/voyageSubsByUserId`,
    deleteSub: `${ENDPOINT}/deleteVoyageSubs`,
};

// *Full screen spinner clear
export const clearSpinner = () => {
    // *Only clear if spinner exists
    if (elements.spinner && elements.spinner.parentElement) {
        elements.spinner.parentElement.removeChild(elements.spinner);
    }
};

// *API Authentication
const USER = 'g1t9';
const PASSWORD = '999000';

export const headers = {
    authorization: 'Basic ' + window.btoa(USER + ':' + PASSWORD),
};

// *Data processor (turn data from API to usable stuff)
export const processData = data => {
    const mp = {};
    data.forEach(e => {
        const {
            first_arrival,
            abbrVslM,
            inVoyN,
            outVoyN,
            bthgDt,
            bthgDt_change_count,
            unbthgDt,
            berthN,
            status,
            uniqueId,
        } = e;
        const berthingDateTime = timeToString(new Date(bthgDt));
        const { date: berthingDate, time: berthingTime } = berthingDateTime;
        // *Find degree of change between first_arrival & bthgDt
        const berthTemp = new Date(bthgDt);
        const firstTemp = new Date(first_arrival);
        const degreeOfChange = Math.abs(firstTemp - berthTemp) / 36e5;
        const { date: departureDate, time: departureTime } = timeToString(
            new Date(unbthgDt)
        );
        const miniMap = {
            vesselName: abbrVslM,
            inVoyN,
            outVoyN,
            berthingTime,
            degreeOfChange,
            changeCount: bthgDt_change_count,
            departureTime,
            berthN,
            status,
            uniqueID: uniqueId,
        };
        if (mp[berthingDate]) {
            mp[berthingDate].push(miniMap);
        } else {
            mp[berthingDate] = [miniMap];
        }
    });
    return mp;
};

// *Convert ISO time to usable strings {date (YYYY-MM-DD), time(HH:MM)}
export const timeToString = time => {
    const toReturn = {};
    const year = time.getFullYear().toString(10);
    const month = ('0' + (time.getMonth() + 1).toString(10)).slice(-2);
    const date = ('0' + time.getDate().toString(10)).slice(-2);
    toReturn.date = `${year}-${month}-${date}`;
    toReturn.time = time.toLocaleTimeString('en', {
        timeStyle: 'short',
        hour12: false,
    });
    return toReturn;
};

// *Dynamic sort array function
export const compare = (key, order = 'asc') => {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order === 'desc' ? comparison * -1 : comparison;
    };
};
