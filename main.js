let app = new Vue({
  el: '#app',
  data: {
    index: 0,
    srcImgs: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ]
 },

  mounted() {
    setInterval(this.nextImg, 3000); 
 },

  methods: {
    nextImg() {
      this.index < (this.srcImgs.length - 1) ? this.index++ : this.index = 0;
    },
    prevImg() {
      this.index !== 0 ? this.index-- : this.index = this.srcImgs.length -1;
    }
  }
})