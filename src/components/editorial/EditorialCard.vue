<script setup lang="ts">
import { Card } from "../ui/card";
import { Heading, AppText, AppLink } from "../typography";
defineProps<{
  title: string;
  description: string;
  href: string;
  category?: string;
  image?: { src: string; alt: string };
}>();
</script>
<template>
  <Card class="overflow-hidden"
    ><img
      v-if="image"
      :src="image.src"
      :alt="image.alt"
      loading="lazy"
      class="aspect-video w-full rounded-ui-sm object-cover"
    /><AppText v-if="category" variant="overline" tone="muted">{{ category }}</AppText
    ><Heading :level="3"
      ><AppLink :href="href" class="font-heading">{{ title }}</AppLink></Heading
    ><AppText>{{ description }}</AppText></Card
  >
</template>
