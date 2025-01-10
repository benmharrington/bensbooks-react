/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const BooksLazyImport = createFileRoute('/books')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const BooksIndexLazyImport = createFileRoute('/books/')()
const BooksBookIdLazyImport = createFileRoute('/books/$bookId')()

// Create/Update Routes

const BooksLazyRoute = BooksLazyImport.update({
  id: '/books',
  path: '/books',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/books.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const BooksIndexLazyRoute = BooksIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => BooksLazyRoute,
} as any).lazy(() => import('./routes/books/index.lazy').then((d) => d.Route))

const BooksBookIdLazyRoute = BooksBookIdLazyImport.update({
  id: '/$bookId',
  path: '/$bookId',
  getParentRoute: () => BooksLazyRoute,
} as any).lazy(() => import('./routes/books/$bookId.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/books': {
      id: '/books'
      path: '/books'
      fullPath: '/books'
      preLoaderRoute: typeof BooksLazyImport
      parentRoute: typeof rootRoute
    }
    '/books/$bookId': {
      id: '/books/$bookId'
      path: '/$bookId'
      fullPath: '/books/$bookId'
      preLoaderRoute: typeof BooksBookIdLazyImport
      parentRoute: typeof BooksLazyImport
    }
    '/books/': {
      id: '/books/'
      path: '/'
      fullPath: '/books/'
      preLoaderRoute: typeof BooksIndexLazyImport
      parentRoute: typeof BooksLazyImport
    }
  }
}

// Create and export the route tree

interface BooksLazyRouteChildren {
  BooksBookIdLazyRoute: typeof BooksBookIdLazyRoute
  BooksIndexLazyRoute: typeof BooksIndexLazyRoute
}

const BooksLazyRouteChildren: BooksLazyRouteChildren = {
  BooksBookIdLazyRoute: BooksBookIdLazyRoute,
  BooksIndexLazyRoute: BooksIndexLazyRoute,
}

const BooksLazyRouteWithChildren = BooksLazyRoute._addFileChildren(
  BooksLazyRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/books': typeof BooksLazyRouteWithChildren
  '/books/$bookId': typeof BooksBookIdLazyRoute
  '/books/': typeof BooksIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/books/$bookId': typeof BooksBookIdLazyRoute
  '/books': typeof BooksIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/books': typeof BooksLazyRouteWithChildren
  '/books/$bookId': typeof BooksBookIdLazyRoute
  '/books/': typeof BooksIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/books' | '/books/$bookId' | '/books/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/books/$bookId' | '/books'
  id: '__root__' | '/' | '/about' | '/books' | '/books/$bookId' | '/books/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  BooksLazyRoute: typeof BooksLazyRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  BooksLazyRoute: BooksLazyRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/books"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/books": {
      "filePath": "books.lazy.tsx",
      "children": [
        "/books/$bookId",
        "/books/"
      ]
    },
    "/books/$bookId": {
      "filePath": "books/$bookId.lazy.tsx",
      "parent": "/books"
    },
    "/books/": {
      "filePath": "books/index.lazy.tsx",
      "parent": "/books"
    }
  }
}
ROUTE_MANIFEST_END */
