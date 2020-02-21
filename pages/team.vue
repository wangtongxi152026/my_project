<template>
  <!-- <v-parallax
    height="700"
    style="z-index:-1"
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
  >-->
  <v-container tag="section">
    <v-row>
      <Carousel></Carousel>

      <v-col cols="12" md="8">
        <SSCard v-for="article in articlelist" class="mb-10" :key="article._id" :article="article"></SSCard>
      </v-col>
      <!-- <v-col class="my-8" cols="12" lg="8" v-for="person in team" :key="person.name">
        <RSCard :data="person"></RSCard>
      </v-col>-->
      <!-- <SCard class="my-3"></SCard> -->

      <v-col class="right" cols="12" md="4">
        <v-card outlined>
          <div class="background"></div>
          <img :src="require('~/assets/avatar.jpg')" class="elevation-13 avatar" />

          <v-card-text class="text-center introduce">
            <h6 class="display-1 mb-1 grey--text">CEO / CO-FOUNDER</h6>

            <h4
              class="body-1 font-weight-light mb-3 black--text"
            >把最实用的经验，分享给最需要的读者，希望每一位来访的朋友都能有所收获！</h4>
            <p class="font-weight-light">
              Don't be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
          </v-card-text>

          <v-card-actions>
            <v-btn text x-large font-weight-blod>评论112</v-btn>
            <v-spacer />
            <v-btn text x-large>文章112</v-btn>
          </v-card-actions>
        </v-card>
        <!-- <SmCard class="my-12" v-for="person in team" :key="person.name" :data="person"></SmCard>
        <XSCard class="my-12" v-for="person in team" :key="person.name" :data="person"></XSCard> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SCard from '~/components/Card'
import RSCard from '~/components/RSCard'
import SSCard from '~/components/SScard'
import XSCard from '~/components/XSCard'
import SmCard from '~/components/SmCard'
import Carousel from '~/components/Carousel'
import ScrollerX from '~/components/Music/ScrollerX'
import { getArticleListAdmin } from '~/api/api'
export default {
  async asyncData({ $axios }) {
    try {
      const result = await $axios.get('blog/getArticleListAdmin')
      console.log(result.data.data.list, 'result')

      return { articlelist: result.data.data.list }
    } catch (error) {
      console.log(error, 99999)
    }
  },
  components: { SCard, SSCard, SmCard, XSCard, RSCard, Carousel, ScrollerX },

  // computed: {},
  data() {
    return {
      articlelist: '',
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
      team: [
        {
          id: 1,
          name: 'The Net Ninja',
          role: 'Web developer',

          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          id: 2,
          name: 'Ryu',
          role: 'Graphic designer',

          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          id: 3,
          name: 'Chun Li',
          role: 'Web developer',

          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          id: 4,
          name: 'The Net Ninja2',
          role: 'Social media maverick',

          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.background
  position: absolute
  border-radius: 7px !important
  width: 100%
  height: 250px
  display: inline-block
  background-size: cover
  background-position: center
  background-image: url('~@/assets/img15.jpg')
.avatar
  display: block
  border-radius: 50% !important
  position: relative
  width: 128px
  overflow: hidden
  top: 64px
  left: calc(  50% - 64px  )

.introduce
  margin-top: 120px
  // margin-bottom: -32px
  // margin: 2rem auto 0 auto
  // border-radius: 50%
  // .v-card--material
    // &__avatar
      // position: relative
      // top: -64px
      // margin-bottom: -32px

    // &__heading
    //   position: relative
    //   top: -40px
    //   transition: .3s ease
    //   z-index: 1

    // &.v-card--material--hover-reveal:hover
    //   .v-card--material__heading
    //     transform: translateY(-40px)
</style>
