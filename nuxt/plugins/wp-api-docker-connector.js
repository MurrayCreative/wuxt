export default function(context) {
  // rest api endpoint to localhost in dev, in production end point will be domain/wp-json
  if (process.env.NODE_ENV === 'development') {
    const { app } = context
    app.$wp._options.endpoint = 'http://localhost:3080/wp-json/'
  }
}
