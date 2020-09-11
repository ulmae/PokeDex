# PokeDex

- PokeDex made with HTML/CSS/JavaScript/Bootstrap, consuming data from "source" JSON-like JavaScript files.

# Highlights CSS

- Chart is composed of six triangles made out of div borders. These elements are resized according to their respective stat through JavaScript.
- Flex is used to control the numer of cards shown in each row in the container to make it responsive for smaller screens.
- There is a separate animation for each element that should move.
- Media query serves the purpose of centering the loading animation with the Pokeball (where there is no scrollbar) and making part of the content in the modal smaller to avoid taking up too much space on mobile devices.
- The user can scroll at all times, but positioning of the loading animations allow them to keep filling the viewport on load.

# Highlights JavaScript

- Constructed a function in JavaScript to generate the cards and input the content such as name, number, colors, among other details, from a source file.
- Tried to use a variety of properties for element objects to practice their usage and availability when working with HTML DOM.
- Function that is triggered "onclick" serves the purpose of updating the modal's information each time a new card is clicked, recognizing it through its id.

# Highlights Bootstrap usage

- Modal is completely controlled using the attributes from Bootstrap's KB, rather than  explicit event listeners: "data-toggle" and "data-target".
- Cards made with bootstrap as base had a small space on the right side that was empty, hence the space would show between the border and the actual elements on bigger screen sizes. To address this, I used a shadow as a border instead, which seemed to behave as expected on all screen sizes.

# Files used

- Stats are pulled from stats.js, using the variable pokemon_stats.
- All other Pokemon data is pulled from pokemon.js, using the variable pokemon_data.

# Issues

- Chart is not centered
- Chart is not visually appealing
- Pokeball is a little off the center depending on the width of the scrollbar's browser

# Observations

- Labelled with "//reemplazar" all of the functions and specific lines that would need to be updated if the source file for either Pokemon data or Stats changes.
- This set of files will work with a larger source file, but images are displayed as soon as the card is created, so larger datasets may implicate longer loading times.
- The "id" of a card is the corresponding number of the Pokemon.

