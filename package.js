Package.describe({
    summary: "Bootstrap 3 template with integrated CmsInn "
});

Package.on_use(function (api, where) {
    api.imply('au-cmsinn');
    api.use(['au-cmsinn'], ['client', 'server']);
    api.use(['jquery',  'bootstrap-3', 'templating'], ['client']);

    api.add_files([
        'client/styles/css/main.css',

        'client/views/templates/loading.html',
        'client/views/templates/layout.html',
        'client/views/templates/home.html',
        'client/views/templates/dashboard_layout.html',
        'client/views/templates/dashboard.html',

        'assets/loader.gif',
    
        'config.js'
    ], ['client', 'server']);
});

Package.on_test(function (api) {
});
