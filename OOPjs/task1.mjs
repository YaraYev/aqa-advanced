import { Book } from './book.mjs'
import { EBook } from './ebook.mjs'

//Для завдання 1
const book1 = new Book('The Lucifer Effect', 'Philip Zimbardo', 2007)
const book2 = new Book('Messer', 'Till Lindemann', 2002)
const book3 = new Book("Breakfast at Tiffany's", 'Truman Capote', 1958)

book1.printInfo()
book2.printInfo()
book3.printInfo()

//Для завдання 2
const ebook1 = new EBook('The Bell Jar', 'Sylvia Plath', 1963, "EPUB")
const ebook2 = new EBook('The Thirteenth Tale', 'Diane Setterfield', 2006, "AZW")

ebook1.printInfo()
ebook2.printInfo()

//Для завдання 3
book1.title = 'Tomorrow, and tomorrow, and tomorrow..';
book1.author = 'Gabrielle Zevin';
book1.year = 2022;
book1.printInfo();

//Для завдання 4
const books = [book1, book2, book3, ebook1]
const oldestBook = Book.findOldestBook(books)
oldestBook.printInfo()

//Для завдання 5
const eBook = EBook.createEBook(book2, "PDF")
eBook.printInfo()