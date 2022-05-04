<svelte:head>
    <title>{title}</title>
    
</svelte:head>

<script>
import { pics } from './index/index.json';
import Searchbar from '../components/searchbar.svelte';

const title = 'Iho\'s App - Index';

const getImgs = async () => {
    let response = await fetch('https://picsum.photos/v2/list?page=4&limit=100');
    let imgs = await response.json();
    return pics;
}
const promise = getImgs();
</script>


    
        
    <div class="py-3 pb-28">
        <Searchbar/>
        <div class="columns-5 gap-3 space-y-3">
            {#await promise}
        <p>Loading...</p>
    {:then pics} 
    {#each pics as {id, author, download_url, url}, i }
        <div class="p-2 max-w-sm bg-white rounded-lg hover:border-box hover:border-gray-100 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 break-inside-avoid">
        
            <a href="{url}"><img src="{ download_url }" alt="{i}"></a>
            <span class="my-3">{author}</span>
        </div>
    {/each}

        {:catch error}
        
        <p>Error: {error.message}</p>
    {/await}
        </div>
        
    </div>




