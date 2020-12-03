export class Node {
  id: string;
  name: string;
  resources: [
    {
      type: string,
      value: number
    }
  ];
  actions: [
    {
      type: string,
      value: number
    }
  ];
}
