import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export interface SocialProvider {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1-1.265.06a6 6 0 1 0 2.103 6.836l.001-.004h-3.66a1 1 0 0 1-.992-.883L13 13v-2a1 1 0 0 1 1-1h6.945a1 1 0 0 1 .994.89q.06.55.061 1.11c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"
      fill="currentColor"
    />
  </svg>
);

const DEFAULT_SOCIAL_PROVIDERS: SocialProvider[] = [
  { id: "google", name: "Google", icon: GoogleIcon },
  { id: "github", name: "GitHub", icon: Github },
];

interface SocialLoginButtonsProps {
  providers: SocialProvider[];
  onSocialLogin?: (provider: string) => void;
}

function SocialLoginButtons({
  providers,
  onSocialLogin,
}: SocialLoginButtonsProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {providers.map((provider) => {
        const Icon = provider.icon;
        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            className="min-h-11 w-full touch-manipulation"
            key={provider.id}
            onClick={(e) => {
              e.preventDefault();
              onSocialLogin?.(provider.id);
            }}
            type="button"
            variant="outline"
          >
            <Icon aria-hidden="true" className="size-4" />
            Continue with {provider.name}
          </Button>
        );
      })}
    </div>
  );
}

interface AuthDialogStackProps {
  children: ReactNode;
}

export function AuthDialogStack({ children }: AuthDialogStackProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-h-70">
        <DialogHeader>
          <DialogTitle>Join Us!</DialogTitle>
          <DialogDescription>
            Login/Signin with below social providers, One click and you'll be
            in.
          </DialogDescription>
        </DialogHeader>

        <div className="h-full w-full flex items-center justify-center">
          <SocialLoginButtons providers={DEFAULT_SOCIAL_PROVIDERS} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
