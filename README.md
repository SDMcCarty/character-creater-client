## DESCRIPTION

Kartara is an app to help creators keep all of their character information in one place, as well as helping them to create new ones. They can either enter in information for a character they've already created, or generate random prompts to help them round out a character idea. Saved characters can then be updated or deleted as the creator builds and destroys the lives around them.

## TEST USER

user: USER
password: P@ssword123

## LINK

https://kartara.sdmccarty.vercel.app

## SCREENSHOTS

Login Page
(docs/Login.png)

Homepage
(docs/Homepage.png)

Create Character Page
(docs/CreateCharacter.png)

Save Character Page
(docs/SaveCharacter.png)

Character List Page
(docs/CharacterList.png)

Edit Character Page
(docs/EditCharacter.png)

## COMPONENTS

* App: App in src/components renders the routes and other components for the application to utilize

* Register: RegistraterPage in src/routes loads the page, with src/components/RegistrationForm loading the form

* Login: LoginPage in src/routes is the landing page for log in, with src/components/LoginForm rendering the actual form for logging in

* Create Character: src/components/CreateCharacter loads the form for creating a new character, with src/components/Utils/GetRandom providing the random data

* Review Character: src/components/ReviewCharacter grabs the new character data for the creater to either save or start again

* Character List: src/components/CharacterList displays a users characters and allows them to view more details about them

* 