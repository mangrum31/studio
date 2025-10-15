'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [canBeInstalled, setCanBeInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanBeInstalled(true);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsAppInstalled(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsAppInstalled(true);
    } else {
        // This is a simple check. A more robust solution might involve checking navigator properties.
        // For our purpose, we'll assume it's installable if not in standalone.
        setCanBeInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setIsAppInstalled(true);
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
    } else {
        // Fallback for browsers that don't fire the event but might support installation.
        alert("To install the app, use your browser's 'Add to Home Screen' or 'Install' option.");
    }
  };

  if (isAppInstalled || !canBeInstalled) {
    return null;
  }

  return (
    <Button onClick={handleInstallClick} variant="outline">
      <Download className="mr-2 h-4 w-4" />
      Download App
    </Button>
  );
}
