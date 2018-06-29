# CovoitAng

## Installation du virtual host angular

Copier le fichier "ang.conf" dans la conf apache2
```bash
sudo mv ang.conf /etc/apache2/sites-available/.
```
Activer le virtual host
```bash
a2ensite ang.conf
service apache2 reload
```
Attribuer le nom d'hôte "foang.cir3-frm-smf-ang-33" à une adresse IP
```bash
sudo vim /etc/hosts
<ypur_ip> foang.cir3-frm-smf-ang-33
```

## Utilisation

### Front Office Url : http://foang.cir3-frm-smf-ang-33




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
