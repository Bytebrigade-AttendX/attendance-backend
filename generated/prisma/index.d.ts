
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model ClassSubject
 * 
 */
export type ClassSubject = $Result.DefaultSelection<Prisma.$ClassSubjectPayload>
/**
 * Model TeacherClass
 * 
 */
export type TeacherClass = $Result.DefaultSelection<Prisma.$TeacherClassPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model AttendanceRecord
 * 
 */
export type AttendanceRecord = $Result.DefaultSelection<Prisma.$AttendanceRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Department: {
  CSE: 'CSE',
  ECE: 'ECE',
  ME: 'ME',
  EE: 'EE'
};

export type Department = (typeof Department)[keyof typeof Department]


export const Gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const AttendanceStatus: {
  present: 'present',
  absent: 'absent'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]

}

export type Department = $Enums.Department

export const Department: typeof $Enums.Department

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classSubject`: Exposes CRUD operations for the **ClassSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassSubjects
    * const classSubjects = await prisma.classSubject.findMany()
    * ```
    */
  get classSubject(): Prisma.ClassSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherClass`: Exposes CRUD operations for the **TeacherClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherClasses
    * const teacherClasses = await prisma.teacherClass.findMany()
    * ```
    */
  get teacherClass(): Prisma.TeacherClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceRecord`: Exposes CRUD operations for the **AttendanceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceRecords
    * const attendanceRecords = await prisma.attendanceRecord.findMany()
    * ```
    */
  get attendanceRecord(): Prisma.AttendanceRecordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Student: 'Student',
    Teacher: 'Teacher',
    Class: 'Class',
    Subject: 'Subject',
    ClassSubject: 'ClassSubject',
    TeacherClass: 'TeacherClass',
    Attendance: 'Attendance',
    AttendanceRecord: 'AttendanceRecord'
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
      modelProps: "student" | "teacher" | "class" | "subject" | "classSubject" | "teacherClass" | "attendance" | "attendanceRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      ClassSubject: {
        payload: Prisma.$ClassSubjectPayload<ExtArgs>
        fields: Prisma.ClassSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload>
          }
          findFirst: {
            args: Prisma.ClassSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload>
          }
          findMany: {
            args: Prisma.ClassSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload>[]
          }
          create: {
            args: Prisma.ClassSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload>
          }
          createMany: {
            args: Prisma.ClassSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload>[]
          }
          delete: {
            args: Prisma.ClassSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload>
          }
          update: {
            args: Prisma.ClassSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload>
          }
          deleteMany: {
            args: Prisma.ClassSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload>[]
          }
          upsert: {
            args: Prisma.ClassSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSubjectPayload>
          }
          aggregate: {
            args: Prisma.ClassSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassSubject>
          }
          groupBy: {
            args: Prisma.ClassSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<ClassSubjectCountAggregateOutputType> | number
          }
        }
      }
      TeacherClass: {
        payload: Prisma.$TeacherClassPayload<ExtArgs>
        fields: Prisma.TeacherClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload>
          }
          findFirst: {
            args: Prisma.TeacherClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload>
          }
          findMany: {
            args: Prisma.TeacherClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload>[]
          }
          create: {
            args: Prisma.TeacherClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload>
          }
          createMany: {
            args: Prisma.TeacherClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload>[]
          }
          delete: {
            args: Prisma.TeacherClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload>
          }
          update: {
            args: Prisma.TeacherClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload>
          }
          deleteMany: {
            args: Prisma.TeacherClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload>[]
          }
          upsert: {
            args: Prisma.TeacherClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherClassPayload>
          }
          aggregate: {
            args: Prisma.TeacherClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherClass>
          }
          groupBy: {
            args: Prisma.TeacherClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherClassCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherClassCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      AttendanceRecord: {
        payload: Prisma.$AttendanceRecordPayload<ExtArgs>
        fields: Prisma.AttendanceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findFirst: {
            args: Prisma.AttendanceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findMany: {
            args: Prisma.AttendanceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          create: {
            args: Prisma.AttendanceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          createMany: {
            args: Prisma.AttendanceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          delete: {
            args: Prisma.AttendanceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          update: {
            args: Prisma.AttendanceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          aggregate: {
            args: Prisma.AttendanceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceRecord>
          }
          groupBy: {
            args: Prisma.AttendanceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordCountAggregateOutputType> | number
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
    student?: StudentOmit
    teacher?: TeacherOmit
    class?: ClassOmit
    subject?: SubjectOmit
    classSubject?: ClassSubjectOmit
    teacherClass?: TeacherClassOmit
    attendance?: AttendanceOmit
    attendanceRecord?: AttendanceRecordOmit
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    attendanceRecords: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendanceRecords?: boolean | StudentCountOutputTypeCountAttendanceRecordsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    classes: number
    attendances: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | TeacherCountOutputTypeCountClassesArgs
    attendances?: boolean | TeacherCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherClassWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    students: number
    subjects: number
    teachers: number
    attendances: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassCountOutputTypeCountStudentsArgs
    subjects?: boolean | ClassCountOutputTypeCountSubjectsArgs
    teachers?: boolean | ClassCountOutputTypeCountTeachersArgs
    attendances?: boolean | ClassCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSubjectWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherClassWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    classes: number
    teachers: number
    attendances: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | SubjectCountOutputTypeCountClassesArgs
    teachers?: boolean | SubjectCountOutputTypeCountTeachersArgs
    attendances?: boolean | SubjectCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSubjectWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherClassWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type AttendanceCountOutputType
   */

  export type AttendanceCountOutputType = {
    attendanceRecords: number
  }

  export type AttendanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendanceRecords?: boolean | AttendanceCountOutputTypeCountAttendanceRecordsArgs
  }

  // Custom InputTypes
  /**
   * AttendanceCountOutputType without action
   */
  export type AttendanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceCountOutputType
     */
    select?: AttendanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttendanceCountOutputType without action
   */
  export type AttendanceCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    year: number | null
  }

  export type StudentSumAggregateOutputType = {
    year: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    is_suspended: boolean | null
    department: $Enums.Department | null
    role: string | null
    gender: $Enums.Gender | null
    change_password_token: string | null
    change_password_expiry: Date | null
    created_at: Date | null
    updated_at: Date | null
    class_id: string | null
    year: number | null
    reg_no: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    is_suspended: boolean | null
    department: $Enums.Department | null
    role: string | null
    gender: $Enums.Gender | null
    change_password_token: string | null
    change_password_expiry: Date | null
    created_at: Date | null
    updated_at: Date | null
    class_id: string | null
    year: number | null
    reg_no: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    is_suspended: number
    department: number
    role: number
    gender: number
    change_password_token: number
    change_password_expiry: number
    created_at: number
    updated_at: number
    class_id: number
    year: number
    reg_no: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    year?: true
  }

  export type StudentSumAggregateInputType = {
    year?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    is_suspended?: true
    department?: true
    role?: true
    gender?: true
    change_password_token?: true
    change_password_expiry?: true
    created_at?: true
    updated_at?: true
    class_id?: true
    year?: true
    reg_no?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    is_suspended?: true
    department?: true
    role?: true
    gender?: true
    change_password_token?: true
    change_password_expiry?: true
    created_at?: true
    updated_at?: true
    class_id?: true
    year?: true
    reg_no?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    is_suspended?: true
    department?: true
    role?: true
    gender?: true
    change_password_token?: true
    change_password_expiry?: true
    created_at?: true
    updated_at?: true
    class_id?: true
    year?: true
    reg_no?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    email: string
    password_hash: string
    is_suspended: boolean
    department: $Enums.Department
    role: string
    gender: $Enums.Gender
    change_password_token: string | null
    change_password_expiry: Date | null
    created_at: Date
    updated_at: Date
    class_id: string
    year: number
    reg_no: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_suspended?: boolean
    department?: boolean
    role?: boolean
    gender?: boolean
    change_password_token?: boolean
    change_password_expiry?: boolean
    created_at?: boolean
    updated_at?: boolean
    class_id?: boolean
    year?: boolean
    reg_no?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    attendanceRecords?: boolean | Student$attendanceRecordsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_suspended?: boolean
    department?: boolean
    role?: boolean
    gender?: boolean
    change_password_token?: boolean
    change_password_expiry?: boolean
    created_at?: boolean
    updated_at?: boolean
    class_id?: boolean
    year?: boolean
    reg_no?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_suspended?: boolean
    department?: boolean
    role?: boolean
    gender?: boolean
    change_password_token?: boolean
    change_password_expiry?: boolean
    created_at?: boolean
    updated_at?: boolean
    class_id?: boolean
    year?: boolean
    reg_no?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_suspended?: boolean
    department?: boolean
    role?: boolean
    gender?: boolean
    change_password_token?: boolean
    change_password_expiry?: boolean
    created_at?: boolean
    updated_at?: boolean
    class_id?: boolean
    year?: boolean
    reg_no?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "is_suspended" | "department" | "role" | "gender" | "change_password_token" | "change_password_expiry" | "created_at" | "updated_at" | "class_id" | "year" | "reg_no", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    attendanceRecords?: boolean | Student$attendanceRecordsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      attendanceRecords: Prisma.$AttendanceRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password_hash: string
      is_suspended: boolean
      department: $Enums.Department
      role: string
      gender: $Enums.Gender
      change_password_token: string | null
      change_password_expiry: Date | null
      created_at: Date
      updated_at: Date
      class_id: string
      year: number
      reg_no: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendanceRecords<T extends Student$attendanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Student$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly password_hash: FieldRef<"Student", 'String'>
    readonly is_suspended: FieldRef<"Student", 'Boolean'>
    readonly department: FieldRef<"Student", 'Department'>
    readonly role: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'Gender'>
    readonly change_password_token: FieldRef<"Student", 'String'>
    readonly change_password_expiry: FieldRef<"Student", 'DateTime'>
    readonly created_at: FieldRef<"Student", 'DateTime'>
    readonly updated_at: FieldRef<"Student", 'DateTime'>
    readonly class_id: FieldRef<"Student", 'String'>
    readonly year: FieldRef<"Student", 'Int'>
    readonly reg_no: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.attendanceRecords
   */
  export type Student$attendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    is_suspended: boolean | null
    department: $Enums.Department | null
    role: string | null
    gender: $Enums.Gender | null
    change_password_token: string | null
    change_password_expiry: Date | null
    created_at: Date | null
    updated_at: Date | null
    teacher_id_no: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    is_suspended: boolean | null
    department: $Enums.Department | null
    role: string | null
    gender: $Enums.Gender | null
    change_password_token: string | null
    change_password_expiry: Date | null
    created_at: Date | null
    updated_at: Date | null
    teacher_id_no: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    is_suspended: number
    department: number
    role: number
    gender: number
    change_password_token: number
    change_password_expiry: number
    created_at: number
    updated_at: number
    teacher_id_no: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    is_suspended?: true
    department?: true
    role?: true
    gender?: true
    change_password_token?: true
    change_password_expiry?: true
    created_at?: true
    updated_at?: true
    teacher_id_no?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    is_suspended?: true
    department?: true
    role?: true
    gender?: true
    change_password_token?: true
    change_password_expiry?: true
    created_at?: true
    updated_at?: true
    teacher_id_no?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    is_suspended?: true
    department?: true
    role?: true
    gender?: true
    change_password_token?: true
    change_password_expiry?: true
    created_at?: true
    updated_at?: true
    teacher_id_no?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    name: string
    email: string
    password_hash: string
    is_suspended: boolean
    department: $Enums.Department
    role: string
    gender: $Enums.Gender
    change_password_token: string | null
    change_password_expiry: Date | null
    created_at: Date
    updated_at: Date
    teacher_id_no: string
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_suspended?: boolean
    department?: boolean
    role?: boolean
    gender?: boolean
    change_password_token?: boolean
    change_password_expiry?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher_id_no?: boolean
    classes?: boolean | Teacher$classesArgs<ExtArgs>
    attendances?: boolean | Teacher$attendancesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_suspended?: boolean
    department?: boolean
    role?: boolean
    gender?: boolean
    change_password_token?: boolean
    change_password_expiry?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher_id_no?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_suspended?: boolean
    department?: boolean
    role?: boolean
    gender?: boolean
    change_password_token?: boolean
    change_password_expiry?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher_id_no?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_suspended?: boolean
    department?: boolean
    role?: boolean
    gender?: boolean
    change_password_token?: boolean
    change_password_expiry?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher_id_no?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "is_suspended" | "department" | "role" | "gender" | "change_password_token" | "change_password_expiry" | "created_at" | "updated_at" | "teacher_id_no", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Teacher$classesArgs<ExtArgs>
    attendances?: boolean | Teacher$attendancesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      classes: Prisma.$TeacherClassPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password_hash: string
      is_suspended: boolean
      department: $Enums.Department
      role: string
      gender: $Enums.Gender
      change_password_token: string | null
      change_password_expiry: Date | null
      created_at: Date
      updated_at: Date
      teacher_id_no: string
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Teacher$classesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends Teacher$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly password_hash: FieldRef<"Teacher", 'String'>
    readonly is_suspended: FieldRef<"Teacher", 'Boolean'>
    readonly department: FieldRef<"Teacher", 'Department'>
    readonly role: FieldRef<"Teacher", 'String'>
    readonly gender: FieldRef<"Teacher", 'Gender'>
    readonly change_password_token: FieldRef<"Teacher", 'String'>
    readonly change_password_expiry: FieldRef<"Teacher", 'DateTime'>
    readonly created_at: FieldRef<"Teacher", 'DateTime'>
    readonly updated_at: FieldRef<"Teacher", 'DateTime'>
    readonly teacher_id_no: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.classes
   */
  export type Teacher$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    where?: TeacherClassWhereInput
    orderBy?: TeacherClassOrderByWithRelationInput | TeacherClassOrderByWithRelationInput[]
    cursor?: TeacherClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherClassScalarFieldEnum | TeacherClassScalarFieldEnum[]
  }

  /**
   * Teacher.attendances
   */
  export type Teacher$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    year: number | null
  }

  export type ClassSumAggregateOutputType = {
    year: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    code: string | null
    dept: $Enums.Department | null
    year: number | null
    created_at: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    code: string | null
    dept: $Enums.Department | null
    year: number | null
    created_at: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    code: number
    dept: number
    year: number
    created_at: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    year?: true
  }

  export type ClassSumAggregateInputType = {
    year?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    code?: true
    dept?: true
    year?: true
    created_at?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    code?: true
    dept?: true
    year?: true
    created_at?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    code?: true
    dept?: true
    year?: true
    created_at?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    code: string
    dept: $Enums.Department
    year: number
    created_at: Date
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    dept?: boolean
    year?: boolean
    created_at?: boolean
    students?: boolean | Class$studentsArgs<ExtArgs>
    subjects?: boolean | Class$subjectsArgs<ExtArgs>
    teachers?: boolean | Class$teachersArgs<ExtArgs>
    attendances?: boolean | Class$attendancesArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    dept?: boolean
    year?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    dept?: boolean
    year?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    code?: boolean
    dept?: boolean
    year?: boolean
    created_at?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "dept" | "year" | "created_at", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Class$studentsArgs<ExtArgs>
    subjects?: boolean | Class$subjectsArgs<ExtArgs>
    teachers?: boolean | Class$teachersArgs<ExtArgs>
    attendances?: boolean | Class$attendancesArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
      subjects: Prisma.$ClassSubjectPayload<ExtArgs>[]
      teachers: Prisma.$TeacherClassPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      dept: $Enums.Department
      year: number
      created_at: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Class$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjects<T extends Class$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Class$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends Class$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Class$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends Class$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Class$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly code: FieldRef<"Class", 'String'>
    readonly dept: FieldRef<"Class", 'Department'>
    readonly year: FieldRef<"Class", 'Int'>
    readonly created_at: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.students
   */
  export type Class$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Class.subjects
   */
  export type Class$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    where?: ClassSubjectWhereInput
    orderBy?: ClassSubjectOrderByWithRelationInput | ClassSubjectOrderByWithRelationInput[]
    cursor?: ClassSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassSubjectScalarFieldEnum | ClassSubjectScalarFieldEnum[]
  }

  /**
   * Class.teachers
   */
  export type Class$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    where?: TeacherClassWhereInput
    orderBy?: TeacherClassOrderByWithRelationInput | TeacherClassOrderByWithRelationInput[]
    cursor?: TeacherClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherClassScalarFieldEnum | TeacherClassScalarFieldEnum[]
  }

  /**
   * Class.attendances
   */
  export type Class$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    created_at: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    created_at: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    code: number
    name: number
    created_at: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    created_at?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    created_at?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    code: string
    name: string
    created_at: Date
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    created_at?: boolean
    classes?: boolean | Subject$classesArgs<ExtArgs>
    teachers?: boolean | Subject$teachersArgs<ExtArgs>
    attendances?: boolean | Subject$attendancesArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "created_at", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Subject$classesArgs<ExtArgs>
    teachers?: boolean | Subject$teachersArgs<ExtArgs>
    attendances?: boolean | Subject$attendancesArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      classes: Prisma.$ClassSubjectPayload<ExtArgs>[]
      teachers: Prisma.$TeacherClassPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      created_at: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Subject$classesArgs<ExtArgs> = {}>(args?: Subset<T, Subject$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends Subject$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends Subject$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Subject$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly code: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly created_at: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.classes
   */
  export type Subject$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    where?: ClassSubjectWhereInput
    orderBy?: ClassSubjectOrderByWithRelationInput | ClassSubjectOrderByWithRelationInput[]
    cursor?: ClassSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassSubjectScalarFieldEnum | ClassSubjectScalarFieldEnum[]
  }

  /**
   * Subject.teachers
   */
  export type Subject$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    where?: TeacherClassWhereInput
    orderBy?: TeacherClassOrderByWithRelationInput | TeacherClassOrderByWithRelationInput[]
    cursor?: TeacherClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherClassScalarFieldEnum | TeacherClassScalarFieldEnum[]
  }

  /**
   * Subject.attendances
   */
  export type Subject$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model ClassSubject
   */

  export type AggregateClassSubject = {
    _count: ClassSubjectCountAggregateOutputType | null
    _min: ClassSubjectMinAggregateOutputType | null
    _max: ClassSubjectMaxAggregateOutputType | null
  }

  export type ClassSubjectMinAggregateOutputType = {
    class_id: string | null
    subject_id: string | null
  }

  export type ClassSubjectMaxAggregateOutputType = {
    class_id: string | null
    subject_id: string | null
  }

  export type ClassSubjectCountAggregateOutputType = {
    class_id: number
    subject_id: number
    _all: number
  }


  export type ClassSubjectMinAggregateInputType = {
    class_id?: true
    subject_id?: true
  }

  export type ClassSubjectMaxAggregateInputType = {
    class_id?: true
    subject_id?: true
  }

  export type ClassSubjectCountAggregateInputType = {
    class_id?: true
    subject_id?: true
    _all?: true
  }

  export type ClassSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSubject to aggregate.
     */
    where?: ClassSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSubjects to fetch.
     */
    orderBy?: ClassSubjectOrderByWithRelationInput | ClassSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassSubjects
    **/
    _count?: true | ClassSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassSubjectMaxAggregateInputType
  }

  export type GetClassSubjectAggregateType<T extends ClassSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateClassSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassSubject[P]>
      : GetScalarType<T[P], AggregateClassSubject[P]>
  }




  export type ClassSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSubjectWhereInput
    orderBy?: ClassSubjectOrderByWithAggregationInput | ClassSubjectOrderByWithAggregationInput[]
    by: ClassSubjectScalarFieldEnum[] | ClassSubjectScalarFieldEnum
    having?: ClassSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassSubjectCountAggregateInputType | true
    _min?: ClassSubjectMinAggregateInputType
    _max?: ClassSubjectMaxAggregateInputType
  }

  export type ClassSubjectGroupByOutputType = {
    class_id: string
    subject_id: string
    _count: ClassSubjectCountAggregateOutputType | null
    _min: ClassSubjectMinAggregateOutputType | null
    _max: ClassSubjectMaxAggregateOutputType | null
  }

  type GetClassSubjectGroupByPayload<T extends ClassSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], ClassSubjectGroupByOutputType[P]>
        }
      >
    >


  export type ClassSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_id?: boolean
    subject_id?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSubject"]>

  export type ClassSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_id?: boolean
    subject_id?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSubject"]>

  export type ClassSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_id?: boolean
    subject_id?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSubject"]>

  export type ClassSubjectSelectScalar = {
    class_id?: boolean
    subject_id?: boolean
  }

  export type ClassSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"class_id" | "subject_id", ExtArgs["result"]["classSubject"]>
  export type ClassSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type ClassSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type ClassSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $ClassSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassSubject"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      class_id: string
      subject_id: string
    }, ExtArgs["result"]["classSubject"]>
    composites: {}
  }

  type ClassSubjectGetPayload<S extends boolean | null | undefined | ClassSubjectDefaultArgs> = $Result.GetResult<Prisma.$ClassSubjectPayload, S>

  type ClassSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassSubjectCountAggregateInputType | true
    }

  export interface ClassSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassSubject'], meta: { name: 'ClassSubject' } }
    /**
     * Find zero or one ClassSubject that matches the filter.
     * @param {ClassSubjectFindUniqueArgs} args - Arguments to find a ClassSubject
     * @example
     * // Get one ClassSubject
     * const classSubject = await prisma.classSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassSubjectFindUniqueArgs>(args: SelectSubset<T, ClassSubjectFindUniqueArgs<ExtArgs>>): Prisma__ClassSubjectClient<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassSubjectFindUniqueOrThrowArgs} args - Arguments to find a ClassSubject
     * @example
     * // Get one ClassSubject
     * const classSubject = await prisma.classSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassSubjectClient<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSubjectFindFirstArgs} args - Arguments to find a ClassSubject
     * @example
     * // Get one ClassSubject
     * const classSubject = await prisma.classSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassSubjectFindFirstArgs>(args?: SelectSubset<T, ClassSubjectFindFirstArgs<ExtArgs>>): Prisma__ClassSubjectClient<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSubjectFindFirstOrThrowArgs} args - Arguments to find a ClassSubject
     * @example
     * // Get one ClassSubject
     * const classSubject = await prisma.classSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassSubjectClient<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassSubjects
     * const classSubjects = await prisma.classSubject.findMany()
     * 
     * // Get first 10 ClassSubjects
     * const classSubjects = await prisma.classSubject.findMany({ take: 10 })
     * 
     * // Only select the `class_id`
     * const classSubjectWithClass_idOnly = await prisma.classSubject.findMany({ select: { class_id: true } })
     * 
     */
    findMany<T extends ClassSubjectFindManyArgs>(args?: SelectSubset<T, ClassSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassSubject.
     * @param {ClassSubjectCreateArgs} args - Arguments to create a ClassSubject.
     * @example
     * // Create one ClassSubject
     * const ClassSubject = await prisma.classSubject.create({
     *   data: {
     *     // ... data to create a ClassSubject
     *   }
     * })
     * 
     */
    create<T extends ClassSubjectCreateArgs>(args: SelectSubset<T, ClassSubjectCreateArgs<ExtArgs>>): Prisma__ClassSubjectClient<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassSubjects.
     * @param {ClassSubjectCreateManyArgs} args - Arguments to create many ClassSubjects.
     * @example
     * // Create many ClassSubjects
     * const classSubject = await prisma.classSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassSubjectCreateManyArgs>(args?: SelectSubset<T, ClassSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassSubjects and returns the data saved in the database.
     * @param {ClassSubjectCreateManyAndReturnArgs} args - Arguments to create many ClassSubjects.
     * @example
     * // Create many ClassSubjects
     * const classSubject = await prisma.classSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassSubjects and only return the `class_id`
     * const classSubjectWithClass_idOnly = await prisma.classSubject.createManyAndReturn({
     *   select: { class_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassSubject.
     * @param {ClassSubjectDeleteArgs} args - Arguments to delete one ClassSubject.
     * @example
     * // Delete one ClassSubject
     * const ClassSubject = await prisma.classSubject.delete({
     *   where: {
     *     // ... filter to delete one ClassSubject
     *   }
     * })
     * 
     */
    delete<T extends ClassSubjectDeleteArgs>(args: SelectSubset<T, ClassSubjectDeleteArgs<ExtArgs>>): Prisma__ClassSubjectClient<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassSubject.
     * @param {ClassSubjectUpdateArgs} args - Arguments to update one ClassSubject.
     * @example
     * // Update one ClassSubject
     * const classSubject = await prisma.classSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassSubjectUpdateArgs>(args: SelectSubset<T, ClassSubjectUpdateArgs<ExtArgs>>): Prisma__ClassSubjectClient<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassSubjects.
     * @param {ClassSubjectDeleteManyArgs} args - Arguments to filter ClassSubjects to delete.
     * @example
     * // Delete a few ClassSubjects
     * const { count } = await prisma.classSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassSubjectDeleteManyArgs>(args?: SelectSubset<T, ClassSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassSubjects
     * const classSubject = await prisma.classSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassSubjectUpdateManyArgs>(args: SelectSubset<T, ClassSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSubjects and returns the data updated in the database.
     * @param {ClassSubjectUpdateManyAndReturnArgs} args - Arguments to update many ClassSubjects.
     * @example
     * // Update many ClassSubjects
     * const classSubject = await prisma.classSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassSubjects and only return the `class_id`
     * const classSubjectWithClass_idOnly = await prisma.classSubject.updateManyAndReturn({
     *   select: { class_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassSubject.
     * @param {ClassSubjectUpsertArgs} args - Arguments to update or create a ClassSubject.
     * @example
     * // Update or create a ClassSubject
     * const classSubject = await prisma.classSubject.upsert({
     *   create: {
     *     // ... data to create a ClassSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassSubject we want to update
     *   }
     * })
     */
    upsert<T extends ClassSubjectUpsertArgs>(args: SelectSubset<T, ClassSubjectUpsertArgs<ExtArgs>>): Prisma__ClassSubjectClient<$Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSubjectCountArgs} args - Arguments to filter ClassSubjects to count.
     * @example
     * // Count the number of ClassSubjects
     * const count = await prisma.classSubject.count({
     *   where: {
     *     // ... the filter for the ClassSubjects we want to count
     *   }
     * })
    **/
    count<T extends ClassSubjectCountArgs>(
      args?: Subset<T, ClassSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassSubjectAggregateArgs>(args: Subset<T, ClassSubjectAggregateArgs>): Prisma.PrismaPromise<GetClassSubjectAggregateType<T>>

    /**
     * Group by ClassSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSubjectGroupByArgs} args - Group by arguments.
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
      T extends ClassSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassSubjectGroupByArgs['orderBy'] }
        : { orderBy?: ClassSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassSubject model
   */
  readonly fields: ClassSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClassSubject model
   */
  interface ClassSubjectFieldRefs {
    readonly class_id: FieldRef<"ClassSubject", 'String'>
    readonly subject_id: FieldRef<"ClassSubject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClassSubject findUnique
   */
  export type ClassSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    /**
     * Filter, which ClassSubject to fetch.
     */
    where: ClassSubjectWhereUniqueInput
  }

  /**
   * ClassSubject findUniqueOrThrow
   */
  export type ClassSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    /**
     * Filter, which ClassSubject to fetch.
     */
    where: ClassSubjectWhereUniqueInput
  }

  /**
   * ClassSubject findFirst
   */
  export type ClassSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    /**
     * Filter, which ClassSubject to fetch.
     */
    where?: ClassSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSubjects to fetch.
     */
    orderBy?: ClassSubjectOrderByWithRelationInput | ClassSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSubjects.
     */
    cursor?: ClassSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSubjects.
     */
    distinct?: ClassSubjectScalarFieldEnum | ClassSubjectScalarFieldEnum[]
  }

  /**
   * ClassSubject findFirstOrThrow
   */
  export type ClassSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    /**
     * Filter, which ClassSubject to fetch.
     */
    where?: ClassSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSubjects to fetch.
     */
    orderBy?: ClassSubjectOrderByWithRelationInput | ClassSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSubjects.
     */
    cursor?: ClassSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSubjects.
     */
    distinct?: ClassSubjectScalarFieldEnum | ClassSubjectScalarFieldEnum[]
  }

  /**
   * ClassSubject findMany
   */
  export type ClassSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    /**
     * Filter, which ClassSubjects to fetch.
     */
    where?: ClassSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSubjects to fetch.
     */
    orderBy?: ClassSubjectOrderByWithRelationInput | ClassSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassSubjects.
     */
    cursor?: ClassSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSubjects.
     */
    skip?: number
    distinct?: ClassSubjectScalarFieldEnum | ClassSubjectScalarFieldEnum[]
  }

  /**
   * ClassSubject create
   */
  export type ClassSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassSubject.
     */
    data: XOR<ClassSubjectCreateInput, ClassSubjectUncheckedCreateInput>
  }

  /**
   * ClassSubject createMany
   */
  export type ClassSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassSubjects.
     */
    data: ClassSubjectCreateManyInput | ClassSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassSubject createManyAndReturn
   */
  export type ClassSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many ClassSubjects.
     */
    data: ClassSubjectCreateManyInput | ClassSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassSubject update
   */
  export type ClassSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassSubject.
     */
    data: XOR<ClassSubjectUpdateInput, ClassSubjectUncheckedUpdateInput>
    /**
     * Choose, which ClassSubject to update.
     */
    where: ClassSubjectWhereUniqueInput
  }

  /**
   * ClassSubject updateMany
   */
  export type ClassSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassSubjects.
     */
    data: XOR<ClassSubjectUpdateManyMutationInput, ClassSubjectUncheckedUpdateManyInput>
    /**
     * Filter which ClassSubjects to update
     */
    where?: ClassSubjectWhereInput
    /**
     * Limit how many ClassSubjects to update.
     */
    limit?: number
  }

  /**
   * ClassSubject updateManyAndReturn
   */
  export type ClassSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * The data used to update ClassSubjects.
     */
    data: XOR<ClassSubjectUpdateManyMutationInput, ClassSubjectUncheckedUpdateManyInput>
    /**
     * Filter which ClassSubjects to update
     */
    where?: ClassSubjectWhereInput
    /**
     * Limit how many ClassSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassSubject upsert
   */
  export type ClassSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassSubject to update in case it exists.
     */
    where: ClassSubjectWhereUniqueInput
    /**
     * In case the ClassSubject found by the `where` argument doesn't exist, create a new ClassSubject with this data.
     */
    create: XOR<ClassSubjectCreateInput, ClassSubjectUncheckedCreateInput>
    /**
     * In case the ClassSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassSubjectUpdateInput, ClassSubjectUncheckedUpdateInput>
  }

  /**
   * ClassSubject delete
   */
  export type ClassSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
    /**
     * Filter which ClassSubject to delete.
     */
    where: ClassSubjectWhereUniqueInput
  }

  /**
   * ClassSubject deleteMany
   */
  export type ClassSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSubjects to delete
     */
    where?: ClassSubjectWhereInput
    /**
     * Limit how many ClassSubjects to delete.
     */
    limit?: number
  }

  /**
   * ClassSubject without action
   */
  export type ClassSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSubject
     */
    select?: ClassSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSubject
     */
    omit?: ClassSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSubjectInclude<ExtArgs> | null
  }


  /**
   * Model TeacherClass
   */

  export type AggregateTeacherClass = {
    _count: TeacherClassCountAggregateOutputType | null
    _min: TeacherClassMinAggregateOutputType | null
    _max: TeacherClassMaxAggregateOutputType | null
  }

  export type TeacherClassMinAggregateOutputType = {
    teacher_id: string | null
    class_id: string | null
    subject_id: string | null
  }

  export type TeacherClassMaxAggregateOutputType = {
    teacher_id: string | null
    class_id: string | null
    subject_id: string | null
  }

  export type TeacherClassCountAggregateOutputType = {
    teacher_id: number
    class_id: number
    subject_id: number
    _all: number
  }


  export type TeacherClassMinAggregateInputType = {
    teacher_id?: true
    class_id?: true
    subject_id?: true
  }

  export type TeacherClassMaxAggregateInputType = {
    teacher_id?: true
    class_id?: true
    subject_id?: true
  }

  export type TeacherClassCountAggregateInputType = {
    teacher_id?: true
    class_id?: true
    subject_id?: true
    _all?: true
  }

  export type TeacherClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherClass to aggregate.
     */
    where?: TeacherClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherClasses to fetch.
     */
    orderBy?: TeacherClassOrderByWithRelationInput | TeacherClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherClasses
    **/
    _count?: true | TeacherClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherClassMaxAggregateInputType
  }

  export type GetTeacherClassAggregateType<T extends TeacherClassAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherClass[P]>
      : GetScalarType<T[P], AggregateTeacherClass[P]>
  }




  export type TeacherClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherClassWhereInput
    orderBy?: TeacherClassOrderByWithAggregationInput | TeacherClassOrderByWithAggregationInput[]
    by: TeacherClassScalarFieldEnum[] | TeacherClassScalarFieldEnum
    having?: TeacherClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherClassCountAggregateInputType | true
    _min?: TeacherClassMinAggregateInputType
    _max?: TeacherClassMaxAggregateInputType
  }

  export type TeacherClassGroupByOutputType = {
    teacher_id: string
    class_id: string
    subject_id: string
    _count: TeacherClassCountAggregateOutputType | null
    _min: TeacherClassMinAggregateOutputType | null
    _max: TeacherClassMaxAggregateOutputType | null
  }

  type GetTeacherClassGroupByPayload<T extends TeacherClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherClassGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherClassGroupByOutputType[P]>
        }
      >
    >


  export type TeacherClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacher_id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherClass"]>

  export type TeacherClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacher_id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherClass"]>

  export type TeacherClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacher_id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherClass"]>

  export type TeacherClassSelectScalar = {
    teacher_id?: boolean
    class_id?: boolean
    subject_id?: boolean
  }

  export type TeacherClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"teacher_id" | "class_id" | "subject_id", ExtArgs["result"]["teacherClass"]>
  export type TeacherClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeacherClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeacherClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $TeacherClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherClass"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      teacher_id: string
      class_id: string
      subject_id: string
    }, ExtArgs["result"]["teacherClass"]>
    composites: {}
  }

  type TeacherClassGetPayload<S extends boolean | null | undefined | TeacherClassDefaultArgs> = $Result.GetResult<Prisma.$TeacherClassPayload, S>

  type TeacherClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherClassCountAggregateInputType | true
    }

  export interface TeacherClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherClass'], meta: { name: 'TeacherClass' } }
    /**
     * Find zero or one TeacherClass that matches the filter.
     * @param {TeacherClassFindUniqueArgs} args - Arguments to find a TeacherClass
     * @example
     * // Get one TeacherClass
     * const teacherClass = await prisma.teacherClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherClassFindUniqueArgs>(args: SelectSubset<T, TeacherClassFindUniqueArgs<ExtArgs>>): Prisma__TeacherClassClient<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherClassFindUniqueOrThrowArgs} args - Arguments to find a TeacherClass
     * @example
     * // Get one TeacherClass
     * const teacherClass = await prisma.teacherClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherClassFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClassClient<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherClassFindFirstArgs} args - Arguments to find a TeacherClass
     * @example
     * // Get one TeacherClass
     * const teacherClass = await prisma.teacherClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherClassFindFirstArgs>(args?: SelectSubset<T, TeacherClassFindFirstArgs<ExtArgs>>): Prisma__TeacherClassClient<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherClassFindFirstOrThrowArgs} args - Arguments to find a TeacherClass
     * @example
     * // Get one TeacherClass
     * const teacherClass = await prisma.teacherClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherClassFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClassClient<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherClasses
     * const teacherClasses = await prisma.teacherClass.findMany()
     * 
     * // Get first 10 TeacherClasses
     * const teacherClasses = await prisma.teacherClass.findMany({ take: 10 })
     * 
     * // Only select the `teacher_id`
     * const teacherClassWithTeacher_idOnly = await prisma.teacherClass.findMany({ select: { teacher_id: true } })
     * 
     */
    findMany<T extends TeacherClassFindManyArgs>(args?: SelectSubset<T, TeacherClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherClass.
     * @param {TeacherClassCreateArgs} args - Arguments to create a TeacherClass.
     * @example
     * // Create one TeacherClass
     * const TeacherClass = await prisma.teacherClass.create({
     *   data: {
     *     // ... data to create a TeacherClass
     *   }
     * })
     * 
     */
    create<T extends TeacherClassCreateArgs>(args: SelectSubset<T, TeacherClassCreateArgs<ExtArgs>>): Prisma__TeacherClassClient<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherClasses.
     * @param {TeacherClassCreateManyArgs} args - Arguments to create many TeacherClasses.
     * @example
     * // Create many TeacherClasses
     * const teacherClass = await prisma.teacherClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherClassCreateManyArgs>(args?: SelectSubset<T, TeacherClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherClasses and returns the data saved in the database.
     * @param {TeacherClassCreateManyAndReturnArgs} args - Arguments to create many TeacherClasses.
     * @example
     * // Create many TeacherClasses
     * const teacherClass = await prisma.teacherClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherClasses and only return the `teacher_id`
     * const teacherClassWithTeacher_idOnly = await prisma.teacherClass.createManyAndReturn({
     *   select: { teacher_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherClassCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherClass.
     * @param {TeacherClassDeleteArgs} args - Arguments to delete one TeacherClass.
     * @example
     * // Delete one TeacherClass
     * const TeacherClass = await prisma.teacherClass.delete({
     *   where: {
     *     // ... filter to delete one TeacherClass
     *   }
     * })
     * 
     */
    delete<T extends TeacherClassDeleteArgs>(args: SelectSubset<T, TeacherClassDeleteArgs<ExtArgs>>): Prisma__TeacherClassClient<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherClass.
     * @param {TeacherClassUpdateArgs} args - Arguments to update one TeacherClass.
     * @example
     * // Update one TeacherClass
     * const teacherClass = await prisma.teacherClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherClassUpdateArgs>(args: SelectSubset<T, TeacherClassUpdateArgs<ExtArgs>>): Prisma__TeacherClassClient<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherClasses.
     * @param {TeacherClassDeleteManyArgs} args - Arguments to filter TeacherClasses to delete.
     * @example
     * // Delete a few TeacherClasses
     * const { count } = await prisma.teacherClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherClassDeleteManyArgs>(args?: SelectSubset<T, TeacherClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherClasses
     * const teacherClass = await prisma.teacherClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherClassUpdateManyArgs>(args: SelectSubset<T, TeacherClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherClasses and returns the data updated in the database.
     * @param {TeacherClassUpdateManyAndReturnArgs} args - Arguments to update many TeacherClasses.
     * @example
     * // Update many TeacherClasses
     * const teacherClass = await prisma.teacherClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherClasses and only return the `teacher_id`
     * const teacherClassWithTeacher_idOnly = await prisma.teacherClass.updateManyAndReturn({
     *   select: { teacher_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherClassUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherClass.
     * @param {TeacherClassUpsertArgs} args - Arguments to update or create a TeacherClass.
     * @example
     * // Update or create a TeacherClass
     * const teacherClass = await prisma.teacherClass.upsert({
     *   create: {
     *     // ... data to create a TeacherClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherClass we want to update
     *   }
     * })
     */
    upsert<T extends TeacherClassUpsertArgs>(args: SelectSubset<T, TeacherClassUpsertArgs<ExtArgs>>): Prisma__TeacherClassClient<$Result.GetResult<Prisma.$TeacherClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherClassCountArgs} args - Arguments to filter TeacherClasses to count.
     * @example
     * // Count the number of TeacherClasses
     * const count = await prisma.teacherClass.count({
     *   where: {
     *     // ... the filter for the TeacherClasses we want to count
     *   }
     * })
    **/
    count<T extends TeacherClassCountArgs>(
      args?: Subset<T, TeacherClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherClassAggregateArgs>(args: Subset<T, TeacherClassAggregateArgs>): Prisma.PrismaPromise<GetTeacherClassAggregateType<T>>

    /**
     * Group by TeacherClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherClassGroupByArgs} args - Group by arguments.
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
      T extends TeacherClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherClassGroupByArgs['orderBy'] }
        : { orderBy?: TeacherClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherClass model
   */
  readonly fields: TeacherClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeacherClass model
   */
  interface TeacherClassFieldRefs {
    readonly teacher_id: FieldRef<"TeacherClass", 'String'>
    readonly class_id: FieldRef<"TeacherClass", 'String'>
    readonly subject_id: FieldRef<"TeacherClass", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeacherClass findUnique
   */
  export type TeacherClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    /**
     * Filter, which TeacherClass to fetch.
     */
    where: TeacherClassWhereUniqueInput
  }

  /**
   * TeacherClass findUniqueOrThrow
   */
  export type TeacherClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    /**
     * Filter, which TeacherClass to fetch.
     */
    where: TeacherClassWhereUniqueInput
  }

  /**
   * TeacherClass findFirst
   */
  export type TeacherClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    /**
     * Filter, which TeacherClass to fetch.
     */
    where?: TeacherClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherClasses to fetch.
     */
    orderBy?: TeacherClassOrderByWithRelationInput | TeacherClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherClasses.
     */
    cursor?: TeacherClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherClasses.
     */
    distinct?: TeacherClassScalarFieldEnum | TeacherClassScalarFieldEnum[]
  }

  /**
   * TeacherClass findFirstOrThrow
   */
  export type TeacherClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    /**
     * Filter, which TeacherClass to fetch.
     */
    where?: TeacherClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherClasses to fetch.
     */
    orderBy?: TeacherClassOrderByWithRelationInput | TeacherClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherClasses.
     */
    cursor?: TeacherClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherClasses.
     */
    distinct?: TeacherClassScalarFieldEnum | TeacherClassScalarFieldEnum[]
  }

  /**
   * TeacherClass findMany
   */
  export type TeacherClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    /**
     * Filter, which TeacherClasses to fetch.
     */
    where?: TeacherClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherClasses to fetch.
     */
    orderBy?: TeacherClassOrderByWithRelationInput | TeacherClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherClasses.
     */
    cursor?: TeacherClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherClasses.
     */
    skip?: number
    distinct?: TeacherClassScalarFieldEnum | TeacherClassScalarFieldEnum[]
  }

  /**
   * TeacherClass create
   */
  export type TeacherClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherClass.
     */
    data: XOR<TeacherClassCreateInput, TeacherClassUncheckedCreateInput>
  }

  /**
   * TeacherClass createMany
   */
  export type TeacherClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherClasses.
     */
    data: TeacherClassCreateManyInput | TeacherClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherClass createManyAndReturn
   */
  export type TeacherClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherClasses.
     */
    data: TeacherClassCreateManyInput | TeacherClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherClass update
   */
  export type TeacherClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherClass.
     */
    data: XOR<TeacherClassUpdateInput, TeacherClassUncheckedUpdateInput>
    /**
     * Choose, which TeacherClass to update.
     */
    where: TeacherClassWhereUniqueInput
  }

  /**
   * TeacherClass updateMany
   */
  export type TeacherClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherClasses.
     */
    data: XOR<TeacherClassUpdateManyMutationInput, TeacherClassUncheckedUpdateManyInput>
    /**
     * Filter which TeacherClasses to update
     */
    where?: TeacherClassWhereInput
    /**
     * Limit how many TeacherClasses to update.
     */
    limit?: number
  }

  /**
   * TeacherClass updateManyAndReturn
   */
  export type TeacherClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * The data used to update TeacherClasses.
     */
    data: XOR<TeacherClassUpdateManyMutationInput, TeacherClassUncheckedUpdateManyInput>
    /**
     * Filter which TeacherClasses to update
     */
    where?: TeacherClassWhereInput
    /**
     * Limit how many TeacherClasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherClass upsert
   */
  export type TeacherClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherClass to update in case it exists.
     */
    where: TeacherClassWhereUniqueInput
    /**
     * In case the TeacherClass found by the `where` argument doesn't exist, create a new TeacherClass with this data.
     */
    create: XOR<TeacherClassCreateInput, TeacherClassUncheckedCreateInput>
    /**
     * In case the TeacherClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherClassUpdateInput, TeacherClassUncheckedUpdateInput>
  }

  /**
   * TeacherClass delete
   */
  export type TeacherClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
    /**
     * Filter which TeacherClass to delete.
     */
    where: TeacherClassWhereUniqueInput
  }

  /**
   * TeacherClass deleteMany
   */
  export type TeacherClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherClasses to delete
     */
    where?: TeacherClassWhereInput
    /**
     * Limit how many TeacherClasses to delete.
     */
    limit?: number
  }

  /**
   * TeacherClass without action
   */
  export type TeacherClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherClass
     */
    select?: TeacherClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherClass
     */
    omit?: TeacherClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherClassInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    class_id: string | null
    subject_id: string | null
    teacher_id: string | null
    created_at: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    class_id: string | null
    subject_id: string | null
    teacher_id: string | null
    created_at: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    class_id: number
    subject_id: number
    teacher_id: number
    created_at: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    created_at?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    created_at?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    created_at?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    class_id: string
    subject_id: string
    teacher_id: string
    created_at: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    created_at?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    attendanceRecords?: boolean | Attendance$attendanceRecordsArgs<ExtArgs>
    _count?: boolean | AttendanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    created_at?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    created_at?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    created_at?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "class_id" | "subject_id" | "teacher_id" | "created_at", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    attendanceRecords?: boolean | Attendance$attendanceRecordsArgs<ExtArgs>
    _count?: boolean | AttendanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
      attendanceRecords: Prisma.$AttendanceRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      class_id: string
      subject_id: string
      teacher_id: string
      created_at: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendanceRecords<T extends Attendance$attendanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Attendance$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly class_id: FieldRef<"Attendance", 'String'>
    readonly subject_id: FieldRef<"Attendance", 'String'>
    readonly teacher_id: FieldRef<"Attendance", 'String'>
    readonly created_at: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance.attendanceRecords
   */
  export type Attendance$attendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceRecord
   */

  export type AggregateAttendanceRecord = {
    _count: AttendanceRecordCountAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  export type AttendanceRecordMinAggregateOutputType = {
    id: string | null
    attendance_id: string | null
    student_id: string | null
    status: $Enums.AttendanceStatus | null
  }

  export type AttendanceRecordMaxAggregateOutputType = {
    id: string | null
    attendance_id: string | null
    student_id: string | null
    status: $Enums.AttendanceStatus | null
  }

  export type AttendanceRecordCountAggregateOutputType = {
    id: number
    attendance_id: number
    student_id: number
    status: number
    _all: number
  }


  export type AttendanceRecordMinAggregateInputType = {
    id?: true
    attendance_id?: true
    student_id?: true
    status?: true
  }

  export type AttendanceRecordMaxAggregateInputType = {
    id?: true
    attendance_id?: true
    student_id?: true
    status?: true
  }

  export type AttendanceRecordCountAggregateInputType = {
    id?: true
    attendance_id?: true
    student_id?: true
    status?: true
    _all?: true
  }

  export type AttendanceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecord to aggregate.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceRecords
    **/
    _count?: true | AttendanceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type GetAttendanceRecordAggregateType<T extends AttendanceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceRecord[P]>
      : GetScalarType<T[P], AggregateAttendanceRecord[P]>
  }




  export type AttendanceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithAggregationInput | AttendanceRecordOrderByWithAggregationInput[]
    by: AttendanceRecordScalarFieldEnum[] | AttendanceRecordScalarFieldEnum
    having?: AttendanceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceRecordCountAggregateInputType | true
    _min?: AttendanceRecordMinAggregateInputType
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type AttendanceRecordGroupByOutputType = {
    id: string
    attendance_id: string
    student_id: string
    status: $Enums.AttendanceStatus
    _count: AttendanceRecordCountAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  type GetAttendanceRecordGroupByPayload<T extends AttendanceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendance_id?: boolean
    student_id?: boolean
    status?: boolean
    attendance?: boolean | AttendanceDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendance_id?: boolean
    student_id?: boolean
    status?: boolean
    attendance?: boolean | AttendanceDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendance_id?: boolean
    student_id?: boolean
    status?: boolean
    attendance?: boolean | AttendanceDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectScalar = {
    id?: boolean
    attendance_id?: boolean
    student_id?: boolean
    status?: boolean
  }

  export type AttendanceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attendance_id" | "student_id" | "status", ExtArgs["result"]["attendanceRecord"]>
  export type AttendanceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | AttendanceDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AttendanceRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | AttendanceDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | AttendanceDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $AttendanceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceRecord"
    objects: {
      attendance: Prisma.$AttendancePayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attendance_id: string
      student_id: string
      status: $Enums.AttendanceStatus
    }, ExtArgs["result"]["attendanceRecord"]>
    composites: {}
  }

  type AttendanceRecordGetPayload<S extends boolean | null | undefined | AttendanceRecordDefaultArgs> = $Result.GetResult<Prisma.$AttendanceRecordPayload, S>

  type AttendanceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceRecordCountAggregateInputType | true
    }

  export interface AttendanceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceRecord'], meta: { name: 'AttendanceRecord' } }
    /**
     * Find zero or one AttendanceRecord that matches the filter.
     * @param {AttendanceRecordFindUniqueArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceRecordFindUniqueArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceRecordFindUniqueOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceRecordFindFirstArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany()
     * 
     * // Get first 10 AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceRecordFindManyArgs>(args?: SelectSubset<T, AttendanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceRecord.
     * @param {AttendanceRecordCreateArgs} args - Arguments to create a AttendanceRecord.
     * @example
     * // Create one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.create({
     *   data: {
     *     // ... data to create a AttendanceRecord
     *   }
     * })
     * 
     */
    create<T extends AttendanceRecordCreateArgs>(args: SelectSubset<T, AttendanceRecordCreateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceRecords.
     * @param {AttendanceRecordCreateManyArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceRecordCreateManyArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceRecords and returns the data saved in the database.
     * @param {AttendanceRecordCreateManyAndReturnArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceRecords and only return the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceRecord.
     * @param {AttendanceRecordDeleteArgs} args - Arguments to delete one AttendanceRecord.
     * @example
     * // Delete one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.delete({
     *   where: {
     *     // ... filter to delete one AttendanceRecord
     *   }
     * })
     * 
     */
    delete<T extends AttendanceRecordDeleteArgs>(args: SelectSubset<T, AttendanceRecordDeleteArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceRecord.
     * @param {AttendanceRecordUpdateArgs} args - Arguments to update one AttendanceRecord.
     * @example
     * // Update one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceRecordUpdateArgs>(args: SelectSubset<T, AttendanceRecordUpdateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceRecords.
     * @param {AttendanceRecordDeleteManyArgs} args - Arguments to filter AttendanceRecords to delete.
     * @example
     * // Delete a few AttendanceRecords
     * const { count } = await prisma.attendanceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceRecordDeleteManyArgs>(args?: SelectSubset<T, AttendanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceRecordUpdateManyArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords and returns the data updated in the database.
     * @param {AttendanceRecordUpdateManyAndReturnArgs} args - Arguments to update many AttendanceRecords.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceRecords and only return the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceRecord.
     * @param {AttendanceRecordUpsertArgs} args - Arguments to update or create a AttendanceRecord.
     * @example
     * // Update or create a AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.upsert({
     *   create: {
     *     // ... data to create a AttendanceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceRecord we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceRecordUpsertArgs>(args: SelectSubset<T, AttendanceRecordUpsertArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordCountArgs} args - Arguments to filter AttendanceRecords to count.
     * @example
     * // Count the number of AttendanceRecords
     * const count = await prisma.attendanceRecord.count({
     *   where: {
     *     // ... the filter for the AttendanceRecords we want to count
     *   }
     * })
    **/
    count<T extends AttendanceRecordCountArgs>(
      args?: Subset<T, AttendanceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceRecordAggregateArgs>(args: Subset<T, AttendanceRecordAggregateArgs>): Prisma.PrismaPromise<GetAttendanceRecordAggregateType<T>>

    /**
     * Group by AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordGroupByArgs} args - Group by arguments.
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
      T extends AttendanceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceRecordGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceRecord model
   */
  readonly fields: AttendanceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance<T extends AttendanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttendanceDefaultArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AttendanceRecord model
   */
  interface AttendanceRecordFieldRefs {
    readonly id: FieldRef<"AttendanceRecord", 'String'>
    readonly attendance_id: FieldRef<"AttendanceRecord", 'String'>
    readonly student_id: FieldRef<"AttendanceRecord", 'String'>
    readonly status: FieldRef<"AttendanceRecord", 'AttendanceStatus'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceRecord findUnique
   */
  export type AttendanceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findUniqueOrThrow
   */
  export type AttendanceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findFirst
   */
  export type AttendanceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findFirstOrThrow
   */
  export type AttendanceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findMany
   */
  export type AttendanceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecords to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord create
   */
  export type AttendanceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceRecord.
     */
    data: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
  }

  /**
   * AttendanceRecord createMany
   */
  export type AttendanceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceRecord createManyAndReturn
   */
  export type AttendanceRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRecord update
   */
  export type AttendanceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceRecord.
     */
    data: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
    /**
     * Choose, which AttendanceRecord to update.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord updateMany
   */
  export type AttendanceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
  }

  /**
   * AttendanceRecord updateManyAndReturn
   */
  export type AttendanceRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRecord upsert
   */
  export type AttendanceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceRecord to update in case it exists.
     */
    where: AttendanceRecordWhereUniqueInput
    /**
     * In case the AttendanceRecord found by the `where` argument doesn't exist, create a new AttendanceRecord with this data.
     */
    create: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
    /**
     * In case the AttendanceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
  }

  /**
   * AttendanceRecord delete
   */
  export type AttendanceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter which AttendanceRecord to delete.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord deleteMany
   */
  export type AttendanceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecords to delete
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to delete.
     */
    limit?: number
  }

  /**
   * AttendanceRecord without action
   */
  export type AttendanceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    is_suspended: 'is_suspended',
    department: 'department',
    role: 'role',
    gender: 'gender',
    change_password_token: 'change_password_token',
    change_password_expiry: 'change_password_expiry',
    created_at: 'created_at',
    updated_at: 'updated_at',
    class_id: 'class_id',
    year: 'year',
    reg_no: 'reg_no'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    is_suspended: 'is_suspended',
    department: 'department',
    role: 'role',
    gender: 'gender',
    change_password_token: 'change_password_token',
    change_password_expiry: 'change_password_expiry',
    created_at: 'created_at',
    updated_at: 'updated_at',
    teacher_id_no: 'teacher_id_no'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    code: 'code',
    dept: 'dept',
    year: 'year',
    created_at: 'created_at'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    created_at: 'created_at'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const ClassSubjectScalarFieldEnum: {
    class_id: 'class_id',
    subject_id: 'subject_id'
  };

  export type ClassSubjectScalarFieldEnum = (typeof ClassSubjectScalarFieldEnum)[keyof typeof ClassSubjectScalarFieldEnum]


  export const TeacherClassScalarFieldEnum: {
    teacher_id: 'teacher_id',
    class_id: 'class_id',
    subject_id: 'subject_id'
  };

  export type TeacherClassScalarFieldEnum = (typeof TeacherClassScalarFieldEnum)[keyof typeof TeacherClassScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    class_id: 'class_id',
    subject_id: 'subject_id',
    teacher_id: 'teacher_id',
    created_at: 'created_at'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const AttendanceRecordScalarFieldEnum: {
    id: 'id',
    attendance_id: 'attendance_id',
    student_id: 'student_id',
    status: 'status'
  };

  export type AttendanceRecordScalarFieldEnum = (typeof AttendanceRecordScalarFieldEnum)[keyof typeof AttendanceRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Department'
   */
  export type EnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department'>
    


  /**
   * Reference to a field of type 'Department[]'
   */
  export type ListEnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: UuidFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    password_hash?: StringFilter<"Student"> | string
    is_suspended?: BoolFilter<"Student"> | boolean
    department?: EnumDepartmentFilter<"Student"> | $Enums.Department
    role?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    change_password_token?: StringNullableFilter<"Student"> | string | null
    change_password_expiry?: DateTimeNullableFilter<"Student"> | Date | string | null
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    class_id?: UuidFilter<"Student"> | string
    year?: IntFilter<"Student"> | number
    reg_no?: StringFilter<"Student"> | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    attendanceRecords?: AttendanceRecordListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_suspended?: SortOrder
    department?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    change_password_token?: SortOrderInput | SortOrder
    change_password_expiry?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    class_id?: SortOrder
    year?: SortOrder
    reg_no?: SortOrder
    class?: ClassOrderByWithRelationInput
    attendanceRecords?: AttendanceRecordOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    reg_no?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    password_hash?: StringFilter<"Student"> | string
    is_suspended?: BoolFilter<"Student"> | boolean
    department?: EnumDepartmentFilter<"Student"> | $Enums.Department
    role?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    change_password_token?: StringNullableFilter<"Student"> | string | null
    change_password_expiry?: DateTimeNullableFilter<"Student"> | Date | string | null
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    class_id?: UuidFilter<"Student"> | string
    year?: IntFilter<"Student"> | number
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    attendanceRecords?: AttendanceRecordListRelationFilter
  }, "id" | "email" | "reg_no">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_suspended?: SortOrder
    department?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    change_password_token?: SortOrderInput | SortOrder
    change_password_expiry?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    class_id?: SortOrder
    year?: SortOrder
    reg_no?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    password_hash?: StringWithAggregatesFilter<"Student"> | string
    is_suspended?: BoolWithAggregatesFilter<"Student"> | boolean
    department?: EnumDepartmentWithAggregatesFilter<"Student"> | $Enums.Department
    role?: StringWithAggregatesFilter<"Student"> | string
    gender?: EnumGenderWithAggregatesFilter<"Student"> | $Enums.Gender
    change_password_token?: StringNullableWithAggregatesFilter<"Student"> | string | null
    change_password_expiry?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    class_id?: UuidWithAggregatesFilter<"Student"> | string
    year?: IntWithAggregatesFilter<"Student"> | number
    reg_no?: StringWithAggregatesFilter<"Student"> | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: UuidFilter<"Teacher"> | string
    name?: StringFilter<"Teacher"> | string
    email?: StringFilter<"Teacher"> | string
    password_hash?: StringFilter<"Teacher"> | string
    is_suspended?: BoolFilter<"Teacher"> | boolean
    department?: EnumDepartmentFilter<"Teacher"> | $Enums.Department
    role?: StringFilter<"Teacher"> | string
    gender?: EnumGenderFilter<"Teacher"> | $Enums.Gender
    change_password_token?: StringNullableFilter<"Teacher"> | string | null
    change_password_expiry?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    created_at?: DateTimeFilter<"Teacher"> | Date | string
    updated_at?: DateTimeFilter<"Teacher"> | Date | string
    teacher_id_no?: StringFilter<"Teacher"> | string
    classes?: TeacherClassListRelationFilter
    attendances?: AttendanceListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_suspended?: SortOrder
    department?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    change_password_token?: SortOrderInput | SortOrder
    change_password_expiry?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    teacher_id_no?: SortOrder
    classes?: TeacherClassOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    teacher_id_no?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    password_hash?: StringFilter<"Teacher"> | string
    is_suspended?: BoolFilter<"Teacher"> | boolean
    department?: EnumDepartmentFilter<"Teacher"> | $Enums.Department
    role?: StringFilter<"Teacher"> | string
    gender?: EnumGenderFilter<"Teacher"> | $Enums.Gender
    change_password_token?: StringNullableFilter<"Teacher"> | string | null
    change_password_expiry?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    created_at?: DateTimeFilter<"Teacher"> | Date | string
    updated_at?: DateTimeFilter<"Teacher"> | Date | string
    classes?: TeacherClassListRelationFilter
    attendances?: AttendanceListRelationFilter
  }, "id" | "email" | "teacher_id_no">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_suspended?: SortOrder
    department?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    change_password_token?: SortOrderInput | SortOrder
    change_password_expiry?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    teacher_id_no?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Teacher"> | string
    name?: StringWithAggregatesFilter<"Teacher"> | string
    email?: StringWithAggregatesFilter<"Teacher"> | string
    password_hash?: StringWithAggregatesFilter<"Teacher"> | string
    is_suspended?: BoolWithAggregatesFilter<"Teacher"> | boolean
    department?: EnumDepartmentWithAggregatesFilter<"Teacher"> | $Enums.Department
    role?: StringWithAggregatesFilter<"Teacher"> | string
    gender?: EnumGenderWithAggregatesFilter<"Teacher"> | $Enums.Gender
    change_password_token?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    change_password_expiry?: DateTimeNullableWithAggregatesFilter<"Teacher"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    teacher_id_no?: StringWithAggregatesFilter<"Teacher"> | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: UuidFilter<"Class"> | string
    code?: StringFilter<"Class"> | string
    dept?: EnumDepartmentFilter<"Class"> | $Enums.Department
    year?: IntFilter<"Class"> | number
    created_at?: DateTimeFilter<"Class"> | Date | string
    students?: StudentListRelationFilter
    subjects?: ClassSubjectListRelationFilter
    teachers?: TeacherClassListRelationFilter
    attendances?: AttendanceListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    dept?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
    students?: StudentOrderByRelationAggregateInput
    subjects?: ClassSubjectOrderByRelationAggregateInput
    teachers?: TeacherClassOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    dept?: EnumDepartmentFilter<"Class"> | $Enums.Department
    year?: IntFilter<"Class"> | number
    created_at?: DateTimeFilter<"Class"> | Date | string
    students?: StudentListRelationFilter
    subjects?: ClassSubjectListRelationFilter
    teachers?: TeacherClassListRelationFilter
    attendances?: AttendanceListRelationFilter
  }, "id" | "code">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    dept?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Class"> | string
    code?: StringWithAggregatesFilter<"Class"> | string
    dept?: EnumDepartmentWithAggregatesFilter<"Class"> | $Enums.Department
    year?: IntWithAggregatesFilter<"Class"> | number
    created_at?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: UuidFilter<"Subject"> | string
    code?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    created_at?: DateTimeFilter<"Subject"> | Date | string
    classes?: ClassSubjectListRelationFilter
    teachers?: TeacherClassListRelationFilter
    attendances?: AttendanceListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    classes?: ClassSubjectOrderByRelationAggregateInput
    teachers?: TeacherClassOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    name?: StringFilter<"Subject"> | string
    created_at?: DateTimeFilter<"Subject"> | Date | string
    classes?: ClassSubjectListRelationFilter
    teachers?: TeacherClassListRelationFilter
    attendances?: AttendanceListRelationFilter
  }, "id" | "code">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Subject"> | string
    code?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    created_at?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type ClassSubjectWhereInput = {
    AND?: ClassSubjectWhereInput | ClassSubjectWhereInput[]
    OR?: ClassSubjectWhereInput[]
    NOT?: ClassSubjectWhereInput | ClassSubjectWhereInput[]
    class_id?: UuidFilter<"ClassSubject"> | string
    subject_id?: UuidFilter<"ClassSubject"> | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type ClassSubjectOrderByWithRelationInput = {
    class_id?: SortOrder
    subject_id?: SortOrder
    class?: ClassOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type ClassSubjectWhereUniqueInput = Prisma.AtLeast<{
    class_id_subject_id?: ClassSubjectClass_idSubject_idCompoundUniqueInput
    AND?: ClassSubjectWhereInput | ClassSubjectWhereInput[]
    OR?: ClassSubjectWhereInput[]
    NOT?: ClassSubjectWhereInput | ClassSubjectWhereInput[]
    class_id?: UuidFilter<"ClassSubject"> | string
    subject_id?: UuidFilter<"ClassSubject"> | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "class_id_subject_id">

  export type ClassSubjectOrderByWithAggregationInput = {
    class_id?: SortOrder
    subject_id?: SortOrder
    _count?: ClassSubjectCountOrderByAggregateInput
    _max?: ClassSubjectMaxOrderByAggregateInput
    _min?: ClassSubjectMinOrderByAggregateInput
  }

  export type ClassSubjectScalarWhereWithAggregatesInput = {
    AND?: ClassSubjectScalarWhereWithAggregatesInput | ClassSubjectScalarWhereWithAggregatesInput[]
    OR?: ClassSubjectScalarWhereWithAggregatesInput[]
    NOT?: ClassSubjectScalarWhereWithAggregatesInput | ClassSubjectScalarWhereWithAggregatesInput[]
    class_id?: UuidWithAggregatesFilter<"ClassSubject"> | string
    subject_id?: UuidWithAggregatesFilter<"ClassSubject"> | string
  }

  export type TeacherClassWhereInput = {
    AND?: TeacherClassWhereInput | TeacherClassWhereInput[]
    OR?: TeacherClassWhereInput[]
    NOT?: TeacherClassWhereInput | TeacherClassWhereInput[]
    teacher_id?: UuidFilter<"TeacherClass"> | string
    class_id?: UuidFilter<"TeacherClass"> | string
    subject_id?: UuidFilter<"TeacherClass"> | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type TeacherClassOrderByWithRelationInput = {
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type TeacherClassWhereUniqueInput = Prisma.AtLeast<{
    teacher_id_class_id_subject_id?: TeacherClassTeacher_idClass_idSubject_idCompoundUniqueInput
    AND?: TeacherClassWhereInput | TeacherClassWhereInput[]
    OR?: TeacherClassWhereInput[]
    NOT?: TeacherClassWhereInput | TeacherClassWhereInput[]
    teacher_id?: UuidFilter<"TeacherClass"> | string
    class_id?: UuidFilter<"TeacherClass"> | string
    subject_id?: UuidFilter<"TeacherClass"> | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "teacher_id_class_id_subject_id">

  export type TeacherClassOrderByWithAggregationInput = {
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    _count?: TeacherClassCountOrderByAggregateInput
    _max?: TeacherClassMaxOrderByAggregateInput
    _min?: TeacherClassMinOrderByAggregateInput
  }

  export type TeacherClassScalarWhereWithAggregatesInput = {
    AND?: TeacherClassScalarWhereWithAggregatesInput | TeacherClassScalarWhereWithAggregatesInput[]
    OR?: TeacherClassScalarWhereWithAggregatesInput[]
    NOT?: TeacherClassScalarWhereWithAggregatesInput | TeacherClassScalarWhereWithAggregatesInput[]
    teacher_id?: UuidWithAggregatesFilter<"TeacherClass"> | string
    class_id?: UuidWithAggregatesFilter<"TeacherClass"> | string
    subject_id?: UuidWithAggregatesFilter<"TeacherClass"> | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    class_id?: UuidFilter<"Attendance"> | string
    subject_id?: UuidFilter<"Attendance"> | string
    teacher_id?: UuidFilter<"Attendance"> | string
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    attendanceRecords?: AttendanceRecordListRelationFilter
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
    class?: ClassOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
    attendanceRecords?: AttendanceRecordOrderByRelationAggregateInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    class_id?: UuidFilter<"Attendance"> | string
    subject_id?: UuidFilter<"Attendance"> | string
    teacher_id?: UuidFilter<"Attendance"> | string
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    attendanceRecords?: AttendanceRecordListRelationFilter
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attendance"> | string
    class_id?: UuidWithAggregatesFilter<"Attendance"> | string
    subject_id?: UuidWithAggregatesFilter<"Attendance"> | string
    teacher_id?: UuidWithAggregatesFilter<"Attendance"> | string
    created_at?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type AttendanceRecordWhereInput = {
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    id?: UuidFilter<"AttendanceRecord"> | string
    attendance_id?: UuidFilter<"AttendanceRecord"> | string
    student_id?: UuidFilter<"AttendanceRecord"> | string
    status?: EnumAttendanceStatusFilter<"AttendanceRecord"> | $Enums.AttendanceStatus
    attendance?: XOR<AttendanceScalarRelationFilter, AttendanceWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type AttendanceRecordOrderByWithRelationInput = {
    id?: SortOrder
    attendance_id?: SortOrder
    student_id?: SortOrder
    status?: SortOrder
    attendance?: AttendanceOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type AttendanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    attendance_id?: UuidFilter<"AttendanceRecord"> | string
    student_id?: UuidFilter<"AttendanceRecord"> | string
    status?: EnumAttendanceStatusFilter<"AttendanceRecord"> | $Enums.AttendanceStatus
    attendance?: XOR<AttendanceScalarRelationFilter, AttendanceWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type AttendanceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    attendance_id?: SortOrder
    student_id?: SortOrder
    status?: SortOrder
    _count?: AttendanceRecordCountOrderByAggregateInput
    _max?: AttendanceRecordMaxOrderByAggregateInput
    _min?: AttendanceRecordMinOrderByAggregateInput
  }

  export type AttendanceRecordScalarWhereWithAggregatesInput = {
    AND?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    OR?: AttendanceRecordScalarWhereWithAggregatesInput[]
    NOT?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AttendanceRecord"> | string
    attendance_id?: UuidWithAggregatesFilter<"AttendanceRecord"> | string
    student_id?: UuidWithAggregatesFilter<"AttendanceRecord"> | string
    status?: EnumAttendanceStatusWithAggregatesFilter<"AttendanceRecord"> | $Enums.AttendanceStatus
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    year: number
    reg_no: string
    class: ClassCreateNestedOneWithoutStudentsInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    class_id: string
    year: number
    reg_no: string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    reg_no?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    reg_no?: StringFieldUpdateOperationsInput | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    class_id: string
    year: number
    reg_no: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    reg_no?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    reg_no?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_id_no: string
    classes?: TeacherClassCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_id_no: string
    classes?: TeacherClassUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_id_no?: StringFieldUpdateOperationsInput | string
    classes?: TeacherClassUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_id_no?: StringFieldUpdateOperationsInput | string
    classes?: TeacherClassUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_id_no: string
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_id_no?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_id_no?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
    students?: StudentCreateNestedManyWithoutClassInput
    subjects?: ClassSubjectCreateNestedManyWithoutClassInput
    teachers?: TeacherClassCreateNestedManyWithoutClassInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
    subjects?: ClassSubjectUncheckedCreateNestedManyWithoutClassInput
    teachers?: TeacherClassUncheckedCreateNestedManyWithoutClassInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutClassNestedInput
    subjects?: ClassSubjectUpdateManyWithoutClassNestedInput
    teachers?: TeacherClassUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutClassNestedInput
    subjects?: ClassSubjectUncheckedUpdateManyWithoutClassNestedInput
    teachers?: TeacherClassUncheckedUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    id?: string
    code: string
    name: string
    created_at?: Date | string
    classes?: ClassSubjectCreateNestedManyWithoutSubjectInput
    teachers?: TeacherClassCreateNestedManyWithoutSubjectInput
    attendances?: AttendanceCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    created_at?: Date | string
    classes?: ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput
    teachers?: TeacherClassUncheckedCreateNestedManyWithoutSubjectInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassSubjectUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherClassUpdateManyWithoutSubjectNestedInput
    attendances?: AttendanceUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherClassUncheckedUpdateManyWithoutSubjectNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    code: string
    name: string
    created_at?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSubjectCreateInput = {
    class: ClassCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutClassesInput
  }

  export type ClassSubjectUncheckedCreateInput = {
    class_id: string
    subject_id: string
  }

  export type ClassSubjectUpdateInput = {
    class?: ClassUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ClassSubjectUncheckedUpdateInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
  }

  export type ClassSubjectCreateManyInput = {
    class_id: string
    subject_id: string
  }

  export type ClassSubjectUpdateManyMutationInput = {

  }

  export type ClassSubjectUncheckedUpdateManyInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherClassCreateInput = {
    teacher: TeacherCreateNestedOneWithoutClassesInput
    class: ClassCreateNestedOneWithoutTeachersInput
    subject: SubjectCreateNestedOneWithoutTeachersInput
  }

  export type TeacherClassUncheckedCreateInput = {
    teacher_id: string
    class_id: string
    subject_id: string
  }

  export type TeacherClassUpdateInput = {
    teacher?: TeacherUpdateOneRequiredWithoutClassesNestedInput
    class?: ClassUpdateOneRequiredWithoutTeachersNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherClassUncheckedUpdateInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherClassCreateManyInput = {
    teacher_id: string
    class_id: string
    subject_id: string
  }

  export type TeacherClassUpdateManyMutationInput = {

  }

  export type TeacherClassUncheckedUpdateManyInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateInput = {
    id?: string
    created_at?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
    subject: SubjectCreateNestedOneWithoutAttendancesInput
    teacher: TeacherCreateNestedOneWithoutAttendancesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    class_id: string
    subject_id: string
    teacher_id: string
    created_at?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutAttendanceInput
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
    subject?: SubjectUpdateOneRequiredWithoutAttendancesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutAttendancesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutAttendanceNestedInput
  }

  export type AttendanceCreateManyInput = {
    id?: string
    class_id: string
    subject_id: string
    teacher_id: string
    created_at?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateInput = {
    id?: string
    status: $Enums.AttendanceStatus
    attendance: AttendanceCreateNestedOneWithoutAttendanceRecordsInput
    student: StudentCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceRecordUncheckedCreateInput = {
    id?: string
    attendance_id: string
    student_id: string
    status: $Enums.AttendanceStatus
  }

  export type AttendanceRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    attendance?: AttendanceUpdateOneRequiredWithoutAttendanceRecordsNestedInput
    student?: StudentUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendance_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type AttendanceRecordCreateManyInput = {
    id?: string
    attendance_id: string
    student_id: string
    status: $Enums.AttendanceStatus
  }

  export type AttendanceRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type AttendanceRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendance_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type AttendanceRecordListRelationFilter = {
    every?: AttendanceRecordWhereInput
    some?: AttendanceRecordWhereInput
    none?: AttendanceRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttendanceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_suspended?: SortOrder
    department?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    change_password_token?: SortOrder
    change_password_expiry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    class_id?: SortOrder
    year?: SortOrder
    reg_no?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_suspended?: SortOrder
    department?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    change_password_token?: SortOrder
    change_password_expiry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    class_id?: SortOrder
    year?: SortOrder
    reg_no?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_suspended?: SortOrder
    department?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    change_password_token?: SortOrder
    change_password_expiry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    class_id?: SortOrder
    year?: SortOrder
    reg_no?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TeacherClassListRelationFilter = {
    every?: TeacherClassWhereInput
    some?: TeacherClassWhereInput
    none?: TeacherClassWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type TeacherClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_suspended?: SortOrder
    department?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    change_password_token?: SortOrder
    change_password_expiry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    teacher_id_no?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_suspended?: SortOrder
    department?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    change_password_token?: SortOrder
    change_password_expiry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    teacher_id_no?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_suspended?: SortOrder
    department?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    change_password_token?: SortOrder
    change_password_expiry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    teacher_id_no?: SortOrder
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type ClassSubjectListRelationFilter = {
    every?: ClassSubjectWhereInput
    some?: ClassSubjectWhereInput
    none?: ClassSubjectWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    dept?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    dept?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    dept?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type ClassSubjectClass_idSubject_idCompoundUniqueInput = {
    class_id: string
    subject_id: string
  }

  export type ClassSubjectCountOrderByAggregateInput = {
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type ClassSubjectMaxOrderByAggregateInput = {
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type ClassSubjectMinOrderByAggregateInput = {
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type TeacherClassTeacher_idClass_idSubject_idCompoundUniqueInput = {
    teacher_id: string
    class_id: string
    subject_id: string
  }

  export type TeacherClassCountOrderByAggregateInput = {
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type TeacherClassMaxOrderByAggregateInput = {
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type TeacherClassMinOrderByAggregateInput = {
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type AttendanceScalarRelationFilter = {
    is?: AttendanceWhereInput
    isNot?: AttendanceWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type AttendanceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    attendance_id?: SortOrder
    student_id?: SortOrder
    status?: SortOrder
  }

  export type AttendanceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    attendance_id?: SortOrder
    student_id?: SortOrder
    status?: SortOrder
  }

  export type AttendanceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    attendance_id?: SortOrder
    student_id?: SortOrder
    status?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type ClassCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    connect?: ClassWhereUniqueInput
  }

  export type AttendanceRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumDepartmentFieldUpdateOperationsInput = {
    set?: $Enums.Department
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    upsert?: ClassUpsertWithoutStudentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutStudentsInput, ClassUpdateWithoutStudentsInput>, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type AttendanceRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput | AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput | AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutStudentInput | AttendanceRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput | AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput | AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutStudentInput | AttendanceRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type TeacherClassCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherClassCreateWithoutTeacherInput, TeacherClassUncheckedCreateWithoutTeacherInput> | TeacherClassCreateWithoutTeacherInput[] | TeacherClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutTeacherInput | TeacherClassCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherClassCreateManyTeacherInputEnvelope
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AttendanceCreateWithoutTeacherInput, AttendanceUncheckedCreateWithoutTeacherInput> | AttendanceCreateWithoutTeacherInput[] | AttendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutTeacherInput | AttendanceCreateOrConnectWithoutTeacherInput[]
    createMany?: AttendanceCreateManyTeacherInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type TeacherClassUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherClassCreateWithoutTeacherInput, TeacherClassUncheckedCreateWithoutTeacherInput> | TeacherClassCreateWithoutTeacherInput[] | TeacherClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutTeacherInput | TeacherClassCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherClassCreateManyTeacherInputEnvelope
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AttendanceCreateWithoutTeacherInput, AttendanceUncheckedCreateWithoutTeacherInput> | AttendanceCreateWithoutTeacherInput[] | AttendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutTeacherInput | AttendanceCreateOrConnectWithoutTeacherInput[]
    createMany?: AttendanceCreateManyTeacherInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type TeacherClassUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherClassCreateWithoutTeacherInput, TeacherClassUncheckedCreateWithoutTeacherInput> | TeacherClassCreateWithoutTeacherInput[] | TeacherClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutTeacherInput | TeacherClassCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherClassUpsertWithWhereUniqueWithoutTeacherInput | TeacherClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherClassCreateManyTeacherInputEnvelope
    set?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    disconnect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    delete?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    update?: TeacherClassUpdateWithWhereUniqueWithoutTeacherInput | TeacherClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherClassUpdateManyWithWhereWithoutTeacherInput | TeacherClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherClassScalarWhereInput | TeacherClassScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AttendanceCreateWithoutTeacherInput, AttendanceUncheckedCreateWithoutTeacherInput> | AttendanceCreateWithoutTeacherInput[] | AttendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutTeacherInput | AttendanceCreateOrConnectWithoutTeacherInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutTeacherInput | AttendanceUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AttendanceCreateManyTeacherInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutTeacherInput | AttendanceUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutTeacherInput | AttendanceUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type TeacherClassUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherClassCreateWithoutTeacherInput, TeacherClassUncheckedCreateWithoutTeacherInput> | TeacherClassCreateWithoutTeacherInput[] | TeacherClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutTeacherInput | TeacherClassCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherClassUpsertWithWhereUniqueWithoutTeacherInput | TeacherClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherClassCreateManyTeacherInputEnvelope
    set?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    disconnect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    delete?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    update?: TeacherClassUpdateWithWhereUniqueWithoutTeacherInput | TeacherClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherClassUpdateManyWithWhereWithoutTeacherInput | TeacherClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherClassScalarWhereInput | TeacherClassScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AttendanceCreateWithoutTeacherInput, AttendanceUncheckedCreateWithoutTeacherInput> | AttendanceCreateWithoutTeacherInput[] | AttendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutTeacherInput | AttendanceCreateOrConnectWithoutTeacherInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutTeacherInput | AttendanceUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AttendanceCreateManyTeacherInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutTeacherInput | AttendanceUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutTeacherInput | AttendanceUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type StudentCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ClassSubjectCreateNestedManyWithoutClassInput = {
    create?: XOR<ClassSubjectCreateWithoutClassInput, ClassSubjectUncheckedCreateWithoutClassInput> | ClassSubjectCreateWithoutClassInput[] | ClassSubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassSubjectCreateOrConnectWithoutClassInput | ClassSubjectCreateOrConnectWithoutClassInput[]
    createMany?: ClassSubjectCreateManyClassInputEnvelope
    connect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
  }

  export type TeacherClassCreateNestedManyWithoutClassInput = {
    create?: XOR<TeacherClassCreateWithoutClassInput, TeacherClassUncheckedCreateWithoutClassInput> | TeacherClassCreateWithoutClassInput[] | TeacherClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutClassInput | TeacherClassCreateOrConnectWithoutClassInput[]
    createMany?: TeacherClassCreateManyClassInputEnvelope
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ClassSubjectUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<ClassSubjectCreateWithoutClassInput, ClassSubjectUncheckedCreateWithoutClassInput> | ClassSubjectCreateWithoutClassInput[] | ClassSubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassSubjectCreateOrConnectWithoutClassInput | ClassSubjectCreateOrConnectWithoutClassInput[]
    createMany?: ClassSubjectCreateManyClassInputEnvelope
    connect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
  }

  export type TeacherClassUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<TeacherClassCreateWithoutClassInput, TeacherClassUncheckedCreateWithoutClassInput> | TeacherClassCreateWithoutClassInput[] | TeacherClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutClassInput | TeacherClassCreateOrConnectWithoutClassInput[]
    createMany?: TeacherClassCreateManyClassInputEnvelope
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type StudentUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassInput | StudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassInput | StudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassInput | StudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ClassSubjectUpdateManyWithoutClassNestedInput = {
    create?: XOR<ClassSubjectCreateWithoutClassInput, ClassSubjectUncheckedCreateWithoutClassInput> | ClassSubjectCreateWithoutClassInput[] | ClassSubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassSubjectCreateOrConnectWithoutClassInput | ClassSubjectCreateOrConnectWithoutClassInput[]
    upsert?: ClassSubjectUpsertWithWhereUniqueWithoutClassInput | ClassSubjectUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ClassSubjectCreateManyClassInputEnvelope
    set?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    disconnect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    delete?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    connect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    update?: ClassSubjectUpdateWithWhereUniqueWithoutClassInput | ClassSubjectUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ClassSubjectUpdateManyWithWhereWithoutClassInput | ClassSubjectUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ClassSubjectScalarWhereInput | ClassSubjectScalarWhereInput[]
  }

  export type TeacherClassUpdateManyWithoutClassNestedInput = {
    create?: XOR<TeacherClassCreateWithoutClassInput, TeacherClassUncheckedCreateWithoutClassInput> | TeacherClassCreateWithoutClassInput[] | TeacherClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutClassInput | TeacherClassCreateOrConnectWithoutClassInput[]
    upsert?: TeacherClassUpsertWithWhereUniqueWithoutClassInput | TeacherClassUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: TeacherClassCreateManyClassInputEnvelope
    set?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    disconnect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    delete?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    update?: TeacherClassUpdateWithWhereUniqueWithoutClassInput | TeacherClassUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: TeacherClassUpdateManyWithWhereWithoutClassInput | TeacherClassUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: TeacherClassScalarWhereInput | TeacherClassScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassInput | StudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassInput | StudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassInput | StudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ClassSubjectUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<ClassSubjectCreateWithoutClassInput, ClassSubjectUncheckedCreateWithoutClassInput> | ClassSubjectCreateWithoutClassInput[] | ClassSubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassSubjectCreateOrConnectWithoutClassInput | ClassSubjectCreateOrConnectWithoutClassInput[]
    upsert?: ClassSubjectUpsertWithWhereUniqueWithoutClassInput | ClassSubjectUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ClassSubjectCreateManyClassInputEnvelope
    set?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    disconnect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    delete?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    connect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    update?: ClassSubjectUpdateWithWhereUniqueWithoutClassInput | ClassSubjectUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ClassSubjectUpdateManyWithWhereWithoutClassInput | ClassSubjectUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ClassSubjectScalarWhereInput | ClassSubjectScalarWhereInput[]
  }

  export type TeacherClassUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<TeacherClassCreateWithoutClassInput, TeacherClassUncheckedCreateWithoutClassInput> | TeacherClassCreateWithoutClassInput[] | TeacherClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutClassInput | TeacherClassCreateOrConnectWithoutClassInput[]
    upsert?: TeacherClassUpsertWithWhereUniqueWithoutClassInput | TeacherClassUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: TeacherClassCreateManyClassInputEnvelope
    set?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    disconnect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    delete?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    update?: TeacherClassUpdateWithWhereUniqueWithoutClassInput | TeacherClassUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: TeacherClassUpdateManyWithWhereWithoutClassInput | TeacherClassUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: TeacherClassScalarWhereInput | TeacherClassScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClassSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ClassSubjectCreateWithoutSubjectInput, ClassSubjectUncheckedCreateWithoutSubjectInput> | ClassSubjectCreateWithoutSubjectInput[] | ClassSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassSubjectCreateOrConnectWithoutSubjectInput | ClassSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: ClassSubjectCreateManySubjectInputEnvelope
    connect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
  }

  export type TeacherClassCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherClassCreateWithoutSubjectInput, TeacherClassUncheckedCreateWithoutSubjectInput> | TeacherClassCreateWithoutSubjectInput[] | TeacherClassUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutSubjectInput | TeacherClassCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherClassCreateManySubjectInputEnvelope
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutSubjectInput = {
    create?: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput> | AttendanceCreateWithoutSubjectInput[] | AttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSubjectInput | AttendanceCreateOrConnectWithoutSubjectInput[]
    createMany?: AttendanceCreateManySubjectInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ClassSubjectCreateWithoutSubjectInput, ClassSubjectUncheckedCreateWithoutSubjectInput> | ClassSubjectCreateWithoutSubjectInput[] | ClassSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassSubjectCreateOrConnectWithoutSubjectInput | ClassSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: ClassSubjectCreateManySubjectInputEnvelope
    connect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
  }

  export type TeacherClassUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherClassCreateWithoutSubjectInput, TeacherClassUncheckedCreateWithoutSubjectInput> | TeacherClassCreateWithoutSubjectInput[] | TeacherClassUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutSubjectInput | TeacherClassCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherClassCreateManySubjectInputEnvelope
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput> | AttendanceCreateWithoutSubjectInput[] | AttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSubjectInput | AttendanceCreateOrConnectWithoutSubjectInput[]
    createMany?: AttendanceCreateManySubjectInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ClassSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ClassSubjectCreateWithoutSubjectInput, ClassSubjectUncheckedCreateWithoutSubjectInput> | ClassSubjectCreateWithoutSubjectInput[] | ClassSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassSubjectCreateOrConnectWithoutSubjectInput | ClassSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: ClassSubjectUpsertWithWhereUniqueWithoutSubjectInput | ClassSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ClassSubjectCreateManySubjectInputEnvelope
    set?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    disconnect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    delete?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    connect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    update?: ClassSubjectUpdateWithWhereUniqueWithoutSubjectInput | ClassSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ClassSubjectUpdateManyWithWhereWithoutSubjectInput | ClassSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ClassSubjectScalarWhereInput | ClassSubjectScalarWhereInput[]
  }

  export type TeacherClassUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherClassCreateWithoutSubjectInput, TeacherClassUncheckedCreateWithoutSubjectInput> | TeacherClassCreateWithoutSubjectInput[] | TeacherClassUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutSubjectInput | TeacherClassCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherClassUpsertWithWhereUniqueWithoutSubjectInput | TeacherClassUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherClassCreateManySubjectInputEnvelope
    set?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    disconnect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    delete?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    update?: TeacherClassUpdateWithWhereUniqueWithoutSubjectInput | TeacherClassUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherClassUpdateManyWithWhereWithoutSubjectInput | TeacherClassUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherClassScalarWhereInput | TeacherClassScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput> | AttendanceCreateWithoutSubjectInput[] | AttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSubjectInput | AttendanceCreateOrConnectWithoutSubjectInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSubjectInput | AttendanceUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: AttendanceCreateManySubjectInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSubjectInput | AttendanceUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSubjectInput | AttendanceUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ClassSubjectCreateWithoutSubjectInput, ClassSubjectUncheckedCreateWithoutSubjectInput> | ClassSubjectCreateWithoutSubjectInput[] | ClassSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassSubjectCreateOrConnectWithoutSubjectInput | ClassSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: ClassSubjectUpsertWithWhereUniqueWithoutSubjectInput | ClassSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ClassSubjectCreateManySubjectInputEnvelope
    set?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    disconnect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    delete?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    connect?: ClassSubjectWhereUniqueInput | ClassSubjectWhereUniqueInput[]
    update?: ClassSubjectUpdateWithWhereUniqueWithoutSubjectInput | ClassSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ClassSubjectUpdateManyWithWhereWithoutSubjectInput | ClassSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ClassSubjectScalarWhereInput | ClassSubjectScalarWhereInput[]
  }

  export type TeacherClassUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherClassCreateWithoutSubjectInput, TeacherClassUncheckedCreateWithoutSubjectInput> | TeacherClassCreateWithoutSubjectInput[] | TeacherClassUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherClassCreateOrConnectWithoutSubjectInput | TeacherClassCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherClassUpsertWithWhereUniqueWithoutSubjectInput | TeacherClassUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherClassCreateManySubjectInputEnvelope
    set?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    disconnect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    delete?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    connect?: TeacherClassWhereUniqueInput | TeacherClassWhereUniqueInput[]
    update?: TeacherClassUpdateWithWhereUniqueWithoutSubjectInput | TeacherClassUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherClassUpdateManyWithWhereWithoutSubjectInput | TeacherClassUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherClassScalarWhereInput | TeacherClassScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput> | AttendanceCreateWithoutSubjectInput[] | AttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSubjectInput | AttendanceCreateOrConnectWithoutSubjectInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSubjectInput | AttendanceUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: AttendanceCreateManySubjectInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSubjectInput | AttendanceUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSubjectInput | AttendanceUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSubjectsInput
    connect?: ClassWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutClassesInput = {
    create?: XOR<SubjectCreateWithoutClassesInput, SubjectUncheckedCreateWithoutClassesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutClassesInput
    connect?: SubjectWhereUniqueInput
  }

  export type ClassUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSubjectsInput
    upsert?: ClassUpsertWithoutSubjectsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutSubjectsInput, ClassUpdateWithoutSubjectsInput>, ClassUncheckedUpdateWithoutSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<SubjectCreateWithoutClassesInput, SubjectUncheckedCreateWithoutClassesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutClassesInput
    upsert?: SubjectUpsertWithoutClassesInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutClassesInput, SubjectUpdateWithoutClassesInput>, SubjectUncheckedUpdateWithoutClassesInput>
  }

  export type TeacherCreateNestedOneWithoutClassesInput = {
    create?: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassesInput
    connect?: TeacherWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutTeachersInput = {
    create?: XOR<ClassCreateWithoutTeachersInput, ClassUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeachersInput
    connect?: ClassWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutTeachersInput = {
    create?: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachersInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassesInput
    upsert?: TeacherUpsertWithoutClassesInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutClassesInput, TeacherUpdateWithoutClassesInput>, TeacherUncheckedUpdateWithoutClassesInput>
  }

  export type ClassUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<ClassCreateWithoutTeachersInput, ClassUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeachersInput
    upsert?: ClassUpsertWithoutTeachersInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutTeachersInput, ClassUpdateWithoutTeachersInput>, ClassUncheckedUpdateWithoutTeachersInput>
  }

  export type SubjectUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachersInput
    upsert?: SubjectUpsertWithoutTeachersInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTeachersInput, SubjectUpdateWithoutTeachersInput>, SubjectUncheckedUpdateWithoutTeachersInput>
  }

  export type ClassCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendancesInput
    connect?: ClassWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<SubjectCreateWithoutAttendancesInput, SubjectUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAttendancesInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<TeacherCreateWithoutAttendancesInput, TeacherUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutAttendancesInput
    connect?: TeacherWhereUniqueInput
  }

  export type AttendanceRecordCreateNestedManyWithoutAttendanceInput = {
    create?: XOR<AttendanceRecordCreateWithoutAttendanceInput, AttendanceRecordUncheckedCreateWithoutAttendanceInput> | AttendanceRecordCreateWithoutAttendanceInput[] | AttendanceRecordUncheckedCreateWithoutAttendanceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutAttendanceInput | AttendanceRecordCreateOrConnectWithoutAttendanceInput[]
    createMany?: AttendanceRecordCreateManyAttendanceInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutAttendanceInput = {
    create?: XOR<AttendanceRecordCreateWithoutAttendanceInput, AttendanceRecordUncheckedCreateWithoutAttendanceInput> | AttendanceRecordCreateWithoutAttendanceInput[] | AttendanceRecordUncheckedCreateWithoutAttendanceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutAttendanceInput | AttendanceRecordCreateOrConnectWithoutAttendanceInput[]
    createMany?: AttendanceRecordCreateManyAttendanceInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type ClassUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendancesInput
    upsert?: ClassUpsertWithoutAttendancesInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAttendancesInput, ClassUpdateWithoutAttendancesInput>, ClassUncheckedUpdateWithoutAttendancesInput>
  }

  export type SubjectUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<SubjectCreateWithoutAttendancesInput, SubjectUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAttendancesInput
    upsert?: SubjectUpsertWithoutAttendancesInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutAttendancesInput, SubjectUpdateWithoutAttendancesInput>, SubjectUncheckedUpdateWithoutAttendancesInput>
  }

  export type TeacherUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<TeacherCreateWithoutAttendancesInput, TeacherUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutAttendancesInput
    upsert?: TeacherUpsertWithoutAttendancesInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutAttendancesInput, TeacherUpdateWithoutAttendancesInput>, TeacherUncheckedUpdateWithoutAttendancesInput>
  }

  export type AttendanceRecordUpdateManyWithoutAttendanceNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutAttendanceInput, AttendanceRecordUncheckedCreateWithoutAttendanceInput> | AttendanceRecordCreateWithoutAttendanceInput[] | AttendanceRecordUncheckedCreateWithoutAttendanceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutAttendanceInput | AttendanceRecordCreateOrConnectWithoutAttendanceInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutAttendanceInput | AttendanceRecordUpsertWithWhereUniqueWithoutAttendanceInput[]
    createMany?: AttendanceRecordCreateManyAttendanceInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutAttendanceInput | AttendanceRecordUpdateWithWhereUniqueWithoutAttendanceInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutAttendanceInput | AttendanceRecordUpdateManyWithWhereWithoutAttendanceInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutAttendanceNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutAttendanceInput, AttendanceRecordUncheckedCreateWithoutAttendanceInput> | AttendanceRecordCreateWithoutAttendanceInput[] | AttendanceRecordUncheckedCreateWithoutAttendanceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutAttendanceInput | AttendanceRecordCreateOrConnectWithoutAttendanceInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutAttendanceInput | AttendanceRecordUpsertWithWhereUniqueWithoutAttendanceInput[]
    createMany?: AttendanceRecordCreateManyAttendanceInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutAttendanceInput | AttendanceRecordUpdateWithWhereUniqueWithoutAttendanceInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutAttendanceInput | AttendanceRecordUpdateManyWithWhereWithoutAttendanceInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type AttendanceCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: XOR<AttendanceCreateWithoutAttendanceRecordsInput, AttendanceUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendanceRecordsInput
    connect?: AttendanceWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceRecordsInput
    connect?: StudentWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type AttendanceUpdateOneRequiredWithoutAttendanceRecordsNestedInput = {
    create?: XOR<AttendanceCreateWithoutAttendanceRecordsInput, AttendanceUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendanceRecordsInput
    upsert?: AttendanceUpsertWithoutAttendanceRecordsInput
    connect?: AttendanceWhereUniqueInput
    update?: XOR<XOR<AttendanceUpdateToOneWithWhereWithoutAttendanceRecordsInput, AttendanceUpdateWithoutAttendanceRecordsInput>, AttendanceUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type StudentUpdateOneRequiredWithoutAttendanceRecordsNestedInput = {
    create?: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceRecordsInput
    upsert?: StudentUpsertWithoutAttendanceRecordsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendanceRecordsInput, StudentUpdateWithoutAttendanceRecordsInput>, StudentUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type ClassCreateWithoutStudentsInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
    subjects?: ClassSubjectCreateNestedManyWithoutClassInput
    teachers?: TeacherClassCreateNestedManyWithoutClassInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutStudentsInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
    subjects?: ClassSubjectUncheckedCreateNestedManyWithoutClassInput
    teachers?: TeacherClassUncheckedCreateNestedManyWithoutClassInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type AttendanceRecordCreateWithoutStudentInput = {
    id?: string
    status: $Enums.AttendanceStatus
    attendance: AttendanceCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceRecordUncheckedCreateWithoutStudentInput = {
    id?: string
    attendance_id: string
    status: $Enums.AttendanceStatus
  }

  export type AttendanceRecordCreateOrConnectWithoutStudentInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceRecordCreateManyStudentInputEnvelope = {
    data: AttendanceRecordCreateManyStudentInput | AttendanceRecordCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutStudentsInput = {
    update: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: ClassSubjectUpdateManyWithoutClassNestedInput
    teachers?: TeacherClassUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: ClassSubjectUncheckedUpdateManyWithoutClassNestedInput
    teachers?: TeacherClassUncheckedUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutStudentInput, AttendanceRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutStudentInput, AttendanceRecordUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceRecordScalarWhereInput = {
    AND?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    OR?: AttendanceRecordScalarWhereInput[]
    NOT?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    id?: UuidFilter<"AttendanceRecord"> | string
    attendance_id?: UuidFilter<"AttendanceRecord"> | string
    student_id?: UuidFilter<"AttendanceRecord"> | string
    status?: EnumAttendanceStatusFilter<"AttendanceRecord"> | $Enums.AttendanceStatus
  }

  export type TeacherClassCreateWithoutTeacherInput = {
    class: ClassCreateNestedOneWithoutTeachersInput
    subject: SubjectCreateNestedOneWithoutTeachersInput
  }

  export type TeacherClassUncheckedCreateWithoutTeacherInput = {
    class_id: string
    subject_id: string
  }

  export type TeacherClassCreateOrConnectWithoutTeacherInput = {
    where: TeacherClassWhereUniqueInput
    create: XOR<TeacherClassCreateWithoutTeacherInput, TeacherClassUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherClassCreateManyTeacherInputEnvelope = {
    data: TeacherClassCreateManyTeacherInput | TeacherClassCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutTeacherInput = {
    id?: string
    created_at?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
    subject: SubjectCreateNestedOneWithoutAttendancesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutTeacherInput = {
    id?: string
    class_id: string
    subject_id: string
    created_at?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutAttendanceInput
  }

  export type AttendanceCreateOrConnectWithoutTeacherInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutTeacherInput, AttendanceUncheckedCreateWithoutTeacherInput>
  }

  export type AttendanceCreateManyTeacherInputEnvelope = {
    data: AttendanceCreateManyTeacherInput | AttendanceCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type TeacherClassUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherClassWhereUniqueInput
    update: XOR<TeacherClassUpdateWithoutTeacherInput, TeacherClassUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherClassCreateWithoutTeacherInput, TeacherClassUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherClassUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherClassWhereUniqueInput
    data: XOR<TeacherClassUpdateWithoutTeacherInput, TeacherClassUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherClassUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherClassScalarWhereInput
    data: XOR<TeacherClassUpdateManyMutationInput, TeacherClassUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherClassScalarWhereInput = {
    AND?: TeacherClassScalarWhereInput | TeacherClassScalarWhereInput[]
    OR?: TeacherClassScalarWhereInput[]
    NOT?: TeacherClassScalarWhereInput | TeacherClassScalarWhereInput[]
    teacher_id?: UuidFilter<"TeacherClass"> | string
    class_id?: UuidFilter<"TeacherClass"> | string
    subject_id?: UuidFilter<"TeacherClass"> | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutTeacherInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutTeacherInput, AttendanceUncheckedUpdateWithoutTeacherInput>
    create: XOR<AttendanceCreateWithoutTeacherInput, AttendanceUncheckedCreateWithoutTeacherInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutTeacherInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutTeacherInput, AttendanceUncheckedUpdateWithoutTeacherInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutTeacherInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutTeacherInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    class_id?: UuidFilter<"Attendance"> | string
    subject_id?: UuidFilter<"Attendance"> | string
    teacher_id?: UuidFilter<"Attendance"> | string
    created_at?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type StudentCreateWithoutClassInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    year: number
    reg_no: string
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClassInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    year: number
    reg_no: string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutClassInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type StudentCreateManyClassInputEnvelope = {
    data: StudentCreateManyClassInput | StudentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type ClassSubjectCreateWithoutClassInput = {
    subject: SubjectCreateNestedOneWithoutClassesInput
  }

  export type ClassSubjectUncheckedCreateWithoutClassInput = {
    subject_id: string
  }

  export type ClassSubjectCreateOrConnectWithoutClassInput = {
    where: ClassSubjectWhereUniqueInput
    create: XOR<ClassSubjectCreateWithoutClassInput, ClassSubjectUncheckedCreateWithoutClassInput>
  }

  export type ClassSubjectCreateManyClassInputEnvelope = {
    data: ClassSubjectCreateManyClassInput | ClassSubjectCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type TeacherClassCreateWithoutClassInput = {
    teacher: TeacherCreateNestedOneWithoutClassesInput
    subject: SubjectCreateNestedOneWithoutTeachersInput
  }

  export type TeacherClassUncheckedCreateWithoutClassInput = {
    teacher_id: string
    subject_id: string
  }

  export type TeacherClassCreateOrConnectWithoutClassInput = {
    where: TeacherClassWhereUniqueInput
    create: XOR<TeacherClassCreateWithoutClassInput, TeacherClassUncheckedCreateWithoutClassInput>
  }

  export type TeacherClassCreateManyClassInputEnvelope = {
    data: TeacherClassCreateManyClassInput | TeacherClassCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutClassInput = {
    id?: string
    created_at?: Date | string
    subject: SubjectCreateNestedOneWithoutAttendancesInput
    teacher: TeacherCreateNestedOneWithoutAttendancesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutClassInput = {
    id?: string
    subject_id: string
    teacher_id: string
    created_at?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutAttendanceInput
  }

  export type AttendanceCreateOrConnectWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceCreateManyClassInputEnvelope = {
    data: AttendanceCreateManyClassInput | AttendanceCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutClassInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutClassInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
  }

  export type StudentUpdateManyWithWhereWithoutClassInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutClassInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: UuidFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    password_hash?: StringFilter<"Student"> | string
    is_suspended?: BoolFilter<"Student"> | boolean
    department?: EnumDepartmentFilter<"Student"> | $Enums.Department
    role?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    change_password_token?: StringNullableFilter<"Student"> | string | null
    change_password_expiry?: DateTimeNullableFilter<"Student"> | Date | string | null
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    class_id?: UuidFilter<"Student"> | string
    year?: IntFilter<"Student"> | number
    reg_no?: StringFilter<"Student"> | string
  }

  export type ClassSubjectUpsertWithWhereUniqueWithoutClassInput = {
    where: ClassSubjectWhereUniqueInput
    update: XOR<ClassSubjectUpdateWithoutClassInput, ClassSubjectUncheckedUpdateWithoutClassInput>
    create: XOR<ClassSubjectCreateWithoutClassInput, ClassSubjectUncheckedCreateWithoutClassInput>
  }

  export type ClassSubjectUpdateWithWhereUniqueWithoutClassInput = {
    where: ClassSubjectWhereUniqueInput
    data: XOR<ClassSubjectUpdateWithoutClassInput, ClassSubjectUncheckedUpdateWithoutClassInput>
  }

  export type ClassSubjectUpdateManyWithWhereWithoutClassInput = {
    where: ClassSubjectScalarWhereInput
    data: XOR<ClassSubjectUpdateManyMutationInput, ClassSubjectUncheckedUpdateManyWithoutClassInput>
  }

  export type ClassSubjectScalarWhereInput = {
    AND?: ClassSubjectScalarWhereInput | ClassSubjectScalarWhereInput[]
    OR?: ClassSubjectScalarWhereInput[]
    NOT?: ClassSubjectScalarWhereInput | ClassSubjectScalarWhereInput[]
    class_id?: UuidFilter<"ClassSubject"> | string
    subject_id?: UuidFilter<"ClassSubject"> | string
  }

  export type TeacherClassUpsertWithWhereUniqueWithoutClassInput = {
    where: TeacherClassWhereUniqueInput
    update: XOR<TeacherClassUpdateWithoutClassInput, TeacherClassUncheckedUpdateWithoutClassInput>
    create: XOR<TeacherClassCreateWithoutClassInput, TeacherClassUncheckedCreateWithoutClassInput>
  }

  export type TeacherClassUpdateWithWhereUniqueWithoutClassInput = {
    where: TeacherClassWhereUniqueInput
    data: XOR<TeacherClassUpdateWithoutClassInput, TeacherClassUncheckedUpdateWithoutClassInput>
  }

  export type TeacherClassUpdateManyWithWhereWithoutClassInput = {
    where: TeacherClassScalarWhereInput
    data: XOR<TeacherClassUpdateManyMutationInput, TeacherClassUncheckedUpdateManyWithoutClassInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutClassInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutClassInput>
  }

  export type ClassSubjectCreateWithoutSubjectInput = {
    class: ClassCreateNestedOneWithoutSubjectsInput
  }

  export type ClassSubjectUncheckedCreateWithoutSubjectInput = {
    class_id: string
  }

  export type ClassSubjectCreateOrConnectWithoutSubjectInput = {
    where: ClassSubjectWhereUniqueInput
    create: XOR<ClassSubjectCreateWithoutSubjectInput, ClassSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type ClassSubjectCreateManySubjectInputEnvelope = {
    data: ClassSubjectCreateManySubjectInput | ClassSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TeacherClassCreateWithoutSubjectInput = {
    teacher: TeacherCreateNestedOneWithoutClassesInput
    class: ClassCreateNestedOneWithoutTeachersInput
  }

  export type TeacherClassUncheckedCreateWithoutSubjectInput = {
    teacher_id: string
    class_id: string
  }

  export type TeacherClassCreateOrConnectWithoutSubjectInput = {
    where: TeacherClassWhereUniqueInput
    create: XOR<TeacherClassCreateWithoutSubjectInput, TeacherClassUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherClassCreateManySubjectInputEnvelope = {
    data: TeacherClassCreateManySubjectInput | TeacherClassCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutSubjectInput = {
    id?: string
    created_at?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
    teacher: TeacherCreateNestedOneWithoutAttendancesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutSubjectInput = {
    id?: string
    class_id: string
    teacher_id: string
    created_at?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutAttendanceInput
  }

  export type AttendanceCreateOrConnectWithoutSubjectInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput>
  }

  export type AttendanceCreateManySubjectInputEnvelope = {
    data: AttendanceCreateManySubjectInput | AttendanceCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ClassSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: ClassSubjectWhereUniqueInput
    update: XOR<ClassSubjectUpdateWithoutSubjectInput, ClassSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<ClassSubjectCreateWithoutSubjectInput, ClassSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type ClassSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: ClassSubjectWhereUniqueInput
    data: XOR<ClassSubjectUpdateWithoutSubjectInput, ClassSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type ClassSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: ClassSubjectScalarWhereInput
    data: XOR<ClassSubjectUpdateManyMutationInput, ClassSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TeacherClassUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TeacherClassWhereUniqueInput
    update: XOR<TeacherClassUpdateWithoutSubjectInput, TeacherClassUncheckedUpdateWithoutSubjectInput>
    create: XOR<TeacherClassCreateWithoutSubjectInput, TeacherClassUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherClassUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TeacherClassWhereUniqueInput
    data: XOR<TeacherClassUpdateWithoutSubjectInput, TeacherClassUncheckedUpdateWithoutSubjectInput>
  }

  export type TeacherClassUpdateManyWithWhereWithoutSubjectInput = {
    where: TeacherClassScalarWhereInput
    data: XOR<TeacherClassUpdateManyMutationInput, TeacherClassUncheckedUpdateManyWithoutSubjectInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutSubjectInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutSubjectInput, AttendanceUncheckedUpdateWithoutSubjectInput>
    create: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutSubjectInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutSubjectInput, AttendanceUncheckedUpdateWithoutSubjectInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutSubjectInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutSubjectInput>
  }

  export type ClassCreateWithoutSubjectsInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
    students?: StudentCreateNestedManyWithoutClassInput
    teachers?: TeacherClassCreateNestedManyWithoutClassInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSubjectsInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
    teachers?: TeacherClassUncheckedCreateNestedManyWithoutClassInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSubjectsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectCreateWithoutClassesInput = {
    id?: string
    code: string
    name: string
    created_at?: Date | string
    teachers?: TeacherClassCreateNestedManyWithoutSubjectInput
    attendances?: AttendanceCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutClassesInput = {
    id?: string
    code: string
    name: string
    created_at?: Date | string
    teachers?: TeacherClassUncheckedCreateNestedManyWithoutSubjectInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutClassesInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutClassesInput, SubjectUncheckedCreateWithoutClassesInput>
  }

  export type ClassUpsertWithoutSubjectsInput = {
    update: XOR<ClassUpdateWithoutSubjectsInput, ClassUncheckedUpdateWithoutSubjectsInput>
    create: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutSubjectsInput, ClassUncheckedUpdateWithoutSubjectsInput>
  }

  export type ClassUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutClassNestedInput
    teachers?: TeacherClassUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutClassNestedInput
    teachers?: TeacherClassUncheckedUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type SubjectUpsertWithoutClassesInput = {
    update: XOR<SubjectUpdateWithoutClassesInput, SubjectUncheckedUpdateWithoutClassesInput>
    create: XOR<SubjectCreateWithoutClassesInput, SubjectUncheckedCreateWithoutClassesInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutClassesInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutClassesInput, SubjectUncheckedUpdateWithoutClassesInput>
  }

  export type SubjectUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherClassUpdateManyWithoutSubjectNestedInput
    attendances?: AttendanceUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherClassUncheckedUpdateManyWithoutSubjectNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type TeacherCreateWithoutClassesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_id_no: string
    attendances?: AttendanceCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_id_no: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutClassesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
  }

  export type ClassCreateWithoutTeachersInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
    students?: StudentCreateNestedManyWithoutClassInput
    subjects?: ClassSubjectCreateNestedManyWithoutClassInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeachersInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
    subjects?: ClassSubjectUncheckedCreateNestedManyWithoutClassInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeachersInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeachersInput, ClassUncheckedCreateWithoutTeachersInput>
  }

  export type SubjectCreateWithoutTeachersInput = {
    id?: string
    code: string
    name: string
    created_at?: Date | string
    classes?: ClassSubjectCreateNestedManyWithoutSubjectInput
    attendances?: AttendanceCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeachersInput = {
    id?: string
    code: string
    name: string
    created_at?: Date | string
    classes?: ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeachersInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
  }

  export type TeacherUpsertWithoutClassesInput = {
    update: XOR<TeacherUpdateWithoutClassesInput, TeacherUncheckedUpdateWithoutClassesInput>
    create: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutClassesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutClassesInput, TeacherUncheckedUpdateWithoutClassesInput>
  }

  export type TeacherUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_id_no?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_id_no?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ClassUpsertWithoutTeachersInput = {
    update: XOR<ClassUpdateWithoutTeachersInput, ClassUncheckedUpdateWithoutTeachersInput>
    create: XOR<ClassCreateWithoutTeachersInput, ClassUncheckedCreateWithoutTeachersInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutTeachersInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutTeachersInput, ClassUncheckedUpdateWithoutTeachersInput>
  }

  export type ClassUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutClassNestedInput
    subjects?: ClassSubjectUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutClassNestedInput
    subjects?: ClassSubjectUncheckedUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type SubjectUpsertWithoutTeachersInput = {
    update: XOR<SubjectUpdateWithoutTeachersInput, SubjectUncheckedUpdateWithoutTeachersInput>
    create: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTeachersInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTeachersInput, SubjectUncheckedUpdateWithoutTeachersInput>
  }

  export type SubjectUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassSubjectUpdateManyWithoutSubjectNestedInput
    attendances?: AttendanceUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type ClassCreateWithoutAttendancesInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
    students?: StudentCreateNestedManyWithoutClassInput
    subjects?: ClassSubjectCreateNestedManyWithoutClassInput
    teachers?: TeacherClassCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAttendancesInput = {
    id?: string
    code: string
    dept: $Enums.Department
    year: number
    created_at?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
    subjects?: ClassSubjectUncheckedCreateNestedManyWithoutClassInput
    teachers?: TeacherClassUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAttendancesInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
  }

  export type SubjectCreateWithoutAttendancesInput = {
    id?: string
    code: string
    name: string
    created_at?: Date | string
    classes?: ClassSubjectCreateNestedManyWithoutSubjectInput
    teachers?: TeacherClassCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutAttendancesInput = {
    id?: string
    code: string
    name: string
    created_at?: Date | string
    classes?: ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput
    teachers?: TeacherClassUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutAttendancesInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutAttendancesInput, SubjectUncheckedCreateWithoutAttendancesInput>
  }

  export type TeacherCreateWithoutAttendancesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_id_no: string
    classes?: TeacherClassCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutAttendancesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_id_no: string
    classes?: TeacherClassUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutAttendancesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutAttendancesInput, TeacherUncheckedCreateWithoutAttendancesInput>
  }

  export type AttendanceRecordCreateWithoutAttendanceInput = {
    id?: string
    status: $Enums.AttendanceStatus
    student: StudentCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceRecordUncheckedCreateWithoutAttendanceInput = {
    id?: string
    student_id: string
    status: $Enums.AttendanceStatus
  }

  export type AttendanceRecordCreateOrConnectWithoutAttendanceInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutAttendanceInput, AttendanceRecordUncheckedCreateWithoutAttendanceInput>
  }

  export type AttendanceRecordCreateManyAttendanceInputEnvelope = {
    data: AttendanceRecordCreateManyAttendanceInput | AttendanceRecordCreateManyAttendanceInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutAttendancesInput = {
    update: XOR<ClassUpdateWithoutAttendancesInput, ClassUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAttendancesInput, ClassUncheckedUpdateWithoutAttendancesInput>
  }

  export type ClassUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutClassNestedInput
    subjects?: ClassSubjectUpdateManyWithoutClassNestedInput
    teachers?: TeacherClassUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dept?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutClassNestedInput
    subjects?: ClassSubjectUncheckedUpdateManyWithoutClassNestedInput
    teachers?: TeacherClassUncheckedUpdateManyWithoutClassNestedInput
  }

  export type SubjectUpsertWithoutAttendancesInput = {
    update: XOR<SubjectUpdateWithoutAttendancesInput, SubjectUncheckedUpdateWithoutAttendancesInput>
    create: XOR<SubjectCreateWithoutAttendancesInput, SubjectUncheckedCreateWithoutAttendancesInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutAttendancesInput, SubjectUncheckedUpdateWithoutAttendancesInput>
  }

  export type SubjectUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassSubjectUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherClassUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherClassUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type TeacherUpsertWithoutAttendancesInput = {
    update: XOR<TeacherUpdateWithoutAttendancesInput, TeacherUncheckedUpdateWithoutAttendancesInput>
    create: XOR<TeacherCreateWithoutAttendancesInput, TeacherUncheckedCreateWithoutAttendancesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutAttendancesInput, TeacherUncheckedUpdateWithoutAttendancesInput>
  }

  export type TeacherUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_id_no?: StringFieldUpdateOperationsInput | string
    classes?: TeacherClassUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_id_no?: StringFieldUpdateOperationsInput | string
    classes?: TeacherClassUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutAttendanceInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutAttendanceInput, AttendanceRecordUncheckedUpdateWithoutAttendanceInput>
    create: XOR<AttendanceRecordCreateWithoutAttendanceInput, AttendanceRecordUncheckedCreateWithoutAttendanceInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutAttendanceInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutAttendanceInput, AttendanceRecordUncheckedUpdateWithoutAttendanceInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutAttendanceInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutAttendanceInput>
  }

  export type AttendanceCreateWithoutAttendanceRecordsInput = {
    id?: string
    created_at?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
    subject: SubjectCreateNestedOneWithoutAttendancesInput
    teacher: TeacherCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: string
    class_id: string
    subject_id: string
    teacher_id: string
    created_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutAttendanceRecordsInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutAttendanceRecordsInput, AttendanceUncheckedCreateWithoutAttendanceRecordsInput>
  }

  export type StudentCreateWithoutAttendanceRecordsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    year: number
    reg_no: string
    class: ClassCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    class_id: string
    year: number
    reg_no: string
  }

  export type StudentCreateOrConnectWithoutAttendanceRecordsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
  }

  export type AttendanceUpsertWithoutAttendanceRecordsInput = {
    update: XOR<AttendanceUpdateWithoutAttendanceRecordsInput, AttendanceUncheckedUpdateWithoutAttendanceRecordsInput>
    create: XOR<AttendanceCreateWithoutAttendanceRecordsInput, AttendanceUncheckedCreateWithoutAttendanceRecordsInput>
    where?: AttendanceWhereInput
  }

  export type AttendanceUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: AttendanceWhereInput
    data: XOR<AttendanceUpdateWithoutAttendanceRecordsInput, AttendanceUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type AttendanceUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
    subject?: SubjectUpdateOneRequiredWithoutAttendancesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpsertWithoutAttendanceRecordsInput = {
    update: XOR<StudentUpdateWithoutAttendanceRecordsInput, StudentUncheckedUpdateWithoutAttendanceRecordsInput>
    create: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendanceRecordsInput, StudentUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type StudentUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    reg_no?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    reg_no?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceRecordCreateManyStudentInput = {
    id?: string
    attendance_id: string
    status: $Enums.AttendanceStatus
  }

  export type AttendanceRecordUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    attendance?: AttendanceUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendance_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendance_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type TeacherClassCreateManyTeacherInput = {
    class_id: string
    subject_id: string
  }

  export type AttendanceCreateManyTeacherInput = {
    id?: string
    class_id: string
    subject_id: string
    created_at?: Date | string
  }

  export type TeacherClassUpdateWithoutTeacherInput = {
    class?: ClassUpdateOneRequiredWithoutTeachersNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherClassUncheckedUpdateWithoutTeacherInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherClassUncheckedUpdateManyWithoutTeacherInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
    subject?: SubjectUpdateOneRequiredWithoutAttendancesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyClassInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_suspended?: boolean
    department: $Enums.Department
    role?: string
    gender: $Enums.Gender
    change_password_token?: string | null
    change_password_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    year: number
    reg_no: string
  }

  export type ClassSubjectCreateManyClassInput = {
    subject_id: string
  }

  export type TeacherClassCreateManyClassInput = {
    teacher_id: string
    subject_id: string
  }

  export type AttendanceCreateManyClassInput = {
    id?: string
    subject_id: string
    teacher_id: string
    created_at?: Date | string
  }

  export type StudentUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    reg_no?: StringFieldUpdateOperationsInput | string
    attendanceRecords?: AttendanceRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    reg_no?: StringFieldUpdateOperationsInput | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    change_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    change_password_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    reg_no?: StringFieldUpdateOperationsInput | string
  }

  export type ClassSubjectUpdateWithoutClassInput = {
    subject?: SubjectUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ClassSubjectUncheckedUpdateWithoutClassInput = {
    subject_id?: StringFieldUpdateOperationsInput | string
  }

  export type ClassSubjectUncheckedUpdateManyWithoutClassInput = {
    subject_id?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherClassUpdateWithoutClassInput = {
    teacher?: TeacherUpdateOneRequiredWithoutClassesNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherClassUncheckedUpdateWithoutClassInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherClassUncheckedUpdateManyWithoutClassInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutAttendancesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutAttendancesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject_id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSubjectCreateManySubjectInput = {
    class_id: string
  }

  export type TeacherClassCreateManySubjectInput = {
    teacher_id: string
    class_id: string
  }

  export type AttendanceCreateManySubjectInput = {
    id?: string
    class_id: string
    teacher_id: string
    created_at?: Date | string
  }

  export type ClassSubjectUpdateWithoutSubjectInput = {
    class?: ClassUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type ClassSubjectUncheckedUpdateWithoutSubjectInput = {
    class_id?: StringFieldUpdateOperationsInput | string
  }

  export type ClassSubjectUncheckedUpdateManyWithoutSubjectInput = {
    class_id?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherClassUpdateWithoutSubjectInput = {
    teacher?: TeacherUpdateOneRequiredWithoutClassesNestedInput
    class?: ClassUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherClassUncheckedUpdateWithoutSubjectInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherClassUncheckedUpdateManyWithoutSubjectInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutAttendancesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateManyAttendanceInput = {
    id?: string
    student_id: string
    status: $Enums.AttendanceStatus
  }

  export type AttendanceRecordUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    student?: StudentUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
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