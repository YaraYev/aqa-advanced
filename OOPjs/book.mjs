export class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    get title() {
        return this._title
    }

    get author() {
        return this._author
    }

    get year() {
        return this._year
    }

    set title(newTitle) {
        if (typeof newTitle === 'string' && newTitle.length > 0) {
            this._title = newTitle
        } else throw new Error('Wrong title')
    }

    set author(newAuthor) {
        if (typeof newAuthor === 'string' && newAuthor.length > 0) {
            this._author = newAuthor
        } else throw new Error('Wrong author')
    }

    set year(newYear) {
        if (typeof newYear === 'number' && newYear > 0) {
            this._year = newYear
        } else throw new Error('Wrong year')
    }

    printInfo() {
        console.log(`The book "${this.title}" by ${this.author} was published in ${this.year}.`)
    }

    static findOldestBook(bookList) {
        return bookList.reduce((oldestBook, book) => !oldestBook ? book : oldestBook.year < book.year ? oldestBook : book)
    }
}