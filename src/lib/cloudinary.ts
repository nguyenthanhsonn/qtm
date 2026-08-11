import { v2 as cloudinary } from "cloudinary";

// Server-side Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

/**
 * Helper to generate an optimized Cloudinary delivery URL with auto-format and auto-quality
 * @param publicId - The public ID or path in Cloudinary
 * @param options - Transformation options (width, height, quality, crop, etc.)
 */
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: string | number;
    format?: "auto" | "webp" | "avif" | "mp4";
    crop?: string;
  } = {}
) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    // If not configured yet, return local fallback path
    return publicId.startsWith("/") ? publicId : `/${publicId}`;
  }

  const { width, height, quality = "auto", format = "auto", crop = "limit" } = options;

  const transforms: string[] = [`f_${format}`, `q_${quality}`];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (crop) transforms.push(`c_${crop}`);

  const transformString = transforms.join(",");
  const cleanId = publicId.replace(/^\//, "");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}/${cleanId}`;
}

/**
 * Helper to generate an optimized Cloudinary Video delivery URL
 */
export function getCloudinaryVideoUrl(
  publicId: string,
  options: {
    quality?: string | number;
    format?: "auto" | "mp4" | "webm";
  } = {}
) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    return publicId.startsWith("/") ? publicId : `/${publicId}`;
  }

  const { quality = "auto", format = "auto" } = options;
  const transformString = `f_${format},q_${quality}`;
  const cleanId = publicId.replace(/^\//, "");

  return `https://res.cloudinary.com/${cloudName}/video/upload/${transformString}/${cleanId}`;
}
