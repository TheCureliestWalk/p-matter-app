<svelte:head>
    <title>Iho's App - To-Do</title>
</svelte:head>

<script>

    import { initializeApp, getApp, getApps } from 'firebase/app';
    import { getFirestore, collection, getDocs, onSnapshot, doc, updateDoc, setDoc, addDoc, deleteDoc } from 'firebase/firestore';
    import { firebaseConfig } from '$lib/firebaseConfig';

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    let lists = [];

    async function getLists(db) {
        const todosCol = collection(db, 'todo');
        const todoSnapshot = await getDocs(todosCol);
         lists = todoSnapshot.docs.map(doc => doc.data());
        return lists;
    }
    
    const promisex = getLists(db);

    console.log(getLists(db)); //for dev only!

    let newList = {
        id: new Date(),
        task: '',
        isComplete: false,
    }

    const addList = async () => {
        if (newList.task !== '') 
        {
            await addDoc(collection(db, 'todo'), newList);
        } else
        {
            alert('Please fill to-do list.');
        }
        
    }

    const markList = async (list) => {
        await updateDoc(doc(db, 'todo', list), {
            isComplete: !list.isComplete,
        });
    }

    const deleteList = async (z) => {
        await deleteDoc(doc(db, 'todo', z));
    }



</script>


<div class="block mx-auto py-28">
    <form>
        <input class="border-3 shadow-md p-5 text-grey-300 w-full" type="text" placeholder="+add to-do list" bind:value="{newList.task}">
        <button class="py-2 underline underline-offset-2 hover:text-amber-300" on:click="{() => addList()}">+Add</button>
    </form>

    <ul class="block py-3 text-lg">

        {#await promisex}
            <p>Loading Data...</p>
        {:then lists} 
            
        {#each lists as list, z}
            <span class="{list.isComplete ? 'line-through' : '' }">
                <li class="hover:via-orange-600">{z}. {list.task}</li>
            </span>
            <button type="submit" class="text-sm underline underline-offset-1 hover:text-amber-300" on:click="{() => markList(list.id)}">Mark</button>
            <button type="submit" class="text-sm underline underline-offset-1 hover:text-amber-300" on:click="{() => deleteList(list)}">Delete</button>
        {/each}

        {:catch error}
            <p>Error: {error.message}</p>
        {/await}
    </ul>

</div>