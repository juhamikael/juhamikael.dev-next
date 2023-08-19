import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CustomDialogProps {
  prop?: string;
  children?: React.ReactNode;
}

const CustomDialog: FC<CustomDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger className="uppercase font-bold w-full rounded-xl text-card-foreground mb-4">
        View Full-Size Image
      </DialogTrigger>
      <DialogContent>
        {children}
        <DialogDescription className="text-center">
          Images may appear smaller on mobile devices. For a clearer view,
          consider checking on a larger screen.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
export default CustomDialog;
