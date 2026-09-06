import { astor1 } from "./properties/astor-1";
import { noblePalaceTayThangLong } from "./properties/noble-palace-tay-thang-long";
import { vistaNamAnKhanh } from "./properties/vista-nam-an-khanh";
import type { Estate } from "./types";

export const estates: Estate[] = [astor1, vistaNamAnKhanh, noblePalaceTayThangLong];

export function getEstateBySlug(slug: string) {
  return estates.find((estate) => estate.slug === slug);
}