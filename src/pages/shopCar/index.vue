<template>
  <div class="shopCar">
    <div class="watchFile">点击预览</div>
    <div class="swiper"
         v-show="swiper">
      <van-tabs :active="active"
                @change="onChange"
                color="#ddd"
                background="rgba(0,0,0,0)"
                title-active-color="#fff"
                title-inactive-color="#ccc">
        <van-tab :title="item.title"
                 v-for="(item, index) in fileList"
                 :key="index">
          <div class="swiper_box">
            <van-icon name="arrow-left"
                      :class="{'disable': current === 0}"
                      @click="prev" />
            <div class="content">
              <div v-if="item.type === 'image'"
                   class="image_box">
                <img :src="imgUrl" />
              </div>
              <div v-if="item.type === 'video'"
                   class="video_box">
                <div class="prism-player"
                     id="J_prismPlayer"></div>
              </div>
              <div v-if="item.type === 'music'"
                   class="music_box"></div>
              <div v-if="item.type === 'PPT'"
                   class="ppt_box"></div>
            </div>
            <van-icon name="arrow"
                      :class="{'disable': current === oldList.length-1}"
                      @click="next" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { Tab, Tabs, Icon } from "vant";
import "vant/lib/index.css";
export default {
  name: "shopCar",
  components: {
    "van-tab": Tab,
    "van-tabs": Tabs,
    "van-icon": Icon
  },
  data () {
    return {
      swiper: true,
      active: 0,
      // 当前位置
      current: 0,
      imgUrl: '',
      videoUrl: '',
      musicUrl: '',
      pptUrl: '',
      oldList: [
        {
          type: 'image',
          id: '111111',
          imgUrl: require('../../assets/img/1.jpg')
        },
        {
          type: 'image',
          id: '444444',
          imgUrl: require('../../assets/img/4.jpg')
        },
        {
          type: 'video',
          id: '555555',
          videoId: 'http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4',
        },
        {
          type: 'image',
          id: '222222',
          imgUrl: require('../../assets/img/2.jpg')
        },
        {
          type: 'image',
          id: '333333',
          imgUrl: require('../../assets/img/3.jpg')
        },
        {
          type: 'video',
          id: '666666',
          videoId: '',
        },
        {
          type: 'music',
          id: '777777',
          videoId: '',
        },
        {
          type: 'music',
          id: '888888',
          videoId: '',
        },
        {
          type: 'PPT',
          id: '999999',
          videoId: '',
        },
        {
          type: 'PPT',
          id: 'abcdef',
          videoId: '',
        }
      ],
      fileList: [
        {
          type: 'image',
          title: '图片',
          childList: [
            {
              type: 'image',
              id: '111111',
              imgUrl: require('../../assets/img/1.jpg')
            },
            {
              type: 'image',
              id: '444444',
              imgUrl: require('../../assets/img/4.jpg')
            },
            {
              type: 'image',
              id: '222222',
              imgUrl: require('../../assets/img/2.jpg')
            },
            {
              type: 'image',
              id: '333333',
              imgUrl: require('../../assets/img/3.jpg')
            },
          ]
        },
        {
          type: 'video',
          title: '视频',
          childList: [
            {
              type: 'video',
              id: '555555',
              videoId: 'http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4',
            },
            {
              type: 'video',
              id: '666666',
              videoId: 'http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4',
            }
          ]
        },
        {
          type: 'music',
          title: '音频',
          childList: [
            {
              type: 'music',
              id: '777777',
              videoId: '',
            },
            {
              type: 'music',
              id: '888888',
              videoId: '',
            }
          ]
        },
        {
          type: 'PPT',
          title: 'PPT',
          childList: [
            {
              type: 'PPT',
              id: '999999',
              videoId: '',
            },
            {
              type: 'PPT',
              id: 'abcdef',
              videoId: '',
            }
          ]
        }
      ]
    };
  },
  created () {
    this.imgUrl = this.fileList[0].childList[0].imgUrl
  },
  methods: {
    onChange () {

    },
    // 上一张
    prev () {
      if (this.current === 0) return;
      this.current--
      this.findUrl(this.current)
    },
    // 下一张
    next () {
      if (this.current === this.oldList.length - 1) return;
      this.current++;
      this.findUrl(this.current)
    },
    // 查找数据
    findUrl (fIndex) {
      this.fileList.forEach((item, index) => {
        item.childList.forEach((item2, index2) => {
          if (this.oldList[fIndex].id === item2.id) {
            let parentIndex = index;
            this.active = index;
            let childIndex = index2;
            if (parentIndex === 0) {
              this.imgUrl = this.fileList[parentIndex].childList[childIndex].imgUrl;
            }
            if (parentIndex === 1) {
              this.videoUrl = this.fileList[parentIndex].childList[childIndex].videoId;
            }
            if (parentIndex === 2) {
              this.videoUrl = this.fileList[parentIndex].childList[childIndex].videoId;
            }
            if (parentIndex === 3) {
              this.videoUrl = this.fileList[parentIndex].childList[childIndex].videoId;
            }
          }
        })
      })
    },
  }
};
</script>
<style lang="scss" scoped>
.shopCar {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .watchFile {
    width: 80px;
    height: 40px;
    background: #66dd;
    margin: 60px auto;
    color: #fff;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    border-radius: 8px;
  }
  .swiper {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 110;
    /deep/.van-tab {
      pointer-events: none;
    }
    .swiper_box {
      width: 100%;
      height: calc(100vh - 40px);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .van-icon {
        color: #fff;
        font-size: 30px;
        font-weight: 600;
        position: relative;
        z-index: 10;
      }
      .disable {
        color: #999;
      }
      .content {
        width: 100%;
        height: 60%;
        .image_box {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .video_box {
          width: 100%;
          height: 100%;
          .prism-player {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
