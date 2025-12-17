# Configuration Web3Forms

## Pourquoi Web3Forms?

Web3Forms a été choisi pour remplacer EmailJS car il offre:

- ✅ **Restriction de domaine gratuite** (jusqu'à 3 domaines)
- ✅ **250 emails gratuits par mois**
- ✅ **Aucun branding visible**
- ✅ **Protection anti-spam intégrée**
- ✅ **Notifications par email configurables**

## Étapes de configuration

### 1. Créer un compte Web3Forms

1. Allez sur [https://web3forms.com/](https://web3forms.com/)
2. Cliquez sur "Get Started" ou "Sign Up"
3. Créez un compte gratuit avec votre email

### 2. Obtenir votre Access Key

1. Une fois connecté, vous serez sur le dashboard
2. Cliquez sur "Create New Form"
3. Donnez un nom à votre formulaire (ex: "Portfolio Contact Form")
4. Copiez l'**Access Key** qui ressemble à: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

### 3. Configurer les notifications email

1. Dans le dashboard, allez dans les paramètres de votre formulaire
2. Section **"Email Settings"**:
   - **To Email**: Entrez votre adresse email où vous voulez recevoir les messages
   - **From Name**: "Portfolio Contact Form" (déjà configuré dans le code)
   - **Subject**: "Nouveau message de contact" (déjà configuré dans le code)

### 4. Ajouter la restriction de domaine (IMPORTANT pour la sécurité)

1. Dans les paramètres du formulaire, section **"Security Settings"**
2. **Allowed Domains**: Ajoutez votre domaine:
   ```
   charleseuzo.github.io
   ```
3. Si vous testez en local, ajoutez aussi:
   ```
   localhost
   ```
4. Cochez **"Enable Domain Restriction"**

### 5. Ajouter l'Access Key dans votre projet

1. Ouvrez le fichier `.env` à la racine du projet
2. Remplacez `your_access_key_here` par votre vraie clé:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```
3. **⚠️ Important**: Ne commitez JAMAIS ce fichier sur GitHub!
   - Le fichier `.env` est déjà dans `.gitignore`
   - Utilisez uniquement `.env.example` pour la documentation

### 6. Redémarrer le serveur de développement

```bash
npm run dev
```

Le serveur doit redémarrer pour prendre en compte les nouvelles variables d'environnement.

## Tester le formulaire

### En développement local

1. Allez sur la page Contact: `http://localhost:5173/#/contact`
2. Remplissez le formulaire avec des données de test
3. Cliquez sur "Envoyer le message"
4. Vérifiez que le message de succès s'affiche
5. Vérifiez votre boîte email pour le message reçu

### En production

1. Déployez votre site sur GitHub Pages
2. Testez le formulaire sur `https://charleseuzo.github.io/portfolio-react/#/contact`
3. Vérifiez la réception des emails

## Fonctionnalités de sécurité implémentées

### 1. Honeypot

- Champ invisible qui piège les bots
- Si un bot remplit ce champ, la soumission est silencieusement bloquée
- Les humains ne voient pas ce champ

### 2. Restriction de domaine

- Configurée dans le dashboard Web3Forms
- Seuls les domaines autorisés peuvent envoyer des emails
- Protège contre l'utilisation non autorisée de votre clé

### 3. Validation côté client

- Vérification des champs requis
- Validation du format email
- Vérification de la longueur du message (min 10 caractères)

### 4. Variables d'environnement

- L'Access Key est stockée dans `.env`
- Jamais exposée dans le code source public
- Accessible uniquement via `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`

## Dépannage

### Le formulaire ne fonctionne pas

1. Vérifiez que l'Access Key est correctement dans `.env`
2. Redémarrez le serveur de développement
3. Vérifiez la console du navigateur pour les erreurs
4. Assurez-vous que le domaine est autorisé dans Web3Forms

### Les emails ne sont pas reçus

1. Vérifiez votre dossier spam
2. Vérifiez l'adresse email dans les paramètres Web3Forms
3. Vérifiez que la restriction de domaine n'est pas trop stricte

### Erreur "Access Denied"

- Le domaine n'est pas dans la liste des domaines autorisés
- Ajoutez le domaine dans Web3Forms Security Settings

## Limites du plan gratuit

- **250 emails par mois**
- **3 domaines maximum**
- **Spam protection basique**

Pour plus d'emails ou de fonctionnalités avancées, consultez les plans payants sur [web3forms.com/pricing](https://web3forms.com/pricing).

## Support

- Documentation officielle: [https://docs.web3forms.com/](https://docs.web3forms.com/)
- Support: [https://web3forms.com/support](https://web3forms.com/support)
