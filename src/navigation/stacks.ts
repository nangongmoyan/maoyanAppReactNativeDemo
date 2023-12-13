interface StackValue {
  name: string;
  component: React.LazyExoticComponent<React.FC<any>>;
  path?: string;
}

const stacks: { [key in string]: StackValue } = {};

const routerStacks = Object.values(stacks);

export default routerStacks;
