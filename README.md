# music-library-app

**Navigation**
  - **React Navigation**

**State Management**
  - **Redux** - I chose redux for managing the state since it is centralized. It is easier to access state from different screens.

**Persistent Storage Solution**
  - **Redux-Persist / Async Storage** - Since redux is already setup, I used redux-persist to save the selected preference for grouping the songs in the list so it can still be preserved on the next app launches. Added Async Storage as well for the local storage engine to use.

**During the development:**

Navigation and creation of shared components was setup first because it is easier to develop features when these things are already created/setup.

Next is setup Redux for state management. Since the API is already provided, I was able to see all the data that will be stored in state.

Then, I started with the development of the songs list screen with search and section preference modal. After that I started the song details screen along with some styling updates to design the app a little.

Lastly, I setup redux-persist to store the section preference selected. Since the data is stored within the state already, I just setup its persistence and whitelabel that state so that's the only data expected to be persisted.