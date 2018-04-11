import {
    displayMainPage,
    displaySingleShow
} from './UIModule.js';
import {
    createTvShow,
    adaptTvShows,
    adaptTvShowDetails,
    TVShowDetails,
    createCast,
    adaptCasts,
    createSeason,
    adaptSeason
} from './dataModule.js';


const requestUrl = 'http://api.tvmaze.com/shows';

fetch(requestUrl)
    .then((response) => {
        return response.json();
    })
    .then((jsonResponse) => {
        const shows = adaptTvShows(jsonResponse);

        displayMainPage(shows);
    })


$('body').on('click', '.card-body', function () {

    var id = $(this).attr('id');

    localStorage.setItem('id', id);
    location.href = "show-info.html";

});