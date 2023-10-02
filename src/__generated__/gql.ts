/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery Rockets{\n  rockets{\n    active\n    boosters\n     company\n    cost_per_launch\n    country\n    description\n    diameter{\n      feet\n      meters\n    }\n    engines{\n      engine_loss_max\n      layout\n      \n    }\n    first_flight\n    first_stage{\n      burn_time_sec\n      engines\n      fuel_amount_tons\n    }\n    id\n    mass{\n      kg\n      lb\n    }\n    success_rate_pct\n    \n  }\n  \n\n}\n\n": types.RocketsDocument,
    "\nquery Histories{\n  histories{\n    details\n    event_date_unix\n    event_date_utc\n    flight{\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_utc\n       launch_success\n      \n    }\n    id\n    links{\n      article\n      reddit\n       wikipedia\n    }\n   title\n    \n  }\n  \n  }\n\n\n\n": types.HistoriesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Rockets{\n  rockets{\n    active\n    boosters\n     company\n    cost_per_launch\n    country\n    description\n    diameter{\n      feet\n      meters\n    }\n    engines{\n      engine_loss_max\n      layout\n      \n    }\n    first_flight\n    first_stage{\n      burn_time_sec\n      engines\n      fuel_amount_tons\n    }\n    id\n    mass{\n      kg\n      lb\n    }\n    success_rate_pct\n    \n  }\n  \n\n}\n\n"): (typeof documents)["\nquery Rockets{\n  rockets{\n    active\n    boosters\n     company\n    cost_per_launch\n    country\n    description\n    diameter{\n      feet\n      meters\n    }\n    engines{\n      engine_loss_max\n      layout\n      \n    }\n    first_flight\n    first_stage{\n      burn_time_sec\n      engines\n      fuel_amount_tons\n    }\n    id\n    mass{\n      kg\n      lb\n    }\n    success_rate_pct\n    \n  }\n  \n\n}\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Histories{\n  histories{\n    details\n    event_date_unix\n    event_date_utc\n    flight{\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_utc\n       launch_success\n      \n    }\n    id\n    links{\n      article\n      reddit\n       wikipedia\n    }\n   title\n    \n  }\n  \n  }\n\n\n\n"): (typeof documents)["\nquery Histories{\n  histories{\n    details\n    event_date_unix\n    event_date_utc\n    flight{\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_utc\n       launch_success\n      \n    }\n    id\n    links{\n      article\n      reddit\n       wikipedia\n    }\n   title\n    \n  }\n  \n  }\n\n\n\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;