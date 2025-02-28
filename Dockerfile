# Use the official NGINX image from Docker Hub
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /zubaer_zisan_ui_garden

# Remove the default NGINX static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the production build into the container's working directory
COPY build/ /zubaer_zisan_ui_garden

# Expose port 8083 to the outside world
EXPOSE 8083

# Replace the default NGINX configuration with one that serves our build
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
