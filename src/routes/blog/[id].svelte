<script>
import { page } from "$app/stores";

export async function id({id}) {
    let x = page.params.id;
    return x;
}
    
</script>

This is Blog by ${id}