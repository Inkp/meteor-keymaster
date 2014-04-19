Package.describe({
    summary: "Keymaster is a simple micro-library for defining and dispatching keyboard shortcuts in web applications."
});

Package.on_use(function (api) {
    api.add_files('lib/keymaster/keymaster.js', ['client']);

});
