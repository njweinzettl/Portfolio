<!-- this component is a tag cloud consisting of tags a project can be labeled with -->
<!-- the cloud functions as a filter for the projects -> filterable accoirding to the tags -->

<!-- setting up the single tags in a list -->
<div>
    <button data-filter="ping" data-filter-tag="UX">UX design</button>
    <button data-filter="ping" data-filter-tag="Product">Product design</button>
    <button data-filter="ping" data-filter-tag="Graphic">Graphic design</button>
    <button data-filter="ping" data-filter-tag="Infovis">Information visulaisation</button>
</div>

<!-- styling the tag cloud-->

<style>
    /* flexbox related styles */
    div {
        display: flex;
    }

    /* non-flexbox related styles */

    button {
        border: 0;
        padding: 0.7em 1em;
        margin: 0em 0.5em 1em 0em; /* top right bottom left */
        border-radius: 5px; 
        background-color:blanchedalmond;
    }

</style>