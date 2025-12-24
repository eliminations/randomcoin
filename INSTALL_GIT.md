# Installing Git on Windows

## Quick Install Steps:

1. **Download Git for Windows:**
   - Go to: https://git-scm.com/download/win
   - Click the download button (it will detect your system - 64-bit Windows)
   - The download should start automatically

2. **Run the Installer:**
   - Double-click the downloaded `.exe` file
   - Click "Next" through the installer
   - **Important settings:**
     - Use default editor (or choose your preferred editor)
     - "Git from the command line and also from 3rd-party software" (recommended)
     - "Use bundled OpenSSH" (default)
     - "Use the OpenSSL library" (default)
     - "Checkout Windows-style, commit Unix-style line endings" (default)
     - "Use MinTTY" (default terminal)
     - Enable file system caching and Git Credential Manager

3. **Complete Installation:**
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

4. **Verify Installation:**
   - Close and reopen your PowerShell/terminal
   - Run: `git --version`
   - You should see something like: `git version 2.x.x`

5. **Configure Git (optional but recommended):**
   ```powershell
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

## After Installation:

Once Git is installed, come back and we'll set up your GitHub repository!

