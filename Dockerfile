# Use the official NGINX image from Docker Hub
FROM nginx:alpine

# Set the working directory inside the container (updated name)
WORKDIR /zubaer_zisan_ui_garden_build_checks

# Remove the default NGINX static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the production build into the container's working directory
COPY build/ /zubaer_zisan_ui_garden_build_checks

# Expose port 8018 to the outside world
EXPOSE 8018

# Replace the default NGINX configuration with one that serves our build
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
