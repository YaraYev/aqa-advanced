
import { Book } from './book.mjs'

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year)
        this.fileFormat = fileFormat
    }
    get fileFormat() {
        return this._fileFormat
    }

    set fileFormat(format) {
        const ebookFormats = ['EPUB', 'PDF', 'MOBI', 'AZW']
        if (ebookFormats.includes(format.toUpperCase())) {
            this._fileFormat = format
        } else throw new Error('Wrong file format')
    }

    printInfo() {
        console.log(`The book "${this.title}" by ${this.author} was published in ${this.year}, available in ${this._fileFormat}.`)
    }

    static createEBook(book, formatFile) {
        return new EBook(book.title, book.author, book.year, formatFile)
    }
}