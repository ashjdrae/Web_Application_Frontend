<h1>You can Only EDIT if you are administrator, otherwise it won't save changes</h1>
<script>

    import FilmPreview from "./FilmDetails.svelte";
    import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;
    let create = false;
    function Create() {
        if(create) create = false
        else create = true
    }

</script>

<svelte:head>
    <title>Conduit</title>
</svelte:head>
<div class="home-page">
    {#if data.user.role === 'admin'}
        <button on:click={Create}>
            Add Location
        </button>
        {#if create}
            <form use:enhance method="POST" action="?/createLocation" class="card comment-form">
                <div class="card-block">
                    <textarea  name="lattitute" placeholder="lattitude" rows="1" ></textarea>
                    <textarea  name="longitude" placeholder="longitude" rows="1" ></textarea>
                    <textarea  name="filmType" placeholder="filmType" rows="1" ></textarea>
                    <textarea  name="filmProducerName" placeholder="filmProducerName" rows="1" ></textarea>
                    <textarea  name="endDate" placeholder="endDate" rows="1" ></textarea>
                    <textarea  name="filmName" placeholder="filmName" rows="1" ></textarea>
                    <textarea  name="district" placeholder="district" rows="1" ></textarea>
                    <textarea  name="sourceLocationId" placeholder="sourceLocationId" rows="1" ></textarea>
                    <textarea  name="filmDirectorName" placeholder="filmDirectorName" rows="1" ></textarea>
                    <textarea  name="address" placeholder="address" rows="1" ></textarea>
                    <textarea  name="startDate" placeholder="startDate" rows="1" ></textarea>
                    <textarea  name="year" placeholder="year" rows="1" ></textarea>
                </div>

                <div class="">
                    <button class="" type="submit">Create location</button>
                </div>
            </form>
            {/if}

        {/if}
    <ul class="tag-list">
        {#each data.roger as film}
            <li class="tag-default tag-pill tag-outline">{film.filmName}</li>
                <FilmPreview {film}/>
            {#if data.user.role === 'admin'}
                <form use:enhance method="POST" action="?/deleteLocation&id={film._id}">
                    <button class="btn btn-outline-danger btn-sm">
                        <i class="ion-trash-a" /> Delete
                    </button>
                </form>
            {/if}
        {/each}
    </ul>
</div>
<style>

button {
    background: none;
    border: 400px;
    padding: 0;
    margin: 0;
    font-size: inherit;
    margin-left: 400px;
    opacity: 10;
    cursor: pointer;
}
</style>