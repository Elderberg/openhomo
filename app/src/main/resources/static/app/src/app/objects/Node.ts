export class Node {
  id: string;
  name: string;
  roomId: string;
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
  timestamp: number;
  isExpanded?: boolean;
}
