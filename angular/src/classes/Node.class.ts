export class Node {
  id: string;
  name: string;
  description: string;
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
