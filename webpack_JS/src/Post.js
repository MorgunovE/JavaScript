// 3 and 15
export default class Post {
  constructor(title) {
    this.title = title
    this.date = new Date()
  }
  
  // 3-1
  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON()
    })
  }
  
  // 25
  get uppercaseTitle() {
    return this.title.toUpperCase()
  }
}