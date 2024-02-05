### Adding an icon

1. Add the SVG file to the appropriate folder
1. Add a `createIconic` component to the `index.ts` in that folder for that icon (iconName should be lowercase)
1. Bump the version in package.json
1. run `nvm use`
1. run `yarn install` if not yet
1. run `yarn test -u` to update test fixtures
1. Open a PR
1. After merge, release

### Updating an icon

1. Update SVG file with new data
2. Open a PR
3. Release, which will update the sprite.svg (no version bump necessary)

*It will take up to 24 hours for new icon to be seen due to cache*

### Releasing
PreReq: don't forget to bump the version in package.json if you haven't done so.

Run github action (publish)[https://github.com/dynamic-labs/iconic/actions/workflows/publish.yml] to publish new version and deploy sprite svg
