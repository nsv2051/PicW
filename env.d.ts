/// <reference types="vite/client" />
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    keepAlive?: boolean
    requiresAuth?: boolean
  }
}

declare interface textChip {
  label: string
  text: string
}
declare type CdnUrlItemsType = (username: string, repository: string, directory: string, filename: string) => textChip[]
declare type FileNameType = (filename: string, md5: string) => string

declare type RemoveReadonly<T> = { -readonly [P in keyof T]: T[P] }
