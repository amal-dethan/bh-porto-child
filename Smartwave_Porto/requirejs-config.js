var config = {
    paths: {
        'imagesloaded': 'Smartwave_Porto/js/imagesloaded',
        'packery': 'Smartwave_Porto/js/packery.pkgd',
        'themeSticky': 'js/jquery.sticky.min',
        'bootstrap' : 'Smartwave_Porto/js/bootstrap.bundle.min'
    },
    shim: {
        'packery': {
            deps: ['jquery','imagesloaded']
        },
        'themeSticky': {
            deps: ['jquery']
        }
    }
};
