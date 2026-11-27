<script setup lang="ts">
import { Heading, AppText } from "../typography";
import { Button } from "../ui/button";
defineProps<{ title: string; description: string; href: string; actionLabel: string }>();
</script>
<template>
  <section
    class="grid justify-items-start gap-4 rounded-ui-lg bg-primary p-6 text-primary-foreground md:p-10"
  >
    <Heading :level="2" class="text-primary-foreground">{{ title }}</Heading><AppText
      class="!text-primary-foreground"
      >{{ description }}</AppText
    ><Button as="a" :href="href" variant="secondary">{{ actionLabel }}</Button>
  </section>
</template>
