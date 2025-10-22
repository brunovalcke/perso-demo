# perso-demo

Une démonstration personnelle permettant d'explorer rapidement différentes idées de prototypes.

## Prototype actuel : Checkout Decathlon PL

Ce dépôt contient un premier prototype qui reproduit l'étape « Delivery » du checkout
Decathlon pour la Pologne, tel qu'illustré dans la maquette fournie. L'accent est mis sur :

- l'accessibilité (structure sémantique, focus clair, compatibilité clavier) ;
- une mise en page responsive proche de la maquette desktop et mobile ;
- l'option de paiement **BLIK** repliée par défaut et extensible au clic.

Le prototype est désormais servi par un petit serveur Node.js basé sur le module HTTP.
Aucun appel réseau ni logique de paiement réelle n'est implémenté.

### Lancer la démo localement

1. Installer les dépendances Node.js (aucune dépendance externe n'est requise) et
démarrer le serveur :
   ```bash
   npm install
   npm start
   ```
2. Visiter ensuite [http://localhost:3000](http://localhost:3000).

> `npm install` crée uniquement le fichier `package-lock.json` afin d'enregistrer la
> version de Node utilisée, aucune dépendance réseau n'est téléchargée.

Les fichiers statiques se trouvent dans le dossier `public/` et sont servis par le serveur
Node.

## Structure du dépôt

- `public/index.html` : structure de la page et contenu du checkout.
- `public/styles.css` : styles responsive inspirés du design Decathlon.
- `public/script.js` : interactions du prototype (extension/repli du paiement BLIK).
- `server.js` : serveur HTTP minimal qui expose la démo sur http://localhost:3000.
- `package.json` : scripts npm et métadonnées du projet.
- `README.md` : ce guide.

## Contribution

Les contributions sont les bienvenues. Ouvrez une *issue* pour proposer une amélioration ou
signaler un problème, puis soumettez une *pull request* contenant vos changements.

## Licence

Ce dépôt est distribué sous licence MIT. Consultez le fichier `LICENSE` si vous souhaitez en
savoir plus sur vos droits et obligations.
