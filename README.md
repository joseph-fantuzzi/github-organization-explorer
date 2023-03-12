# GitHub Organization Explorer

### GoLinks Take Home Test

An application to query GitHub Organizations and view a list of their repositories and commits.

### Important Links:

<a href="https://github-organization-explorer.vercel.app/" target="_blank">1. Deployed URL</a>
</br>
<a href="https://groovy-cephalopod-7de.notion.site/7e23220d0c924d66a3462ac33e9aefb2?v=45e7a3ddd4934e47a918d01abdbe6f2a" target="_blank">2. Notion Kanban Board</a>
</br>
<a href="https://www.figma.com/file/dut25O8DUl41jB25W63cvE/GitHub-Organization-Explorer?node-id=0%3A1&t=bgPowHQ6nr0Z1g0Z-1" target="_blank">3. Figma Design</a>

### All Pull Requests:

| Link                                                                                                                                                                | Branch                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/pull/2" target="_blank">1. Search and Display Organization's Repo Data</a>                 | <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/tree/search-and-display-data" target="_blank">search-and-display-data</a> |
| <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/pull/3" target="_blank">2. Sort Repo List By Start Count In Descending Order</a>           | <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/tree/sort-repo-list" target="_blank">sort-repo-list</a>                   |
| <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/pull/4" target="_blank">3. View a Specific Repo's Commit List For a Given Organization</a> | <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/tree/commit-list" target="_blank">commit-list</a>                         |
| <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/pull/5" target="_blank">4. Organization Route with Nested Repo Route</a>                   | <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/tree/routes" target="_blank">routes</a>                                   |
| <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/pull/6" target="_blank">5. Implement UI/UX Design</a>                                      | <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/tree/design" target="_blank">design</a>                                   |
| <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/pull/7" target="_blank">6. Implement Loading State</a>                                     | <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/tree/loading-state" target="_blank">loading-state</a>                     |
| <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/pull/8" target="_blank">7. Error Handling</a>                                              | <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/tree/error-handling" target="_blank">error-handling</a>                   |
| <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/pull/9" target="_blank">8. Animations</a>                                                  | <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/tree/animations" target="_blank">animations</a>                           |
| <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/pull/10" target="_blank">9. Theme Toggle</a>                                               | <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/tree/theme" target="_blank">theme</a>                                     |
| <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/pull/11" target="_blank">10. Unit Tests</a>                                                | <a href="https://github.com/joseph-fantuzzi/github-organization-explorer/tree/unit-tests" target="_blank">unit-tests</a>                           |

### Technologies:

| Type                      | Technology                    |
| ------------------------- | ----------------------------- |
| Programming Language      | JavaScript                    |
| Frontend Framework        | React                         |
| CSS Framework             | TailwindCSS                   |
| Build Tool                | Vite                          |
| Client Routing Framework  | React Router                  |
| Unit Testing              | Vitest, React Testing Library |
| API                       | GitHub API                    |
| HTTP Client               | Axios                         |
| Animations                | CSS                           |
| Font                      | Poppins                       |
| Icon Library              | React Icons                   |
| Loading Animation Package | React Loading                 |
| Deployment                | Vercel                        |

### User Stories:

- [x] Basic Requirement: As a user, I would like to be able to see a list of Netflix's repositories, and when I click on a repository, I want to be able to see the list of commits.
- [x] Bonus Requirement: As a user I want to be able to type into an input an organization name other than Netflix and see a list of that organization's repositories and commits instead.

### Basic Features:

- [x] View a scrollable list of netflix's repositories at https://github-organization-explorer.vercel.app/netflix
- [x] Each item in the repository list contains repo name, language, description, start count, fork count, and date created
- [x] Repository list is sorted by star count in descending order
- [x] Clicking on a specific repository in the list will direct the user to another page showing a list of that repository's recent commits
- [x] Each item in the commit list contains commit title, committer username, commit hash, and date created

### Bonus Features:

- [x] UI/UX Responsive Design beautifully crafted for every device type and size
- [x] Search for any GitHub organization name in the home page input and view any organization's repositories and commits
- [x] Theme toggle - choose between light and dark mode throughout the application
- [x] Route navigation - making the application more structured by allowing users to quickly route to the organization name for the list of that organization's repositories and a nested repository name route for that repository's list of commits
- [x] Error handling - when clicking the search button without typing anything into the input will display an error message, also when routing to a 404 page or an organization or repo that does not exist will display an error component
- [x] Each commit includes the committer's avatar image
- [x] Ability to copy each commit's hash to the user's clipboard
- [x] Within the repository list for the organization page and commit list for the repository page, users can query for a certain repository name or commit name
- [x] View the number of repositories or commits found for a certain organization
- [x] Animations
- [x] Loading animations when the response from the server has not come back yet
- [x] Unit tests for all components
- [x] Favicon

### Planning, Design, and Technical Decisions:

| Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Planning  | During the planning phase of developing this application, I decided to create a simple whiteboard to gather all my thoughts. I wanted to lay out the specific requirements for the app, a basic wireframe to get me started on the design, jot down a list of technologies I have in mind using for the development, and some general planning steps to effectively plan every step I should take. I included screenshots of the whiteboard below under pre-development notes to get a better idea on my planning process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Design    | During the design phase of developing this application, I decided to use Figma to create a beautiful UI/UX design. I wanted the deisgn to be minimal, but still eye-catching to enhance the overall user experience. I chose to go with basic colors like black and white to maintain the minimal aesthetic. I decided to design three separate pages: home page, organization page, and repository page. On the home page, I created a central section with the app name, an input for the user to query for organizations, and a search button. When designing the organization page, I decided to include a navbar at the top of the screen where the user can easily head back home or search for a specific repository within that organization. I added a user-friendly scrollable repository list where users can view data on each repository. I wanted to keep the organization and repository page design similar. I included the navbar design and the scrollable commit list for users to view commit data for that repository. Within each commit card, I decided to add the committer's avatar image as well. After creating a base design, I designed mobile views to get a feel for how I want this application to be viewed on mobile devices. I kept the figma design the same throughout the development of this app. I ended up changing and adding a few things while developing, but I wanted to showcase the raw design for the stage of the process I was in at the time. |
| Technical | During the technical development phase of creating this application, I first created the project within GitHub and then initialized the codebase with vite. I created a frontend react app with standard javascript. Since I knew this app would not be too large with not that many components, I decided to stick with react prop drilling for accessing react state instead of using a state management system like redux. I added tailwindcss for ease of styling the app, reset my css with eric meyer's css reset, and downloaded any packages I would need. After initializing the project with all the needed tools, I started branching off and creating feature branches for specifc features I would implement. I kept the development close to the figma design, aiming for pixel-perfection. After finishing all the features I wanted to implement, I deployed the app to vercel. After deploying, I noticed a few issues with the app on safari so I addressed those issues. The basic and bonus requirements are complete and I have even more future features in mind if I had more time to spend on this app.                                                                                                                                                                                                                                                                                                                                                                   |

### Installation and Set Up:

1. Install dependencies

```sh
npm install
```

2. Start the development server

```sh
npm run dev
```

### Building for Production:

1. Build the application for production usage

```sh
npm run build
```

### Local Application Testing:

1. Build the application and start a web server for testing purposes

```sh
npm run preview
```

### Unit Testing on React Components:

1. Run the command below and vitest will run all the unit testing files

```sh
npm run test
```

### Pre-Development Notes

| Name         | Image                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------- |
| Requirements | ![image](https://user-images.githubusercontent.com/95318530/224572998-8049e3b5-42c3-48c3-96d4-bd9675d10bc7.png) |
| Wireframe    | ![image](https://user-images.githubusercontent.com/95318530/224573194-0819e118-2753-4655-937f-bdc34c254b7a.png) |
| Technologies | ![image](https://user-images.githubusercontent.com/95318530/224573262-d0403cbe-5577-4876-99b6-d5723f0fbc58.png) |
| Planning     | ![image](https://user-images.githubusercontent.com/95318530/224573288-8e325cb2-cc3f-49ec-b2dd-f1a7d22db059.png) |

### Future Development Notes

If I had more time to work on this application and add more features, here is a list of some things I would like to implement:

- Integrate cypress end-to-end testing
- Implement language percentages for each repository in the repo list to show all languages that were used in the making of that application
- Add an interface for more data from the github api
- Possibly create a backend so users can login and create a favorites list of their favorite repositories, and track organizations or repositories with notifications

### Known Issues

When navigating to "/netflix" or some other routes in the URL directly, this screen will sometimes appear when using Chrome. It only happens sometimes but needs to be addressed as soon as possible because it could affect the user experience if users decide to change the URL directly to query for organizations and repositories. Typing "Netflix" into the input and clicking search navigates smoothly to the /netflix route. This way is intended for the user experience but this issue still needs to be addressed.

![image](https://user-images.githubusercontent.com/95318530/224576281-e359a0c0-ac8f-4bd7-8af9-62f61a252ee3.png)
