import { unref } from "vue";
import { ExcludeRef, WindowOrDocumentArray } from "./types";

export const refToHTML = <T>( target: T): WindowOrDocumentArray<ExcludeRef<T>>  => Array.isArray(target) ? target.map( item => unref(item)) : [unref(target)]  as any


