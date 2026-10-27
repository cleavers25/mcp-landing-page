# Production Dockerfile for Coolify Deployment
FROM nginx:alpine

# Label metadata
LABEL maintainer="Antigravity Pair Programmer"
LABEL description="MCP Landing Page on Nginx Alpine"

# Replace default Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production static assets
COPY index.html style.css app.js /usr/share/nginx/html/

# Expose standard HTTP port
EXPOSE 80

# Health check to ensure zero-downtime rolling updates in Coolify
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/healthz || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
