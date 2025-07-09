
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Estimate
 * 
 */
export type Estimate = $Result.DefaultSelection<Prisma.$EstimatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Estimates
 * const estimates = await prisma.estimate.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Estimates
   * const estimates = await prisma.estimate.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.estimate`: Exposes CRUD operations for the **Estimate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estimates
    * const estimates = await prisma.estimate.findMany()
    * ```
    */
  get estimate(): Prisma.EstimateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Estimate: 'Estimate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "estimate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Estimate: {
        payload: Prisma.$EstimatePayload<ExtArgs>
        fields: Prisma.EstimateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstimateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstimateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          findFirst: {
            args: Prisma.EstimateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstimateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          findMany: {
            args: Prisma.EstimateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>[]
          }
          create: {
            args: Prisma.EstimateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          createMany: {
            args: Prisma.EstimateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstimateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          update: {
            args: Prisma.EstimateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          deleteMany: {
            args: Prisma.EstimateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstimateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstimateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          aggregate: {
            args: Prisma.EstimateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstimate>
          }
          groupBy: {
            args: Prisma.EstimateGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstimateGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstimateCountArgs<ExtArgs>
            result: $Utils.Optional<EstimateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    estimate?: EstimateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Estimate
   */

  export type AggregateEstimate = {
    _count: EstimateCountAggregateOutputType | null
    _avg: EstimateAvgAggregateOutputType | null
    _sum: EstimateSumAggregateOutputType | null
    _min: EstimateMinAggregateOutputType | null
    _max: EstimateMaxAggregateOutputType | null
  }

  export type EstimateAvgAggregateOutputType = {
    quantity: Decimal | null
    amount: Decimal | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    total: Decimal | null
  }

  export type EstimateSumAggregateOutputType = {
    quantity: Decimal | null
    amount: Decimal | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    total: Decimal | null
  }

  export type EstimateMinAggregateOutputType = {
    id: string | null
    id_property: string | null
    estimate_number: string | null
    send_date: Date | null
    expiration_date: Date | null
    acceptation_date: Date | null
    id_user: string | null
    service_type: string | null
    description: string | null
    quantity: Decimal | null
    amount: Decimal | null
    tax_included: boolean | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    total: Decimal | null
  }

  export type EstimateMaxAggregateOutputType = {
    id: string | null
    id_property: string | null
    estimate_number: string | null
    send_date: Date | null
    expiration_date: Date | null
    acceptation_date: Date | null
    id_user: string | null
    service_type: string | null
    description: string | null
    quantity: Decimal | null
    amount: Decimal | null
    tax_included: boolean | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    total: Decimal | null
  }

  export type EstimateCountAggregateOutputType = {
    id: number
    id_property: number
    estimate_number: number
    send_date: number
    expiration_date: number
    acceptation_date: number
    id_user: number
    service_type: number
    description: number
    quantity: number
    amount: number
    tax_included: number
    subtotal: number
    tax_amount: number
    total: number
    _all: number
  }


  export type EstimateAvgAggregateInputType = {
    quantity?: true
    amount?: true
    subtotal?: true
    tax_amount?: true
    total?: true
  }

  export type EstimateSumAggregateInputType = {
    quantity?: true
    amount?: true
    subtotal?: true
    tax_amount?: true
    total?: true
  }

  export type EstimateMinAggregateInputType = {
    id?: true
    id_property?: true
    estimate_number?: true
    send_date?: true
    expiration_date?: true
    acceptation_date?: true
    id_user?: true
    service_type?: true
    description?: true
    quantity?: true
    amount?: true
    tax_included?: true
    subtotal?: true
    tax_amount?: true
    total?: true
  }

  export type EstimateMaxAggregateInputType = {
    id?: true
    id_property?: true
    estimate_number?: true
    send_date?: true
    expiration_date?: true
    acceptation_date?: true
    id_user?: true
    service_type?: true
    description?: true
    quantity?: true
    amount?: true
    tax_included?: true
    subtotal?: true
    tax_amount?: true
    total?: true
  }

  export type EstimateCountAggregateInputType = {
    id?: true
    id_property?: true
    estimate_number?: true
    send_date?: true
    expiration_date?: true
    acceptation_date?: true
    id_user?: true
    service_type?: true
    description?: true
    quantity?: true
    amount?: true
    tax_included?: true
    subtotal?: true
    tax_amount?: true
    total?: true
    _all?: true
  }

  export type EstimateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estimate to aggregate.
     */
    where?: EstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimates to fetch.
     */
    orderBy?: EstimateOrderByWithRelationInput | EstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estimates
    **/
    _count?: true | EstimateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstimateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstimateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstimateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstimateMaxAggregateInputType
  }

  export type GetEstimateAggregateType<T extends EstimateAggregateArgs> = {
        [P in keyof T & keyof AggregateEstimate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstimate[P]>
      : GetScalarType<T[P], AggregateEstimate[P]>
  }




  export type EstimateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstimateWhereInput
    orderBy?: EstimateOrderByWithAggregationInput | EstimateOrderByWithAggregationInput[]
    by: EstimateScalarFieldEnum[] | EstimateScalarFieldEnum
    having?: EstimateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstimateCountAggregateInputType | true
    _avg?: EstimateAvgAggregateInputType
    _sum?: EstimateSumAggregateInputType
    _min?: EstimateMinAggregateInputType
    _max?: EstimateMaxAggregateInputType
  }

  export type EstimateGroupByOutputType = {
    id: string
    id_property: string
    estimate_number: string
    send_date: Date
    expiration_date: Date
    acceptation_date: Date
    id_user: string
    service_type: string
    description: string
    quantity: Decimal
    amount: Decimal
    tax_included: boolean
    subtotal: Decimal
    tax_amount: Decimal
    total: Decimal
    _count: EstimateCountAggregateOutputType | null
    _avg: EstimateAvgAggregateOutputType | null
    _sum: EstimateSumAggregateOutputType | null
    _min: EstimateMinAggregateOutputType | null
    _max: EstimateMaxAggregateOutputType | null
  }

  type GetEstimateGroupByPayload<T extends EstimateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstimateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstimateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstimateGroupByOutputType[P]>
            : GetScalarType<T[P], EstimateGroupByOutputType[P]>
        }
      >
    >


  export type EstimateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_property?: boolean
    estimate_number?: boolean
    send_date?: boolean
    expiration_date?: boolean
    acceptation_date?: boolean
    id_user?: boolean
    service_type?: boolean
    description?: boolean
    quantity?: boolean
    amount?: boolean
    tax_included?: boolean
    subtotal?: boolean
    tax_amount?: boolean
    total?: boolean
  }, ExtArgs["result"]["estimate"]>



  export type EstimateSelectScalar = {
    id?: boolean
    id_property?: boolean
    estimate_number?: boolean
    send_date?: boolean
    expiration_date?: boolean
    acceptation_date?: boolean
    id_user?: boolean
    service_type?: boolean
    description?: boolean
    quantity?: boolean
    amount?: boolean
    tax_included?: boolean
    subtotal?: boolean
    tax_amount?: boolean
    total?: boolean
  }

  export type EstimateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_property" | "estimate_number" | "send_date" | "expiration_date" | "acceptation_date" | "id_user" | "service_type" | "description" | "quantity" | "amount" | "tax_included" | "subtotal" | "tax_amount" | "total", ExtArgs["result"]["estimate"]>

  export type $EstimatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estimate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_property: string
      estimate_number: string
      send_date: Date
      expiration_date: Date
      acceptation_date: Date
      id_user: string
      service_type: string
      description: string
      quantity: Prisma.Decimal
      amount: Prisma.Decimal
      tax_included: boolean
      subtotal: Prisma.Decimal
      tax_amount: Prisma.Decimal
      total: Prisma.Decimal
    }, ExtArgs["result"]["estimate"]>
    composites: {}
  }

  type EstimateGetPayload<S extends boolean | null | undefined | EstimateDefaultArgs> = $Result.GetResult<Prisma.$EstimatePayload, S>

  type EstimateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstimateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstimateCountAggregateInputType | true
    }

  export interface EstimateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estimate'], meta: { name: 'Estimate' } }
    /**
     * Find zero or one Estimate that matches the filter.
     * @param {EstimateFindUniqueArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstimateFindUniqueArgs>(args: SelectSubset<T, EstimateFindUniqueArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estimate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstimateFindUniqueOrThrowArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstimateFindUniqueOrThrowArgs>(args: SelectSubset<T, EstimateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estimate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateFindFirstArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstimateFindFirstArgs>(args?: SelectSubset<T, EstimateFindFirstArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estimate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateFindFirstOrThrowArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstimateFindFirstOrThrowArgs>(args?: SelectSubset<T, EstimateFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estimates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estimates
     * const estimates = await prisma.estimate.findMany()
     * 
     * // Get first 10 Estimates
     * const estimates = await prisma.estimate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estimateWithIdOnly = await prisma.estimate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstimateFindManyArgs>(args?: SelectSubset<T, EstimateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estimate.
     * @param {EstimateCreateArgs} args - Arguments to create a Estimate.
     * @example
     * // Create one Estimate
     * const Estimate = await prisma.estimate.create({
     *   data: {
     *     // ... data to create a Estimate
     *   }
     * })
     * 
     */
    create<T extends EstimateCreateArgs>(args: SelectSubset<T, EstimateCreateArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estimates.
     * @param {EstimateCreateManyArgs} args - Arguments to create many Estimates.
     * @example
     * // Create many Estimates
     * const estimate = await prisma.estimate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstimateCreateManyArgs>(args?: SelectSubset<T, EstimateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estimate.
     * @param {EstimateDeleteArgs} args - Arguments to delete one Estimate.
     * @example
     * // Delete one Estimate
     * const Estimate = await prisma.estimate.delete({
     *   where: {
     *     // ... filter to delete one Estimate
     *   }
     * })
     * 
     */
    delete<T extends EstimateDeleteArgs>(args: SelectSubset<T, EstimateDeleteArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estimate.
     * @param {EstimateUpdateArgs} args - Arguments to update one Estimate.
     * @example
     * // Update one Estimate
     * const estimate = await prisma.estimate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstimateUpdateArgs>(args: SelectSubset<T, EstimateUpdateArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estimates.
     * @param {EstimateDeleteManyArgs} args - Arguments to filter Estimates to delete.
     * @example
     * // Delete a few Estimates
     * const { count } = await prisma.estimate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstimateDeleteManyArgs>(args?: SelectSubset<T, EstimateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estimates
     * const estimate = await prisma.estimate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstimateUpdateManyArgs>(args: SelectSubset<T, EstimateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estimate.
     * @param {EstimateUpsertArgs} args - Arguments to update or create a Estimate.
     * @example
     * // Update or create a Estimate
     * const estimate = await prisma.estimate.upsert({
     *   create: {
     *     // ... data to create a Estimate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estimate we want to update
     *   }
     * })
     */
    upsert<T extends EstimateUpsertArgs>(args: SelectSubset<T, EstimateUpsertArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateCountArgs} args - Arguments to filter Estimates to count.
     * @example
     * // Count the number of Estimates
     * const count = await prisma.estimate.count({
     *   where: {
     *     // ... the filter for the Estimates we want to count
     *   }
     * })
    **/
    count<T extends EstimateCountArgs>(
      args?: Subset<T, EstimateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstimateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstimateAggregateArgs>(args: Subset<T, EstimateAggregateArgs>): Prisma.PrismaPromise<GetEstimateAggregateType<T>>

    /**
     * Group by Estimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstimateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstimateGroupByArgs['orderBy'] }
        : { orderBy?: EstimateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstimateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstimateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estimate model
   */
  readonly fields: EstimateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estimate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstimateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estimate model
   */
  interface EstimateFieldRefs {
    readonly id: FieldRef<"Estimate", 'String'>
    readonly id_property: FieldRef<"Estimate", 'String'>
    readonly estimate_number: FieldRef<"Estimate", 'String'>
    readonly send_date: FieldRef<"Estimate", 'DateTime'>
    readonly expiration_date: FieldRef<"Estimate", 'DateTime'>
    readonly acceptation_date: FieldRef<"Estimate", 'DateTime'>
    readonly id_user: FieldRef<"Estimate", 'String'>
    readonly service_type: FieldRef<"Estimate", 'String'>
    readonly description: FieldRef<"Estimate", 'String'>
    readonly quantity: FieldRef<"Estimate", 'Decimal'>
    readonly amount: FieldRef<"Estimate", 'Decimal'>
    readonly tax_included: FieldRef<"Estimate", 'Boolean'>
    readonly subtotal: FieldRef<"Estimate", 'Decimal'>
    readonly tax_amount: FieldRef<"Estimate", 'Decimal'>
    readonly total: FieldRef<"Estimate", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Estimate findUnique
   */
  export type EstimateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Filter, which Estimate to fetch.
     */
    where: EstimateWhereUniqueInput
  }

  /**
   * Estimate findUniqueOrThrow
   */
  export type EstimateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Filter, which Estimate to fetch.
     */
    where: EstimateWhereUniqueInput
  }

  /**
   * Estimate findFirst
   */
  export type EstimateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Filter, which Estimate to fetch.
     */
    where?: EstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimates to fetch.
     */
    orderBy?: EstimateOrderByWithRelationInput | EstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estimates.
     */
    cursor?: EstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estimates.
     */
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[]
  }

  /**
   * Estimate findFirstOrThrow
   */
  export type EstimateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Filter, which Estimate to fetch.
     */
    where?: EstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimates to fetch.
     */
    orderBy?: EstimateOrderByWithRelationInput | EstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estimates.
     */
    cursor?: EstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estimates.
     */
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[]
  }

  /**
   * Estimate findMany
   */
  export type EstimateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Filter, which Estimates to fetch.
     */
    where?: EstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimates to fetch.
     */
    orderBy?: EstimateOrderByWithRelationInput | EstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estimates.
     */
    cursor?: EstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimates.
     */
    skip?: number
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[]
  }

  /**
   * Estimate create
   */
  export type EstimateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * The data needed to create a Estimate.
     */
    data: XOR<EstimateCreateInput, EstimateUncheckedCreateInput>
  }

  /**
   * Estimate createMany
   */
  export type EstimateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estimates.
     */
    data: EstimateCreateManyInput | EstimateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estimate update
   */
  export type EstimateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * The data needed to update a Estimate.
     */
    data: XOR<EstimateUpdateInput, EstimateUncheckedUpdateInput>
    /**
     * Choose, which Estimate to update.
     */
    where: EstimateWhereUniqueInput
  }

  /**
   * Estimate updateMany
   */
  export type EstimateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estimates.
     */
    data: XOR<EstimateUpdateManyMutationInput, EstimateUncheckedUpdateManyInput>
    /**
     * Filter which Estimates to update
     */
    where?: EstimateWhereInput
    /**
     * Limit how many Estimates to update.
     */
    limit?: number
  }

  /**
   * Estimate upsert
   */
  export type EstimateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * The filter to search for the Estimate to update in case it exists.
     */
    where: EstimateWhereUniqueInput
    /**
     * In case the Estimate found by the `where` argument doesn't exist, create a new Estimate with this data.
     */
    create: XOR<EstimateCreateInput, EstimateUncheckedCreateInput>
    /**
     * In case the Estimate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstimateUpdateInput, EstimateUncheckedUpdateInput>
  }

  /**
   * Estimate delete
   */
  export type EstimateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Filter which Estimate to delete.
     */
    where: EstimateWhereUniqueInput
  }

  /**
   * Estimate deleteMany
   */
  export type EstimateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estimates to delete
     */
    where?: EstimateWhereInput
    /**
     * Limit how many Estimates to delete.
     */
    limit?: number
  }

  /**
   * Estimate without action
   */
  export type EstimateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EstimateScalarFieldEnum: {
    id: 'id',
    id_property: 'id_property',
    estimate_number: 'estimate_number',
    send_date: 'send_date',
    expiration_date: 'expiration_date',
    acceptation_date: 'acceptation_date',
    id_user: 'id_user',
    service_type: 'service_type',
    description: 'description',
    quantity: 'quantity',
    amount: 'amount',
    tax_included: 'tax_included',
    subtotal: 'subtotal',
    tax_amount: 'tax_amount',
    total: 'total'
  };

  export type EstimateScalarFieldEnum = (typeof EstimateScalarFieldEnum)[keyof typeof EstimateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const EstimateOrderByRelevanceFieldEnum: {
    id: 'id',
    id_property: 'id_property',
    estimate_number: 'estimate_number',
    id_user: 'id_user',
    service_type: 'service_type',
    description: 'description'
  };

  export type EstimateOrderByRelevanceFieldEnum = (typeof EstimateOrderByRelevanceFieldEnum)[keyof typeof EstimateOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type EstimateWhereInput = {
    AND?: EstimateWhereInput | EstimateWhereInput[]
    OR?: EstimateWhereInput[]
    NOT?: EstimateWhereInput | EstimateWhereInput[]
    id?: StringFilter<"Estimate"> | string
    id_property?: StringFilter<"Estimate"> | string
    estimate_number?: StringFilter<"Estimate"> | string
    send_date?: DateTimeFilter<"Estimate"> | Date | string
    expiration_date?: DateTimeFilter<"Estimate"> | Date | string
    acceptation_date?: DateTimeFilter<"Estimate"> | Date | string
    id_user?: StringFilter<"Estimate"> | string
    service_type?: StringFilter<"Estimate"> | string
    description?: StringFilter<"Estimate"> | string
    quantity?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    tax_included?: BoolFilter<"Estimate"> | boolean
    subtotal?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
  }

  export type EstimateOrderByWithRelationInput = {
    id?: SortOrder
    id_property?: SortOrder
    estimate_number?: SortOrder
    send_date?: SortOrder
    expiration_date?: SortOrder
    acceptation_date?: SortOrder
    id_user?: SortOrder
    service_type?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    tax_included?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    total?: SortOrder
    _relevance?: EstimateOrderByRelevanceInput
  }

  export type EstimateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EstimateWhereInput | EstimateWhereInput[]
    OR?: EstimateWhereInput[]
    NOT?: EstimateWhereInput | EstimateWhereInput[]
    id_property?: StringFilter<"Estimate"> | string
    estimate_number?: StringFilter<"Estimate"> | string
    send_date?: DateTimeFilter<"Estimate"> | Date | string
    expiration_date?: DateTimeFilter<"Estimate"> | Date | string
    acceptation_date?: DateTimeFilter<"Estimate"> | Date | string
    id_user?: StringFilter<"Estimate"> | string
    service_type?: StringFilter<"Estimate"> | string
    description?: StringFilter<"Estimate"> | string
    quantity?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    tax_included?: BoolFilter<"Estimate"> | boolean
    subtotal?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
  }, "id">

  export type EstimateOrderByWithAggregationInput = {
    id?: SortOrder
    id_property?: SortOrder
    estimate_number?: SortOrder
    send_date?: SortOrder
    expiration_date?: SortOrder
    acceptation_date?: SortOrder
    id_user?: SortOrder
    service_type?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    tax_included?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    total?: SortOrder
    _count?: EstimateCountOrderByAggregateInput
    _avg?: EstimateAvgOrderByAggregateInput
    _max?: EstimateMaxOrderByAggregateInput
    _min?: EstimateMinOrderByAggregateInput
    _sum?: EstimateSumOrderByAggregateInput
  }

  export type EstimateScalarWhereWithAggregatesInput = {
    AND?: EstimateScalarWhereWithAggregatesInput | EstimateScalarWhereWithAggregatesInput[]
    OR?: EstimateScalarWhereWithAggregatesInput[]
    NOT?: EstimateScalarWhereWithAggregatesInput | EstimateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Estimate"> | string
    id_property?: StringWithAggregatesFilter<"Estimate"> | string
    estimate_number?: StringWithAggregatesFilter<"Estimate"> | string
    send_date?: DateTimeWithAggregatesFilter<"Estimate"> | Date | string
    expiration_date?: DateTimeWithAggregatesFilter<"Estimate"> | Date | string
    acceptation_date?: DateTimeWithAggregatesFilter<"Estimate"> | Date | string
    id_user?: StringWithAggregatesFilter<"Estimate"> | string
    service_type?: StringWithAggregatesFilter<"Estimate"> | string
    description?: StringWithAggregatesFilter<"Estimate"> | string
    quantity?: DecimalWithAggregatesFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalWithAggregatesFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    tax_included?: BoolWithAggregatesFilter<"Estimate"> | boolean
    subtotal?: DecimalWithAggregatesFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalWithAggregatesFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
  }

  export type EstimateCreateInput = {
    id?: string
    id_property: string
    estimate_number: string
    send_date: Date | string
    expiration_date: Date | string
    acceptation_date: Date | string
    id_user: string
    service_type: string
    description: string
    quantity: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    tax_included: boolean
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
  }

  export type EstimateUncheckedCreateInput = {
    id?: string
    id_property: string
    estimate_number: string
    send_date: Date | string
    expiration_date: Date | string
    acceptation_date: Date | string
    id_user: string
    service_type: string
    description: string
    quantity: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    tax_included: boolean
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
  }

  export type EstimateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_property?: StringFieldUpdateOperationsInput | string
    estimate_number?: StringFieldUpdateOperationsInput | string
    send_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
    service_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_included?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EstimateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_property?: StringFieldUpdateOperationsInput | string
    estimate_number?: StringFieldUpdateOperationsInput | string
    send_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
    service_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_included?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EstimateCreateManyInput = {
    id?: string
    id_property: string
    estimate_number: string
    send_date: Date | string
    expiration_date: Date | string
    acceptation_date: Date | string
    id_user: string
    service_type: string
    description: string
    quantity: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    tax_included: boolean
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
  }

  export type EstimateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_property?: StringFieldUpdateOperationsInput | string
    estimate_number?: StringFieldUpdateOperationsInput | string
    send_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
    service_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_included?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EstimateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_property?: StringFieldUpdateOperationsInput | string
    estimate_number?: StringFieldUpdateOperationsInput | string
    send_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
    service_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_included?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EstimateOrderByRelevanceInput = {
    fields: EstimateOrderByRelevanceFieldEnum | EstimateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EstimateCountOrderByAggregateInput = {
    id?: SortOrder
    id_property?: SortOrder
    estimate_number?: SortOrder
    send_date?: SortOrder
    expiration_date?: SortOrder
    acceptation_date?: SortOrder
    id_user?: SortOrder
    service_type?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    tax_included?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    total?: SortOrder
  }

  export type EstimateAvgOrderByAggregateInput = {
    quantity?: SortOrder
    amount?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    total?: SortOrder
  }

  export type EstimateMaxOrderByAggregateInput = {
    id?: SortOrder
    id_property?: SortOrder
    estimate_number?: SortOrder
    send_date?: SortOrder
    expiration_date?: SortOrder
    acceptation_date?: SortOrder
    id_user?: SortOrder
    service_type?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    tax_included?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    total?: SortOrder
  }

  export type EstimateMinOrderByAggregateInput = {
    id?: SortOrder
    id_property?: SortOrder
    estimate_number?: SortOrder
    send_date?: SortOrder
    expiration_date?: SortOrder
    acceptation_date?: SortOrder
    id_user?: SortOrder
    service_type?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    tax_included?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    total?: SortOrder
  }

  export type EstimateSumOrderByAggregateInput = {
    quantity?: SortOrder
    amount?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    total?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}