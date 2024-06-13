FROM nginx:stable-alpine

# Copy custom Nginx configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy build files from React app
COPY ./build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run command to start Nginx
CMD ["nginx", "-g", "daemon off;"]