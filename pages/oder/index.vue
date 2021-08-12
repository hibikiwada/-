<template>
  <div class="oder">
    <section class="oder__mv">
      <p>
        <img src="/oder/mv.png" alt="" width="100%" height="300" />
      </p>
    </section>
    <section class="oder__content">
      <h2>作品一覧</h2>
      <div class="oder__content-box">
        <p>
          <img src="/oder/img1.jpeg" alt="" width="300" height="200" />
        </p>
        <p>
          <img src="/oder/img2.jpg" alt="" width="300" height="200" />
        </p>
        <p>
          <img src="/oder/img3.jpg" alt="" width="300" height="200" />
        </p>

      </div>
    </section>
    <footer class="footer">
      <ul class="flex sns">
        <li class="sns-item">
          <a href="https://twitter.com/yuko78568701"><i class="fab fa-twitter fa-3x"></i></a>
        </li>
        <li class="sns-item">
          <a href="https://www.instagram.com/yuko.ogawa.5891/?hl=ja"><i class="fab fa-instagram fa-3x"></i></a>
        </li>
        <li class="sns-item">
          <a href=""><i class="fab fa-facebook fa-3x"></i></a>
        </li>
      </ul>
      <p class="footer-text">お問い合わせは各種SNSのDMでも承っております。</p>
      <p class="footer-sub-text">©️Yuu Sasara office</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.oder {
  &__content {
    width: 80%;
    margin: 0 auto 120px;
    @media screen and (max-width: 576px) {
    }
    h2 {
      text-align: center;
      font-size: 50px;
      font-weight: bold;
      text-align: center;
      margin: 120px 0 50px;
      position: relative;
      z-index: 0;
      color: #7c7c7c;
      @media screen and (max-width: 576px) {
        font-size: 36px;
      }
      &::before {
        content: "oders";
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -70%);
        z-index: -1;
        font-size: 130px;
        font-weight: bold;
        color: rgba(253, 229, 229, 0.8);
        @media screen and (max-width: 576px) {
          font-size: 80px;
        }
      }
    }
    &-box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media screen and (max-width: 680px) {
        justify-content: center;
      }
      p {
        margin: 0 0 30px;
      }
    }
  }
  .footer {
  height: 250px;
  background: rgba(235, 136, 228, 0.6);
  .flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      a {
        i {
          color: #7c7c7c;
          transition: 0.5s;
        }
        .fa-twitter:hover {
          color: #1da1f2;
        }
        .fa-instagram:hover {
          color: #d93177;
        }
        .fa-facebook:hover {
          color: #3b5998;
        }
      }
    }
  }

  .sns {
    width: 200px;
    padding-top: 30px;
    margin: auto;
    color: #7c7c7c;
  }
  .footer-text {
    margin: 30px 0;
    text-align: center;
    font-size: 20px;
    color: #fff;
    line-height: 1.6;

  }
  .footer-sub-text {
    text-align: center;
    font-size: 25px;
    color: #fff;

  }
}

}
</style>
<script>
export default {
  head() {
    return {
      title:
        "ささら優 / オーダーメイド作品一覧",
      titleTemplate: "",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "ささら優(ゆう)のポートフォリオサイトです。パステル教室を開催しつつイラスト販売などアーティスト活動をしています。"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "ささらゆう, ささら優, パステル画, パステル, イラストレーター, イラスト, 絵"
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "/images/mv.png"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/images/fv.jpg"
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "ささら優 ポートフォリオサイト"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            "ささら優 ポートフォリオサイト"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "ささら優(ゆう)のポートフォリオサイトです。パステル教室を開催しつつイラスト販売などアーティスト活動をしています。"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "ささら優(ゆう)のポートフォリオサイトです。パステル教室を開催しつつイラスト販売などアーティスト活動をしています。"
        }
      ]
    };
  },
}
</script>
