# 🔒 Security Guidelines for Contributors

**⚠️ CRITICAL: This is a PUBLIC repository that powers [docs.taskade.com](https://docs.taskade.com). Never commit sensitive information!**

## 🚨 What NEVER to Commit

### **Environment Variables & Secrets**
```bash
# ❌ NEVER commit these files:
.env
.env.local
.env.production
.env.development
*.key
*.pem
*credentials*
*secrets*
config/local.json
config/production.json
```

### **API Keys & Tokens**
```bash
# ❌ Examples of what NOT to commit:
TASKADE_API_TOKEN=your_api_token_here
GITHUB_TOKEN=your_github_token_here
DATABASE_URL=postgres://user:password@host:5432/db
OPENAI_API_KEY=your_openai_key_here
```

### **Import Scripts & Temporary Data**
```bash
# ❌ These are also excluded:
scripts/                    # Import/sync scripts
package.json               # Node dependencies for scripts
*-urls.txt                 # Temporary URL lists
help-center/_imported/     # Imported content (temporary)
```

## ✅ Safe Practices

### **1. Use Template Files**
Instead of `.env`, create `.env.example.template`:
```bash
# ✅ Safe template example:
# .env.example.template
TASKADE_API_TOKEN=your_api_token_placeholder
GITHUB_TOKEN=your_github_token_placeholder
OPENAI_API_KEY=your_openai_key_placeholder
```

### **2. Check Before Committing**
Always run these commands before committing:
```bash
# Check what you're about to commit
git status
git diff --cached

# Look for sensitive patterns
git diff --cached | grep -i -E "(token|key|secret|password|credential)"

# Verify .gitignore is working
git ls-files | grep -E "\.(env|key|pem)$"
```

### **3. Use Git Hooks (Recommended)**
Create `.git/hooks/pre-commit`:
```bash
#!/bin/bash
# Check for sensitive files
if git diff --cached --name-only | grep -E "\.(env|key|pem)$"; then
    echo "❌ ERROR: Attempting to commit sensitive files!"
    echo "Files found:"
    git diff --cached --name-only | grep -E "\.(env|key|pem)$"
    exit 1
fi

# Check for sensitive content
if git diff --cached | grep -i -E "(token|key|secret|password|credential)" | grep -v "placeholder"; then
    echo "❌ ERROR: Potential sensitive content detected!"
    echo "Content found:"
    git diff --cached | grep -i -E "(token|key|secret|password|credential)" | grep -v "placeholder"
    exit 1
fi
```

## 🛡️ If You Accidentally Commit Secrets

### **Immediate Actions**
1. **DO NOT PUSH** if you haven't already
2. Remove the sensitive file and commit:
```bash
git rm .env
git commit -m "Remove accidentally added .env file"
```

3. If already pushed, **immediately revoke/rotate** the exposed credentials
4. Contact the team lead immediately

### **Clean Git History**
If secrets were pushed, use BFG Repo-Cleaner:
```bash
# Download BFG
wget https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar

# Remove sensitive files from history
java -jar bfg-1.14.0.jar --delete-files .env
java -jar bfg-1.14.0.jar --replace-text passwords.txt

# Force push (coordinate with team!)
git push --force
```

## 📋 Pre-Commit Checklist

Before every commit, verify:

- [ ] ✅ No `.env` files in staging area
- [ ] ✅ No API keys/tokens in code
- [ ] ✅ No credentials in configuration files
- [ ] ✅ No temporary import scripts
- [ ] ✅ No sensitive URLs or endpoints
- [ ] ✅ All secrets use placeholder values like `your_token_placeholder`

## 🔍 Repository Structure

### **Public Content** (✅ Safe to commit)
```
docs.taskade.com/
├── README.md              # Public documentation
├── api/                   # API documentation
├── features/              # Feature guides
├── genesis/               # Genesis documentation
├── automation/            # Automation guides
└── .gitbook/assets/       # Public images/assets
```

### **Private/Hidden Content** (❌ Never commit)
```
Local Development Only:
├── .env                   # Environment variables
├── scripts/               # Import/sync scripts
├── help-center/_imported/ # Temporary imported content
├── package.json           # Script dependencies
└── *-urls.txt            # Temporary URL lists
```

## 🚨 Emergency Contacts

If you accidentally commit sensitive information:

1. **Immediate**: Stop all commits/pushes
2. **Contact**: Team lead or repository maintainer
3. **Action**: Revoke/rotate exposed credentials immediately
4. **Follow-up**: Clean git history if necessary

## 📚 Additional Resources

- [GitHub: Removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- [GitBook Security Best Practices](https://docs.gitbook.com/getting-started/git-sync/security)
- [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)

---

**Remember: This repository is PUBLIC and powers our documentation site. When in doubt, ask before committing!**
