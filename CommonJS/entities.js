function Movie(title, genreObj, length) {

    this.title = title;
    this.genre = genreObj; // This is object
    this.length = length;

}


Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.genre.getData();
};


function Program(date) {

    this.date = date;
    this.listOfMovies = [];
}


Program.prototype.getProgramDuration = function () {
    var programLength = 0;


    this.listOfMovies.forEach(function (movie) {
        programLength += movie.length;
    }, this);

    return programLength;
};

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
};

Program.prototype.getData = function () {
    var date = this.date;
    var movies = this.listOfMovies;
    var programDuration = this.getProgramDuration();
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    var outputStr = dateStr + ", program duration " + programDuration + "min\n";

    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        outputStr += "\t\t" + movie.getData() + "\n";
    }

    return outputStr;
};


function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
};


Festival.prototype.addProgram = function (program) {
    this.listOfPrograms.push(program);
};


Festival.prototype.getMoviesCount = function () {
    var programs = this.listOfPrograms;
    var moviesCount = 0;

    for (var i = 0; i < programs.length; i++) {
        var program = programs[i];
        moviesCount += program.listOfMovies.length;
    }

    return moviesCount;
};


Festival.prototype.getData = function () {
    var festivalName = this.name;
    var programs = this.listOfPrograms;
    var totalMovieCount = this.getMoviesCount();

    var outputStr = festivalName + " has " + totalMovieCount + " movie titles\n"

    for (var i = 0; i < programs.length; i++) {
        var program = programs[i];
        outputStr += "\t" + program.getData();
    }

    return outputStr;
};

module.exports = { Genre, Movie, Program, Festival }