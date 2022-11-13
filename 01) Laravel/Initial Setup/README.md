## Install Laravel
    composer create-project laravel/laravel name_of_your_app

## NPM
    npm install

## Symlink
A symlink is required so that the public folder (and thereby the website) can access the data/media from the storage folder.
    
    php artisan storage:link

## Connect the database
Edit the .env file (constants starting with DB_...)

    php artisan migrate

### Exception?
In case you run into the following exception:

    Illuminate\Database\QueryException  : SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes (SQL: alter table `users` add unique `users_email_unique`(`email`))

add the following to app\Providers\AppServiceProvider into the boot() method:

    Illuminate\Support\Facades\Schema::defaultStringLength(191);

After that run:

    php artisan migrate:fresh