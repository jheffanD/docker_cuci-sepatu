FROM nginx:stable-alpine

# Copy custom Nginx configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy build files from the React app
COPY ./build /usr/share/nginx/html
