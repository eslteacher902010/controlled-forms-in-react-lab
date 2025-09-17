import { useState } from "react";

const Bookshelf = () => {
//my collection

const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

//let's go with the state we saw --this is my new book 
const [formData, setFormData] = useState({
    title: '',
    author: '',
  });

// //TODO 1: Create a function named handleInputChange that will be triggered each time the user types in an input field.
// The function should take an event object as its argument. Use this event to access the name of the input field and the value the user has typed.
// Construct a new version of the newBook object that includes the updated fields. Make sure you maintain the values of other fields in newBook that aren’t currently being updated. (Hint: Use the spread operator ... to create a new copy of the newBook object)
// Use the setNewBook setter function to update the state of newBook with this new object to reflect the changes in your UI.

const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // Invoke helper function, passing it the event
  };

  //TODO #2: Create a function named handleSubmit that will execute when the form is submitted.
// The function should also take an event object as its argument. Begin the function by stopping the default form submission action using event.preventDefault().
// Use the setBooks setter function to update the books array state with this new list to include the newly added book. You’ll need to copy the current list of books and add the new book details from newBook to this list. (Hint: Use the spread operator ...)
// Reset the newBook state to its initial empty values to clear the form fields, preparing them for the next entry.


  const handleSubmit = (event) => {
  event.preventDefault();

  if (!books.some((oldBook) => oldBook.title === formData.title)) {
    // add the new book
    setBooks([...books, formData]);

    // reset formData for the next entry
    setFormData({
      title: '',
      author: '',
    });
  }
};

//TODO #3:
//Use JSX to create a form within your BookShelf component. The form should include sections for “Title” and “Author”.
// Add input fields for both “Title” and “Author”. These inputs will allow users to enter the details for the book they want to add to the shelf.
// Ensure each input field is connected to the corresponding property in the newBook state object. Use the value attribute to display the current state and the onChange attribute to update the state as the user types.
// Include a submit button in the form. Attach your handleSubmit event handler to the form’s onSubmit attribute to handle the form submission.
//added below 

//TODO #4
// Within the BookShelf component, use the map function to iterate over the books array. This array contains the list of books added by the user.
// For each book in the array, create a “book card”. Use a <div> to wrap the display of each book’s title and author.
// Ensure each book card is distinct and clearly displays the title and author of the book.





  return (

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <label htmlFor="author">Author: </label>
        <input
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
        <button type="submit">
          Submit
        </button> 
      </form>

          

    </div>
    <div>
        <h3>The BookShelf </h3>
        
        <ul>
            {books.map((book) => (
                <li key={book.title}>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                </li>
            ))}
    </ul>

    

  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
   );
};
export default Bookshelf;