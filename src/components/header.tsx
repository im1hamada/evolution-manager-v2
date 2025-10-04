import { DoorOpen } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useFetchInstance } from "@/lib/queries/instance/fetchInstance";
import { logout } from "@/lib/queries/token";

import { LanguageToggle } from "./language-toggle";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";

function Header({ instanceId }: { instanceId?: string }) {
  const [logoutConfirmation, setLogoutConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    logout();
    navigate("/manager/login");
  };

  const navigateToDashboard = () => {
    navigate("/manager/");
  };

  const { data: instance } = useFetchInstance({ instanceId });

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b-2 border-border/50 backdrop-blur-sm bg-background/80">
      <Link to="/manager" onClick={navigateToDashboard} className="flex h-10 items-center gap-4 transition-transform hover:scale-105">
        <img src="/assets/images/evolution-logo.png" alt="Logo" className="h-full" />
      </Link>
      <div className="flex items-center gap-3">
        {instanceId && (
          <Avatar className="h-10 w-10 ring-2 ring-primary/20 transition-all hover:ring-primary/40">
            <AvatarImage src={instance?.profilePicUrl || "/assets/images/evolution-logo.png"} alt={instance?.name} />
          </Avatar>
        )}
        <LanguageToggle />
        <ModeToggle />
        <Button onClick={() => setLogoutConfirmation(true)} variant="destructive" size="icon">
          <DoorOpen size="18" />
        </Button>
      </div>

      {logoutConfirmation && (
        <Dialog onOpenChange={setLogoutConfirmation} open={logoutConfirmation}>
          <DialogContent>
            <DialogClose />
            <DialogHeader>Deseja realmente sair?</DialogHeader>
            <DialogFooter>
              <div className="flex items-center gap-4">
                <Button onClick={() => setLogoutConfirmation(false)} size="sm" variant="outline">
                  Cancelar
                </Button>
                <Button onClick={handleClose} variant="destructive">
                  Sair
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </header>
  );
}

export { Header };
