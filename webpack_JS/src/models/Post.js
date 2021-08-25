// 3 and 15
export default class Post {
  // 41
  constructor(title, img) {
    this.title = title
    this.img = img
    this.date = new Date()
  }
  
  // 3-1
  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      // 41-1
      img: this.img
      //69
    }, null, 2)
  }
  
  // 25
  get uppercaseTitle() {
    return this.title.toUpperCase()
  }
}