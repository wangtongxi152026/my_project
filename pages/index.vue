<template>
  <v-container class="my-5">
    <h1 class="subheading">projects</h1>
    <!-- 展板列 -->
    <v-expansion-panels>
      <!-- 寻循展板列表 -->
      <v-expansion-panel v-for="(project,i) in projects" :key="i">
        <!-- 标题 -->
        <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
        <!-- 内容 -->
        <v-expansion-panel-content class="px-4">
          <div class="py-2">due by{{project.due}}</div>
          <div class="font-weight-bold">{{project.content}}</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      projects: [
        {
          title: 'Design a new website dfa',
          person: 'The Net Ninja',
          due: '1st Jan 2019',
          status: 'ongoing',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit neque rerum quasi maiores labore, laboriosam voluptates nisi similique officiis, perferendis debitis in deleniti? Eaque suscipit voluptates voluptate repellendus facilis?'
        },

        {
          title: 'Code up the homepage',
          person: 'Chun Li',
          due: '10st Jan 2019',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit neque rerum quasi maiores labore, laboriosam voluptates nisi similique officiis, perferendis debitis in deleniti? Eaque suscipit voluptates voluptate repellendus facilis?'
        },
        {
          title: 'Design Video thumbnalis',
          person: 'Ryu',
          due: '10st Jan 2019',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit neque rerum quasi maiores labore, laboriosam voluptates nisi similique officiis, perferendis debitis in deleniti? Eaque suscipit voluptates voluptate repellendus facilis?'
        },
        {
          title: 'Design a new website dfaa',
          person: 'Gouken',
          due: '10st Jan 2019',
          status: 'overdue',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit neque rerum quasi maiores labore, laboriosam voluptates nisi similique officiis, perferendis debitis in deleniti? Eaque suscipit voluptates voluptate repellendus facilis?'
        }
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja'
      })
    }
  }
}
</script>

<style scoped>
</style>
