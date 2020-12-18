export class Node {
  id: string;
  name: string;
  roomId: string;
  resources: [
    {
      id: string;
      type: string;
      value: number;
    }
  ];
  actions: [
    {
      id: string;
      type: string;
      value: number;
    }
  ];
  timestamp: number;
  isExpanded: boolean;
}
