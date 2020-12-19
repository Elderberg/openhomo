export class Node {
  id: string;
  name: string;
  description: string;
  roomId: string;
  resourceIds: string[];
  actionIds: string[];
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
  state: number;
  power: number;
  timestamp: number;
  isExpanded: boolean;
}
