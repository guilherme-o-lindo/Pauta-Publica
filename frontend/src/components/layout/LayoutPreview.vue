<script setup lang="ts">
import {
  AppGrid,
  Stack,
  Cluster,
  SectionHeader,
  AspectRatio,
  ScrollArea,
  Separator,
} from "./index";
import { Heading, AppText, AppLink, AppBlockquote, AppProse } from "../typography";
</script>
<template>
  <Stack gap="xl">
    <SectionHeader
      :level="3"
      title="Grid responsivo"
      description="4, 8 e 12 colunas conforme a largura da tela."
    />
    <AppGrid gap="xs">
      <div v-for="n in 12" :key="n" class="rounded-ui-sm bg-muted p-2 text-center text-caption">
        {{ n }}
      </div>
    </AppGrid>
    <AppGrid mode="cards">
      <Stack
        v-for="n in 3"
        :key="n"
        class="rounded-ui-md border border-border bg-card p-4"
        gap="sm"
      >
        <AspectRatio class="rounded-ui-sm bg-muted">
          <div class="flex size-full items-center justify-center text-caption">16:9</div>
        </AspectRatio>
        <Heading :level="4">Card {{ n }}</Heading>
        <AppText tone="muted" variant="caption">Conteúdo demonstrativo</AppText>
      </Stack>
    </AppGrid>
    <Cluster gap="sm">
      <span
        v-for="label in ['Busca', 'Filtros', 'Ordenação']"
        :key="label"
        class="rounded-ui-sm bg-muted px-3 py-2"
        >{{ label }}</span
      >
    </Cluster>
    <Separator />
    <SectionHeader :level="3" title="Tipografia editorial" />
    <AppText variant="overline" tone="muted">Brasil plural</AppText>
    <Heading :level="4" appearance="display">Informação para todos.</Heading>
    <AppText variant="lead">Uma introdução clara e acessível.</AppText>
    <AppProse>
      <p>Textos longos utilizam uma largura de leitura confortável e uma hierarquia consistente.</p>
      <ul>
        <li>Informação contextualizada</li>
        <li>Fontes identificadas</li>
      </ul>
      <p><AppLink href="#main">Voltar ao conteúdo principal</AppLink></p>
    </AppProse>
    <AppBlockquote attribution="Pauta Pública"
      >Política simples. Informação para todos.</AppBlockquote
    >
    <ScrollArea label="Exemplo de conteúdo horizontal">
      <div class="flex min-w-max gap-4">
        <div v-for="n in 5" :key="n" class="w-48 rounded-ui-md border border-border bg-card p-4">
          Item {{ n }}
        </div>
      </div>
    </ScrollArea>
  </Stack>
</template>
