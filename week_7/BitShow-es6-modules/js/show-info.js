import { displayMainPage, displaySingleShow } from './UIModule.js';
import { createTvShow, adaptTvShows, adaptTvShowDetails, TVShowDetails, createCast, adaptCasts, createSeason, adaptSeason } from './dataModule.js';

const returnShowDetails = () => {
    var id = localStorage.getItem('id');


    let seasons = null;
    let casts = null;
    const request2 = $.ajax({
        url: 'http://api.tvmaze.com/shows/' + id + '/seasons',
        method: "GET"
    });
    request2.done(response => {
        seasons = adaptSeason(response);
        const request3 = $.ajax({
            url: 'http://api.tvmaze.com/shows/' + id + '/cast',
            method: "GET"
        });
        request3.done(response => {
            casts = adaptCasts(response);
            const request = $.ajax({
                url: 'http://api.tvmaze.com/shows/' + id,
                method: "GET"
            });

            request.done(response => {
                const show = adaptTvShowDetails(response.name, response.image.original, id, seasons, casts, response.summary);
                console.log(show);
                displaySingleShow(show);
                console.log(casts);

            });
            console.log(seasons);
        });


    });
}

returnShowDetails();