# Contributing to Extend Core

Thank you for considering contributing to **Extend Core**! Your help is always welcome. Follow the steps below to get started.

---

## 1. Fork the Repository

1. Click the **Fork** button at the top right of the repository page.  
2. Clone your forked repository to your local machine:

git clone https://github.com/your-username/extend-core.git
cd extend-core

---

## 2. Create a Branch

Always create a new branch for your changes instead of working directly on `main`:

git checkout -b feature/my-new-feature

- Use descriptive names like `fix/typo-in-array` or `feature/add-string-utils`.

---

## 3. Install Dependencies

Install project dependencies:

yarn install
# or
npm install

---

## 4. Make Your Changes

- Follow the existing code style.  
- Write TypeScript typings if you are adding new utilities.  
- Add tests for new functionality whenever possible.  

---

## 5. Test Your Changes

Run tests to make sure everything works:

yarn test
# or
npm test

---

## 6. Commit Your Changes

- Write clear commit messages:  
  feat: add myCustomMethod to Array  
  fix: correct typo in StringUtils

- Commit your changes:

git add .
git commit -m "feat: add myCustomMethod to Array"

---

## 7. Push and Open a Pull Request

git push origin feature/my-new-feature

- Go to your fork on GitHub and open a Pull Request against the main repository’s `main` branch.  
- Provide a clear description of what your PR does and why it is needed.

---

## 8. Code Review and Feedback

- Be responsive to comments on your PR.  
- Make requested changes by committing to the same branch.  

---

## 9. Celebrate! 🎉

Once your PR is merged, your contributions become part of **Extend Core**.

---

Thank you for helping make **Extend Core** better! 💜
