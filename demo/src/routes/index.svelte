<script>
  import * as icons from "svelte-super-tiny-icons";
  import { Navigation, Box } from "svelte-primer";
  import Copy from "../components/Copy.svelte";

  let tabIndexInstall = 0;

  $: codeInstall =
    tabIndexInstall === 0
      ? "yarn add -D svelte-super-tiny-icons"
      : "npm -i -D svelte-super-tiny-icons";
  $: iconKeys = Object.keys(icons);
</script>

<div class="clearfix mb-6">
  <div class="col-6 float-left px-1">
    <h1 class="mb-3">svelte-super-tiny-icons</h1>
    <h2 class="mb-2">Install</h2>
    <Navigation.TabNav>
      <Navigation.TabNavItem
        current={tabIndexInstall === 0}
        on:click={(e) => {
          e.preventDefault();
          tabIndexInstall = 0;
        }}>
        yarn
      </Navigation.TabNavItem>
      <Navigation.TabNavItem
        current={tabIndexInstall === 1}
        on:click={(e) => {
          e.preventDefault();
          tabIndexInstall = 1;
        }}>
        npm
      </Navigation.TabNavItem>
    </Navigation.TabNav>
    <Box.Box class="d-flex">
      <pre class="d-flex flex-1">
        <code class="p-3">{codeInstall}</code>
      </pre>
      <Copy text={codeInstall} />
    </Box.Box>
  </div>
</div>

<div class="clearfix mb-6">
  <div class="col-6 float-left px-1">
    <h2 class="mb-2">Usage</h2>
    <Box.Box class="d-flex">
      <pre class="d-flex flex-1">
        <code class="p-3">
          {`<script>
  import Acast from "svelte-super-tiny-icons/lib/Acast";
<\/script>
        
<Acast width={48} height={48} />`}
        </code>
      </pre>
    </Box.Box>
  </div>
</div>

<div class="d-flex flex-column">
  <h2 class="mb-2">Available icons</h2>
  <div class="mb-3">{iconKeys.length} icons</div>
  <div class="d-flex flex-wrap">
    {#each iconKeys as icon, i (icon)}
      <Box.Box class="p-2 mr-1 mb-2">
        <div class="mb-1">
          <h6>{icon}</h6>
        </div>
        <div>
          <svelte:component this={icons[icon]} width={48} height={48} />
        </div>
      </Box.Box>
    {/each}
  </div>
</div>
