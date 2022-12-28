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
  com_sword_v1_SwordService_CreateSword?: Maybe<Com_Sword_V1_Sword>;
};


export type MutationCom_Sword_V1_SwordService_CreateSwordArgs = {
  input?: InputMaybe<Com_Sword_V1_CreateSwordRequest_Input>;
};

export type Query = {
  __typename?: 'Query';
  com_samurai_v1_SamuraiService_GetById?: Maybe<Com_Samurai_V1_Samurai>;
  com_samurai_v1_SamuraiService_ListAllSamurai?: Maybe<Array<Maybe<Com_Samurai_V1_Samurai>>>;
  com_samurai_v1_SamuraiService_ListById?: Maybe<Array<Maybe<Com_Samurai_V1_Samurai>>>;
  com_samurai_v1_SamuraiService_connectivityState?: Maybe<ConnectivityState>;
  com_sword_v1_SwordService_GetById?: Maybe<Com_Sword_V1_Sword>;
  com_sword_v1_SwordService_GetSamuraiWithSwords?: Maybe<Com_Sword_V1_SamuraiWithSwordsResponse>;
  com_sword_v1_SwordService_ListById?: Maybe<Array<Maybe<Com_Sword_V1_Sword>>>;
  com_sword_v1_SwordService_ListBySamuraiId?: Maybe<Array<Maybe<Com_Sword_V1_Sword>>>;
  com_sword_v1_SwordService_ListSamuraiWithSwords?: Maybe<Array<Maybe<Com_Sword_V1_SamuraiWithSwordsResponse>>>;
  com_sword_v1_SwordService_ListSwords?: Maybe<Array<Maybe<Com_Sword_V1_Sword>>>;
  com_sword_v1_SwordService_connectivityState?: Maybe<ConnectivityState>;
};


export type QueryCom_Samurai_V1_SamuraiService_GetByIdArgs = {
  input?: InputMaybe<Com_Samurai_V1_GetByIdRequest_Input>;
};


export type QueryCom_Samurai_V1_SamuraiService_ListAllSamuraiArgs = {
  input?: InputMaybe<Scalars['google_protobuf_Empty_Input']>;
};


export type QueryCom_Samurai_V1_SamuraiService_ListByIdArgs = {
  input?: InputMaybe<Com_Samurai_V1_ListSamuraiById_Input>;
};


export type QueryCom_Samurai_V1_SamuraiService_ConnectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCom_Sword_V1_SwordService_GetByIdArgs = {
  input?: InputMaybe<Com_Sword_V1_GetByIdRequest_Input>;
};


export type QueryCom_Sword_V1_SwordService_GetSamuraiWithSwordsArgs = {
  input?: InputMaybe<Com_Sword_V1_SamuraiWithSwordsRequest_Input>;
};


export type QueryCom_Sword_V1_SwordService_ListByIdArgs = {
  input?: InputMaybe<Com_Sword_V1_ListSwordsByIdRequest_Input>;
};


export type QueryCom_Sword_V1_SwordService_ListBySamuraiIdArgs = {
  input?: InputMaybe<Com_Sword_V1_ListBySamuraiIdRequest_Input>;
};


export type QueryCom_Sword_V1_SwordService_ListSamuraiWithSwordsArgs = {
  input?: InputMaybe<Com_Sword_V1_ListSamuraiWithSwordsRequest_Input>;
};


export type QueryCom_Sword_V1_SwordService_ListSwordsArgs = {
  input?: InputMaybe<Scalars['google_protobuf_Empty_Input']>;
};


export type QueryCom_Sword_V1_SwordService_ConnectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']>;
};

export type Com_Samurai_V1_GetByIdRequest_Input = {
  id?: InputMaybe<Scalars['String']>;
};

export type Com_Samurai_V1_ListSamuraiById_Input = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Com_Samurai_V1_Samurai = {
  __typename?: 'com_samurai_v1_Samurai';
  age?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  swords?: Maybe<Array<Maybe<Com_Sword_V1_Sword>>>;
};

export type Com_Sword_V1_CreateSwordRequest_Input = {
  name?: InputMaybe<Scalars['String']>;
  samurai_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Com_Sword_V1_Type>;
};

export type Com_Sword_V1_GetByIdRequest_Input = {
  id?: InputMaybe<Scalars['String']>;
};

export type Com_Sword_V1_ListBySamuraiIdRequest_Input = {
  id?: InputMaybe<Scalars['String']>;
};

export type Com_Sword_V1_ListSamuraiWithSwordsRequest_Input = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Com_Sword_V1_ListSwordsByIdRequest_Input = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Com_Sword_V1_SamuraiWithSwordsRequest_Input = {
  id?: InputMaybe<Scalars['String']>;
};

export type Com_Sword_V1_SamuraiWithSwordsResponse = {
  __typename?: 'com_sword_v1_SamuraiWithSwordsResponse';
  id?: Maybe<Scalars['String']>;
  swords?: Maybe<Array<Maybe<Com_Sword_V1_Sword>>>;
};

export type Com_Sword_V1_Sword = {
  __typename?: 'com_sword_v1_Sword';
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  samurai?: Maybe<Com_Samurai_V1_Samurai>;
  samurai_id?: Maybe<Scalars['String']>;
  type?: Maybe<Com_Sword_V1_Type>;
};

export enum Com_Sword_V1_Type {
  Katana = 'KATANA',
  Tachi = 'TACHI',
  Uchigatana = 'UCHIGATANA',
  Unknown = 'UNKNOWN',
  Wakizashi = 'WAKIZASHI'
}
