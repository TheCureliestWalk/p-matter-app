<script>

    export const menus = [
        {
            id: 1,
            url: '/',
            name: 'Home',
            icon: 'home',
        },
        {
            id: 2,
            url: '/about-us',
            name: 'About Us',
            icon: 'atlas',
        },
        {
            id: 4,
            url: '/to-do',
            name: 'To Do',
            icon: 'clipboard-list',
        },
        {
            id: 5,
            url: '/blog',
            name: 'Blog',
            icon: 'comment',
        },
        {
            id: 3,
            url: '/login',
            name: 'Login',
            icon: 'sign-in',
        },
        ]; 
</script>


<div class="w-64" aria-label="sidebar">

    <div class="h-32 flex items-center justify-center gap-2">
            
            <a href="//github.com/p-matter"><img class="rounded" src="//avatars.githubusercontent.com/u/77170164?s=48&v=4" alt="p-matter"></a>
            <a href="#"><h1 class="text-2xl text-center">p-matter</h1></a>
        
    </div>

    <div class="overflow-y-auto py-3 px-3 bg-grey-50 rounded">
        <ul class="">
        {#each menus as {id, url, name, icon}, i}
        <li class="flex items-center p-2 text-xl font-normal text-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
           <span class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></span><i class="fas fa-{icon}"></i> <a href="{url}" class=" flex-1 ml-3 whitespace-nowrap">{name}</a>
        </li>
        {/each}
        </ul>
    </div>
    
</div>