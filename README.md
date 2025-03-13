# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Project Scope

### Functional Requirements

| ID     | Description of Requirement                                                                                                | Priority |
| ------ | ------------------------------------------------------------------------------------------------------------------------- | -------- |
| RF-001 | The Web application should allow the registration of new users                                                            | HIGH     |
| RF-002 | The application will provide information about the terms of use                                                           | MEDIUM   |
| RF-003 | The application will have a page that presents itself immediately after user registration and with a form to be completed | MEDIUM   |
| RF-004 | The application will perform user validation via a confirmation email                                                     | MEDIUM   |
| RF-005 | The application will allow the user to log in to the site with username and password                                      | HIGH     |
| RF-006 | The application will allow the user to request a password reset by entering their registered email address                | MEDIUM   |
| RF-007 | The application should allow the user to manage their registration for deletion, consultation, and modification           | HIGH     |
| RF-008 | The Web application will only allow registered users to create/modify/update their pet adoption listings                  | HIGH     |
| RF-009 | The application should allow NGOs to register their adoption events                                                       | MEDIUM   |
| RF-010 | The application will allow viewing of "pets" registered and posted by donors                                              | HIGH     |
| RF-011 | The application should allow viewing of profiles of potential guardians and donors                                        | MEDIUM   |
| RF-012 | The Web application will allow users to view events registered by NGOs on a special featured page                         | MEDIUM   |
| RF-013 | The application should allow NGOs to manage their adoption event ads                                                      | MEDIUM   |
| RF-014 | The Web application will have an area where users can post photos, with captions, of their "pets"                         | MEDIUM   |
| RF-015 | The Web application should incorporate feedback mechanisms to allow users to provide comments on their experience         | LOW      |

### Non-Functional Requirements

| ID      | Description of Requirement                                                                                                                  | Priority |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| RNF-001 | The site must be responsive, that is, it must respond optimally and adapt, without distortions, to the resolution of mobile devices         | MEDIUM   |
| RNF-002 | The interface must be pleasant, practical, and easy to use                                                                                  | HIGH     |
| RNF-003 | The system must be cross-platform, enabling its use on devices with Microsoft Windows, Linux, or MacOS operating systems                    | HIGH     |
| RNF-004 | The system must guarantee data security in accordance with the General Law on the Protection of Personal Data (Brazilian Law 13709/2018)    | MEDIUM   |
| RNF-005 | The application must send the user an email for registration confirmation                                                                   | LOW      |
| RNF-006 | The Web application will offer relevant information about local shelters and resources through the geolocation mechanism                    | LOW      |
| RNF-007 | The Web application should have a filter mechanism, by State and size, to facilitate the search of potential guardians for the ideal animal | LOW      |

### Restrictions

| ID  | Restriction                                                |
| --- | ---------------------------------------------------------- |
| 01  | The project must be delivered by the end of the semester   |
| 02  | A backend module cannot be developed                       |
| 03  | The project must be developed in HTML, CSS, and JavaScript |
| 04  | There should be no monetary transactions within the site   |
