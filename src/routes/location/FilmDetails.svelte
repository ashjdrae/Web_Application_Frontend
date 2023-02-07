<script>
    import { enhance } from '$app/forms';

    export let film;

    let details = false
    function Details() {
        if(details) details = false
        else details = true
    }
    let edit = false
    function Edit() {
        if(edit) edit = false
        else edit = true
    }

</script>
<div class="article-preview">
    <button on:click={Details}>
        Details
    </button>
    {#if details}
        <p>Type de film :            {film.filmType}</p>
        <p>Nom du producteur:        {film.filmProducerName}</p>
        <p>Date de fin du tournage : {film.endDate}</p>
        <p>Numéro du district :      {film.district}</p>
        <p>geolocation  : {film.geolocation.coordinates} {film.geolocation.type}</p>
        <p>sourceLocationId : {film.sourceLocationId}</p>
        <p>Dirigé par : {film.filmDirectorName}</p>
        <p>Adresse : {film.address}</p>
        <p>Date de début du tournage : {film.startDate}</p>
        <p>Année : {film.year}</p>
    {/if}
    <button on:click={Edit}>
        EDIT
    </button>
    {#if edit}
        <form use:enhance method="POST" action="?/editLocation" class="card comment-form">
            <textarea  name="lattitute" placeholder="lattitude" rows="1" >{film.geolocation.coordinates[0]}</textarea>
            <textarea  name="longitude" placeholder="longitude" rows="1" >{film.geolocation.coordinates[1]}</textarea>
            <textarea  name="filmType" placeholder="filmType" rows="1" >{film.filmType}</textarea>
            <textarea  name="filmProducerName" placeholder="filmProducerName" rows="1" >{film.filmProducerName}</textarea>
            <textarea  name="endDate" placeholder="endDate" rows="1" >{film.endDate}</textarea>
            <textarea  name="filmName" placeholder="filmName" rows="1" >{film.filmName}</textarea>
            <textarea  name="district" placeholder="district" rows="1" >{film.district}</textarea>
            <textarea  name="sourceLocationId" placeholder="sourceLocationId" rows="1" >{film.sourceLocationId}</textarea>
            <textarea  name="filmDirectorName" placeholder="filmDirectorName" rows="1" >{film.filmDirectorName}</textarea>
            <textarea  name="address" placeholder="address" rows="1" >{film.address}</textarea>
            <textarea  name="startDate" placeholder="startDate" rows="1" >{film.startDate}</textarea>
            <textarea  name="year" placeholder="year" rows="1" >{film.year}</textarea>
            <button on:click={Edit}>
                EDIT
            </button>
        </form>
    {/if}
</div>