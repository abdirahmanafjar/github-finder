# 🔍 GitHub Finder

A simple, modern, and responsive web application that allows users to search for GitHub profiles using their GitHub usernames. The application fetches real-time profile information from the GitHub REST API and displays important details in an attractive profile card.

## 📌 About the Project

GitHub Finder is a front-end web application built with HTML, CSS, and JavaScript. It provides an easy way to discover GitHub developers and explore their public profiles.

By entering a GitHub username, users can retrieve information such as the developer's profile picture, name, username, bio, followers, following, and number of public repositories.

The project demonstrates how to work with external APIs, handle asynchronous JavaScript operations, and dynamically update HTML content using DOM manipulation.

## ✨ Features

- **Search GitHub Users:** Search for any GitHub user by entering their username.
- **Profile Information:** Display the user's name, username, and bio.
- **Profile Avatar:** Retrieve and display the user's GitHub profile picture.
- **Followers & Following:** View the number of followers and users they follow.
- **Public Repositories:** Display the total number of public repositories.
- **GitHub Profile Link:** Open the user's original GitHub profile in a new browser tab.
- **Error Handling:** Display an alert when the username is empty or the requested profile cannot be found.
- **Responsive Design:** Adapt the layout to different screen sizes, including mobile devices.
- **Modern UI:** Enjoy a clean dark-themed interface with gradient backgrounds, smooth transitions, and interactive buttons.

## 🛠️ Technologies Used

| Technology           | Purpose                                                   |
| -------------------- | --------------------------------------------------------- |
| HTML5                | Structures the application and its content.               |
| CSS3                 | Handles styling, layout, responsiveness, and animations.  |
| JavaScript (ES6+)    | Implements the search functionality and DOM manipulation. |
| GitHub REST API      | Retrieves public GitHub user information.                 |
| Fetch API            | Makes asynchronous HTTP requests to GitHub.               |
| Google Fonts (Inter) | Provides modern and readable typography.                  |

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/abdirahmanafjar/github-finder
```

### 2. Navigate to the Project Directory

```bash
cd github-finder
```

### 3. Open the Project

Open the `index.html` file in your preferred web browser.

Alternatively, you can use the Live Server extension in Visual Studio Code to launch the application locally.

No additional dependencies, frameworks, or API keys are required.

## 💻 How to Use

1. Open the GitHub Finder application in your browser.
2. Enter a valid GitHub username in the search field.
3. Click the **Search** button.
4. The application sends a request to the GitHub REST API.
5. The user's profile information is retrieved and displayed in a profile card.
6. Click **View GitHub Profile** to visit the developer's GitHub page.

If the username is empty or the user does not exist, an appropriate error message will be displayed.

## 🔗 API Integration

This application uses the official GitHub REST API to retrieve public user information.

### API Endpoint

```text
https://api.github.com/users/{username}
```

The username entered by the user is dynamically inserted into the API endpoint.

For example:

```text
https://api.github.com/users/octocat
```

The application uses JavaScript's `fetch()` method to send an HTTP GET request and retrieve the user's profile data in JSON format.

### Example API Response Properties

| Property       | Description                       |
| -------------- | --------------------------------- |
| `login`        | GitHub username                   |
| `name`         | User's display name               |
| `avatar_url`   | URL of the user's profile picture |
| `bio`          | User's profile biography          |
| `followers`    | Number of followers               |
| `following`    | Number of users being followed    |
| `public_repos` | Number of public repositories     |
| `html_url`     | Link to the user's GitHub profile |

## 📂 Project Structure

The project has a simple structure:

```text
github-finder/
│
├── index.html
├── style.css
└── script.js
```

All HTML, CSS, and JavaScript code is currently contained in a single HTML file.

## 🎨 Design & User Interface

The application features a modern dark-themed interface designed to provide a pleasant user experience.

Some of its design highlights include:

- Dark navy background with purple gradient accents.
- Responsive profile card layout using CSS Grid.
- Smooth hover effects and button transitions.
- Rounded corners and subtle borders.
- Responsive search controls for smaller screens.
- Inter font family for clean typography.

## ⚠️ Limitations

- Only publicly available GitHub user information can be retrieved.
- The application requires an active internet connection to communicate with the GitHub API.
- GitHub API rate limits may restrict the number of unauthenticated requests.
- The current implementation displays one profile at a time.
- Search results are not saved between page reloads.

## 🔮 Future Improvements

Some potential improvements for future versions include:

- Add a loading indicator while fetching user information.
- Display a more user-friendly error message instead of browser alerts.
- Add GitHub repository search functionality.
- Display additional profile information, such as location, company, and account creation date.
- Implement a search history feature using local storage.
- Add a dark/light theme toggle.
- Improve accessibility and keyboard navigation.
- Add functionality to search and compare multiple GitHub profiles.

## 👨‍💻 Author

**Abdirahman Afjar**

GitHub: [@abdirahmanafjar](https://github.com/abdirahmanafjar)

⭐ If you find this project useful, feel free to give it a star!

---

Built with ❤️ using HTML, CSS, and JavaScript.
