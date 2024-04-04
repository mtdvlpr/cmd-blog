---
layout: page
title: Contributors
description: Learn about the contributors of this project.
---

<VPLTeamPage>
  <VPLTeamPageTitle>
    <template #title>
      Contributors
    </template>
    <template #lead>
      We are the people who made this thing.
    </template>
  </VPLTeamPageTitle>
  <VPLTeamMembers :members="members" size="small"/>
</VPLTeamPage>

<script setup>
import {VPLTeamPage, VPLTeamPageTitle, VPLTeamMembers} from '@lando/vitepress-theme-default-plus'
import {useTeam} from '@lando/vitepress-theme-default-plus';

const members = useTeam();

</script>
