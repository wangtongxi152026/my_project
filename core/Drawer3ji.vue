<template>
  <v-navigation-drawer id="core-navigation-drawer" v-model="drawer" app temporary
    :dark="barColor !== 'rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)'" :src="barImage">
    
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <!-- Logo -->
    <v-list-item class="mx-4" style="height:72px">

      <v-avatar size='56'>
        <img src="../assets/logo.jpg">
      </v-avatar>
      <v-list-item-title class="font-weight-regular">
        <span class="mx-5">WTongxi</span>
      </v-list-item-title>
    </v-list-item>

    <!-- 分割线 -->
    <v-divider class="mb-1" />

    <!-- 个人中心 -->

    <v-list dense nav>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="../assets/logo.jpg"></v-img>
          </v-list-item-avatar>
          <!-- 标题内容 -->
          <v-list-item-content>
            <v-list-item-title>superAdmin</v-list-item-title>
          </v-list-item-content>
          <!-- 图标 -->
        </v-list-item>

      </v-list-item-group>
    </v-list>

    <!-- 分割线 -->
    <v-divider class="mb-2" />

    <v-list nav>

      <v-list-group color="warning" v-for="(item,i) in items" :key="i" :prepend-icon="item.icon" v-if="item.children">
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </template>

        <v-list-group  sub-group v-for="(subitem,i) in item.children" :key="i" v-if='subitem.children'>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{subitem.title}}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(sb, i) in subitem.children" :key="i" link>
            <v-list-item-title v-text="sb.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item-group color="warning" v-else>
          <v-list-item>
            <v-list-item-title>{{subitem.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list-group>

      <v-list-item-group color="warning" v-else>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list-item-group>

    </v-list>
  </v-navigation-drawer>
</template>

<script>

import {
  mapState,
  mapMutations
} from 'vuex'

export default {

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapMutations(['toggleDrawer', 'setDrawer'])
  },

  data: () => ({

    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .6)',
    barImage: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-3.jpg',

    links: [
      {
        action: 'restaurant',
        title: 'Dining',
        active: true,
        items: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' },
        ],
      }
    ],



    items: [
      // {
      //   icon: 'mdi-home',
      //   title: '首页',
      //   to: '/',
      // },
      {
        group: '/pages',
        icon: 'mdi-image',
        title: 'pages',
        children: [
          {
            title: 'pricing',
            to: 'pricing',
          },
          {
            title: 'rtl',
            to: 'rtl',
          },
          {
            title: 'timeline',
            to: 'timeline',
          },
          {
            title: 'login',
            to: 'login',
          },
          {
            title: 'register',
            to: 'pricing',
          },

        ],
      },
      {
        group: '/components',
        icon: 'mdi-view-comfy',
        title: 'components',
        children: [
          {
            title: 'multi',
            group: '',
            children: [
              {
                title: 'example',
                href: '#',
              },
            ],
          },
          {
            title: 'buttons',
            to: 'buttons',
          },
          {
            title: 'grid',
            to: 'grid-system',
          },
          {
            title: 'tabs',
            to: 'tabs',
          },
          {
            title: 'notifications',
            to: 'notifications',
          },
          {
            title: 'icons',
            to: 'icons',
          },
          {
            title: 'typography',
            to: 'typography',
          },
        ],
      },
      {
        group: '/forms',
        icon: 'mdi-clipboard-outline',
        title: 'forms',
        children: [
          {
            title: 'rforms',
            to: 'regular',
          },
          {
            title: 'eforms',
            to: 'extended',
          },
          {
            title: 'vforms',
            to: 'validation',
          },
          {
            title: 'wizard',
            to: 'wizard',
          },
        ],
      },
      {
        group: '/tables',
        icon: 'mdi-grid',
        title: 'tables',
        children: [
          {
            title: 'rtables',
            to: 'regular-tables',
          },
          {
            title: 'etables',
            to: 'extended-tables',
          },
          {
            title: 'dtables',
            to: 'data-tables',
          },
        ],
      },
      {
        group: '/music',
        icon: 'mdi-music',
        title: '听听音乐',
        children: [
          {
            title: '网易歌单',
            to: 'musicList',
          },
          {
            title: 'fullscreen',
            to: 'full-screen-map',
          },
        ],
      },
      {
        icon: 'mdi-widgets',
        title: 'widgets',
        to: '/widgets',
      },
      {
        icon: 'mdi-chart-timeline-variant',
        title: 'charts',
        to: '/charts',
      },
      {
        icon: 'mdi-calendar-range',
        title: 'calendar',
        to: '/calendar',
      },
    ],
  }),

  computed: {
    // ...mapState(['barColor', 'barImage']),

    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    computedItems () {
      return this.items.map(this.mapItem)
    },
    profile () {
      return {
        avatar: true,
        group: '',
        title: this.$t('avatar'),
        children: [
          {
            href: '',
            title: this.$t('my-profile'),
          },
          {
            to: '',
            title: this.$t('edit-profile'),
          },
          {
            to: '',
            title: this.$t('settings'),
          },
        ],
      }
    },
  },

  watch: {

    // '$vuetify.breakpoint.smAndDown' (val) {
    //   this.$emit('update:expandOnHover', !val)
    // },
  },

  methods: {
    ...mapMutations(['setDrawer']),
    mapItem (item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        // title: this.$t(item.title),
      }
    },
  },
}
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    &.v-navigation-drawer--mini-variant
      .v-list-item
        justify-content: flex-start !important

      .v-list-group--sub-group
        display: block !important

    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
