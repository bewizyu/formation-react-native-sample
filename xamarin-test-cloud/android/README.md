# XTC Android

## prérequis

Ruby et bundler sont présents sur la machine

## Dépendances

Ouvrir un terminal dans ce dossier

```
  bundle install
```

Les gem sont installés en local sur ce projet, cela permet d'avoir plusieurs version des gem en fonctions des projets ([bundler](http://bundler.io/docs.html))

## Écrire des tests

Voici les steps prédéfinis utilisés sur ce POC: [doc](https://github.com/calabash/calabash-android/blob/master/ruby-gem/lib/calabash-android/canned_steps.md)


## Génration application Android

Ouvrir un terminal à la racine du projet RN

```
  cd android  && ./gradlew clean && ./gradlew assembleRelease
```

Copier l'apk dans ce dossier

```
 cp android/app/build/outputs/apk/app-release.apk xamarin-test-cloud/android/
```

## Run tests

Le plus simple est de connecter un device via usb et de lancer la commande suivante.

```
  bundle exec calabash-android run app-release.apk
```

## Run console

Démarrer la console calabsh pour android permet de pouvoir faire des "queries" afin de mieux cibler les composants de l'interface
[Doc](https://developer.xamarin.com/guides/testcloud/calabash/calabash-query-syntax/)


## Exporter sur Xamarin Test Cloud

Lancer les tests sur un panel de devices dans l'outil Xamarin Test Cloud

```
  bundle exec test-cloud submit app-release.apk 111601b976d66ffa487d9e890d4df44e --devices b53fd08a --series "master" --locale "en_US" --user nhodicq@bewizyu.com

```




