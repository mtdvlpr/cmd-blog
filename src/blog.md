---
title: Blog
description: This blog contains posts about guest speakers and their talks.
layout: page
sidebar: false
---

<VPLCollectionPage>
  <VPLCollectionPageTitle>
    <template #title>
      Welcome to my blog!
    </template>
    <template #lead>
      This blog contains posts about guest speakers and their talks.
    </template>
  </VPLCollectionPageTitle>
  <VPLCollectionPageTags v-model="tags" />
  <VPLCollectionItems :items="pages" :tags="tags" />
</VPLCollectionPage>

<script setup lang="ts">
import { useCollection } from '@lando/vitepress-theme-default-plus';
import { VPLCollectionPage, VPLCollectionPageTags, VPLCollectionPageTitle, VPLCollectionItems } from '@lando/vitepress-theme-default-plus'

const { pages, tags } = useCollection('post');
</script>
