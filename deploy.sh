# Install dependencies
cd api
npm install
cd ..

# Remove ZIP deployment bundle if it exists since before
rm -f bundle.zip

# Bundle API code folder in preparation for deployment
zip -r bundle.zip api

# Deploy with gcloud CLI
gcloud beta functions deploy api \
  --runtime nodejs12 \
  --trigger-http \
  --memory 2048MB \
  --entry-point api \
  --source api \
  --allow-unauthenticated