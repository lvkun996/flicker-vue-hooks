import { Ref } from "vue";

export type ExcludeKV<T, U> = T extends U ? never : T;

export type BasicTarget = HTMLElement | Ref<HTMLElement> | HTMLElement[] | Ref<HTMLElement>[]

export type ExcludeRef<T> = ExcludeKV<T, Ref<HTMLElement> |  Ref<HTMLElement>[]>

export type WindowOrDocumentArray<T> = T extends Window ? Window[] : T extends Document ? Document[] : T extends HTMLElement ? HTMLElement[] : T