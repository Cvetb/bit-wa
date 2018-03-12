export const displayMainPage = (shows) => {
    shows.forEach(show => {
        const showName = show.name;
        const showImage = show.url;
        const showId = show.id;

        const element = `
            <div class="card">
                <div class="card-body" id= "${showId}">
                    <img src="${showImage}" alt="show"><br>
                    <a href="show-info.html" class="card-link">${showName}</a></div>
                </div>
            </div>`
        $("#main").append(element);
    })
}

export const displaySingleShow = (show) => {
    const showName = show.name;
    const showImage = show.imageUrl;
    const showId = show.id;
    const showDetails = show.details;
    const castList = show.cast;
    const seasons = show.seasons;

    let seasonNumber = 0;

    const element = `
        <div>
            <h1>${showName}</h1>
            <img src= "${showImage}">
            <h4>Seasons ()</h4>
            <ul >${seasons}</ul>
            <h4>Cast</h4>
            <ul id="castList"></ul> 
            </div>
        <div>
                <h4>Description</h4>
                <p>${showDetails}</p>

        </div>`

    seasons.forEach(season => {
        let premierDate = season.start;
        let endDate = season.end;


        let seasonList = `
            <li>
                <p>${premierDate} - ${endDate}</p>  
            </li>`

        $("#seasonList").append(seasonList);
        seasonNumber++;
    });


    castList.forEach(cast => {
        let castName = cast.name;

        let castList = `
            <li>
                <p>${castName}</p>          
            </li>`

        $("#castList").append(castList);

    });

    $("#singleShow").append(element);
    $("#seasonNumber").append(seasonNumber);

}
