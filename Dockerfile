# Use the official Nginx image as the base image
FROM nginx:alpine

# Install curl, jq, and tar for fetching, parsing, and extracting
RUN apk add --no-cache git curl tar gettext

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the Nginx configuration template
COPY nginx.conf.template /etc/nginx/nginx.conf.template

COPY . .

# Copy the entrypoint script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Set default value for LB_GATEWAY_API_HOST
ENV LB_GATEWAY_API_HOST=http://localhost:8080

# Copy the tarball
ARG LB_LINSTOR_GUI_VERSION
COPY linstor-gui-${LB_LINSTOR_GUI_VERSION}.tar.gz /linstor-gui.tar.gz

RUN mkdir -p /usr/share/nginx/html && \
    tar -xzf /linstor-gui.tar.gz -C /usr/share/nginx/html --strip-components=2 && \
    rm /linstor-gui.tar.gz

# Expose port 8000
EXPOSE 8000

# Use the entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]
