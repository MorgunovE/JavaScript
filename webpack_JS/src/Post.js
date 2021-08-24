// 3
class Post {
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
}