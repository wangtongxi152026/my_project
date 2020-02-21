<template>
  <v-container tag="section">
    <v-row>
      <v-col>
        <v-breadcrumbs class="px-0" :items="items"></v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row justify="center" md="8">
      <v-col cols="12" md="8">
        <h1 class="text-center headline py-5">给我留言</h1>
        <img :src="require('~/assets/img14.jpg')" class="articlebg" />
      </v-col>
      <v-col cols="12" md="8">
        <v-card outlined>
          <!-- <v-form ref="form" v-model="valid" lazy-validation> -->
          <v-form ref="form" lazy-validation>
            <v-textarea
              height="115"
              no-resize
              class="textarea"
              outlined
              name="input-7-4"
              label="给我留言吧"
              :value="content"
            />
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="昵称" required></v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="邮箱" required></v-text-field>

            <v-text-field v-model="qq" :rules="emailRules" label="QQ号" required></v-text-field>

            <!-- <v-btn block :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

            <v-btn block color="error" class="mr-4" @click="reset">Reset Form</v-btn>-->

            <v-btn block color="success" @click="resetValidation">Reset Validation</v-btn>
          </v-form>
        </v-card>
      </v-col>

      <v-col cols="12" md="8">
        <v-divider class="my-5"></v-divider>
        <v-card outlined>
          <v-card-title>全部评论:10</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <ArtComment />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ArtComment from '~/components/Blog/ArtComment'


export default {
  components: { ArtComment },

  computed: {
    formatData() {}
  },
  mounted() {
    
  },
  data() {
    return {
      msg: null,
      content: '',
      items: [
        {
          text: '首页',
          disabled: false,
          href: '/'
        },
        {
          text: '给我留言',
          disabled: false,
          href: 'breadcrumbs_link_1'
        }
      ],
      valid: true,
      name: '',
      qq: '',
      email: '',
      nameRules: [
        v => !!v || '昵称不可以为空',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || '请输入正确邮箱格式~'
        }
      ],
      select: null,

      checkbox: false
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>


<style lang="sass" scoped>
.articlebg
  width: 100%
  height: 70%
  // border-radius: .618rem
.textarea
  background-image: url(https://cuijiahua.com/wp-content/uploads/2018/10/comment.gif)
  background-repeat: no-repeat
  background-size: 35%
  background-position: 100% 60%

.avatar
  display: block
  border-radius: 50% !important
  position: relative
  width: 128px
  overflow: hidden
  top: 64px
  left: calc(  50% - 64px  )

.name 
  color: #b77171
 

.content,
.time 
  color: #333


.introduce
  margin-top: 120px
</style>
 
