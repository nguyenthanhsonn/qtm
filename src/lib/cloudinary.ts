import { v2 as cloudinary } from "cloudinary";

// Server-side Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

/** Transformation options for Cloudinary image delivery URLs. */
export interface CloudinaryOptions {
  width?: number;
  height?: number;
  /** Quality level. Defaults to 'auto'. */
  quality?: "auto" | number;
  /** Output format. Defaults to 'auto' (serves WebP/AVIF per browser support). */
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  /** Crop mode. Defaults to 'fill'. Only applied when width or height is set. */
  crop?: "fill" | "fit" | "scale" | "thumb" | "limit";
  /** Gravity for crop focus. Only applied when crop is active. */
  gravity?: "auto" | "face" | "center";
}

/**
 * Extract Cloudinary public_id from a full URL or return the input as-is.
 * Handles:
 *   https://res.cloudinary.com/<cloud>/image/upload/v123456/folder/file.jpg
 *   https://res.cloudinary.com/<cloud>/image/upload/folder/file.webp
 *   plain public_id strings like "folder/image" or "folder/image.jpg"
 */
function extractPublicId(input: string): string {
  if (input.includes("res.cloudinary.com")) {
    // Strip everything up to and including /upload/ and optional version token
    const match = input.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[a-zA-Z0-9]+)?$/);
    return match ? match[1] : input;
  }
  // Plain public_id: strip leading slash only
  return input.replace(/^\//, "");
}

/**
 * Generate an optimized Cloudinary image delivery URL.
 *
 * Accepts either a raw public_id or a full Cloudinary URL — the public_id is
 * extracted automatically from full URLs.
 *
 * f_auto and q_auto are always included. crop and gravity are only applied
 * when at least one dimension (width or height) is specified.
 *
 * @example
 *   // From public_id
 *   getCloudinaryUrl("img_proj_techcombank", { width: 600, height: 400 })
 *   // From full URL
 *   getCloudinaryUrl("https://res.cloudinary.com/s3qilvce/image/upload/v1786452184/img_proj_vinfast.jpg", { width: 600 })
 */
export function getCloudinaryUrl(
  publicIdOrUrl: string,
  options: CloudinaryOptions = {}
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  // Fallback: return original input unchanged if cloud name not configured
  if (!cloudName) return publicIdOrUrl;

  const publicId = extractPublicId(publicIdOrUrl);
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "fill",
    gravity,
  } = options;

  const transforms: string[] = [`f_${format}`, `q_${quality}`];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  // Apply crop/gravity only when a size constraint is present
  if (width || height) {
    transforms.push(`c_${crop}`);
    if (gravity) transforms.push(`g_${gravity}`);
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms.join(",")}/${publicId}`;
}

/**
 * Generate an optimized Cloudinary video delivery URL.
 *
 * Accepts either a raw public_id or a full Cloudinary video URL.
 */
export function getCloudinaryVideoUrl(
  publicIdOrUrl: string,
  options: {
    quality?: string | number;
    format?: "auto" | "mp4" | "webm";
  } = {}
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return publicIdOrUrl;

  const publicId = extractPublicId(publicIdOrUrl);
  const { quality = "auto", format = "auto" } = options;

  return `https://res.cloudinary.com/${cloudName}/video/upload/f_${format},q_${quality}/${publicId}`;
}
