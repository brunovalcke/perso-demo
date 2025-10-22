# perso-demo

Une démonstration personnelle permettant d'explorer rapidement différentes idées de prototypes.

## Prototype actuel : Checkout Decathlon PL

Ce dépôt contient un premier prototype qui reproduit l'étape « Delivery » du checkout
Decathlon pour la Pologne, tel qu'illustré dans la maquette fournie. L'accent est mis sur :

- l'accessibilité (structure sémantique, focus clair, compatibilité clavier) ;
- une mise en page responsive proche de la maquette desktop et mobile ;
- l'option de paiement **BLIK** repliée par défaut et extensible au clic.

Le prototype est entièrement statique : aucun appel réseau ni logique de paiement réelle
n'est implémenté.

### Lancer la démo localement

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/votre-compte/perso-demo.git
   cd perso-demo
   ```
2. Ouvrir `index.html` directement dans votre navigateur **ou** lancer un petit serveur HTTP :
   ```bash
   python -m http.server 3000
   ```
   Puis visiter [http://localhost:3000](http://localhost:3000).

Aucune dépendance n'est nécessaire : HTML, CSS et JavaScript natif suffisent.

## Structure du dépôt

- `index.html` : structure de la page et contenu du checkout.
- `styles.css` : styles responsive inspirés du design Decathlon.
- `script.js` : interactions du prototype (extension/repli du paiement BLIK).
- `README.md` : ce guide.

## Contribution

Les contributions sont les bienvenues. Ouvrez une *issue* pour proposer une amélioration ou
signaler un problème, puis soumettez une *pull request* contenant vos changements.

## Licence

Ce dépôt est distribué sous licence MIT. Consultez le fichier `LICENSE` si vous souhaitez en
savoir plus sur vos droits et obligations.
