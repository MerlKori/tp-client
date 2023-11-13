<script setup lang="ts">
interface ListItem {
  
}

interface Props {
  items: Array<ListItem>
}
const props = defineProps<Props>()
</script>

<template>
  <HeadlessMenu>
    
    <HeadlessMenuButton>
      <slot />
    </HeadlessMenuButton>
    <HeadlessMenuItems>
      <HeadlessMenuItem v-slot="{ active }">
        <a :class='{ "bg-blue-500": active }' href="/account-settings">
          Account settings
        </a>
      </HeadlessMenuItem>
      <HeadlessMenuItem v-slot="{ active }">
        <a :class='{ "bg-blue-500": active }' href="/account-settings">
          Documentation
        </a>
      </HeadlessMenuItem>
      <HeadlessMenuItem disabled>
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </HeadlessMenuItem>
    </HeadlessMenuItems>
  </HeadlessMenu>
</template>
