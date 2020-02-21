<template outlined >
  <div>
    <template v-for="(item, i) in list">
      <v-card :key="item._id" class="elevation-1 my-1">
        <v-list-item class="px-3" three-line>
          <v-list-item-avatar tile class="mr-4 avatar" size="50">
            <img :src="src(i)" />
          </v-list-item-avatar>
          <v-list-item-content class="pb-0">
            <div class="subtitle-2 name">
              {{item.user.name}}
              {{item.user.type === 0 ? '(作者)' : ''}}
            </div>
            <div class="caption time">{{ item.create_time|format}}</div>
            <span class="body-2">{{item.content}}</span>
            <v-btn @click="reply(item._id, item.user)" text>
              <v-icon class="iconfont icon-pinglun"></v-icon>
            </v-btn>

            <template v-if="item.other_comments">
              <ArtCommentcopy
                :item_id="item._id"
                :item_user="item.user"
                :list="item.other_comments"
              />
              <!-- <ArtCommentcopy v-for="e in item.other_comments" :key="e._id" /> -->
            </template>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </template>
    <!-- 评论框 -->
    <Reply ref="dialog" :article_id="article_id" :comment_id="comment_id" :to_user="to_user" />
  </div>
</template>
<script>
import ArtCommentcopy from '~/components/Blog/ArtCommentcopy'
import Reply from '~/components/Blog/Reply'
export default {
  components: { ArtCommentcopy, Reply },
  data() {
    return {
      comment_id: '',
      to_user: ''
    }
  },
  props: {
    article_id: {
      default: ''
    },
    list: {
      default: []
    }
  },

  methods: {
    src(i) {
      if (this.list[i].user.avatar === 'user' || '') {
        return require('~/assets/avatar.jpg')
      } else {
        return this.list[i].user.avatar
      }
    },
    reply(commentId, user) {
      if (!this.$store.state.blog.userinfo) {
        this.$message.success('请先登录才可以评论~')
        return
      }

      // 添加二级评论
      this.comment_id = commentId
      this.to_user = user

      this.$refs.dialog.dialog = true
    }
  }
}
</script>

<style lang="sass" scoped>
.avatar
  border-radius: 4px 
.name 
  color: #b77171
.content,
.time 
  color: #333
</style>
 
