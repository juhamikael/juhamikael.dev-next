import { FC } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const CustomDialog: FC<CustomDialogProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogContent>
        <div onClick={onClose} className="cursor-pointer">
          <Image
            src={imageSrc}
            alt="Full size"
            layout="responsive"
            width={800} // Adjust as needed
            height={600} // Adjust as needed
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
