# Match - Broadcast Graphics Control System
Match is a broadcast graphics system that acts as both a controller and a visual output mechanism for the graphical overlay for football matches.
Built on standard web technologies, node.js and WebSockets, Match is a lightweight lightning-fast application requiring almost no technical knowledge to set up and operate.

## Requirements

The requirements to run Match are: 

 - Node.JS Runtime Installed
 - NPM (Node Package Manager) Installed
 - OBS (Open Broadcaster Software) Installed.

## Setup

Note - You only need to perform these steps **once per computer** unless you remove the software.

 1. Install the Node.JS Runtime. It can be installed for your operating system from here - https://nodejs.org/en. This will also install the latest version of NPM.
 2. Create a directory named "Match", and copy both the "Interface" and "Server" folders into this directory.
 3. Using the terminal, enter the "Interface" directory and run the command "npm install yarn"
 4. After Yarn has finished installing, run the command "yarn install" to install the interface system dependencies.
 5. Enter the "Server" folder using the terminal and run the command "npm install" to install the server dependencies.

## Running Match

Note - This steps will need to be followed each time you load Match.

 1. Using the terminal, enter the "Interface" directory and run the command "yarn run client" to launch the interface.
 2. Using the terminal, enter the "Server" directory and run the command "node index.js" to launch the server.
 3. Navigate to "localhost:3000" on a web browser to view the control panel
 4. Open OBS and add and visual sources you require
 5. Add a new "Browser Source", setting the URL to "localhost:3000/overlay", the width to 1280, the height to 720, and the FPS to 60

The overlay will now display as a video source in OBS, and the control panel can be used to control visual information on the screen. Thanks to WebSockets, the information in the overlay will change live.

Happy broadcasting!

