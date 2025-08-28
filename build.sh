#!/bin/bash
# Build script that bypasses npm dependency issues

echo "Starting custom build process..."

# Remove any cached files
rm -rf node_modules package-lock.json yarn.lock

# Install dependencies with force flags
npm install --force --legacy-peer-deps --no-optional

# Build the project
npm run build

echo "Build completed successfully!"