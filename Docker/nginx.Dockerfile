FROM nginx:stable-alpine

# Copy custom Nginx configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy build files from the React app
COPY ./build /usr/share/nginx/html

#expose port nginx
EXPOSE 80

# Perintah untuk menjalankan Nginx
CMD ["nginx", "-g", "daemon off;"]