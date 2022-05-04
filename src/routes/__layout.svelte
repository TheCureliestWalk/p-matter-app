<svelte:head>
  <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
</svelte:head>

<script>
  
import "../app.css";
  import Sidebar from "../components/sidebar.svelte";

</script>


<div class="mx-auto">
  <div class="flex">

    <Sidebar/>
    


    <slot></slot>
</div>
</div>
