export type PromiseEmptyCheck = (value: any) => Promise<boolean>;

export type EmptyCheck = (value: any) => boolean;

export interface V_Is_Empty_Value {
  isEmpty: PromiseEmptyCheck;
  notEmpty: PromiseEmptyCheck;

  isEmptySync: EmptyCheck;
  notEmptySync: EmptyCheck;
}

