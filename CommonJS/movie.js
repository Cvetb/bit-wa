function Movie(title, genreObj, length) {

    this.title = title;
    this.genre = genreObj; // This is object
    this.length = length;

}


Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.genre.getData();
};

module.exports = {Movie}