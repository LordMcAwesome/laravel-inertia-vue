## Install Inertia
Before: Setup Laravel

Follow the documentation:
- https://inertiajs.com/server-side-setup
- https://inertiajs.com/client-side-setup

### Server site - Additional infos
#### Root template
In the resources\views folder you only need an app.blade.php file.<br>
Into this, you place the root template HTML-code from the documentation.<br>
In later stages it can look like this:

    <!DOCTYPE html>
    <html data-theme="winter">
      <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <!-- Fonts -->
          <link href="https://fonts.cdnfonts.com/css/nunito" rel="stylesheet">
          @vite('resources/css/app.css')
          @inertiaHead
      </head>
      <body class="font-sans antialiased">
        @inertia
        @routes
        @vite('resources/js/app.js')
      </body>
    </html>


### Client site - Additional infos
- In the folder resources\js you have a file app.js. In later stages it can look like the app.js in this folder. 
- Create a folder Pages inside resources\js. 
- Additional packages to install:


    npm install -D @vue/compiler-sfc
    ...

- Vite config can be found in this folder.
- Tailwind config can be found in this folder.
- In order to use the laravel routes within Vue via route("nameOfRoute"), add the following to the setup in the app.js


    app.mixin({ methods: { route } });