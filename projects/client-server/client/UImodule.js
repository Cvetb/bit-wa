const displayBlogs = (blogs) => {

    blogs.forEach(el => {

        const blogTitle = el.title;
        const blogLead = el.lead;

        const element = `<div class="row">
    <div class="col s12 m12">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
            <h5>${el.title}</h5>
            <p>${el.lead}</p>
            
            </div>
        </div>
    </div>
</div>`;
        $("#main").append(element);
    });

}