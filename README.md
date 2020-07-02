## DESCRIPTION

Kartara is an app to help creators keep all of their character information in one place, as well as helping them to create new ones. They can either enter in information for a character they've already created, or generate random prompts to help them round out a character idea. Saved characters can then be updated or deleted as the creator builds and destroys the lives around them.

## TEST USER

user: USER
password: P@ssword123

## LINK

https://kartara.sdmccarty.vercel.app

## SCREENSHOTS

Mobile View
[Screenshot](docs/MobileView.png)

Login Page
[Screenshot](docs/Login.png)

Homepage
[Screenshot](docs/Homepage.png)

Create Character Page
[Screenshot](docs/CreateCharacter.png)

Save Character Page
[Screenshot](docs/SaveCharacter.png)

Character List Page
[Screenshot](docs/CharacterList.png)

Edit Character Page
[Screenshot](docs/EditCharacter.png)

## COMPONENTS

* App: App in src/components renders the routes and other components for the application to utilize

* Register: RegistraterPage in src/routes loads the page, with src/components/RegistrationForm loading the form

* Login: LoginPage in src/routes is the landing page for log in, with src/components/LoginForm rendering the actual form for logging in

* Create Character: src/components/CreateCharacter loads the form for creating a new character, with src/components/Utils/GetRandom providing the random data

* Review Character: src/components/ReviewCharacter grabs the new character data for the creater to either save or start again

* Character List: src/components/CharacterList displays a users characters and allows them to view more details about them

* Character Page: src/routes/Character displays the full information available for a character with the option to edit or delete them

* Edit Character: src/components/EditCharacter gives creators the opportunity to edit the information about their characters before saving, canceling, or deleting

* Utils on src/components/Utils provides information for the Private and Public Routes (as well as the Get Random methods mentioned above)

* Context: src/context provides basic context for the app

* Services: src/services has the authorization services needed for page