import { FC } from "react";
import type { ImageComponent } from "@/app/types/sanity";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { client } from "@/../sanity/lib/client";
import CustomDialog from "@/components/custom/CustomDialog";
import StraightLine from "./StraightLine";

const BlockImageComponent: FC<ImageComponent> = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <>
      <Image
        className="my-3 border border-card-foreground/30 p-2 rounded-xl"
        src={urlBuilder(client).image(value).fit("max").auto("format").url()}
        width={width}
        height={height}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
        }}
      />

      <CustomDialog>
        <Image
          className=""
          src={urlBuilder(client).image(value).fit("max").auto("format").url()}
          width={width}
          height={height}
          alt={value.alt || " "}
          loading="lazy"
          style={{
            display: isInline ? "inline-block" : "block",
          }}
        />
      </CustomDialog>
      <StraightLine />
    </>
  );
};

export default BlockImageComponent;
