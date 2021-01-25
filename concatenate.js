const concat = require('concat');

concatenate = async () => {
    const files = [
        './dist/apps/angular-elements-example-child-app/runtime.js',
        './dist/apps/angular-elements-example-child-app/main.js'
    ];

    await concat(files, './dist/apps/angular-elements-example-child-app/exampleScript.js');
}

concatenate();