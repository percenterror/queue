export class Queue<T> {
  constructor(elements?: T[]);
  isEmpty(): boolean;
  size(): number;
  enqueue(element: T): Queue<T>;
  push(element: T): Queue<T>;
  dequeue(): T;
  pop(): T;
  front(): T;
  back(): T;
  toArray(): T[];
  clear(): void;
  clone(): Queue<T>;
  contains(element: T): boolean;
  static fromArray<T>(elements: T[]): Queue<T>;
}
