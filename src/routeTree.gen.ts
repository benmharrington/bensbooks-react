/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SynopsesImport } from './routes/synopses'
import { Route as BooksImport } from './routes/books'
import { Route as AuthorsImport } from './routes/authors'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as SynopsesIndexImport } from './routes/synopses/index'
import { Route as BooksIndexImport } from './routes/books/index'
import { Route as AuthorsIndexImport } from './routes/authors/index'
import { Route as SynopsesSynopsisIdImport } from './routes/synopses/$synopsisId'
import { Route as BooksNewImport } from './routes/books/new'
import { Route as BooksBookIdImport } from './routes/books/$bookId'
import { Route as AuthorsNewImport } from './routes/authors/new'
import { Route as AuthorsAuthorIdImport } from './routes/authors/$authorId'
import { Route as BooksBookIdSynopsesImport } from './routes/books/$bookId.synopses'
import { Route as BooksBookIdSynopsesCreateImport } from './routes/books/$bookId.synopses_.create'

// Create/Update Routes

const SynopsesRoute = SynopsesImport.update({
  id: '/synopses',
  path: '/synopses',
  getParentRoute: () => rootRoute,
} as any)

const BooksRoute = BooksImport.update({
  id: '/books',
  path: '/books',
  getParentRoute: () => rootRoute,
} as any)

const AuthorsRoute = AuthorsImport.update({
  id: '/authors',
  path: '/authors',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SynopsesIndexRoute = SynopsesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => SynopsesRoute,
} as any)

const BooksIndexRoute = BooksIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => BooksRoute,
} as any)

const AuthorsIndexRoute = AuthorsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthorsRoute,
} as any)

const SynopsesSynopsisIdRoute = SynopsesSynopsisIdImport.update({
  id: '/$synopsisId',
  path: '/$synopsisId',
  getParentRoute: () => SynopsesRoute,
} as any)

const BooksNewRoute = BooksNewImport.update({
  id: '/new',
  path: '/new',
  getParentRoute: () => BooksRoute,
} as any)

const BooksBookIdRoute = BooksBookIdImport.update({
  id: '/$bookId',
  path: '/$bookId',
  getParentRoute: () => BooksRoute,
} as any)

const AuthorsNewRoute = AuthorsNewImport.update({
  id: '/new',
  path: '/new',
  getParentRoute: () => AuthorsRoute,
} as any)

const AuthorsAuthorIdRoute = AuthorsAuthorIdImport.update({
  id: '/$authorId',
  path: '/$authorId',
  getParentRoute: () => AuthorsRoute,
} as any)

const BooksBookIdSynopsesRoute = BooksBookIdSynopsesImport.update({
  id: '/synopses',
  path: '/synopses',
  getParentRoute: () => BooksBookIdRoute,
} as any)

const BooksBookIdSynopsesCreateRoute = BooksBookIdSynopsesCreateImport.update({
  id: '/synopses_/create',
  path: '/synopses/create',
  getParentRoute: () => BooksBookIdRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/authors': {
      id: '/authors'
      path: '/authors'
      fullPath: '/authors'
      preLoaderRoute: typeof AuthorsImport
      parentRoute: typeof rootRoute
    }
    '/books': {
      id: '/books'
      path: '/books'
      fullPath: '/books'
      preLoaderRoute: typeof BooksImport
      parentRoute: typeof rootRoute
    }
    '/synopses': {
      id: '/synopses'
      path: '/synopses'
      fullPath: '/synopses'
      preLoaderRoute: typeof SynopsesImport
      parentRoute: typeof rootRoute
    }
    '/authors/$authorId': {
      id: '/authors/$authorId'
      path: '/$authorId'
      fullPath: '/authors/$authorId'
      preLoaderRoute: typeof AuthorsAuthorIdImport
      parentRoute: typeof AuthorsImport
    }
    '/authors/new': {
      id: '/authors/new'
      path: '/new'
      fullPath: '/authors/new'
      preLoaderRoute: typeof AuthorsNewImport
      parentRoute: typeof AuthorsImport
    }
    '/books/$bookId': {
      id: '/books/$bookId'
      path: '/$bookId'
      fullPath: '/books/$bookId'
      preLoaderRoute: typeof BooksBookIdImport
      parentRoute: typeof BooksImport
    }
    '/books/new': {
      id: '/books/new'
      path: '/new'
      fullPath: '/books/new'
      preLoaderRoute: typeof BooksNewImport
      parentRoute: typeof BooksImport
    }
    '/synopses/$synopsisId': {
      id: '/synopses/$synopsisId'
      path: '/$synopsisId'
      fullPath: '/synopses/$synopsisId'
      preLoaderRoute: typeof SynopsesSynopsisIdImport
      parentRoute: typeof SynopsesImport
    }
    '/authors/': {
      id: '/authors/'
      path: '/'
      fullPath: '/authors/'
      preLoaderRoute: typeof AuthorsIndexImport
      parentRoute: typeof AuthorsImport
    }
    '/books/': {
      id: '/books/'
      path: '/'
      fullPath: '/books/'
      preLoaderRoute: typeof BooksIndexImport
      parentRoute: typeof BooksImport
    }
    '/synopses/': {
      id: '/synopses/'
      path: '/'
      fullPath: '/synopses/'
      preLoaderRoute: typeof SynopsesIndexImport
      parentRoute: typeof SynopsesImport
    }
    '/books/$bookId/synopses': {
      id: '/books/$bookId/synopses'
      path: '/synopses'
      fullPath: '/books/$bookId/synopses'
      preLoaderRoute: typeof BooksBookIdSynopsesImport
      parentRoute: typeof BooksBookIdImport
    }
    '/books/$bookId/synopses_/create': {
      id: '/books/$bookId/synopses_/create'
      path: '/synopses/create'
      fullPath: '/books/$bookId/synopses/create'
      preLoaderRoute: typeof BooksBookIdSynopsesCreateImport
      parentRoute: typeof BooksBookIdImport
    }
  }
}

// Create and export the route tree

interface AuthorsRouteChildren {
  AuthorsAuthorIdRoute: typeof AuthorsAuthorIdRoute
  AuthorsNewRoute: typeof AuthorsNewRoute
  AuthorsIndexRoute: typeof AuthorsIndexRoute
}

const AuthorsRouteChildren: AuthorsRouteChildren = {
  AuthorsAuthorIdRoute: AuthorsAuthorIdRoute,
  AuthorsNewRoute: AuthorsNewRoute,
  AuthorsIndexRoute: AuthorsIndexRoute,
}

const AuthorsRouteWithChildren =
  AuthorsRoute._addFileChildren(AuthorsRouteChildren)

interface BooksBookIdRouteChildren {
  BooksBookIdSynopsesRoute: typeof BooksBookIdSynopsesRoute
  BooksBookIdSynopsesCreateRoute: typeof BooksBookIdSynopsesCreateRoute
}

const BooksBookIdRouteChildren: BooksBookIdRouteChildren = {
  BooksBookIdSynopsesRoute: BooksBookIdSynopsesRoute,
  BooksBookIdSynopsesCreateRoute: BooksBookIdSynopsesCreateRoute,
}

const BooksBookIdRouteWithChildren = BooksBookIdRoute._addFileChildren(
  BooksBookIdRouteChildren,
)

interface BooksRouteChildren {
  BooksBookIdRoute: typeof BooksBookIdRouteWithChildren
  BooksNewRoute: typeof BooksNewRoute
  BooksIndexRoute: typeof BooksIndexRoute
}

const BooksRouteChildren: BooksRouteChildren = {
  BooksBookIdRoute: BooksBookIdRouteWithChildren,
  BooksNewRoute: BooksNewRoute,
  BooksIndexRoute: BooksIndexRoute,
}

const BooksRouteWithChildren = BooksRoute._addFileChildren(BooksRouteChildren)

interface SynopsesRouteChildren {
  SynopsesSynopsisIdRoute: typeof SynopsesSynopsisIdRoute
  SynopsesIndexRoute: typeof SynopsesIndexRoute
}

const SynopsesRouteChildren: SynopsesRouteChildren = {
  SynopsesSynopsisIdRoute: SynopsesSynopsisIdRoute,
  SynopsesIndexRoute: SynopsesIndexRoute,
}

const SynopsesRouteWithChildren = SynopsesRoute._addFileChildren(
  SynopsesRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/authors': typeof AuthorsRouteWithChildren
  '/books': typeof BooksRouteWithChildren
  '/synopses': typeof SynopsesRouteWithChildren
  '/authors/$authorId': typeof AuthorsAuthorIdRoute
  '/authors/new': typeof AuthorsNewRoute
  '/books/$bookId': typeof BooksBookIdRouteWithChildren
  '/books/new': typeof BooksNewRoute
  '/synopses/$synopsisId': typeof SynopsesSynopsisIdRoute
  '/authors/': typeof AuthorsIndexRoute
  '/books/': typeof BooksIndexRoute
  '/synopses/': typeof SynopsesIndexRoute
  '/books/$bookId/synopses': typeof BooksBookIdSynopsesRoute
  '/books/$bookId/synopses/create': typeof BooksBookIdSynopsesCreateRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/authors/$authorId': typeof AuthorsAuthorIdRoute
  '/authors/new': typeof AuthorsNewRoute
  '/books/$bookId': typeof BooksBookIdRouteWithChildren
  '/books/new': typeof BooksNewRoute
  '/synopses/$synopsisId': typeof SynopsesSynopsisIdRoute
  '/authors': typeof AuthorsIndexRoute
  '/books': typeof BooksIndexRoute
  '/synopses': typeof SynopsesIndexRoute
  '/books/$bookId/synopses': typeof BooksBookIdSynopsesRoute
  '/books/$bookId/synopses/create': typeof BooksBookIdSynopsesCreateRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/authors': typeof AuthorsRouteWithChildren
  '/books': typeof BooksRouteWithChildren
  '/synopses': typeof SynopsesRouteWithChildren
  '/authors/$authorId': typeof AuthorsAuthorIdRoute
  '/authors/new': typeof AuthorsNewRoute
  '/books/$bookId': typeof BooksBookIdRouteWithChildren
  '/books/new': typeof BooksNewRoute
  '/synopses/$synopsisId': typeof SynopsesSynopsisIdRoute
  '/authors/': typeof AuthorsIndexRoute
  '/books/': typeof BooksIndexRoute
  '/synopses/': typeof SynopsesIndexRoute
  '/books/$bookId/synopses': typeof BooksBookIdSynopsesRoute
  '/books/$bookId/synopses_/create': typeof BooksBookIdSynopsesCreateRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/authors'
    | '/books'
    | '/synopses'
    | '/authors/$authorId'
    | '/authors/new'
    | '/books/$bookId'
    | '/books/new'
    | '/synopses/$synopsisId'
    | '/authors/'
    | '/books/'
    | '/synopses/'
    | '/books/$bookId/synopses'
    | '/books/$bookId/synopses/create'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/authors/$authorId'
    | '/authors/new'
    | '/books/$bookId'
    | '/books/new'
    | '/synopses/$synopsisId'
    | '/authors'
    | '/books'
    | '/synopses'
    | '/books/$bookId/synopses'
    | '/books/$bookId/synopses/create'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/authors'
    | '/books'
    | '/synopses'
    | '/authors/$authorId'
    | '/authors/new'
    | '/books/$bookId'
    | '/books/new'
    | '/synopses/$synopsisId'
    | '/authors/'
    | '/books/'
    | '/synopses/'
    | '/books/$bookId/synopses'
    | '/books/$bookId/synopses_/create'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  AuthorsRoute: typeof AuthorsRouteWithChildren
  BooksRoute: typeof BooksRouteWithChildren
  SynopsesRoute: typeof SynopsesRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  AuthorsRoute: AuthorsRouteWithChildren,
  BooksRoute: BooksRouteWithChildren,
  SynopsesRoute: SynopsesRouteWithChildren,
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
        "/authors",
        "/books",
        "/synopses"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/authors": {
      "filePath": "authors.tsx",
      "children": [
        "/authors/$authorId",
        "/authors/new",
        "/authors/"
      ]
    },
    "/books": {
      "filePath": "books.tsx",
      "children": [
        "/books/$bookId",
        "/books/new",
        "/books/"
      ]
    },
    "/synopses": {
      "filePath": "synopses.tsx",
      "children": [
        "/synopses/$synopsisId",
        "/synopses/"
      ]
    },
    "/authors/$authorId": {
      "filePath": "authors/$authorId.tsx",
      "parent": "/authors"
    },
    "/authors/new": {
      "filePath": "authors/new.tsx",
      "parent": "/authors"
    },
    "/books/$bookId": {
      "filePath": "books/$bookId.tsx",
      "parent": "/books",
      "children": [
        "/books/$bookId/synopses",
        "/books/$bookId/synopses_/create"
      ]
    },
    "/books/new": {
      "filePath": "books/new.tsx",
      "parent": "/books"
    },
    "/synopses/$synopsisId": {
      "filePath": "synopses/$synopsisId.tsx",
      "parent": "/synopses"
    },
    "/authors/": {
      "filePath": "authors/index.tsx",
      "parent": "/authors"
    },
    "/books/": {
      "filePath": "books/index.tsx",
      "parent": "/books"
    },
    "/synopses/": {
      "filePath": "synopses/index.tsx",
      "parent": "/synopses"
    },
    "/books/$bookId/synopses": {
      "filePath": "books/$bookId.synopses.tsx",
      "parent": "/books/$bookId"
    },
    "/books/$bookId/synopses_/create": {
      "filePath": "books/$bookId.synopses_.create.tsx",
      "parent": "/books/$bookId"
    }
  }
}
ROUTE_MANIFEST_END */
