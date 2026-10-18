# À faire plus tard

Notes de travail. Ce fichier n'est pas publié sur le site (exclu dans `_config.yml`).

## ⚠️ BLOQUANT avant la mise en ligne de la refonte

- [ ] **Déclarer la micro-entreprise** (gratuit, formalites.entreprises.gouv.fr) AVANT de publier la refonte et AVANT tout email de prospection : afficher des prix pour trouver des clients compte déjà comme une activité (Code du travail L8221-4). Puis me donner le SIREN : je l'ajoute aux mentions légales, aux CGV et au modèle de devis.
- [x] **Mentions légales sur le site actuellement en ligne** : publiées le 18/10/2026 sur la branche `main` (en attendant la refonte). À la publication de la refonte, la version de la branche `refonte` remplace celle-ci.

## À vérifier avant la mise en ligne

- [~] **Téléphone de GitHub** (+1 877 448 4820) : trouvé sur des annuaires (service commercial de GitHub), absent de github.com. Acceptable.
- [ ] **Formspree et transfert des données aux États-Unis** : leur politique ne cite aucune garantie précise. **Kerim** : écrire à support@formspree.io pour demander leur DPA (accord de traitement des données) et la garantie de transfert (clauses contractuelles types ou Data Privacy Framework), puis me transmettre la réponse (commentaire `À COMPLÉTER` dans `mentions-legales.html`).
- [x] **Identifiant Formspree** : `mwlvznrw`, en place dans `index.html`.
- [x] **Test réel du formulaire, email seul** : reçu dans Gmail le 18/10/2026. Un message avec « test » et une fausse adresse part dans l'onglet Spam de Formspree, sans email.
- [ ] **Test réel du formulaire, téléphone seul**, depuis le site en ligne.
- [ ] **CGV : 2 règles par défaut à confirmer** (`cgv.html`) : défauts signalés sous 7 jours après la livraison (article 8), et droit de citer le site du client comme référence sauf refus (article 13).

## Règles de travail (obligations légales hors site)

- **Ne jamais faire signer un devis en personne chez le client** : toujours à distance (email, signature électronique). Sinon, pour les petites entreprises, 14 jours de rétractation et aucun paiement possible avant 7 jours (Code de la consommation L221-3, L221-10).
- **Vérifier le SIRET de chaque client** (annuaire-entreprises.data.gouv.fr) avant d'envoyer le devis, et l'écrire sur le devis : l'offre est réservée aux professionnels.
- **Emails de prospection** : seulement en lien avec le métier du destinataire ; terminer chaque email par :
  > Kerim AKGUN EI – KNV.CORP · Adresse trouvée sur [source] · Confidentialité : knvcorp-portfolio.fr/mentions-legales.html#confidentialite · Pour ne plus recevoir de message, répondez STOP.
  Tenir une **liste des personnes qui ont répondu STOP** et ne plus jamais leur écrire.
- **Signature Gmail** : « Kerim AKGUN EI – KNV.CORP · Mantes-la-Jolie · knv.corp.78@gmail.com » (la mention EI est obligatoire sur les documents et la correspondance professionnels).
- **Facture électronique** : à la création de la micro-entreprise, choisir une plateforme agréée de facturation électronique (réception obligatoire depuis le 01/09/2026, émission à partir du 01/09/2027).

## Démos

- [x] **Polices Google des anciennes démos** : hébergées dans le site (`fonts/demos/`, 311 Ko, licences OFL dans `fonts/demos/licences/`), 18/10/2026.
- [x] **Faux numéros** : dans toutes les démos, un clic sur un numéro affiche « numéro fictif » au lieu d'appeler.
- [x] **Démo coiffure** : bouton « Réserver en ligne » retiré, textes corrigés.
- [x] **Anciennes démos** : bandeau « Site de démonstration », `noindex`, avis marqués comme exemples.
- [x] **Démo kiné** : avis de patients et « % de patients satisfaits » retirés (interdits pour un vrai kiné, Code de la santé publique R4321-67-1).

- [ ] **Anciennes démos, à leur refonte** : leur contenu apparaît par animation (classe « reveal ») et reste invisible si un navigateur bloque les animations. Le faire apparaître sans dépendre de l'animation, comme sur la page d'accueil.

## Outils

- Les captures des démos (`images/demos/`) se refont avec Edge en mode invisible (script Node, format téléphone 390 × 844). À refaire après toute modification d'une démo.

## Modèle de devis (en cours)

Mentions obligatoires (Code de commerce L441-9, L441-10, D441-5 ; R526-27) :

> Kerim AKGUN EI – KNV.CORP – SIREN … – TVA non applicable, art. 293 B du CGI.
> Client : raison sociale, SIRET, adresse.
> Paiement : 30 % d'acompte à la signature, solde à la livraison, payable à réception de facture. Pas d'escompte pour paiement anticipé. En cas de retard : pénalités au taux BCE majoré de 10 points, exigibles dès le lendemain de l'échéance, et indemnité forfaitaire de 40 € pour frais de recouvrement (art. L441-10 et D441-5 du Code de commerce).
> Le client reconnaît avoir pris connaissance des conditions générales de vente (knvcorp-portfolio.fr/cgv.html) et les accepter.
