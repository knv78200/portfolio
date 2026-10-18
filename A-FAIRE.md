# À faire plus tard

Notes de travail. Ce fichier n'est pas publié sur le site (exclu dans `_config.yml`).

## À vérifier avant la mise en ligne

- [~] **Téléphone de GitHub** dans `mentions-legales.html` (+1 877 448 4820) : vérifié le 18/10/2026 sur des annuaires (c'est le service commercial de GitHub), mais il n'apparaît pas sur github.com. Acceptable pour les mentions légales ; à remplacer si GitHub publie un numéro officiel.
- [ ] **Formspree et transfert des données aux États-Unis** : leur politique de confidentialité (vérifiée le 18/10/2026) dit seulement qu'ils « prennent des mesures » pour protéger les données, sans citer de garantie précise. **Kerim** : écrire à Formspree (support@formspree.io) pour demander leur DPA (accord de traitement des données) et la garantie de transfert (clauses contractuelles types ou Data Privacy Framework), puis me donner la réponse pour compléter `mentions-legales.html`.
- [x] **Identifiant Formspree** : `mwlvznrw`, en place dans `index.html`.
- [x] **Test réel du formulaire, email seul** : reçu dans Gmail le 18/10/2026. Attention : un message avec « test » et une fausse adresse part dans l'onglet Spam de Formspree, sans email.
- [ ] **Test réel du formulaire, téléphone seul**, depuis le site en ligne, et vérifier qu'il arrive dans Gmail.
- [ ] **SIRET et adresse** dans `mentions-legales.html`, dès que la micro-entreprise est créée.

## Démos

- [ ] **Polices Google des 4 anciennes démos** (boulangerie, kiné, coiffure, fitness) : elles chargent leurs polices depuis `fonts.googleapis.com`, ce qui envoie l'adresse IP des visiteurs à Google. À héberger dans le site (téléchargement à valider par Kerim) ou à remplacer.
- [x] **Faux numéros** : dans toutes les démos, un clic sur un numéro affiche « numéro fictif » au lieu d'appeler (18/10/2026). Les iPhone ne transforment plus les numéros en liens dans les anciennes démos.
- [x] **Liens morts de la démo coiffure** : bouton « Réserver en ligne » retiré, texte « réservation 24h/24 » corrigé.
- [x] **Numéros 01 99 00 xx xx** (couvreur, plombier) : aucune source officielle de l'ARCEP trouvée qui confirme une plage réservée à la fiction ; l'appel est donc bloqué (voir « Faux numéros »).
- [x] **Anciennes démos** : bandeau « Site de démonstration, entreprise fictive » avec lien retour, et balise `noindex`, ajoutés sur les 12 pages.

## Outils

- Les captures des démos (`images/demos/`) se refont avec Edge en mode invisible (script Node, format téléphone 390 × 844). À refaire après toute modification d'une démo.

## Modèle de devis (à créer)

Phrase à inclure dans le devis :

> À réception du paiement complet, le client devient propriétaire du site et de ses contenus. Le nom de domaine est enregistré à son nom.
