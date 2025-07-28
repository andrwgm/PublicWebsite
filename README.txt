How to launch the project locally
================================

1. **Using Docker:**
   - Make sure you have Docker installed.
   - Build the Docker image:
     docker build -t psiclinic-web .
   - Run the Docker container:
     docker run -p 3000:3000 psiclinic-web
   - The app will be available at http://localhost:3000

2. **Using npm (without Docker):**
   - Make sure you have Node.js and npm installed.
   - Install dependencies:
     npm install
   - Start the development server:
     npm start
   - The app will be available at http://localhost:3000

3. **Project Structure:**
   - The main code is in the `src/` directory.
   - Edit the components in `src/components/` to customize your site.

4. **PrimeReact:**
   - UI components are from [PrimeReact](https://primereact.org/).
   - See their docs for more info. 