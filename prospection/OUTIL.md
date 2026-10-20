# KNV Prospects : cahier des charges (validé par Kerim le 20/10/2026)

Outil qui remplace le Google Sheets « Prospection KNV.CORP ». Le Sheets reste intact comme archive, plus personne ne l'écrit.

## Forme

- Page privée sur claude.ai (Artifact) avec sa base de données (`db` + `user`), utilisée par Kerim seul.
- Pensée d'abord pour le téléphone, marche aussi sur ordinateur. Identité du site : fond clair, orange KNV (#c4441f), Archivo, gros boutons au pouce.
- Testé le 20/10 : une tâche cloud lit et écrit bien dans la base d'une page (ArtifactData).

## Écrans

1. **Liste** : onglets par statut, barre de recherche (nom, ville, email), compteur du jour en haut (à valider, validés, envoyés). Carte = entreprise, métier · ville, badge du cas (Pas de site / Vieux site / Site gratuit / Réseaux seulement), score /10, badge « Près de chez toi » (Mantes, Yvelines). « À valider » trié par score décroissant. Badge « en attente depuis N jours » sur les « En attente ».
2. **Fiche** : toutes les infos, constat, lien vers son site, aperçu du mail exactement comme le prospect le recevra (gabarit HTML de `MODELES.md`), objet et texte modifiables (signature et pied de page non modifiables), boutons Valider / En attente / Refuser / Liste noire, bouton « Demander à Claude » (Plus court, Plus chaleureux, Corrige le français, champ libre ; la proposition s'affiche à côté, « Remplacer » ou « Garder l'ancien » ; ne va pas sur internet : les demandes de recherche vont au journal). Place « Maquette » prévue pour plus tard.
3. **Tri rapide** : une fiche plein écran à la fois, Valider / En attente / Refuser en bas, fiche suivante automatique.
4. **Ajouter un prospect** : email, site (ou « pas de site »), note facultative → statut « À analyser ».
5. **Journal** : toutes les actions de Kerim et de Claude, horodatées.
6. **Liste noire** : onglet à part avec raison et date ; « Retirer de la liste noire » avec confirmation, impossible pour un STOP.
7. **Interrupteur d'envoi** : « Envoi automatique : coupé / activé » ; activation = SIRET + confirmation « Ma micro-entreprise est déclarée ».

Comportements : Refuser propose des étiquettes facultatives (Pas intéressant, Email douteux, Chaîne ou franchise, Son site est bien, Autre). Liste noire demande confirmation dans la page. Chaque action affiche « … · Annuler » pendant 5 s. Chaque action et chaque modification du mail est écrite au journal.

## Statuts

À analyser · À valider · Validé · En attente · Refusé · Liste noire · Brouillon (prêt dans Gmail) · Envoyé · Relance 1 · Relance 2 · A répondu · Terminé.

## Données par prospect

Colonnes du Sheets (date d'ajout, entreprise, métier, ville, département, email, source de l'email, site actuel, cas, constat, score, maquette, objet, mail, statut, date d'envoi, dates de relance, fil Gmail, notes de Kerim) + raison du refus, badge local, réponse du prospect, historique de la fiche.

## Tâches cloud (à réécrire pour l'outil, accès au Sheets retiré)

- **Recherche** (lun-ven matin) : ajoute en « À valider » dans l'outil. Plus de maquettes pour l'instant.
- **Envoi** (lun-ven matin) : lit l'interrupteur. Coupé → chaque « Validé » devient un brouillon Gmail (statut Brouillon). Activé → envoie les « Validé » (20/jour, mardi-jeudi 8-10 h…), relances, lit les réponses (« A répondu », réponse collée dans la fiche, brouillon de réponse, mail d'alerte 🔥 gardé), STOP → liste noire.
- **Passage de 14 h** (lun-ven) : analyse les « À analyser », crée les brouillons des « Validé ». Pas de nouvelle recherche.
- **Rapports** : restent par mail (mercredi, samedi, dimanche soir, plan du lundi matin).

## Migration

Les prospects du Sheets sont copiés avec leurs statuts, mails et notes ; les 17 brouillons Gmail sont gardés (statut Brouillon) ; les 15 prospects du 20/10 sont revérifiés et réécrits au nouveau modèle avant d'arriver en « À valider ».
