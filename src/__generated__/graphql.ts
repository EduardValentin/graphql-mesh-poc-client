/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  google_protobuf_Empty_Input: any;
};

export enum ConnectivityState {
  Connecting = 'CONNECTING',
  Idle = 'IDLE',
  Ready = 'READY',
  Shutdown = 'SHUTDOWN',
  TransientFailure = 'TRANSIENT_FAILURE'
}

export type Mutation = {
  __typename?: 'Mutation';
  com_example_SwordService_CreateSword?: Maybe<Com_Example_Sword>;
};


export type MutationCom_Example_SwordService_CreateSwordArgs = {
  input?: InputMaybe<Com_Example_CreateSwordRequest_Input>;
};

export type Query = {
  __typename?: 'Query';
  com_example_SwordService_ListSwords?: Maybe<Com_Example_ListSwordsResponse>;
  com_example_SwordService_connectivityState?: Maybe<ConnectivityState>;
};


export type QueryCom_Example_SwordService_ListSwordsArgs = {
  input?: InputMaybe<Scalars['google_protobuf_Empty_Input']>;
};


export type QueryCom_Example_SwordService_ConnectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']>;
};

export type Com_Example_CreateSwordRequest_Input = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Com_Example_Type>;
};

export type Com_Example_ListSwordsResponse = {
  __typename?: 'com_example_ListSwordsResponse';
  swords?: Maybe<Array<Maybe<Com_Example_Sword>>>;
};

export type Com_Example_Sword = {
  __typename?: 'com_example_Sword';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Com_Example_Type>;
};

export enum Com_Example_Type {
  Katana = 'KATANA',
  Tachi = 'TACHI',
  Uchigatana = 'UCHIGATANA',
  Unknown = 'UNKNOWN'
}
