import { FC } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

interface CustomDialogProps {
  imageSrc: string;
}

const CustomDialog: FC<CustomDialogProps> = ({ imageSrc }) => {
  return (
    <Dialog>
      <DialogContent>
        <div className="cursor-pointer">
          <Image
            src={imageSrc}
            alt="Full size"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
