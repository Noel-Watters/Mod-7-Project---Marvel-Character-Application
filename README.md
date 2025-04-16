# Marvel Character Creator

## **Project Overview**
The **Marvel Character Creator** is a web application that allows users to explore, create, edit, and manage characters from the Marvel Universe. Users can view a list of all characters, see detailed information about individual characters, and even add their own custom characters or edit existing ones. The app is built using **React** for the frontend and interacts with a backend API for data management.

---

## **Features**
### **1. Homepage**
- Introduces the Marvel Character Creator with a carousel showcasing the first three characters in the database.
- Provides navigation options to view all characters or create a new character.

### **2. View All Characters**
- Displays a list of all characters in the database using responsive cards.
- Each card shows the character's name, alias, alignment, and powers.
- Clicking on a card opens a modal with detailed information about the character.

### **3. View Individual Character**
- Users can view detailed information about a specific character, including:
  - Name
  - Alias
  - Alignment (Hero/Villain)
  - Powers
  - Image

### **4. Create a New Character**
- Users can create a new character by filling out a form with the following fields:
  - Name (required)
  - Alias (required)
  - Alignment (Hero/Villain, required)
  - Powers (comma-separated)
  - Image URL
- Includes Bootstrap validation to ensure required fields are filled.
- Displays a success or error alert after submission.

### **5. Edit an Existing Character**
- Users can edit an existing character's details using a pre-populated form.
- Fields include:
  - Name (required)
  - Alias (required)
  - Alignment (Hero/Villain, required)
  - Powers (comma-separated)
  - Image URL
- Includes Bootstrap validation and alerts for success or error.

### **6. Delete a Character**
- Users can delete a character with confirmation.
- Displays a success or error alert after deletion.

### **7. 404 Page**
- A custom 404 page (`NotFound.jsx`) is displayed for undefined routes.
- Provides a link to navigate back to the homepage.

### **8. Responsive Navbar**
- A responsive navigation bar built with React Bootstrap.
- Includes links to:
  - Home
  - View All Characters
  - Create Character

### **9. Loading Spinners**
- Displays loading spinners on all pages while data is being fetched.

---

## **Technologies Used**
### **Frontend**
- **React**: For building the user interface.
- **React Router**: For navigation and routing.
- **React Bootstrap**: For responsive design and UI components (e.g., Navbar, Forms, Alerts, Modals, Carousel).
- **Axios**: For making HTTP requests to the backend API.

### **Backend**
- The backend API interacts with a database to manage character data. (Details about the backend are not included in this README but should be documented separately.)

---

## **How to Run the Project**
### **Prerequisites**
- Node.js and npm installed on your system.
- A running backend API for the application to interact with.

### **Steps**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd marvel-creator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   - Navigate to `http://localhost:3000` (or the port specified in your terminal).

---

## **Project Structure**
```
src/
├── components/
│   ├── HomePage.jsx         # Homepage with carousel and introduction
│   ├── Characters.jsx       # Displays all characters in a card layout
│   ├── Edit.jsx             # Edit character form with validation
│   ├── Create.jsx           # Create character form with validation
│   ├── NavBar.jsx           # Responsive navigation bar
│   ├── NotFound.jsx         # 404 page for undefined routes
├── App.jsx                  # Main app component with routing
├── index.css                # Global styles
├── main.jsx                 # Entry point for the React app
```

---

## **Key Features Implemented**
1. **React Router**:
   - Used for navigation between pages (e.g., Home, Characters, Create, Edit).
   - Includes a catch-all route for the 404 page.

2. **Bootstrap Validation**:
   - Ensures required fields are filled in `Create.jsx` and `Edit.jsx`.

3. **Alerts**:
   - Success and error alerts for creating, editing, and deleting characters.

4. **Spinners**:
   - Loading spinners are displayed while fetching data.

5. **Responsive Design**:
   - Fully responsive UI using React Bootstrap.

---

## **Future Enhancements**
1. **Search and Filter**:
   - Add functionality to search for characters by name or filter by alignment (Hero/Villain).

2. **Pagination**:
   - Implement pagination for the character list to handle large datasets.

3. **Authentication**:
   - Add user authentication to restrict access to certain features (e.g., editing or deleting characters).

4. **Improved Styling**:
   - Enhance the visual design with custom themes and animations.

---

## **Known Issues**
- Ensure the backend API is running; otherwise, the app will fail to fetch data.
- Case sensitivity in routes may cause issues if not handled consistently.

---

## **Contributors**
- Noel Watters - Developer
