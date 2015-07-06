# Rolodex

A simple contacts manager.

### Process
Github Flow

### Waterfall Model
#### Requirements Specification
- Determine Project: A contacts application
- Deliverables: 
	- Web application
	- REST API
	- Needs Assessment:
		- A standard contact entry form, containing at least these fields: 
			- First name (required, minimum 3 characters)
			- Last name (required, minimum 3 characters)
			- Address
			- City v. State/Province (Should update based on selected country) Country
			- Zip
			- Phone (required)
			- Email (required, valid email format)
		- Save results through a Service layer designed to talk to a REST API. The API can be a real implementation (your choice) or mocked as you choose.
		- On the same page, create an area with a list of all names previously entered. This area should update appropriately when contacts are created/edited.
		- Selecting a name displays details for that contact, and optionally allows the user to edit that information.

#### Determine Tech Stack:
- Front-end
	- AngularJS
	- Sass / Susy / Compass
	- Gulp.js
	- Bower
	- jQuery
	- Modernizr
- Back-end
	- Express.js
	- MongoDB
	- Node.js
- Host
	- Heroku

#### Browser Support
- IE9+
- Chrome
- Safari
- Firefox

#### Style Guides
- [AngularJS](https://github.com/johnpapa/angular-styleguide)
- [CSS Guidelines](http://cssguidelin.es/)

#### Development Plan
##### Content
- / (index)
	- Header
		- Title: Contacts
		- Link to GitHub
	- Aside
		- Create new contact
		- List of existing contacts
			- States
				- None
				- Active
				- Hover
				- New [Grow in height, fade from yellow to white]
	- Main
		- Title: Details
		- Paragraph: Instructions
		- Form/Contact information
			- Fields
				- Label, text
					- Error message
				- Field
					- States
						- None
						- Focused
						- Error
			- Buttons
				- States:
					- None
					- Hover
					- Active
					- Error [wiggle, flash red]

##### API
- /api
	- /contacts - GET - list
	- /contacts - POST - create
	- /contacts:/id - GET - read
	- /contacts/:id - PUT - update
	- /contacts/:id - DELETE - delete

##### Estimates
	
##### Design Wireframes

##### Grid
- Gutters: 30px
- Margins: 15px;
- Breakpoints
	- default - 12 columns - 900px
	- lg - 12 columns - 1200px
	- max-width: 1600px

#### Construction
- [x] Setup project
	- [x] Git Repo
		- [x] .gitignore
	- [x] .editorconfig
	- [x] package.json
	- [x] Bower
	- [x] Gulp.js
- [x] Build API
- [x] Markup
- [x] Styles
- [ ] Functionality
    - [ ] Use $validate
- [ ] Data Integration
- [ ] Testing
	- [ ] Write unit tests
	- [ ] Debugging
		- [ ] Fix 'edit' API
- [ ] Set up Gulp
	- [ ] Dev: Concatenate, annotate
	- [ ] Prod: Concatenate, annotate, minify
- [ ] Deployment to Heroku

#### Wishlist
- [ ] Use $resource
- [ ] User authentication
- [ ] Add ngAria for accessibility
- [ ] Integrate Browserify



