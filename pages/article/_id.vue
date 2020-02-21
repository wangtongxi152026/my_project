<template>
  <v-container tag="article">
    <v-row>
      <v-col>
        <v-breadcrumbs class="px-0" :items="breadtitle"></v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" style="background:pink" md="8">
        <h1 class="text-center headline py-5">{{article.title}}</h1>
        <p class="text-center">
          <v-btn color="grey" small text>
            <v-icon left class="iconfont icon-history" />

            <span class="caption">{{article.create_time|format}}</span>
          </v-btn>

          <v-btn color="grey" small text>
            <v-icon left>mdi-eye</v-icon>
            <span class="caption">{{article.meta.views}}</span>
          </v-btn>
          <v-btn color="grey" small text>
            <v-icon left class="iconfont icon-pinglun" />
            <span class="caption">{{article.meta.comments}}</span>
          </v-btn>

          <v-btn color="grey" small text>
            <v-icon class="iconfont icon-dianzan" left></v-icon>
            <span class="caption">{{article.meta.likes}}</span>
          </v-btn>
          <!-- <v-icon class="iconfont icon-history"></v-icon>
          <span class="mr-5">2020年1月17日</span>
          <v-icon class="iconfont icon-pinglun"></v-icon>t
          <span>10 286 °C</span>-->
        </p>
        <img :src="require('~/assets/article_bg_1.jpg')" class="elevation-13 articlebg" />

        <Markdown
          class="pt=10"
          :initialValue="article.content"
          theme="dark"
          height="100%"
          width="100%"
        />
        <v-divider class="my-3"></v-divider>
        <v-card outlined>
          <v-card-title>全部评论:{{article.meta.comments}}</v-card-title>
        </v-card>
        <v-divider class="my-3"></v-divider>
        <v-textarea
          :disabled="!$store.state.blog.userinfo"
          height="115"
          no-resize
          class="textarea"
          outlined
          label="快来留言吧"
          v-model="content"
        />
        <v-btn color="info" :loading="Loading" @click="submit">确定</v-btn>
        <!-- <template v-if="article.meta.comments"> -->
        <ArtComment :article_id="article._id" :list="article.comments" />
        <!-- <ArtComment :article_id="article._id"/> -->

        <!-- </template> -->
      </v-col>

      <v-col md="4"></v-col>
    </v-row>
    <div class="_3Pnjry">
      <div class="_1pUUKr">
        <div class="_2VdqdF" role="button" tabindex="-1" aria-label="给文章点赞">
          <i aria-label="ic-like" class="anticon">
            <svg
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              class
            >
              <use xlink:href="#ic-like" />
            </svg>
          </i>
        </div>
        <div class="P63n6G">
          <div class="_2LKTFF">
            <span class="_1GPnWJ" role="button" tabindex="-1" aria-label="查看点赞列表">
              67
              <!-- -->
              赞
            </span>
            <span class="_1GPnWJ">
              68
              <!-- -->
              赞
            </span>
          </div>
        </div>
      </div>
      <div class="_1pUUKr">
        <div class="_2VdqdF" role="button" tabindex="-1" aria-label="赞赏作者">
          <i aria-label="ic-shang" class="anticon">
            <svg
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              class
            >
              <use xlink:href="#ic-shang" />
            </svg>
          </i>
        </div>
        <div class="P63n6G" role="button" tabindex="-1" aria-label="查看赞赏列表">
          2
          <!-- -->
          赞赏
        </div>
      </div>
    </div>
  </v-container>
</template>
    

<script>
// {{article.numbers}}

import ArtComment from '~/components/Blog/ArtComment'
import { likeArticle, addComment } from '~/api/api'
import Markdown from '~/markdown/preview'
let cacheTime = 0 // 缓存时间
let times = 0 // 评论次数
let likeTimes = 0 // 点赞次数
export default {
  async asyncData({ params, $axios }) {
    const result = await $axios.post('/blog/getArticleDetail', {
      id: params.id
    })
    // const result2 = await $axios.post('/blog/getArticleComment', {
    //   id: params.id
    // })
    // console.log(999, result2.data.data.comments)

    // return { article: result.data.data, comments: result2.data.data.comments }
    return { article: result.data.data}
  },
  mounted() {
    console.log(this.article, 999)
  },
  components: {
    Markdown,
    ArtComment
  },
  provide() {
    return { refreshComment: this.rerefreshComment }
  },
  data() {
    return {
      content: '',
      Loading: false,
      article: '',
      comments: ''
    }
  },
  methods: {
    async refreshComment(id) {
      console.log(id,99999);
      const result2 = await $axios.post('/blog/getArticleComment', {
        id
      })
      console.log(999, result2.data.data.comments)
      this.comments = result2.data.data.comments
    },
    async submit() {
      if (!this.$store.state.blog.userinfo) {
        this.$message.err('登录才能评论，请先登录！')
        return
      }
      if (!this.$route.params.id) {
        this.$message.success('该文章不存在！')
        return
      }

      if (!this.content) {
        this.$message.err('评论不可以为空!')
        return
      }

      if (times > 2) {
        this.$message.success('您今天评论的次数已经用完，明天再来评论吧！')
        return
      }

      let now = new Date()
      let nowTime = now.getTime()

      if (nowTime - this.cacheTime < 4000) {
        this.$message.success('您评论太过频繁，1 分钟后再来留言吧！')
        return
      }

      const user_id = this.$store.state.blog.userinfo._id

      this.Loading = true
      const result = await addComment({
        article_id: this.$route.params.id,
        user_id,
        content: this.content
      })
      console.log(result)
      this.Loading = false
      this.times++
      this.cacheTime = nowTime
      this.content = ''
      this.$message.success('评论成功')
      // this.handleSearch()
    }

    // async likeArticle() {
    //   if (!this.$store.state.blog.userInfo) {
    //     this.$message.success('登录才能点赞，请先登录！')
    //     return
    //   }
    //   if (!this.article._id) {
    //     this.$message.err('该文章不存在！')
    //     return
    //   }
    //   if (this.likeTimes > 0) {
    //     this.$message.success('您已经点过赞了！')
    //     return
    //   }

    //   let params = {
    //     id: this.$store.state.blog.userInfo._id
    //   }
    //   await likeArticle(params)

    //   this.likeTimes++
    //   ++this.article.meta.likes
    // },
  },
  watch: {},
  computed: {
    breadtitle() {
      return [
        {
          text: '首页',
          disabled: false,
          to: '/'
        },
        {
          text: '文章',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: this.article.title,
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    }
  }
}
</script>


<style lang="sass" scoped>
._3Pnjry 
    position: fixed
    top: 216px
    left: calc((100vw - 1000px)/2 - 78px)
    -webkit-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
._1pUUKr, ._2VdqdF 
  display: flex
  align-items: center
// ._2VdqdF {
//     justify-content: center;
//     width: 48px;
//     height: 48px;
//     font-size: 18px;
//     border-radius: 50%;
//     box-shadow: 0 2px 10px rgba(0,0,0,.05);
//     background-color: #fff;
// }
// .P63n6G {
//     margin-top: 4px;
//     font-size: 14px;
//     text-align: center;
//     color: #969696;
//     overflow: hidden;
//     height: 19px;
// }
._1pUUKr 
    flex-direction: column
    margin-bottom: 16px
    cursor: pointer
    color: #969696

.right
  position: relative
.toc
  position: sticky
  top: -200px
.articlebg
  width: 100%
  border-radius: .618rem
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
.textarea
  background-image: url(https://cuijiahua.com/wp-content/uploads/2018/10/comment.gif)
  background-repeat: no-repeat
  background-size: 35%
  background-position: 100% 60%

</style>
