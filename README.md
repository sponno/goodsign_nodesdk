# GoodSign NodeJS SDK

This is a Node SDK for the GoodSign API. It provides methods to interact with the API, such as sending a template, uploading a PDF, getting a document, and downloading a document.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` which will install required libraries 

## Usage

First, set your GoodSign API token as an environment variable in a `.env` file:
You can get you API Key from https://goodsign.io/profile/apikeys


GOODSIGN_API_TOKEN=your_api_token


Then, you can use the SDK like this:
cd into the main directory (you will see the src and examples folder. 
```
nodejs ./examples/get_tempalates.js # returns a list of templates. 
nodejs ./examples/get_document.js # shows details about a document, you will need to use a valid UUID of a signed document. 

```

## Contributing

We welcome contributions to this code! Here's a basic guide on how to make a pull request:

1. **Fork the Repository**: Click the 'Fork' button at the top right of this page. This will create a copy of this repository in your GitHub account.

2. **Clone the Repository**: Navigate to your GitHub account, find the forked repository, click the 'Code' button and then click the 'copy to clipboard' icon to get the URL. Then, open your terminal, navigate to the directory where you want to save the project and run `git clone [URL]`, replacing `[URL]` with the URL you just copied.

3. **Create a New Branch**: Navigate into the cloned repository in your terminal and run `git checkout -b your-branch-name`, replacing `your-branch-name` with a suitable name for your changes.

4. **Make Your Changes**: Make the changes you want to contribute. This could involve fixing bugs, adding new features, or improving documentation.

5. **Commit Your Changes**: Once you've made your changes, stage them for commit by running `git add .`. Then, commit your changes by running `git commit -m "Your commit message"`, replacing `Your commit message` with a brief description of the changes you've made.

6. **Push Your Changes**: Push your changes to your forked repository on GitHub by running `git push origin your-branch-name`.

7. **Submit a Pull Request**: Navigate to your forked repository on GitHub, click the 'Pull request' button, then click 'New pull request'. Select your branch from the dropdown menu, then click 'Create pull request'. Add any additional comments about your changes, then click 'Create pull request' again.

Please ensure your code adheres to our style guide before submitting a pull request. Thank you for your contributions!



## License

This project is licensed under the terms of the MIT license.
