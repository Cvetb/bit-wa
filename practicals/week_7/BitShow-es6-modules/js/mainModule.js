
import { displayMainPage, displaySingleShow } from './UIModule.js';
import { createTvShow, adaptTvShows, adaptTvShowDetails, TVShowDetails, createCast, adaptCasts, createSeason, adaptSeason } from './dataModule.js';


const init = () => {
    const request = $.ajax({
        url: 'http://api.tvmaze.com/shows',
        method: "GET"
    });

    request.done(response => {
        const shows = adaptTvShows(response);
        console.log(shows)
        displayMainPage(shows);
    });
}

$('body').on('click', '.card-body', function () {

    var id = $(this).attr('id');
    console.log(id);
    localStorage.setItem('id', id);
    location.href = "show-info.html";

});



init();