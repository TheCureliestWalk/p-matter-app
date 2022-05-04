<svelte:head>
    <title>Iho's Login</title>
</svelte:head>



<div class="w-96 mx-auto my-auto">
    <h1 class="my-3 text-2xl text-gray-900 dark:text-grey-300">Login</h1>
    <form method="POST">
        <div>
            <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input type="text" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white-500"
                placeholder="my@mail.com" required="">
        </div>
        <div>
            <label for="password"
                class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Password</label>
            <input type="password" id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white-500"
                placeholder="secret password..." required="">
        </div>
        <div class="mt-3">
            <div class="flex items-center">
                <input id="remember" type="checkbox" value=""
                    class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-grey-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required="">
                <label for="remember" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-400">Remember
                Login</label>
            </div>
            
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md w-full p-2.5 mt-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
            
    </form>
</div>