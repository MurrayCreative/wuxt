// https://github.com/avajs/ava/blob/master/docs/06-configuration.md
export default {
  require: ['./test/_setup.js'],
  sources: ['**/*.{js,vue}'],
  snapshotDir: './test/snapshots',
  files: ['./test/e2e/**/*.js'],
  cache: true,
  concurrency: 5,
  failFast: true,
}
