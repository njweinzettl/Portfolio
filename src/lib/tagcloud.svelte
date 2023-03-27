<!-- This component is a tag cloud consisting of tags a project can be labeled with -->
<!-- The cloud functions as a filter for the projects -> filterable accoirding to the tags -->

<!-- Setting up the single tags in a list -->
<div>
    <ul>
        <li><button data-filter="ping" data-filter-tag="UX">UX design</button></li>
        <li><button data-filter="ping" data-filter-tag="Product">Product design</button></li>
        <li><button data-filter="ping" data-filter-tag="Graphic">Graphic design</button></li>
        <li><button data-filter="ping" data-filter-tag="Infovis">Information visulaisation</button></li>
    </ul>
</div>

<!-- Styling the tag cloud-->

<style>
    /* Flexbox related styles */
    ul {
        display: flex;
        flex-wrap: wrap;
    }

    /* Non-flexbox related styles */
    ul {
        list-style: none;
    }

    ul li {
        padding: 0 10px;
        background-color:blanchedalmond;
        border-radius: 3px;
    }

</style>