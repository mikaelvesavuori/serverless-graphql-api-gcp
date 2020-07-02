# Serverless GraphQL API on Google Cloud Platform

Example of a serverless GraphQL API running on Google Cloud Functions.

Uses [`apollo-server-cloud-functions`](https://www.npmjs.com/package/apollo-server-cloud-functions).

## Prerequisities

- Google Cloud Platform account and project
- `gcloud` CLI installed
- Logged-in at GCP (run `gcloud auth login`)

### Enable APIs

Enable the relevant APIs by running `sh setup.sh`.

## Deploying

_Google Cloud Platform has historically (in my experience, at the very least) had a lot of issues when using Yarn. Your mileage may vary, but I always prefer regular NPM for installation steps when dealing with GCP._

Simply run `sh deploy.sh` to install dependencies, bundle the function and then deploy it.

When it's done, you should be able to reach it at a URL looking something like `https://europe-west1-project-id.cloudfunctions.net/api`.

## Running the API

Use `curl` or a REST client like Insomnia to test your API.

Minimal test...

```
{
  hello
}
```

will result in:

```
{
  "data": {
    "hello": "Hello world!"
  }
}
```

And for a slightly more elaborate query...

```
{
  books {
    title
    author
  }
}
```

should return:

```
{
  "data": {
    "books": [
      {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling"
      },
      {
        "title": "Jurassic Park",
        "author": "Michael Crichton"
      }
    ]
  }
}
```

Your all set to work the wonders of GraphQL! :)
